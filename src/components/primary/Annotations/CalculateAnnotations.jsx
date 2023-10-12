/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Annotations/CalculateAnntations.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 20th 2022, 12:00:40 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import DownloadIcon from "@mui/icons-material/Download";
import {
    Box,
    Button,
    Grid,
    Paper,
    Popper,
    Skeleton,
    styled,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {CSVLink} from "react-csv";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {setActivePath} from "../../../features/slice/activePathSlice";
import {calculateAnnotation} from "../../../features/slice/benchMarkSlice";
import {getDataSetByProjectID} from "../../../features/slice/datasetSlice";
import {getProjectByWorkSpace} from "../../../features/slice/projectByWorkspaceSlice";
import {getAllTeams} from "../../../features/slice/teamSlice";
import {getWorkSpaceById} from "../../../features/slice/workSpaceSlice";
import SelectMenu from "../BenchMark/SelectMenu";
import SearchBarForAnnotation from "./SearchBarForAnnotation";

const paperStyle = {
  padding: "10px 10px",
  width: "80vw",
  margin: "5px auto",
};
const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  // color: "#FFFFFF",
  width: "100%",
  height: "90%",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const CalculateAnnotations = () => {
  const { teams } = useSelector((state) => state.team);
  const { workspaces } = useSelector((state) => state.workspace);
  const { projects } = useSelector((state) => state.project);
  const { datasets } = useSelector((state) => state.dataset);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [projectID, setProjectID] = useState("");
  const [classes, setClasses] = useState([]);
  const [annotatin, setAnnotation] = useState([]);
  const [annotationCsv, setAnnotationCsv] = useState([]);
  // const [userName, setUserName] = useState([]);
  const [search, setSearch] = useState("");
  const { register } = useForm();
  const [server, setServer] = useState("quantigo");
  const handleChangeServer = (e) => {
    setServer(e.target.value);
  };

  const { isLoading } = useSelector((state) => state.benchMark);
  const { totalAnnotationsCount, totalTimeCalculation } = useSelector((state) => state.benchMark.annotationCalculation);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(setActivePath("Hour Calculation"));
  }, []);

  useEffect(() => {
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

  const filtered = annotationCsv[0]?.filter((entry) => Object.values(entry).some((val) => typeof val === "string" && val.toLowerCase().includes(search.toLowerCase())));
  const [cvButton, setCsvButton] = useState(false);
  useEffect(() => {
    setAnnotationCsv([
      userName.map((item) => {
        const data = {
          QAI_ID: item,
          NO_Of_Tags: totalAnnotationsCount.tags[item],
          No_of_Objects: totalAnnotationsCount.classes[item],
          Effective_Work_hour: classes[item] / 3600,
          Effective_Work_Second: classes[item],
        };

        return data;
      }),
    ]);
  }, [cvButton, userName]);
  const handlebuttoncsv = () => {
    setCsvButton(true);
  };
  const popperOpen = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          mb: "2%",
        }}
      >
        <Grid
          container
          sx={{
            paddingBottom: "0%",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            paddingLeft: "2%",
          }}
        >
          <Grid
            sx={{
              display: "flex",
            }}
            container
          >
            <Typography variant="h4" style={{ color: "#090080" }}>
              Hour Calculation
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Grid container sx={{ paddingBottom: "1%" }}>
          <Paper elevation={0} style={paperStyle} sx={{ paddingBottom: "0%" }}>
            <Grid container sx={{ padding: "0%" }}>
              <SelectMenu teams={teams} workspaces={workspaces} projects={projects} datasets={datasets} handleChangeTeam={handleChangeTeam} handleChangeWorkspace={handleChangeWorkspace} handleChangeProject={handleChangeProject} handleChangeDataset={handleChangeDataset} register={register} calculateAnnotation={true} handleChangeServer={handleChangeServer} />
            </Grid>
          </Paper>
        </Grid>

        <Paper elevation={0} style={paperStyle} sx={{ padding: "0%" }}>
          <Grid
            container
            sx={{
              paddingTop: "2%",
              paddingLeft: "3%",
              paddingRight: "3%",
              paddingBottom: "2%",
            }}
          >
            <Box sx={{ paddingBottom: "2%", width: "100%" }}>
              <Grid container>
                <Grid
                  item
                  xs={11}
                  sx={{
                    paddingRight: "2%",
                  }}
                >
                  <SearchBarForAnnotation handleSearch={handleSearch} />
                </Grid>
                {/* <Grid item xs={1}></Grid> */}
                <Grid item xs={1}>
                  {/* TODO Move this to a separate component */}
                  <Box>
                    <CSVLink data={annotationCsv.length === 1 ? annotationCsv[0] : []} filename={"Annotation.csv"}>
                      <ButtonStyle
                        variant="outlined"
                        onClick={() => handlebuttoncsv()}
                        // onMouseOver={handleMouseOver}
                        // onMouseOut={handleMouseOut}
                      >
                        <Grid container sx={{ paddingTop: "8%" }}>
                          <Grid item xs={4}>
                            <DownloadIcon />
                          </Grid>
                          <Grid item xs={8}>
                            <Typography>Export</Typography>
                          </Grid>
                        </Grid>
                      </ButtonStyle>
                    </CSVLink>
                    <Popper id={id} open={popperOpen} anchorEl={anchorEl}>
                      <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>Export the table into CSV.</Box>
                    </Popper>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <TableContainer>
              <Table sx={{ border: "1px solid #DADCDF" }}>
                <TableHead sx={{ background: "#F8F8F8", height: "80px" }}>
                  <TableRow>
                    <TableCell align="left" sx={{ color: "#969CAF", fontSize: "16px" }}>
                      SL
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#969CAF", fontSize: "16px" }}>
                      QAI ID
                    </TableCell>
                    {/* <TableCell align="left">No. of Images</TableCell> */}
                    <TableCell align="center" sx={{ color: "#969CAF", fontSize: "16px" }}>
                      NO .Of Tags
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#969CAF", fontSize: "16px" }}>
                      No. of Objects
                    </TableCell>
                    <TableCell align="center" sx={{ color: "#969CAF", fontSize: "16px" }}>
                      Effective Work hour
                    </TableCell>
                    <TableCell align="right" sx={{ color: "#969CAF", fontSize: "16px" }}>
                      Effective Work Second
                    </TableCell>
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
                    <TableCell align="left">
                      <Skeleton />
                      <Skeleton animation="wave" />
                      <Skeleton animation={true} />
                    </TableCell>
                  </TableBody>
                ) : (
                  <>
                    {userName.map((user, index) => (
                      <>
                        <TableBody>
                          <TableRow key={index}>
                            <TableCell align="left"> {index + 1}</TableCell>
                            <TableCell align="center">{user}</TableCell>
                            {/* <TableCell align='left'> </TableCell> */}
                            <TableCell align="center">{totalAnnotationsCount.tags ? totalAnnotationsCount.tags[user] || 0 : 0}</TableCell>
                            <TableCell align="center">{totalAnnotationsCount.classes ? totalAnnotationsCount.classes[user] || 0 : 0}</TableCell>
                            <TableCell align="center">{classes[user] / 3600}</TableCell>
                            <TableCell align="center">{classes[user]}</TableCell>
                          </TableRow>
                        </TableBody>
                      </>
                    ))}
                  </>
                  // <>
                  //   {annotationCsv[0]?.length > 0 ? (
                  //     filtered.map((user, index) => (
                  //       <>
                  //         <TableBody>
                  //           <TableRow key={index}>
                  //             <TableCell align="left"> {index + 1}</TableCell>
                  //             <TableCell align="center">
                  //               {user.QAI_ID}
                  //             </TableCell>
                  //             {/* <TableCell align='left'> </TableCell> */}
                  //             <TableCell align="center">
                  //               {user.NO_Of_Tags}
                  //             </TableCell>
                  //             <TableCell align="center">
                  //               {user.No_of_Objects}
                  //             </TableCell>
                  //             <TableCell align="center">
                  //               {user.Effective_Work_hour}
                  //             </TableCell>
                  //             <TableCell align="right">
                  //               {user.Effective_Work_Second}
                  //             </TableCell>
                  //           </TableRow>
                  //         </TableBody>
                  //       </>
                  //     ))
                  //   ) : (
                  //     // userName.map((user, index) => (
                  //     //   <>
                  //     //     <TableBody>
                  //     //       <TableRow key={index}>
                  //     //         <TableCell align="left"> {index + 1}</TableCell>
                  //     //         <TableCell align="center">{user}</TableCell>
                  //     //         {/* <TableCell align='left'> </TableCell> */}
                  //     //         <TableCell align="center">
                  //     //           {totalAnnotationsCount.tags
                  //     //             ? totalAnnotationsCount.tags[user] || 0
                  //     //             : 0}
                  //     //         </TableCell>
                  //     //         <TableCell align="center">
                  //     //           {totalAnnotationsCount.classes
                  //     //             ? totalAnnotationsCount.classes[user] || 0
                  //     //             : 0}
                  //     //         </TableCell>
                  //     //         <TableCell align="center">
                  //     //           {classes[user] / 3600}
                  //     //         </TableCell>
                  //     //         <TableCell align="right">
                  //     //           {classes[user]}
                  //     //         </TableCell>
                  //     //       </TableRow>
                  //     //     </TableBody>
                  //     //   </>
                  //     // ))

                  //     <>
                  //       <TableBody>
                  //         <Grid container sx={{ justifyContent: "center" }}>
                  //           {/* <Typography variant="h5">Not Found</Typography> */}
                  //         </Grid>
                  //       </TableBody>
                  //     </>
                  //   )}
                  // </>
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
