import { Box, Button, FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import { motion } from "framer-motion";
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
  handleChangeCheck,
  checked,
  annotatorPlatform,
}) => {
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
                  backgroundColor: "primary.B008",
                  border: "1px solid #E6ECF5 ",
                  borderRadius: "8px",
                  height: "30px",

                  width: { lg: "38%", xl: "28%", xxl: "20%" },
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
                  annotatorPlatform={annotatorPlatform}
                  handleChangeAnnotatorFilter={handleChangeAnnotatorFilter}
                />
              </Box>

              <FormControlLabel
                sx={{
                  backgroundColor: "primary.B008",
                  border: "1px solid #E6ECF5",
                  borderRadius: "8px",
                  marginLeft: "5px",
                  mr: 0,
                  pr: 1,
                  color: "neutral.N300",
                  opacity: "0.7",
                  height: "30px",
                  fontWeight: "500",

                  fontFamily: "Inter",
                  "& .MuiFormControlLabel-label": {
                    fontSize: {
                      lg: "10px",
                      xl: "14px",
                      xxl: "14px",
                    },
                  },
                }}
                control={<Switch sx={{ pr: 2 }} checked={checked} onChange={handleChangeCheck} />}
                label="Available Projects for me"
              />
            </Stack>
          )}

          <Stack
            sx={{
              width: {
                lg: "9%",
                xl: "7%",
                xxl: "7%",
              },
              pl: {
                lg: 0,
                xl: 2,
                xxl: 2,
              },
            }}
          >
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
