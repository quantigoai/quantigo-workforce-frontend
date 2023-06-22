/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/BenchMark/BenchMark.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 14th 2022, 2:40:54 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import uIcon from "../../../assets/images/u_plus.png";
import { setActivePath } from "../../../features/slice/activePathSlice";
import {
  createBenchMark,
  getABenchMarkByProjectId,
  getProjectMeta,
  getProjectMetaAg,
  resetProjectMetas,
  updateABenchMarkById,
} from "../../../features/slice/benchMarkSlice";
import {
  getProjectByWorkSpace,
  resetProjects,
} from "../../../features/slice/projectByWorkspaceSlice";
import { getAllTeams, resetTeams } from "../../../features/slice/teamSlice";
import {
  getWorkSpaceById,
  resetWorkspaces,
} from "../../../features/slice/workSpaceSlice";
import SelectMenu from "./SelectMenu";

const paperstyle = {
  width: "80vw",
};

const BenchMark = () => {
  const { teams } = useSelector((state) => state.team);
  const { workspaces } = useSelector((state) => state.workspace);
  const { projects } = useSelector((state) => state.project);
  const { benchMark } = useSelector((state) => state.benchMark);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [textValue, setTextValue] = useState("Show");
  const [projectId, setProjectID] = useState();
  const [category, setCategory] = useState("");
  const [server, setServer] = useState("ag");

  useEffect(() => {
    dispatch(setActivePath("Benchmark"));
    setIsRedirect(false);
    if (
      !isRedirect &&
      location.pathname !== "/benchmark/single" &&
      location.pathname !== "/benchmark/details" &&
      location.pathname !== "/benchmark/update"
    ) {
      dispatch(resetTeams(server));
      dispatch(resetWorkspaces());
      dispatch(resetProjects());
      dispatch(resetProjectMetas());
      // dispatch(getAllTeams({ server_agent: server }));
    }
  }, [location.pathname, server]);

  const [imageData, setImageData] = useState({});

  const [newData, setNewData] = useState({});

  useEffect(() => {
    setImageData(benchMark?.imageBenchMark);
  }, [benchMark]);

  const [isRedirect, setIsRedirect] = useState(false);

  useEffect(() => {
    if (
      !isRedirect &&
      (location.pathname === "/benchmark" ||
        location.pathname === "/benchmark/create")
    ) {
      dispatch(resetTeams());
      dispatch(getAllTeams({ server_agent: server }));
      dispatch(resetWorkspaces());
      dispatch(resetProjects());
      dispatch(resetProjectMetas());
    }
  }, [location.pathname, server]);

  const [edit, setEdit] = useState("noeditable");
  const handelEdit = () => {
    setEdit("editAble");
  };

  //!  trigger if change any value in class or tag
  const handleTest = (type, x, row, v) => {
    const data = { ...newData };
    const classList = { ...(data.classList || {}) };
    const tagList = { ...(data.tagList || {}) };
    if (type === "class") {
      if (x === "value") {
        classList[row.id] = {
          ...classList[row.id],
          value: v,
          title: row.title,
          averageCount: classList[row.id]?.averageCount || row.averageCount,
        };
      } else {
        classList[row.id] = {
          ...classList[row.id],
          title: row.title,
          averageCount: v,
          value: classList[row.id]?.value || row.value,
        };
      }
    } else if (type === "tag") {
      if (x === "value") {
        tagList[row.id] = {
          ...tagList[row.id],
          name: row.name,
          value: v,
          averageCount: tagList[row.id]?.averageCount || row.averageCount,
        };
      } else {
        tagList[row.id] = {
          ...tagList[row.id],
          name: row.name,
          averageCount: v,
          value: tagList[row.id]?.value || row.value,
        };
      }
    }
    data.classList = { ...classList };
    data.tagList = { ...tagList };
    setNewData(data);
  };

  const onSubmit = (tempData) => {
    const classList = [];
    const tagList = [];
    for (let i in newData.classList) {
      const temp = newData.classList[i];
      temp.id = i;
      classList.push(temp);
    }
    for (let i in newData.tagList) {
      const temp = newData.tagList[i];
      temp.id = i.toString();
      tagList.push(temp);
    }

    const data1 = {
      ...tempData,
      name: name,
      description: description,
      imageBenchMark: { ...imageData },
    };

    if (classList.length > 0) data1.classesBenchMark = classList;
    if (tagList.length > 0) data1.tagsBenchMark = tagList;

    const bulkData = {
      id: benchMark._id,
      data: data1,
      server_agent: server,
    };

    dispatch(updateABenchMarkById(bulkData)).then((action) => {
      if (action.payload?.status === 200) {
        alert.show(action.payload?.data?.message, { type: "success" });
        setEdit("noeditable");
        navigate("/benchmark/details");
      } else {
        alert.show("Unable to update", { type: "error" });
      }
    });
  };

  const [value, setValue] = React.useState("bench");
  const [value1, setValue1] = React.useState("bench");
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    setValues({
      value: e.target.value,
    });
  };

  const handleChangeTag = (event) => {
    setValue1(event.target.value);
  };

  const initialValues = {
    value: "",
    averageCount: "",
  };

  const [data, setData] = useState({
    classList: {},
    tagList: {},
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [imageBenchMark, setValues] = useState(initialValues);

  const handleCreateTest = (type, action, item, title, value) => {
    if (type === "class") {
      const classList = { ...data.classList };
      if (action === "value") {
        classList[item] = { ...classList[item], value: value, title: title };
      } else {
        classList[item] = {
          ...classList[item],
          averageCount: value,
          title: title,
        };
      }

      setData({ ...data, classList });
    } else if (type === "tag") {
      const tagList = { ...data.tagList };
      if (action === "value") {
        tagList[item] = { ...tagList[item], value: value, name: title };
      } else {
        tagList[item] = { ...tagList[item], averageCount: value, name: title };
      }
      setData({ ...data, tagList });
    }
  };
  const [flatValue, setFlatValue] = useState();
  const [avgCount, setAvgCount] = useState();
  const handleClassflatAvg = (timevalue) => {
    setFlatValue(timevalue);
  };
  const handleClassflatvalue = (classes, valuefild, type) => {
    setAvgCount(valuefild);
    const classList = { ...classes };
    if (type === "timeValue") {
      for (let i in classes) {
        classList[i] = { ...classes[i], value: valuefild };
        setData({ ...data, classList });
      }
    } else {
      for (let i in classes) {
        classList[i] = { ...classes[i], averageCount: valuefild };
        setData({ ...data, classList });
      }
    }

    // setData({ ...data, classList });
  };
  const onCreateSubmit = (tempData) => {
    tempData.imageBenchMark = parseInt(tempData.imageBenchMark);
    imageBenchMark.value = parseInt(imageBenchMark.value);
    imageBenchMark.averageCount = parseInt(imageBenchMark.averageCount);
    const classList = [];
    const tagList = [];
    for (let i in data.classList) {
      const temp = data.classList[i];
      temp.id = i;
      classList.push(temp);
    }

    for (let i in data.tagList) {
      const temp = data.tagList[i];
      temp.id = i;
      tagList.push(temp);
    }
    const data1 = {
      name: name,
      description: description,
      ...tempData,
      projectId,
      classesBenchMark: [...classList],
      tagsBenchMark: [...tagList],
      category: category,
      imageBenchMark,
      value,
      value1,
    };
    const finalData = {
      data1,
      server_agent: server,
    };

    // dispatch(createBenchMark(finalData))
    //   .then((action) => {
    //     if (action.payload?.status === 201 || 200) {
    //       alert.show("BenchMark created successfully", { type: "success" });
    //     } else {
    //       alert.show("BenchMark can not created", { type: "error" });
    //     }
    //   })
    //   .then(() => {
    //     navigate("/benchmark/details");
    //   });
  };

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
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChangeServer = (e) => {
    setServer(e.target.value);
  };

  const handleChangeProject = (e) => {
    const finalData = {
      id: e.target.value,
      category: category,
      server_agent: server,
    };
    setProjectID(e.target.value);
    dispatch(getABenchMarkByProjectId(finalData)).then((action) => {
      if (action.payload?.status === 203) {
        if (server === "ag") {
          // setIsRedirect(true); //!! need to change this
          dispatch(getProjectMetaAg(e.target.value)).then((action) => {
            navigate("/benchmark/create");
          });
        } else {
          // setIsRedirect(true); //!! need to change this
          dispatch(getProjectMeta(e.target.value)).then((action) => {
            navigate("/benchmark/create");
          });
        }
      } else {
        navigate("/benchmark/single");
      }
    });
  };

  useEffect(() => {
    setTextValue("Show");
    if (location.pathname === "/benchmark/update") {
      setTextValue("Update");
    } else if (location.pathname === "/benchmark/create") {
      setTextValue("Create");
    } else {
      setTextValue("Show");
    }
  }, [location.pathname]);

  const handleMultiple = (data) => {
    location.pathname === "/benchmark/create"
      ? onCreateSubmit(data)
      : onSubmit(data);
  };
  return (
    <>
      <Box>
        <Grid container sx={{ paddingBottom: "2%" }}>
          <Grid xs={6}>
            <Grid xs={12}>
              <Typography variant="h5" sx={{ color: "#090080" }}>
                {textValue} Bench Mark
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography
                variant="caption"
                sx={{ color: "#969CAF", fontSize: "12px" }}>
                Lorem ipsum dolor sit amet consectetur urna viverra.
              </Typography>
            </Grid>
          </Grid>
          {location.pathname === "/benchmark/create" ? (
            <></>
          ) : (
            <Grid container xs={6} sx={{ justifyContent: "right" }}>
              <Button
                onClick={() => navigate("/benchmark/create")}
                variant="contained"
                sx={{
                  width: "282px",
                  height: "45px",
                  backgroundColor: "#2D58FF",
                  color: "#FFFFFF",
                  borderRadius: "2px",
                }}>
                <img src={uIcon} />
                Create BenchMark
              </Button>
            </Grid>
          )}
        </Grid>
      </Box>

      <form onSubmit={handleSubmit(handleMultiple)}>
        <Box sx={{ paddingBottom: "3%" }}>
          <Paper elevation={0} style={paperstyle}>
            <Grid container style={{ paddingTop: "2%", paddingLeft: "3%" }}>
              <Typography variant="h6" sx={{ color: "#090080" }}>
                Filter
              </Typography>
            </Grid>

            <Grid container style={{ paddingTop: "0%" }}>
              {/* For selecting the tam / workspace / project */}
              <SelectMenu
                teams={teams}
                workspaces={workspaces}
                projects={projects}
                handleChangeTeam={handleChangeTeam}
                handleChangeWorkspace={handleChangeWorkspace}
                handleChangeProject={handleChangeProject}
                handleChangeCategory={handleChangeCategory}
                register={register}
                handleChangeServer={handleChangeServer}
              />
            </Grid>
          </Paper>
        </Box>

        {/* <>
          <Box>
            <Paper elevation={0} style={paperstylelList}>
              <Grid container>
                <Grid  container >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#090080",
                      paddingLeft: "3%",
                      paddingTop: "1%",
                    }}>
                    General Info
                  </Typography>
                </Grid>
                <Grid  container  sx={{ paddingRight: "3%" }}>
                  <Grid
                    xs={6}
                    style={{
                      paddingLeft: "3%",
                      paddingBottom: "1%",
                      paddingTop: "1%",
                    }}>
                    <FormControl
                      variant="filled"
                      fullWidth
                      sx={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #DADCDF",
                        borderRadius: "4px",
                      }}>
                      <InputLabel>Name</InputLabel>
                      <FilledInput {...register("name", { required: true })} />
                    </FormControl>
                  </Grid>

                  <Grid
                    xs={6}
                    style={{
                      paddingLeft: "3%",
                      paddingBottom: "1%",
                      paddingTop: "1%",
                    }}>
                    <FormControl
                      variant="filled"
                      fullWidth
                      sx={{ backgroundColor: "#FFFFFF" }}>
                      <InputLabel htmlFor="filled-adornment-password">
                        Description
                      </InputLabel>
                      <FilledInput
                        {...register("description", { required: true })}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </>
       */}

        {/* Render the child component  */}
        <Box>
          <Outlet
            context={[
              handleTest,
              imageData,
              setImageData,
              handleChangeName,
              handleChangeDescription,
              handelEdit,
              handleInputChange,
              handleChange,
              handleCreateTest,
              value,
              setValue1,
              handleChangeTag,
              value1,
              imageBenchMark,
              handleClassflatAvg,
              handleClassflatvalue,
            ]}
          />
        </Box>
      </form>
    </>
  );
};

export default BenchMark;
