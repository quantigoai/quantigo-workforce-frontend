import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import PDSelectField from "../../shared/CustomField/PDSelectField";
import PDTextFIeld from "../../shared/CustomField/PDTextFIeld";
import PDskillFIeld from "../../shared/CustomField/PDskillFIeld";
import FormProvider from "../../shared/FormProvider/FormProvider";
import useHandleEditChange from "./Hooks/useHandleEditChange";
import ProjectModalHeader from "./ProjectModalHeader";
import PDDateField from "../../shared/CustomField/PDDateField";
import PDReleventField from "../../shared/CustomField/PDReleventField";
import { useSelector } from "react-redux";
import PDReleventField2 from "../../shared/CustomField/PDReleventField2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 0,
};

const EditProjectModal = ({
  editModalOpen,
  handleEditProjectClose,
  projectDrawer,
  platformCreateOptions,
  projectTypeCreateOptions,
  statusCreateOptions,
  handleEditSkill,
  editCount,
  editSkills,
  skills,
  isEdit,
  onSubmit,
}) => {
  const { prevSkills } = useHandleEditChange();
  const { isLightTheme } = useSelector((state) => state.theme);

  const ProjectDrawerSchema = Yup.object().shape({
    // project_drawer_name: Yup.string().required(" project name is required"),
    // project_alias: Yup.string().required("alias is required"),
    // project_batch: Yup.string().required(" batch is required"),
    // pdr: Yup.string().required(" pdr is required"),
    // benchmark: Yup.string().required(" benchmark is required"),
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
        open={editModalOpen}
        onClose={handleEditProjectClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={editModalOpen}>
          <Box sx={style}>
            <ProjectModalHeader
              handleCreateProjectClose={handleEditProjectClose}
              modalTitle={`Edit ${projectDrawer.project_drawer_name}`}
            />
            <Box>
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Box
                  sx={{
                    paddingLeft: "16px",
                    paddingTop: "1%",
                    paddingRight: "16px",
                    position: "relative",
                  }}>
                  <Stack direction="row" spacing={2}>
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDSelectField
                        name={"project_platform"}
                        label="Platform"
                        options={platformCreateOptions}
                        defaultValue={projectDrawer.project_platform}
                      />
                    </Box>
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDTextFIeld
                        name="project_drawer_name"
                        label="Project Name"
                        defaultValue={projectDrawer.project_drawer_name}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={2}>
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDSelectField
                        name={"project_type"}
                        label="Project Type"
                        options={projectTypeCreateOptions}
                        defaultValue={projectDrawer.project_type}
                      />
                    </Box>
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDTextFIeld
                        name="project_batch"
                        label="Batch"
                        defaultValue={projectDrawer.project_batch}
                        InputProps={{
                          disableUnderline: true,
                          min: 1,
                        }}
                        isNumber="true"
                      />
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={2}>
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDTextFIeld
                        name="project_alias"
                        label="Alias"
                        defaultValue={projectDrawer.project_alias}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </Box>
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDTextFIeld
                        name="pdr"
                        label="PDR"
                        defaultValue={projectDrawer.pdr}
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

                  <Stack direction="row" spacing={2}>
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDskillFIeld
                        name={"project_skills"}
                        addSkills={editSkills}
                        selectedSkills={prevSkills}
                        label="Skills"
                        isEdit={isEdit}
                        handleChangeSkill={handleEditSkill}
                        skills={skills}
                        count={editCount}
                      />
                    </Box>
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDTextFIeld
                        name="benchMark"
                        label="Benchmark"
                        defaultValue={projectDrawer.benchMark}
                        InputProps={{
                          disableUnderline: true,
                        }}
                      />
                    </Box>
                  </Stack>

                  <Stack direction="row" spacing={2}>
                    <Box sx={{ width: "50%", height: "80px" }}>
                      <PDDateField
                        name="estimated_end_date"
                        label="Estimated End Time"
                        defaultValue={projectDrawer.estimated_end_date}
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
                        defaultValue={projectDrawer.project_status}
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

                  <Stack
                    sx={{
                      border: "1px solid #E6ECF5",
                      padding: "16px",
                      borderRadius: "8px",
                      background: isLightTheme ? "#FAFCFF" : "#1E2A41",
                      maxHeight: 155,
                      color: isLightTheme ? "#091E42" : "#FFFFFF",
                      overflowY: "auto",
                    }}>
                    <PDReleventField2 defaultValueItems={projectDrawer.relevantDocuments} name={"relevantDocuments"} />
                  </Stack>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingY: "12px",
                    paddingX:"16px",
                    mt: 2,
                    borderTop: "2px solid #F2F6FC",
                  }}>
                  <Button
                    onClick={handleEditProjectClose}
                    sx={{
                      textTransform: "none",
                      paddingX: "30px",
                      paddingY: "5px",
                      fontSize: "14px",
                      height: "40px",
                      width: "120px",
                      borderRadius: "8px",
                      border: "1px solid #F4F7FE",
                      backgroundColor: "#F4F7FE",
                      color:"#62728F",
                      "&:hover": {
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
                      fontSize: "14px",
                      height: "40px",
                      width:"120px",
                      borderRadius: "8px",
                      backgroundColor: "#2E58FF",
                      "&:hover": {
                        background: "#244EF5",
                      },
                    }}
                    variant="contained"
                    size="large">
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

export default EditProjectModal;
