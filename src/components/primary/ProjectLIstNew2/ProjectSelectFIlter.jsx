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
        transition: { type: "spring", stiffness: 300, duration: 0.4, delay: 0.2 },
      }}
      sx={{
        backgroundColor: "neutral.N000",
        width: "100%",
        display: isFilter ? "block" : "none",
        borderTop: "1px solid #E6ECF5",
        height: "52px",
        pr: 2,
        pl: 2,
        pY: "6px",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          py: "6px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {role === "admin" ? (
            <>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  flexDirection: "row",
                  width: "90%",

                  gap: 2,
                  // backgroundColor: "blue",
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
              </Stack>
            </>
          ) : (
            <Box
              // sx={{ display: "flex", alignItems: "center", paddingX: "40px", width: "70%" }}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingX: "16px",
                height: "100%",
              }}
            >
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
                  mr: 0,
                  color: "#3C4D6B",
                  opacity: "0.7",
                }}
                control={<Switch checked={checked} onChange={handleChangeCheck} />}
                label="Available Jobs for me"
              />
            </Box>
          )}

          <Stack sx={{ width: "7%", pl: 2 }}>
            {role === "admin" && (
              <Button
                onClick={() => handleClearFilter()}
                sx={{
                  textTransform: "none",
                  borderRadius: "8px",
                  backgroundColor: "#FF4757",
                  color: "white",
                  height: { xl: "30 px", lg: "30px" },
                  "&:hover": {
                    backgroundColor: "#F53142",
                  },
                }}
                size="medium"
                color="error"
              >
                Clear
              </Button>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProjectSelectFIlter;
