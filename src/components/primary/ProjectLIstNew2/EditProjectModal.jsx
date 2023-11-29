import {yupResolver} from "@hookform/resolvers/yup";
import {LoadingButton} from "@mui/lab";
import {Stack} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";
import PDDateField from "../../shared/CustomField/PDDateField";
import PDReleventField2 from "../../shared/CustomField/PDReleventField2";
import PDSelectField from "../../shared/CustomField/PDSelectField";
import PDTextFIeld from "../../shared/CustomField/PDTextFIeld";
import FormProvider from "../../shared/FormProvider/FormProvider";
import useHandleEditChange from "./Hooks/useHandleEditChange";
import {ProjectDrawerSchema} from "./ProjectDrawerHelper";
import {FieldBox, LineStack} from "./ProjectModal";
import ProjectModalHeader from "./ProjectModalHeader";
import PDskillFIeldEdit from "../../shared/CustomField/PDskillFIeldEdit";

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
  const { isLoading } = useSelector((state) => state.projectDrawer);

  const methods = useForm({
    resolver: yupResolver(ProjectDrawerSchema),
    defaultValues: {
      project_platform: projectDrawer.project_platform,
      project_drawer_name: projectDrawer.project_drawer_name,
      project_type: projectDrawer.project_type,
      project_batch: projectDrawer.project_batch,
      project_alias: projectDrawer.project_alias,
      pdr: projectDrawer.pdr,
      project_status: projectDrawer.project_status,
    },
    mode: 'all',
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
        }}
      >
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
                  }}
                >
                  <LineStack>
                    {/* project platform */}
                    <FieldBox>
                      <PDSelectField
                        name={"project_platform"}
                        label="Platform"
                        options={platformCreateOptions}
                        defaultValue={projectDrawer.project_platform}
                      />
                    </FieldBox>
                    {/* project name */}
                    <FieldBox>
                      <PDTextFIeld
                        name="project_drawer_name"
                        label="Project Name"
                        defaultValue={projectDrawer.project_drawer_name}
                        InputProps={
                          {
                            //disableUnderline: true,
                          }
                        }
                      />
                    </FieldBox>
                  </LineStack>

                  <LineStack>
                    {/* project type */}
                    <FieldBox>
                      <PDSelectField
                        name={"project_type"}
                        label="Project Type"
                        options={projectTypeCreateOptions}
                        defaultValue={projectDrawer.project_type}
                      />
                    </FieldBox>
                    {/* project batch */}
                    <FieldBox>
                      <PDTextFIeld
                        name="project_batch"
                        label="Batch"
                        defaultValue={projectDrawer.project_batch}
                        InputProps={{
                          //disableUnderline: true,
                          min: 1,
                        }}
                        isNumber="true"
                      />
                    </FieldBox>
                  </LineStack>

                  <LineStack>
                    {/* project alias */}
                    <FieldBox>
                      <PDTextFIeld
                        name="project_alias"
                        label="Alias"
                        defaultValue={projectDrawer.project_alias}
                        InputProps={
                          {
                            //disableUnderline: true,
                          }
                        }
                      />
                    </FieldBox>
                    <FieldBox>
                      {/* project PDR */}
                      <PDTextFIeld
                        name="pdr"
                        label="PDR"
                        defaultValue={projectDrawer.pdr}
                        InputProps={{
                          //disableUnderline: true,
                          min: 1,
                          max: 5,
                        }}
                        isNumberPdr="true"
                      />
                    </FieldBox>
                  </LineStack>

                  <LineStack>
                    {/* project skills */}
                    <FieldBox>
                      <PDskillFIeldEdit
                        name={"project_skills"}
                        addSkills={editSkills}
                        selectedSkills={prevSkills}
                        label="Skills"
                        isEdit={isEdit}
                        handleChangeSkill={handleEditSkill}
                        skills={skills}
                        count={editCount}
                      />
                    </FieldBox>
                    {/* project BM */}
                    <FieldBox>
                      <PDTextFIeld
                        name="benchMark"
                        label="Benchmark"
                        defaultValue={projectDrawer.benchMark}
                        InputProps={
                          {
                            //disableUnderline: true,
                          }
                        }
                      />
                    </FieldBox>
                  </LineStack>

                  <LineStack>
                    {/* project estimated date */}
                    <FieldBox>
                      <PDDateField
                        name="estimated_end_date"
                        label="Estimated End Time"
                        defaultValue={projectDrawer.estimated_end_date}
                        InputProps={
                          {
                            //disableUnderline: true,
                          }
                        }
                      />
                    </FieldBox>
                    {/* project status */}
                    <FieldBox>
                      <PDSelectField
                        name={"project_status"}
                        label="Status"
                        options={statusCreateOptions}
                        defaultValue={projectDrawer.project_status}
                      />
                    </FieldBox>
                  </LineStack>

                  <Typography
                    sx={{
                      mt: "5px",
                      mb: "5px",
                      color: "neutral.N300",
                    }}
                    variant="wpf_h7_medium"
                  >
                    Relevant Documents
                  </Typography>

                  <Stack
                    sx={{
                      border: "1px solid #E6ECF5",
                      padding: "16px",
                      borderRadius: "8px",
                      background: isLightTheme ? "#FAFCFF" : "#2C2C2C",
                      maxHeight: 155,
                      color: isLightTheme ? "#091E42" : "#FFFFFF",
                      overflowY: "auto",
                    }}
                  >
                    <PDReleventField2 defaultValueItems={projectDrawer.relevantDocuments} name={"relevantDocuments"} />
                  </Stack>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingY: { lg: "10px", xl: "12px", xxl: "12px" },
                    paddingX: { lg: "14px", xl: "16px", xxl: "16px" },
                    mt: 1,
                    borderTop: "2px solid #F2F6FC",
                  }}
                >
                  <Button
                    onClick={handleEditProjectClose}
                    sx={{
                      textTransform: "none",
                      paddingX: { lg: "20px", xl: "30px", xxl: "30px" },
                      paddingY: { lg: "3px", xl: "5px", xxl: "5px" },
                      fontSize: {
                        lg: "12px",
                        xl: "14px",
                        xxl: "14px",
                      },
                      height: { lg: "40px", xl: "40px", xxl: "40px" },
                      width: "120px",
                      borderRadius: "8px",
                      border: "1px solid #F4F7FE",
                      backgroundColor: "#F4F7FE",
                      color: "#62728F",
                      "&:hover": {
                        backgroundColor: "#F4F7FE",
                      },
                    }}
                    variant="filled"
                  >
                    Cancel
                  </Button>
                  <LoadingButton
                    type="submit"
                    loading={isLoading}
                    sx={{
                      textTransform: "none",
                      paddingX: { lg: "20px", xl: "30px", xxl: "30px" },
                      paddingY: { lg: "3px", xl: "5px", xxl: "5px" },
                      fontSize: {
                        lg: "12px",
                        xl: "14px",
                        xxl: "14px",
                      },
                      height: { lg: "40px", xl: "40px", xxl: "40px" },
                      width: "120px",
                      borderRadius: "8px",
                      backgroundColor: "#2E58FF",
                      "&:hover": {
                        background: "#244EF5",
                      },
                      "&:disabled": {
                        backgroundColor: "#B6C9F0",
                        color: "#FFFFFF",
                      },
                    }}
                    variant="contained"
                  >
                    Save
                  </LoadingButton>
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
