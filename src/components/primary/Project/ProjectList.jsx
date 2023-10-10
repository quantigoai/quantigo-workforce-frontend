import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { setActivePath } from "../../../features/slice/activePathSlice";
import {
  getProjectByWorkSpace,
  resetProjects,
  updateAProjectById,
} from "../../../features/slice/projectByWorkspaceSlice";
import { getAllTeams } from "../../../features/slice/teamSlice";
import { getWorkSpaceById, resetWorkspaces } from "../../../features/slice/workSpaceSlice";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { downloadMappingSheet, getDataSetByProjectID } from "../../../features/slice/datasetSlice";
import InnerTable from "./InnerTable";

import useToaster from "../../../customHooks/useToaster";
import ProjectSearchIndex from "./ProjectSearch/ProjectSearchIndex";

const CustomDownArrow = styled(KeyboardArrowDownIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});
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

const ProjectList = () => {
  const { teams } = useSelector((state) => state.team);
  const { workspaces } = useSelector((state) => state.workspace);
  const { projects, isLoading } = useSelector((state) => state.project);
  const { datasets } = useSelector((state) => state.dataset);
  const dispatch = useDispatch();
  const alert = useAlert();

  const toast = useToaster();
  const [activeHub, setActiveHub] = React.useState([]);
  const [projectStatus, setProjectStatus] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [server, setServer] = useState("ag");
  const [teamId, setTeamId] = useState("");
  const [WorkSpaceId, setWorkSpaceId] = useState("");
  const [hubModified, setHubModified] = useState(false);
  const [filterApply, setFilterApply] = useState(false);
  const [ProjectListFilter, setProjectListFilter] = useState([]);
  const handleChangeServer = (e) => {
    setServer(e.target.value);
  };
  useEffect(() => {
    setProjectListFilter(projects);
  }, [projects]);

  const [hubLists, setHubLists] = React.useState([]);

  const handleChangeHubs = (event) => {
    setHubModified(true);
    const {
      target: { value },
    } = event;

    setHubLists(typeof value === "string" ? value.split(",") : value);
    setActiveHub(typeof value === "string" ? value.split(",") : value);
  };
  useEffect(() => {
    dispatch(setActivePath("Projects"));
    dispatch(getAllTeams({ server_agent: server }));
  }, [server]);

  useEffect(() => {
    dispatch(resetWorkspaces());
    dispatch(resetProjects());
  }, [server, teamId]);

  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [priorityFilter, setPriorityFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const handleClickFilter = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseFilter = () => {
    setAnchorEl(null);
  };

  const handleFilterProject = () => {
    setFilterApply(true);
  };
  const handleResetProject = () => {
    setFilterApply(false);
    setPriorityFilter("");
    setStatusFilter("");
    setProjectListFilter(projects);
  };

  useEffect(() => {
    if (filterApply) {
      if (priorityFilter && statusFilter) {
        setProjectListFilter(
          projects.filter((item) => item.priorityLevel === priorityFilter && item.type === statusFilter)
        );
        setFilterApply(false);
      }
      if (priorityFilter && statusFilter === "") {
        setProjectListFilter(projects.filter((item) => item.priorityLevel === priorityFilter));
        setFilterApply(false);
      }
      if (priorityFilter === "" && statusFilter) {
        setProjectListFilter(projects.filter((item) => item.type === statusFilter));
        setFilterApply(false);
      }
    }
  }, [filterApply]);

  const filtered = ProjectListFilter.filter((entry) =>
    Object.values(entry).some((val) => typeof val === "string" && val.toLowerCase().includes(search.toLowerCase()))
  );
  const handleChangeTeam = (e) => {
    const data = {
      id: e.target.value,
      server_agent: server,
    };
    setTeamId(e.target.value);
    dispatch(getWorkSpaceById(data));
  };
  const handleChangeWorkspace = (e) => {
    const data = {
      id: e.target.value,
      server_agent: server,
    };
    setWorkSpaceId(e.target.value);
    dispatch(getProjectByWorkSpace(data));
  };
  const handleStatusProject = (e) => {
    setProjectStatus(e.target.value);
  };

  const handleChangePriority = (e) => {
    setPriority(e.target.value);
  };

  const handleSave = (project) => {
    let data;
    if (hubModified) {
      data = {
        activeHub: activeHub,
        status: projectStatus || project.status,
        priorityLevel: priority || project.priorityLevel,
      };
    } else {
      data = {
        activeHub: project.activeHub,
        status: projectStatus || project.status,
        priorityLevel: priority || project.priorityLevel,
      };
    }

    const finalData = {
      id: project.id,
      server_agent: server,
      data,
    };

    dispatch(updateAProjectById(finalData))
      .then((action) => {
        setProjectStatus("");
        setPriority("");
        setHubModified(false);

        return toast.trigger("Project status updated", "success");
      })
      .catch((err) => {
        return toast.trigger(err.response.data.message, "error");
      });
  };
  const [projectId, setProjectId] = useState("");

  const handleClickExtend = (project_id) => {
    setProjectId(project_id);
    setOpen(!open);
    const data = {
      id: project_id,
      server_agent: server,
    };
    dispatch(getDataSetByProjectID(data));
  };

  const csvLink = useRef();
  const [dataInCSV, setDataInCSV] = useState([]);
  const handleDownloadExport = (dataset) => {
    const data = {
      server_agent: server,
      teamId: teamId,
      WorkSpaceId: WorkSpaceId,
      projectId: dataset.projectId,
      datasetId: dataset.id,
    };

    dispatch(downloadMappingSheet(data)).then((action) => {
      setDataInCSV(action.payload.data.mappingSheet?.mappingData?.map(({ _id, jobId, ...rest }) => rest));
      setTimeout(() => {
        csvLink.current.link.click();
      });
    });
  };

  return (
    <>
      <Box sx={{ paddingLeft: "0%" }}>
        <Grid
          sx={{
            marginLeft: "0%",
            display: "flex",
          }}
          container
        >
          <Typography variant="h4" style={{ color: "#090080" }}>
            Projects
          </Typography>
        </Grid>
      </Box>

      <Box style={{ padding: "0%" }}>
        <Paper elevation={0} sx={paperStyle}>
          <Grid container sx={{ paddingTop: "2%", paddingLeft: "3%" }}>
            <Typography variant="h6" sx={{ color: "#090080" }}>
              Filter
            </Typography>
          </Grid>

          <Grid
            container
            sx={{
              paddingTop: "1%",
              paddingLeft: "3%",
              paddingRight: "3%",
              paddingBottom: "1%",
            }}
          >
            <Grid item xs={4} sx={{ paddingRight: "1%" }}>
              <FormControl
                variant="filled"
                fullWidth
                sx={{
                  backgroundColor: "#F8F8F8",
                  border: "1px solid #DADCDF",
                  borderRadius: "4px",
                  // width: "238.5px",
                  height: "58px",
                }}
              >
                <InputLabel id="demo-simple-select-filled-label">Server</InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  defaultValue={"ag"}
                  IconComponent={() => <CustomDownArrow />}
                  onChange={(e) => handleChangeServer(e)}
                >
                  <MenuItem value={"quantigo"}>Quantigo Server</MenuItem>
                  <MenuItem value={"ag"}>Ag Server</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {/* Show Team List */}

            <Grid item xs={4} sx={{ paddingRight: "1%" }}>
              <FormControl
                variant="filled"
                fullWidth
                sx={{
                  backgroundColor: "#F8F8F8",
                  border: "1px solid #DADCDF",
                  borderRadius: "4px",
                  // width: "238.5px",
                  height: "58px",
                }}
              >
                <InputLabel id="demo-simple-select-label">Team</InputLabel>
                {teams.length > 0 && (
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    defaultValue=""
                    IconComponent={() => <CustomDownArrow />}
                    onChange={(e) => handleChangeTeam(e)}
                    label="Team"
                  >
                    {teams.map((team) => (
                      <MenuItem key={team._id} value={team.id || ""}>
                        {team.name}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              </FormControl>
            </Grid>
            {/* Show Workspaces List */}
            {workspaces && Object.keys(workspaces).length > 0 && (
              <Grid item xs={4} style={{ padding: "0%" }}>
                <FormControl
                  variant="filled"
                  fullWidth
                  sx={{
                    backgroundColor: "#F8F8F8",
                    border: "1px solid #DADCDF",
                    borderRadius: "4px",
                    // width: "238.5px",
                    height: "58px",
                  }}
                >
                  <InputLabel id="demo-simple-select-label">Work Space </InputLabel>
                  {workspaces.length > 0 && (
                    <Select
                      onChange={(e) => handleChangeWorkspace(e)}
                      label="workspace"
                      IconComponent={() => <CustomDownArrow />}
                      defaultValue={""}
                    >
                      {workspaces.map((workspace) => (
                        <MenuItem key={workspace._id} value={workspace.id || ""}>
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
              }}
            >
              <ProjectSearchIndex
                anchorEl={anchorEl}
                placeholder="Search Project"
                handleClickFilter={handleClickFilter}
                handleCloseFilter={handleCloseFilter}
                setPriorityFilter={setPriorityFilter}
                priorityFilter={priorityFilter}
                setStatusFilter={setStatusFilter}
                statusFilter={statusFilter}
                handleFilterProject={handleFilterProject}
                handleResetProject={handleResetProject}
                handleChange={handleChange}
              />
            </Grid>
            <Grid
              container
              sx={{
                paddingTop: "2%",
                paddingLeft: "3%",
                paddingRight: "3%",
                paddingBottom: "2%",
              }}
            >
              {!isLoading && (
                <Grid container>
                  <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                      <TableHead sx={{ background: "#F8F8F8", height: "80px" }}>
                        <TableRow>
                          <TableCell align="left"></TableCell>
                          <TableCell align="left" width="2vw">
                            Name
                          </TableCell>
                          {/* <TableCell align="left">No. of Images</TableCell> */}
                          <TableCell align="center">Type</TableCell>
                          <TableCell align="center">ID</TableCell>
                          <TableCell align="center">Priority</TableCell>
                          <TableCell align="center">Active Hub</TableCell>
                          <TableCell align="center">Edit Status</TableCell>
                          <TableCell align="center">Action</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {filtered.map((project) => (
                          <>
                            <InnerTable
                              project={project}
                              handleClickExtend={handleClickExtend}
                              dataInCSV={dataInCSV}
                              csvLink={csvLink}
                              handleDownloadExport={handleDownloadExport}
                              datasets={datasets}
                              projectId={projectId}
                              handleStatusProject={handleStatusProject}
                              handleSave={handleSave}
                              handleChangeHubs={handleChangeHubs}
                              priority={priority}
                              handleChangePriority={handleChangePriority}
                              hubLists={hubLists}
                              MenuProps={MenuProps}
                              open={open}
                            />
                          </>
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

export default ProjectList;
