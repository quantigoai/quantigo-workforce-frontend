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
import CustomSelectField from "../../shared/CustomField/CustomSelectField";

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
        }}>
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
                  }}>
                  <Stack direction="row" spacing={2}>
                    <Box sx={{ width: "50%", height: "80px",backgroundColor:"" }}>
                      <PDSelectField
                        name={"project_platform"}
                        label="Platform"
                        options={platformCreateOptions}
                        defaultValue={""}
                      />
                    </Box>
                    <Box sx={{ width: "50%", height: "80px",backgroundColor:"" }}>
                      <PDTextFIeld
                        name="project_drawer_name"
                        label="Project Name"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <Box sx={{ width: "50%", height: "80px" ,backgroundColor:""}}>
                      <PDSelectField
                        name={"project_type"}
                        label="Project Type"
                        options={projectTypeCreateOptions}
                        defaultValue={""}
                      />
                    </Box>
                    <Box sx={{ width: "50%", height: "80px" ,backgroundColor:""}}>
                      <PDTextFIeld
                        name="project_batch"
                        label="Batch"
                        InputProps={{
                          disableUnderline: true,
                          min: 1,
                        }}
                        isNumber="true"
                      />
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={2} >
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDTextFIeld
                        name="project_alias"
                        label="Alias"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </Box>
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDTextFIeld
                        name="pdr"
                        label="PDR"
                        placeholder="PDR must be in range 1 to 5"
                        InputProps={{
                          disableUnderline: true,
                          min: 1,
                          max: 5,
                        }}
                        isNumberPdr="true"
                      />
                    </Box>
                  </Stack>

                  {/* <SkillField/> */}

                  {/* TODO Style change for dark mode */}
                  <Stack direction="row"  spacing={2}  >
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDskillFIeld
                        name={"project_skills"}
                        addSkills={addSkills && addSkills}
                        label="Skills"
                        handleChangeSkill={handleChangeSkill}
                        skills={skills}
                        count={count}
                      />
                    </Box>
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDTextFIeld
                        name="benchMark"
                        label="Benchmark"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={2} >
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDDateField
                        name="estimated_end_date"
                        label="Estimated End Date"
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </Box>
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDSelectField
                        name={"project_status"}
                        label="Status"
                        options={statusCreateOptions}
                        defaultValue={""}
                      />
                    </Box>
                  </Stack>

                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      mt: "5px",
                      mb: "5px",
                      color: "neutral.N300",
                    }}
                    variant="h6">
                    Relevant Documents
                  </Typography>

                  {/* <PDReleventField /> */}
                  <Stack
                    sx={{
                      border: "1px solid #E6ECF5",
                      padding: "16px",
                      borderRadius: "8px",
                      background: isLightTheme ? "#FAFCFF" : "#1E2A41",
                      maxHeight: 200,
                      color: isLightTheme ? "#091E42" : "#FFFFFF",
                      overflowY: "auto",
                    }}>
                    <PDReleventField name={"relevantDocuments"} />
                  </Stack>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px",
                    mt: 2,
                    borderTop: "2px solid #F2F6FC",
                  }}>
                  <Button
                    onClick={handleCreateProjectClose}
                    sx={{
                      textTransform: "none",
                      paddingX: "30px",
                      paddingY: "5px",
                      fontSize: "16px",
                      color: "#62728F",
                      border: "1px solid #F4F7FE",
                      backgroundColor: "#F4F7FE",
                      "&:hover": {
                        border: " 1px solid #2E58FF",
                        backgroundColor: "#F4F7FE",
                      },
                    }}
                    variant="filled"
                    size="large">
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    sx={{
                      textTransform: "none",
                      paddingX: "30px",
                      paddingY: "5px",
                      fontSize: "16px",
                      borderRadius: "10px",
                      backgroundColor: "#2E58FF",
                      "&:hover": {
                        background: "#244EF5",
                      },
                    }}
                    variant="contained"
                    size="large">
                    Create
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
