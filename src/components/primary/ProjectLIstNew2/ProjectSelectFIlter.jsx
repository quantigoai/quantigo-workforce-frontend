import { Box, Button, FormControlLabel, Grid, Stack, Switch, Typography } from "@mui/material";
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
    // <Grid container sx={{ mt: 1 }}>
    <Stack>
      {/* <Grid items xs={9}> */}
      <Stack sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
        {role === "admin" ? (
          <>

            <Stack
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                flexDirection: "row",
                width: "90%",
                paddingX: "40px",
              }}
            >
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
            </Stack>
          </>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", paddingX: "40px", width: "70%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#F4F7FE",
                border: "1px solid #E6ECF5 ",
                borderRadius: "8px",
                width: "30%",
              }}
            >
              <Typography sx={{ color: "#3C4D6B", opacity: "0.7", paddingX: "10px" }} variant="p">
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
                width: "25%",
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

        <Stack sx={{ width: "10%" }}>
 
          {role === "admin" && (
            <Button
              onClick={() => handleClearFilter()}
              sx={{
                textTransform: "none",
                borderRadius: "8px",
                backgroundColor: "#FF4757",
                color: "white",
                padding: "10px 12px",
                width: "100px",
                height: "40px",
                "&:hover": {
                  backgroundColor: "#F53142",
                },
              }}
              size="medium"
              color="error"
            >
              {" "}
              Clear Filter
            </Button>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectSelectFIlter;
