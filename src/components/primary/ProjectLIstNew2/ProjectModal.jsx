import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
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
import PDReleventField2 from "../../shared/CustomField/PDReleventField2";
import PDSelectField from "../../shared/CustomField/PDSelectField";
import PDTextFIeld from "../../shared/CustomField/PDTextFIeld";
import PDskillFIeld from "../../shared/CustomField/PDskillFIeld";
import FormProvider from "../../shared/FormProvider/FormProvider";
import ProjectModalHeader from "./ProjectModalHeader";
import { ProjectDrawerSchema } from "./ProjectDrawerHelper";
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
export const LineStack = ({ children }) => (
  <Stack
    direction="row"
    spacing={2}
    sx={{
      height: {
        lg: "72px",
        xl: "82px",
        xxl: "85px",
      },
    }}
  >
    {children}
  </Stack>
);

export const FieldBox = ({ children }) => (
  <Box
    sx={{
      width: "50%",
      height: {
        lg: "72px",
        xl: "82px",
        xxl: "85px",
      },
    }}
  >
    {children}
  </Box>
);

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
  const { isLoading } = useSelector((state) => state.projectDrawer);

  const methods = useForm({
    resolver: yupResolver(ProjectDrawerSchema),
    mode: "all",
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
                        defaultValue={""}
                        isRequired={true}
                      />
                    </FieldBox>
                    {/* project name */}
                    <FieldBox>
                      <PDTextFIeld name="project_drawer_name" label="Project Name" isRequired={true} />
                    </FieldBox>
                  </LineStack>

                  <LineStack>
                    {/* project type */}
                    <FieldBox>
                      <PDSelectField
                        name={"project_type"}
                        label="Project Type"
                        options={projectTypeCreateOptions}
                        defaultValue={""}
                        isRequired={true}
                      />
                    </FieldBox>
                    {/* project batch */}
                    <FieldBox>
                      <PDTextFIeld
                        name="project_batch"
                        label="Batch"
                        InputProps={{
                          min: 1,
                        }}
                        isNumber="true"
                        isRequired={true}
                      />
                    </FieldBox>
                  </LineStack>

                  <LineStack>
                    {/* project alias */}
                    <FieldBox>
                      <PDTextFIeld name="project_alias" label="Alias" isRequired={true} />
                    </FieldBox>
                    <FieldBox>
                      {/* project PDR */}
                      <PDTextFIeld
                        name="pdr"
                        label="PDR"
                        placeholder="PDR must be in range between 1 to 5"
                        isNumberPdr="true"
                        isRequired={true}
                      />
                    </FieldBox>
                  </LineStack>

                  <LineStack>
                    {/* project skills */}
                    <FieldBox>
                      <PDskillFIeld
                        name={"project_skills"}
                        addSkills={addSkills}
                        label="Skills"
                        handleChangeSkill={handleChangeSkill}
                        skills={skills}
                        count={count}
                      />
                    </FieldBox>
                    {/* project BM */}
                    <FieldBox>
                      <PDTextFIeld name="benchMark" label="Benchmark" />
                    </FieldBox>
                  </LineStack>

                  <LineStack>
                    {/* project estimated date */}
                    <FieldBox>
                      <PDDateField name="estimated_end_date" label="Estimated End Date" />
                    </FieldBox>
                    {/* project status */}
                    <FieldBox>
                      <PDSelectField
                        name={"project_status"}
                        label="Status"
                        options={statusCreateOptions}
                        defaultValue={""}
                        isRequired={true}
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

                  {/* <PDReleventField /> */}
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
                    <PDReleventField2 name={"relevantDocuments"} />
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
                    onClick={handleCreateProjectClose}
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
                    Create
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

export default ProjectModal;
