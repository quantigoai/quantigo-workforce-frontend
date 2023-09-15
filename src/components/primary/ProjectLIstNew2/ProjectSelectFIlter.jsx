import { Box, Button, FormControlLabel, Grid, Switch, Typography } from "@mui/material";
import ProjectSelectFIlterField from "./ProjectSelectFIlterField";
import PlatformSelectAnnotator from "./PlatformSelectAnnotator";
import { useState } from "react";

const ProjectSelectFIlter = ({
  filterPDR,
  platformOptions,
  statusOptions,
  projectTypeOptions,
  handleChange,
  handleClearFilter,
  filterValue,
  role,
  handleChangeAnnotatorFilter,
}) => {
  const [checked, setChecked] = useState(false);

  const handleChangeCheck = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Grid container sx={{ mt: 1 }}>
      <Grid items xs={11}>
        {role === "admin" ? (
          <>
            {" "}
            <ProjectSelectFIlterField
              label={"Pdr Options"}
              name="pdr"
              filterValue={filterValue}
              options={filterPDR}
              handleChange={handleChange}
            />
            <ProjectSelectFIlterField
              name="project_platform"
              label={"project Platform"}
              options={platformOptions}
              filterValue={filterValue}
              handleChange={handleChange}
            />
            <ProjectSelectFIlterField
              name={"project_type"}
              label="project Type"
              options={projectTypeOptions}
              filterValue={filterValue}
              handleChange={handleChange}
            />
            <ProjectSelectFIlterField
              name={"project_status"}
              label="project Status"
              options={statusOptions}
              filterValue={filterValue}
              handleChange={handleChange}
            />{" "}
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#F4F7FE",
                border: "1px solid #E6ECF5 ",
                borderRadius: "8px",
                width: "21%",
              }}
            >
              <Typography sx={{ p: 1, color: "#3C4D6B", opacity: "0.7" }} variant="p">
                {" "}
                Choose Platform:
              </Typography>
              <PlatformSelectAnnotator
                name="project_platform"
                label={"select"}
                options={platformOptions}
                handleChangeAnnotatorFilter={handleChangeAnnotatorFilter}
              />
            </Box>
            <FormControlLabel
              sx={{
                backgroundColor: "#F4F7FE",
                border: "1px solid #E6ECF5",
                borderRadius: "8px",
                ml: 2,
                px: "10px",
                color: "#3C4D6B",
                opacity: "0.7",
              }}
              control={<Switch checked={checked} onChange={handleChangeCheck} />}
              label="Available Jobs for me"
            />
          </Box>
        )}
      </Grid>
      <Grid item xs={1}>
        {" "}
        {role === "admin" && (
          <Button
            onClick={() => handleClearFilter()}
            sx={{ mt: 2, textTransform: "none", borderRadius: "8px" }}
            size="medium"
            color="error"
            variant={"contained"}
          >
            {" "}
            Clear Filter
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default ProjectSelectFIlter;
