import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import PDDateField from "../../shared/CustomField/PDDateField";
import PDReleventField from "../../shared/CustomField/PDReleventField";
import PDSelectField from "../../shared/CustomField/PDSelectField";
import PDTextFIeld from "../../shared/CustomField/PDTextFIeld";
import PDskillFIeld from "../../shared/CustomField/PDskillFIeld";
import FormProvider from "../../shared/FormProvider/FormProvider";
import ProjectModalHeader from "./ProjectModalHeader";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  p: 0,
  input: {
    height: "20px",
    borderRadius: "8px",
  },
  select: {
    height: "20px",
  },
};

const ProjectModal = ({
  createProjectOpen,
  handleCreateProjectClose,
  statusCreateOptions,
  platformCreateOptions,
  projectTypeCreateOptions,
  handleChangeSkill,
  count,
  onSubmit,
  addSkills,
  skills,
}) => {
  const { isLightTheme } = useSelector((state) => state.theme);

  const ProjectDrawerSchema = Yup.object().shape({
    project_drawer_name: Yup.string().required("project name is required"),
    project_alias: Yup.string().required("alias is required"),
    project_batch: Yup.string().required("batch is required"),
    pdr: Yup.string().required("pdr is required"),
    benchMark: Yup.string().required(" benchMark is required"),
    // relevantDocuments: Yup.string().required(" document is required"),
    // guideline: Yup.string().required(" document is required"),
    // link: Yup.string().required("link is required"),
  });

  const methods = useForm({
    resolver: yupResolver(ProjectDrawerSchema),
  });

  const { handleSubmit } = methods;

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={createProjectOpen}
        onClose={handleCreateProjectClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={createProjectOpen}>
          <Box sx={style}>
            <ProjectModalHeader handleCreateProjectClose={handleCreateProjectClose} modalTitle={"Create Project"} />

            <Box>
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Box
                  sx={{
                    paddingLeft: "3%",
                    paddingTop: "2%",
                    paddingRight: "3%",
                    position: "relative",
                  }}
                >
                  <Stack direction="row" gap={2} sx={{ py: "0%" }}>
                    <PDSelectField
                      name={"project_platform"}
                      label="Platform"
                      options={platformCreateOptions}
                      defaultValue={""}
                    />
                    <PDTextFIeld
                      name="project_drawer_name"
                      label="Project Name"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </Stack>
                  <Stack direction="row" gap={2} sx={{ py: "0%" }}>
                    <PDSelectField
                      name={"project_type"}
                      label="Project Type"
                      options={projectTypeCreateOptions}
                      defaultValue={""}
                    />
                    <PDTextFIeld
                      name="project_batch"
                      label="Batch"
                      InputProps={{
                        disableUnderline: true,
                        min: 1,
                      }}
                      isNumber="true"
                    />
                  </Stack>

                  <Stack direction="row" gap={2} sx={{ py: "0%" }}>
                    <PDTextFIeld
                      name="project_alias"
                      label="Alias"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />

                    <PDTextFIeld
                      name="pdr"
                      label="PDR"
                      InputProps={{
                        disableUnderline: true,
                        min: 1,
                        max: 5,
                      }}
                      isNumberPdr="true"
                    />
                  </Stack>

                  {/* <SkillField/> */}
                  
                  {/* TODO Style change for dark mode */}
                  <Stack direction="row" gap={2} sx={{ py: "0%" }}>
                    <PDskillFIeld
                      name={"project_skills"}
                      addSkills={addSkills && addSkills}
                      label="Skills"
                      handleChangeSkill={handleChangeSkill}
                      skills={skills}
                      count={count}
                    />
                    <PDTextFIeld
                      name="benchMark"
                      label="Benchmark"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                  </Stack>

                  <Stack direction="row" gap={2} sx={{ py: "0%" }}>
                    <PDDateField
                      name="estimated_end_date"
                      label="Estimated End Time"
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                    <PDSelectField
                      name={"project_status"}
                      label="Status"
                      options={statusCreateOptions}
                      defaultValue={""}
                    />
                  </Stack>

                  <Typography
                    sx={{
                      fontWeight: "500",
                      mt: "5px",
                      fontSize: "14px",
                      mb: "10px",
                      color: isLightTheme ? "#091E42" : "#FFFFFF",
                    }}
                    variant="h6"
                  >
                    Relevant Documents
                  </Typography>

                  {/* <PDReleventField /> */}
                  <Stack
                    sx={{
                      border: "2px solid #E6ECF5",
                      padding: "16px",
                      borderRadius: "8px",
                      background: isLightTheme ? "#FAFCFF" : "#1E2A41",
                      maxHeight: 200,
                      color: isLightTheme ? "#091E42" : "#FFFFFF",
                      overflowY: "auto",
                    }}
                  >
                    <PDReleventField name={"relevantDocuments"} />
                  </Stack>
                </Box>

                <hr
                  style={{
                    color: "#F2F6FC",
                    marginTop: "16px",
                    width: "100%",
                    padding: "0px",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    // borderTop: "2px solid #F2F6FC",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px",
                  }}
                >
                  <Button
                    onClick={handleCreateProjectClose}
                    sx={{
                      textTransform: "none",
                      paddingX: "30px",
                      paddingY: "5px",
                      fontSize: "16px",
                      color: "#2E58FF",
                      border: "1px solid #F4F7FE",
                      backgroundColor: "#F4F7FE",
                      "&:hover": {
                        border: " 1px solid #2E58FF",
                        backgroundColor: "#F4F7FE",
                      },
                    }}
                    variant="filled"
                    size="large"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    sx={{
                      textTransform: "none",
                      paddingX: "30px",
                      paddingY: "5px",
                      fontSize: "16px",
                      backgroundColor: "#2E58FF",
                      "&:hover": {
                        background: "#244EF5",
                      },
                    }}
                    variant="contained"
                    size="large"
                  >
                    Save
                  </Button>
                </Box>
              </FormProvider>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ProjectModal;
