/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Annotations/CalculateAnntations.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 20th 2022, 12:00:40 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import {
  Box,
  Grid,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setActivePath } from "../../../features/slice/activePathSlice";
import {
  calculateAnnotation,
  resetCalculationData,
} from "../../../features/slice/benchMarkSlice";
import { getDataSetByProjectID } from "../../../features/slice/datasetSlice";
import { getProjectByWorkSpace } from "../../../features/slice/projectByWorkspaceSlice";
import { getAllTeams } from "../../../features/slice/teamSlice";
import { getWorkSpaceById } from "../../../features/slice/workSpaceSlice";
import SelectMenu from "../BenchMark/SelectMenu";
const paperStyle = {
  padding: "10px 10px",
  width: "80vw",
  margin: "5px auto",
};

const CalculateAnnotations = () => {
  const { teams } = useSelector((state) => state.team);
  const { workspaces } = useSelector((state) => state.workspace);
  const { projects } = useSelector((state) => state.project);
  const { datasets } = useSelector((state) => state.dataset);
  const dispatch = useDispatch();

  const [projectID, setProjectID] = useState("");
  const [classes, setClasses] = useState([]);
  // const [userName, setUserName] = useState([]);

  const { register } = useForm();
  const [server, setServer] = useState("quantigo");
  const handleChangeServer = (e) => {
    setServer(e.target.value);
  };

  const { isLoading } = useSelector((state) => state.benchMark);
  const { totalAnnotationsCount, totalTimeCalculation } = useSelector(
    (state) => state.benchMark.annotationCalculation
  );

  useEffect(() => {
    // setClasses([]);
    // dispatch(resetCalculationData());
  }, []);

  useEffect(() => {
    dispatch(setActivePath("Calculate Annotation"));
    dispatch(getAllTeams({ server_agent: server }));
  }, [server]);

  const handleChangeTeam = (e) => {
    const data = {
      id: e.target.value,
      server_agent: server,
    };
    dispatch(getWorkSpaceById(data));
  };

  const handleChangeWorkspace = (e) => {
    const data = {
      id: e.target.value,
      server_agent: server,
    };
    dispatch(getProjectByWorkSpace(data));
  };

  const handleChangeProject = (e) => {
    setProjectID(e.target.value);
    const data = {
      id: e.target.value,
      server_agent: server,
    };

    dispatch(getDataSetByProjectID(data));
  };

  const handleChangeDataset = (e) => {
    setClasses([]);
    const datasetId = e.target.value;
    dispatch(calculateAnnotation({ datasetId, server_agent: server }));
  };

  useEffect(() => {
    dispatch(getDataSetByProjectID(projectID));
  }, [projectID]);

  

  
  const userName = Object.keys(classes);
  useEffect(() => {
    totalTimeCalculation?.classes && setClasses(totalTimeCalculation.classes);
  }, [totalTimeCalculation]);

  return (
    <>
      <Grid
        sx={{ marginLeft: "0%", display: "flex", justifyContent: "center" }}
        container
      >
        <Typography variant="h4" style={{ color: "#5C5CFF" }}>
          Calculate Annotations
        </Typography>
      </Grid>

      <Box style={{ padding: "2%", paddingLeft: "2%" }}>
        <Paper elevation={5} style={paperStyle} sx={{ padding: "0%" }}>
          <Grid container style={{ padding: "2%" }}>
            <SelectMenu
              teams={teams}
              workspaces={workspaces}
              projects={projects}
              datasets={datasets}
              handleChangeTeam={handleChangeTeam}
              handleChangeWorkspace={handleChangeWorkspace}
              handleChangeProject={handleChangeProject}
              handleChangeDataset={handleChangeDataset}
              register={register}
              calculateAnnotation={true}
              handleChangeServer={handleChangeServer}
            />
          </Grid>

          <Grid xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>QAI ID</TableCell>
                    {/* <TableCell align="left">No. of Images</TableCell> */}
                    <TableCell align="left">NO .Of Tags</TableCell>
                    <TableCell align="left">No. of Objects</TableCell>
                    <TableCell align="left">Effective Work hour</TableCell>
                    <TableCell align="left">Effective Work Second</TableCell>
                  </TableRow>
                </TableHead>

                {isLoading ? (
                  <TableBody>
                    <TableCell align="left">
                      <Skeleton />
                      <Skeleton animation="wave" />
                      <Skeleton animation={true} />
                    </TableCell>
                    <TableCell align="left">
                      <Skeleton />
                      <Skeleton animation="wave" />
                      <Skeleton animation={true} />
                    </TableCell>
                    <TableCell align="left">
                      <Skeleton />
                      <Skeleton animation="wave" />
                      <Skeleton animation={true} />
                    </TableCell>
                    <TableCell align="left">
                      <Skeleton />
                      <Skeleton animation="wave" />
                      <Skeleton animation={true} />
                    </TableCell>
                    <TableCell align="left">
                      <Skeleton />
                      <Skeleton animation="wave" />
                      <Skeleton animation={true} />
                    </TableCell>
                  </TableBody>
                ) : (
                  <TableBody>
                    {userName.length > 0 ? (
                      userName.map((user, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="left">{user}</TableCell>
                          {/* <TableCell align='left'> </TableCell> */}
                          <TableCell align="left">
                            {totalAnnotationsCount.tags
                              ? totalAnnotationsCount.tags[user] || 0
                              : 0}
                          </TableCell>
                          <TableCell align="left">
                            {totalAnnotationsCount.classes
                              ? totalAnnotationsCount.classes[user] || 0
                              : 0}
                          </TableCell>
                          <TableCell align="left">
                            {classes[user] / 3600}
                          </TableCell>
                          <TableCell align="left">{classes[user]}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">No Data Found</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default CalculateAnnotations;
