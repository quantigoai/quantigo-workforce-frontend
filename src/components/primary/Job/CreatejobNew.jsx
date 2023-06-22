/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Job/CreatejobNew.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 27th 2023, 12:54:00 am
 * Author: Tanzim Ahmed
 * 
 * Copyright (c) 2023 Tanzim Ahmed
 */


/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Job/CreateJob.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, December 19th 2022, 10:24:32 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getDataSetByProjectID } from "../../../features/slice/datasetSlice";
import {
  createJob,
  getVideoId,
  videoJobCreate,
} from "../../../features/slice/jobSlice";
import { getProjectByWorkSpace } from "../../../features/slice/projectByWorkspaceSlice";
import { getAllTeams } from "../../../features/slice/teamSlice";
import { getWorkSpaceById } from "../../../features/slice/workSpaceSlice";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import SelectMenu from "../BenchMark/SelectMenu";
import OptionalFields from "./SharedComponents/OptionalFields";
import { useNavigate } from "react-router-dom";

const CreateJobNew = () => {
  const { teams } = useSelector((state) => state.team);
  const { workspaces } = useSelector((state) => state.workspace);
  const { projects } = useSelector((state) => state.project);
  const { datasets } = useSelector((state) => state.dataset);
  const { isLoading } = useSelector((state) => state.job);
  const dispatch = useDispatch();
  const [projectID, setProjectID] = useState("");
  const [datasetID, setDatasetID] = useState("");
  const [skills, setSkills] = useState([]);
  const { skills: rootSkills } = useSelector((state) => state.skill);
  const alert = useAlert();
  const [server, setServer] = useState("ag");
  const navigate = useNavigate();
  const handleChangeServer = (e) => {
    setServer(e.target.value);
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
  const [projectType, setProjectType] = useState("");

  const handleChangeProject = (e) => {
    setProjectID(e.target.value);
    const data = {
      id: e.target.value,
      server_agent: server,
    };

    projects.map((project) => {
      if (e.target.value === project.id) {
        setProjectType(project.type);
      }
    });

    dispatch(getDataSetByProjectID(data));
  };
  const [datasetType, setDataSetType] = useState("");
  const [videosId, setVideosId] = useState([]);
  const handleChangeDataset = (e) => {
    setDatasetID(e.target.value);

    if (projectType === "videos") {
      dispatch(getVideoId(e.target.value)).then((action) => {
        action.payload.data.entities.map((entitie) => {
          setVideosId((current) => [...current, entitie.id]);
        });
      });
    }
  };

  useEffect(() => {
    dispatch(getAllTeams({ server_agent: server }));
  }, [server]);

  useEffect(() => {
    if (projectID) {
      const data = {
        id: projectID,
        server_agent: server,
      };
      dispatch(getDataSetByProjectID(data));
    }
  }, [projectID]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.server_agent = server;
    const skillsId = rootSkills.map((skill) => {
      if (skills.includes(skill.name)) {
        return skill._id;
      } else {
        return null;
      }
    });

    data.skills = [...skillsId];

    if (projectType === "videos") {
      const finalData = {
        ...data,
        videosId,
        datasetId: datasetID,
      };
      dispatch(videoJobCreate(finalData)).then((action) => {
        if (action.payload?.status === 201) {
          alert.show("Job Pull Successfully", { type: "success" });
        } else if (action.payload.status === 202) {
          alert.show(action.payload.data.message, { type: "error" });
        } else {
          alert.show("Something went wrong", { type: "error" });
        }
      });
    } else {
      const finalData = {
        ...data,
        datasetId: datasetID,
      };
      dispatch(createJob(finalData)).then((action) => {
        if (action.payload?.status === 201) {
          navigate("/jobs/alljobs");
          alert.show("Job Pull Successfully", { type: "success" });
        } else if (action.payload.status === 202) {
          alert.show(action.payload.data.message, { type: "error" });
        } else {
          alert.show("Something went wrong", { type: "error" });
        }
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container sx={{ paddingBottom: "2%" }}>
          <CommonHeader
            title="Create Job Pool"
            description="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
            isLoading={isLoading}
          />
        </Grid>

        <Box >
          <Paper elevation={0} sx={{ padding: "2%" }}>
            <Grid container>
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
                jobCreate={true}
                handleChangeServer={handleChangeServer}
              />
              <OptionalFields register={register} setSkills={setSkills} />
            </Grid>
          </Paper>
        </Box>
      </form>
    </>
  );
};

export default CreateJobNew;
