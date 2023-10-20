import { Box, Button, FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import PlatformSelectAnnotator from "./PlatformSelectAnnotator";
import ProjectSelectFIlterField from "./ProjectSelectFIlterField";

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
  isFilter,
}) => {
  const [checked, setChecked] = useState(false);

  const handleChangeCheck = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Box
      component={motion.div}
      animate={{
        opacity: isFilter ? 1 : 0,
        transition: { type: "spring", stiffness: 300, duration: 0.4, delay: 0.2 },
      }}
      sx={{
        backgroundColor: "neutral.N000",
        width: "100%",
        // paddingY: "5px",
        display: isFilter ? "block" : "none",
        height: "52px",
        borderTop: "1px solid #E6ECF5",
        transition: isFilter && "all 0.2s ease-in-out",
      }}
    >
      <Stack sx={{ width: "100%", height: "100%" }}>
        {/* <Grid items xs={9}> */}
        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            height: "100%",
          }}
        >
          {role === "admin" ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",

                  // paddingX: "16px",
                  // py: "8px",
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
                />
              </Box>
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

          {/* <Stack sx={{ width: "10%" }}>
            {role === "admin" && (
              <Button
                onClick={() => handleClearFilter()}
                sx={{
                  textTransform: "none",
                  borderRadius: "8px",
                  backgroundColor: "#FF4757",
                  color: "white",
                  width: "100px",
                  height: "25 px",

                  mt: 0.5,
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
          </Stack> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProjectSelectFIlter;
