/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/BenchMarkNew/BenchMarkIndex.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Saturday, March 25th 2023, 7:32:16 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import useToaster from "../../customHooks/useToaster";
import {
    createBenchMark,
    getABenchMarkByProjectId,
    getProjectMeta,
    getProjectMetaAg,
    resetProjectMetas,
    setBenchMarkLocal,
    updateABenchMarkById,
    updateBenchmarkData,
} from "../../features/slice/benchMarkSlice";
import {getProjectByWorkSpace, resetProjects} from "../../features/slice/projectByWorkspaceSlice";
import {getAllTeams} from "../../features/slice/teamSlice";
import {getWorkSpaceById, resetWorkspaces} from "../../features/slice/workSpaceSlice";

const BenchMarkIndex = () => {
  const dispatch = useDispatch();

  const toast = useToaster();
  const { benchMark, projectMetas } = useSelector((state) => state.benchMark);

  const [customData, setCustomData] = useState({});

  const [projectId, setProjectID] = useState();
  const [teamId, setTeamId] = useState();
  const [workspaceId, setWorkspaceId] = useState();
  const [server, setServer] = useState("ag");
  const [category, setCategory] = useState("annotator");

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [value, setValue] = React.useState("bench");

  const [data, setData] = useState({
    classList: {},
    tagList: {},
  });
  const [flatData, setFlatData] = useState({
    classList: [],
    tagList: [],
  });

  const [value1, setValue1] = React.useState("bench");

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleChangeTeam = (e) => {
    setTeamId(e.target.value);
    const data = {
      id: e.target.value,
      server_agent: server,
    };
    dispatch(getWorkSpaceById(data));
  };

  const handleChangeWorkspace = (e) => {
    setWorkspaceId(e.target.value);
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

  useEffect(() => {
    dispatch(getAllTeams({ server_agent: server }));
  }, [server]);
  useEffect(() => {
    dispatch(updateBenchmarkData());
    // dispatch(resetWorkspaces());
    dispatch(resetProjects());
  }, [server, teamId, workspaceId]);

  useEffect(() => {
    // dispatch(updateBenchmarkData());
    dispatch(resetWorkspaces());
  }, [server, teamId]);
  const handleChangeProject = (e) => {
    const finalData = {
      id: e.target.value,
      category: category,
      server_agent: server,
    };
    setProjectID(e.target.value);
    dispatch(getABenchMarkByProjectId(finalData)).then((action) => {
      if (action.payload?.status === 203) {
        dispatch(resetProjectMetas());
        if (server === "ag") {
          dispatch(getProjectMetaAg(e.target.value)).then(() => {
            navigate("/benchmarknew/create");
          });
        } else {
          dispatch(getProjectMeta(e.target.value)).then(() => {
            navigate("/benchmarknew/create");
          });
        }
      } else {
        navigate("/benchmarknew/single");
      }
    });
  };

  // ------------------------

  // -----------
  const handleDetails = (bm) => {
    dispatch(setBenchMarkLocal(bm));
    navigate(`/benchmarknew/${bm._id}`);
  };

  // name desc
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  // classes
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleCreateTest = (type, action, item, title, value) => {
    if (type === "class") {
      const classList = { ...data.classList };
      if (action === "value") {
        classList[item] = {
          ...classList[item],
          value: value,
          title: title,
          id: item,
        };
      } else {
        classList[item] = {
          ...classList[item],
          averageCount: value,
          title: title,
          id: item,
        };
      }

      setData({ ...data, classList });
    } else if (type === "tag") {
      const tagList = { ...data.tagList };
      if (action === "value") {
        tagList[item] = {
          ...tagList[item],
          id: item,
          value: value,
          name: title,
        };
      } else {
        tagList[item] = {
          ...tagList[item],
          averageCount: value,
          name: title,
          id: item,
        };
      }
      setData({ ...data, tagList });
    }
  };

  useEffect(() => {
    if (value === "auto" && value1 === "auto") {
      setFlatData({
        classList: projectMetas.classes,
        tagList: projectMetas.tags,
      });
    }
    if (value === "bench" && value1 === "bench") {
      setFlatData({ classList: [], tagList: [] });
    }
    if (value === "auto" && value1 === "bench") {
      setFlatData({ classList: projectMetas.classes, tagList: [] });
    }
    if (value === "bench" && value1 === "auto") {
      setFlatData({ classList: [], tagList: projectMetas.tags });
    }
  }, [value, value1, projectMetas]);

  const [flatClassTime, setFlatClassTime] = useState(0);
  const [flatClassAvg, setFlatClassAvg] = useState(0);
  const [flatTagTime, setFlatTagTime] = useState(0);
  const [flatTagAvg, setFlatTagAvg] = useState(0);

  const handleClassflatvalue = (valuefild, type) => {
    if (type === "timeValue") {
      setFlatClassTime(valuefild);
    } else {
      setFlatClassAvg(valuefild);
    }
  };

  // tags
  const handleChangeTag = (event) => {
    setValue1(event.target.value);
  };
  const handleTagflatvalue = (valuefild, type) => {
    if (type === "timeValue") {
      setFlatTagTime(valuefild);
    } else {
      setFlatTagAvg(valuefild);
    }
  };
  // images
  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    setValues({
      value: e.target.value,
    });
  };

  // -----------
  // -----------
  const location = useLocation();
  // Submit
  const initialValues = {
    value: "",
    averageCount: "",
  };

  const [imageBenchMark, setValues] = useState(initialValues);
  const [newData, setNewData] = useState({});
  const [imageData, setImageData] = useState({});
  const [edit, setEdit] = useState("noeditable");

  //**  Create a new Benchmark ----------------*//
  const onCreateSubmit = (tempData) => {
    tempData.imageBenchMark = parseInt(tempData.imageBenchMark) || 1;
    imageBenchMark.value = parseInt(imageBenchMark.value);

    imageBenchMark.averageCount = parseInt(imageBenchMark.averageCount);
    const classList = [];
    const tagList = [];

    if (value === "bench") {
      for (let i in data.classList) {
        const temp = data.classList[i];
        temp.id = data.classList[i].id;
        classList.push(temp);
      }
    }
    if (value === "auto") {
      for (let i in flatData.classList) {
        // const temp = { ...flatData.classList[i] };
        const temp = {};
        temp.id = flatData.classList[i].id;
        temp.title = flatData.classList[i].title;
        temp.value = flatClassTime;
        temp.averageCount = flatClassAvg;
        classList.push(temp);
      }
    }
    if (value1 === "bench") {
      for (let i in data.tagList) {
        const temp = data.tagList[i];
        temp.id = data.tagList[i].id;
        tagList.push(temp);
      }
    }
    if (value1 === "auto") {
      for (let i in flatData.tagList) {
        // const temp = { ...flatData.tagList[i] };
        const temp = {};
        temp.id = flatData.tagList[i].id;
        temp.name = flatData.tagList[i].name;
        temp.value = flatTagTime;
        temp.averageCount = flatTagAvg;
        tagList.push(temp);
      }
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
      server_agent: server,
    };
    data1.server_agent = server;
    const finalData = {
      data1,
      server_agent: server,
    };

    dispatch(createBenchMark(finalData))
      .then((action) => {
        if (action.payload?.status === 201 || action.payload?.status === 200) {
          toast.trigger("BenchMark created successfully", "success");
          navigate("/benchmarknew/list");
        } else {
          toast.trigger("Unable to create BenchMark", "error");
        }
      })
      .then(() => {
        dispatch(resetProjectMetas());
      });
  };
  useEffect(() => {
    setImageData(benchMark?.imageBenchMark);
  }, [benchMark]);

  //**  Edit a Benchmark ----------------*//
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
    if (value === "auto") {
      for (let i in flatData.classList) {
        const temp = {};
        temp.id = flatData.classList[i].id;
        temp.title = flatData.classList[i].title;
        temp.value = flatClassTime;
        temp.averageCount = flatClassAvg;
        classList.push(temp);
      }
    }
    if (value1 === "auto") {
      for (let i in flatData.tagList) {
        // const temp = { ...flatData.tagList[i] };
        const temp = {};
        temp.id = flatData.tagList[i].id;
        temp.name = flatData.tagList[i].name;
        temp.value = flatTagTime;
        temp.averageCount = flatTagAvg;
        tagList.push(temp);
      }
    }
    const data1 = {
      ...tempData,
      name: name || benchMark.name,
      description: description || benchMark.description,
      imageBenchMark: { ...imageData },
    };

    if (classList.length > 0) data1.classesBenchMark = classList;
    if (tagList.length > 0) data1.tagsBenchMark = tagList;

    const bulkData = {
      id: benchMark._id,
      data: data1,
      server_agent: benchMark.server_agent,
    };

    dispatch(updateABenchMarkById(bulkData)).then((action) => {
      if (action.payload?.status === 200) {
        toast.trigger(action.payload.data.message, "success");
        setEdit("noeditable");
        navigate("/benchmarknew/list");
      } else {
        toast.trigger("Unable to update the Benchmark", "error");
      }
    });
  };

  const handleMultiple = (data) => {
    location.pathname === "/benchmarknew/create" ? onCreateSubmit(data) : onSubmit(data);
  };

  // Update
  const handleChangeclasses = (event) => {
    setValue(event.target.value);
  };

  // changing the value of update onchange
  const handleTest = (type, x, row, v) => {
    // TODO need to clear the old data and add new data
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

  const handleInputChangeTest = (e) => {
    const data = {
      ...imageData,
    };
    data.value = e.target.value;
    setImageData(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleMultiple)}>
        <Outlet
          context={[
            handleDetails,
            handleChangeServer,
            handleChangeCategory,
            handleChangeTeam,
            handleChangeWorkspace,
            handleChangeProject,
            handleChangeName,
            handleChangeDescription,
            handleChange,
            handleCreateTest,
            handleClassflatvalue,
            value,
            value1,
            handleChangeTag,
            handleInputChange,
            server,
            setServer,
            category,
            setCategory,
            handleChangeclasses,
            handleTest,
            register,
            customData,
            setCustomData,
            imageData,
            setImageData,
            handleTagflatvalue,
            handleInputChangeTest,
          ]}
        />
      </form>
    </>
  );
};

export default BenchMarkIndex;
