/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Project/ProjectListNew.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 27th 2023, 12:55:30 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import SaveIcon from "@mui/icons-material/Save";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { setActivePath } from "../../../features/slice/activePathSlice";
import {
  getProjectByWorkSpace,
  updateAProjectById,
} from "../../../features/slice/projectByWorkspaceSlice";
import { getAllTeams } from "../../../features/slice/teamSlice";
import { getWorkSpaceById } from "../../../features/slice/workSpaceSlice";
import HubField from "./HubField";
import PriorityField from "./PriorityField";
import StatusField from "./StatusField";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const paperStyle = {
  padding: "0px 0px",
  width: "100%",
  height: "100%",
  margin: "10px auto",
};

const ProjectListNew = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { teams } = useSelector((state) => state.team);
  const { workspaces } = useSelector((state) => state.workspace);
  const { projects } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const alert = useAlert();
  const [activeHub, setActiveHub] = React.useState([]);
  const [projectStatus, setProjectStatus] = React.useState("");
  const [priority, setPriority] = React.useState("");

  const [server, setServer] = useState("");

  const handleChangeServer = (e) => {
    setServer(e.target.value);
  };

  const [hubLists, setHubLists] = React.useState([]);

  const handleChangeHubs = (event) => {
    const {
      target: { value },
    } = event;

    setHubLists(typeof value === "string" ? value.split(",") : value);
    setActiveHub(typeof value === "string" ? value.split(",") : value);
  };
  useEffect(() => {
    dispatch(setActivePath("Project List"));
    dispatch(getAllTeams({ server_agent: server }));
  }, [server]);

  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filtered = projects.filter((entry) =>
    Object.values(entry).some(
      (val) =>
        typeof val === "string" &&
        val.toLowerCase().includes(search.toLowerCase())
    )
  );

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
    dispatch(getProjectByWorkSpace(data)).then((res) => {
      setIsLoading(false);
    });
  };
  const handleStatusProject = (e) => {
    setProjectStatus(e.target.value);
  };

  const handleChangePriority = (e) => {
    setPriority(e.target.value);
  };

  const handleSave = (project) => {
    const data = {
      activeHub: activeHub.length ? activeHub : project.activeHub,
      status: projectStatus || project.status,
      priorityLevel: priority || project.priorityLevel,
    };

    const finalData = {
      id: project.id,
      server_agent: server,
      data,
    };

    dispatch(updateAProjectById(finalData))
      .then((res) => {
        return alert.show(res.payload.data.message, { type: "success" });
      })
      .catch((err) => {
        return alert.show(err.response.data.message, { type: "error" });
      });
  };

  return (
    <>
      <Box sx={{ paddingLeft: "1%" }}>
        <Grid
          sx={{
            marginLeft: "0%",
            display: "flex",
          }}
          xs={12}
          container>
          <Typography variant="h4" style={{ color: "#090080" }}>
            Project
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur urna viverra.
          </Typography>
        </Grid>
      </Box>

      <Box style={{ padding: "0%" }}>
        <Paper elevation={0} style={paperStyle} sx={{ padding: "0%" }}>
          <Grid container style={{ paddingTop: "2%", paddingLeft: "3%" }}>
            <Typography variant="h6" sx={{ color: "#090080" }}>
              Filter
            </Typography>
          </Grid>

          <Grid
            container
            style={{
              paddingTop: "2%",
              paddingLeft: "3%",
              paddingRight: "3%",
              paddingBottom: "0%",
            }}>
            <FormControl
              variant="filled"
              fullWidth
              sx={{
                backgroundColor: "#F8F8F8",
                border: "1px solid #DADCDF",
                borderRadius: "4px",
                // width: "238.5px",
                height: "58px",
              }}>
              <InputLabel id="demo-simple-select-filled-label">
                Server
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                defaultValue={""}
                onChange={(e) => handleChangeServer(e)}>
                <MenuItem value={"quantigo"}>Quantigo Server</MenuItem>
                <MenuItem value={"ag"}>Ag Server</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* Show Team List */}
          <Grid container>
            <Grid container xs={6} style={{ padding: "3%" }}>
              <FormControl
                variant="filled"
                fullWidth
                sx={{
                  backgroundColor: "#F8F8F8",
                  border: "1px solid #DADCDF",
                  borderRadius: "4px",
                  // width: "238.5px",
                  height: "58px",
                }}>
                <InputLabel id="demo-simple-select-label">Team</InputLabel>
                {teams.length > 0 && (
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue=""
                    onChange={(e) => handleChangeTeam(e)}
                    label="Team">
                    {teams.map((team) => (
                      <MenuItem key={team.id} value={team.id || ""}>
                        {team.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              </FormControl>
            </Grid>
            {/* Show Workspaces List */}
            {workspaces && Object.keys(workspaces).length > 0 && (
              <Grid container xs={6} style={{ padding: "3%" }}>
                <FormControl
                  variant="filled"
                  fullWidth
                  sx={{
                    backgroundColor: "#F8F8F8",
                    border: "1px solid #DADCDF",
                    borderRadius: "4px",
                    // width: "238.5px",
                    height: "58px",
                  }}>
                  <InputLabel id="demo-simple-select-label">
                    Work Space{" "}
                  </InputLabel>
                  {workspaces.length > 0 && (
                    <Select
                      onChange={(e) => handleChangeWorkspace(e)}
                      label="workspace"
                      defaultValue={""}>
                      {workspaces.map((workspace) => (
                        <MenuItem key={workspace.id} value={workspace.id || ""}>
                          {workspace.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </FormControl>
              </Grid>
            )}
          </Grid>
        </Paper>
      </Box>
      {projects && (
        <Box>
          <Paper elevation={0} style={paperStyle} sx={{ padding: "0%" }}>
            <Grid
              container
              sx={{
                paddingTop: "2%",
                paddingLeft: "3%",
                paddingRight: "3%",
                paddingBottom: "0%",
              }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search a Project"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid
              container
              style={{
                paddingTop: "2%",
                paddingLeft: "3%",
                paddingRight: "3%",
                paddingBottom: "0%",
              }}>
              {!isLoading && (
                <Grid xs={12}>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead sx={{ background: "#F8F8F8", height: "80px" }}>
                        <TableRow>
                          <TableCell align="left">Project Name</TableCell>
                          {/* <TableCell align="left">No. of Images</TableCell> */}
                          <TableCell align="center">Project Type</TableCell>
                          <TableCell align="center">Project ID</TableCell>
                          <TableCell align="center">Priority</TableCell>
                          <TableCell align="center">Active Hub</TableCell>
                          <TableCell align="center">Edit Status</TableCell>
                          <TableCell align="center">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {filtered.map((project) => (
                          <TableRow
                            key={project._id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}>
                            <TableCell align="left">{project.name}</TableCell>
                            <TableCell align="center">{project.type}</TableCell>
                            <TableCell align="center">{project.id}</TableCell>
                            <TableCell align="center">
                              <PriorityField
                                project={project}
                                priority={priority}
                                handleChangePriority={handleChangePriority}
                              />
                            </TableCell>
                            <TableCell align="center">
                              <HubField
                                handleChangeHubs={handleChangeHubs}
                                MenuProps={MenuProps}
                                hubLists={project.activeHub || hubLists}
                              />
                            </TableCell>
                            <TableCell align="center">
                              <StatusField
                                project={project}
                                handleStatusProject={handleStatusProject}
                              />
                            </TableCell>
                            <TableCell align="center">
                              <SaveIcon
                                sx={{ cursor: "pointer", color: "#3F51B5" }}
                                onClick={() => handleSave(project)}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              )}
            </Grid>
          </Paper>
        </Box>
      )}
    </>
  );
};

export default ProjectListNew;
