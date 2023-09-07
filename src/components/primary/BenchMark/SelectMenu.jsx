/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/BenchMark/SelectMenu.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 15th 2022, 12:29:28 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import Datasets from "../../shared/SPV/Datasets";
import Projects from "../../shared/SPV/Projects";
import Teams from "../../shared/SPV/Teams";
import Workspaces from "../../shared/SPV/Workspaces";

const SelectMenu = ({ teams, workspaces, projects, datasets = [], handleChangeTeam, handleChangeWorkspace, handleChangeProject, handleChangeCategory, handleChangeDataset, register, jobCreate = false, calculateAnnotation = false, handleChangeServer }) => {
  return (
    <>
      <>
        <Grid container sx={{ paddingTop: "2%" }}>
          <Grid
            container
            xs={jobCreate ? 12 : 6}
            sx={{
              paddingLeft: "3%",
              paddingRight: jobCreate ? "3%" : "1%",
              paddingBottom: "0%",
            }}
          >
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
              <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" defaultValue={"ag"} onChange={(e) => handleChangeServer(e)}>
                <MenuItem value={"quantigo"}>Quantigo Server</MenuItem>
                <MenuItem value={"ag"}>Ag Server</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {!jobCreate ? (
            <Grid container xs={6} style={{ paddingLeft: "0%", paddingRight: "3%" }}>
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
                <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" defaultValue={""} onChange={(e) => handleChangeCategory(e)}>
                  <MenuItem value={"annotator"}>Annotator</MenuItem>
                  <MenuItem value={"reviewer"}>Reviewer</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
      </>

      <Grid
        container
        gap={0}
        sx={{
          py: "3%",
          mx: "3%",
        }}
      >
        {/* Show Team List */}
        <Grid xs={jobCreate || calculateAnnotation ? 3 : 4} style={{ paddingRight: "1%" }}>
          <Teams teams={teams} handleChangeTeam={handleChangeTeam} />
        </Grid>
        {/* Show Workspaces List */}
        <Grid xs={jobCreate || calculateAnnotation ? 3 : 4} sx={{ paddingRight: "1%" }}>
          <Workspaces workspaces={workspaces} handleChangeWorkspace={handleChangeWorkspace} />
        </Grid>
        {/* Show Project List */}
        <Grid xs={jobCreate || calculateAnnotation ? 3 : 4} sx={{ paddingRight: "1%" }}>
          <Projects xs={jobCreate || calculateAnnotation ? 3 : 4} projects={projects} handleChangeProject={handleChangeProject} />
        </Grid>

        {/* Show Dataset List */}
        {(jobCreate || calculateAnnotation) && (
          <Grid xs={jobCreate || calculateAnnotation ? 3 : 4} sx={{ paddingRight: "0%" }}>
            <Datasets jobCreate={jobCreate} calculateAnnotation={calculateAnnotation} datasets={datasets} handleChangeDataset={handleChangeDataset} register={register} />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default SelectMenu;
