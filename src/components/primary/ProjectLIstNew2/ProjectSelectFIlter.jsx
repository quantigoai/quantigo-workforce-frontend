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
            <Stack
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
                gap: 2,
                // backgroundColor: "blue",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#F4F7FE",
                  border: "1px solid #E6ECF5 ",
                  borderRadius: "8px",
                  width: "22%",
                }}
              >
                <Typography sx={{ opacity: "0.7", ml: 1 }} color={"neutral.N300"} variant="wpf_p3_regular">
                  {" "}
                  Choose Platform :
                </Typography>
                <PlatformSelectAnnotator
                  name="project_platform"
                  label={"Project Platform"}
                  options={platformOptions}
                  handleChangeAnnotatorFilter={handleChangeAnnotatorFilter}
                />
              </Box>

              <FormControlLabel
                sx={{
                  backgroundColor: "#F4F7FE",
                  border: "1px solid #E6ECF5",
                  borderRadius: "8px",
                  marginLeft: "5px",
                  mr: 0,
                  pr: 1,
                  color: "#3C4D6B",
                  opacity: "0.7",
                  fontWeight: "500",
                  fontSize: "14px",
                  fontFamily: "Inter",
                }}
                control={<Switch sx={{ pr: 2 }} checked={checked} onChange={handleChangeCheck} />}
                label="Available Jobs for me"
              />
            </Stack>
          )}

          <Stack sx={{ width: "7%", pl: 2 }}>
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
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProjectSelectFIlter;
