/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/BenchMarkNew/sharedComponentsNew/SelectMenuNew.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 27th 2023, 12:50:30 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styled from "@emotion/styled";
import Datasets from "../../shared/SPV/Datasets";
import Projects from "../../shared/SPV/Projects";
import Workspaces from "../../shared/SPV/Workspaces";
import Teams from "../../shared/SPV/Teams";

const CustomDownArrow = styled(KeyboardArrowDownIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});

const SelectMenuNew = ({
  teams,
  workspaces,
  projects,
  datasets = [],
  handleChangeTeam,
  handleChangeWorkspace,
  handleChangeProject,
  handleChangeCategory,
  handleChangeDataset,
  register,
  jobCreate = false,
  calculateAnnotation = false,
  handleChangeServer,
  server,
  category,
}) => {
  return (
    <>
      <>
        <Grid container spacing={0} sx={{ paddingTop: "1%" }}>
          {/* server Field */}
          <Grid item xs={6} sx={{ pr: 2 }}>
            <FormControl
              variant="filled"
              fullWidth
              sx={{
                backgroundColor: "#F8F8F8",
              }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                Server
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                defaultValue={server}
                onChange={(e) => handleChangeServer(e)}
              >
                <MenuItem value={"quantigo"}>Quantigo Server</MenuItem>
                <MenuItem value={"ag"}>Ag Server</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Category Field */}
          <Grid item xs={6} sx={{ pl: 0 }}>
            <FormControl
              variant="filled"
              fullWidth
              sx={{
                backgroundColor: "#F8F8F8",
                borderRadius: "4px",
                height: "58px",
              }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                defaultValue={category}
                onChange={(e) => handleChangeCategory(e)}
              >
                <MenuItem value={"annotator"}>Annotator</MenuItem>
                <MenuItem value={"reviewer"}>Reviewer</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid
            container
            sx={{
              py: "1%",
            }}
          >
            {/* Show Team List */}
            <Grid
              item
              xs={jobCreate || calculateAnnotation ? 3 : 4}
              sx={{ pr: "1%" }}
            >
              <Teams teams={teams} handleChangeTeam={handleChangeTeam} />
            </Grid>
            {/* Show Workspaces List */}
            <Grid
              item
              xs={jobCreate || calculateAnnotation ? 3 : 4}
              sx={{ pr: "1%" }}
            >
              <Workspaces
                workspaces={workspaces}
                handleChangeWorkspace={handleChangeWorkspace}
              />
            </Grid>
            {/* Show Project List */}
            <Grid
              item
              xs={jobCreate || calculateAnnotation ? 3 : 4}
              sx={(jobCreate || calculateAnnotation) && { paddingRight: "1%" }}
            >
              <Projects
                xs={jobCreate || calculateAnnotation ? 3 : 4}
                projects={projects}
                handleChangeProject={handleChangeProject}
              />
            </Grid>

            {/* Show Dataset List */}
            {(jobCreate || calculateAnnotation) && (
              <Grid
                item
                xs={jobCreate || calculateAnnotation ? 3 : 4}
                sx={{ paddingRight: "0%" }}
              >
                <Datasets
                  jobCreate={jobCreate}
                  calculateAnnotation={calculateAnnotation}
                  datasets={datasets}
                  handleChangeDataset={handleChangeDataset}
                  register={register}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </>
    </>
  );
};

export default SelectMenuNew;
