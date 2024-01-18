import { Backdrop, Box, Button, Fade, Grid, Modal, Paper, styled, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { ProjectDirectorySchema } from "../../primary/ProjectLIstNew2/ProjectDrawerHelper";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../shared/FormProvider/FormProvider";
import { LoadingButton } from "@mui/lab";
import ProjectModalHeader from "../../primary/ProjectLIstNew2/ProjectModalHeader";
import { FieldBox, LineStack } from "../../primary/ProjectLIstNew2/ProjectModal";
import PDTextFIeld from "../../shared/CustomField/PDTextFIeld";
import { useSelector } from "react-redux";

const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  // borderRadius: "2px",
  cursor: "pointer",
  width: "416px",
  // height: "40px",
  backgroundColor: "#2D58FF",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
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

const paperstyle = { width: 1000, height: "100%" };

const CreateProjectDirectoryModal = ({ openModal, handleClose, onSubmit }) => {
  const { isLoading } = useSelector((state) => state.projectDirectory);
  const methods = useForm({
    resolver: yupResolver(ProjectDirectorySchema),
    mode: "all",
    // defaultValues: {
    //   project_platform: 'encord',
    //   project_drawer_name: 'xxxxxxxxxxxx',
    //   project_type: 'image',
    //   project_batch: '2',
    //   project_alias: 'xxxxxxxxxxx',
    //   pdr: '3',
    //   project_status: 'in-Progress',
    // },
  });
  const { handleSubmit } = methods;

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <ProjectModalHeader handleCreateProjectClose={handleClose} modalTitle={"Add Project"} />

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
                    <FieldBox>
                      <PDTextFIeld name="project_Name" label="Project Name" isRequired={true} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="client_Alias" label="Client Alias" isRequired={true} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="industry" label="Industry" />
                    </FieldBox>
                  </LineStack>
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld name="platform" label="Platform" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="tool_Type" label="Tool Type" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="QA" label="QA" />
                    </FieldBox>
                  </LineStack>
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld
                        name="PDR"
                        label="PDR"
                        placeholder="PDR must be in range between 1 to 5"
                        isNumberPdr="true"
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="project_Type" label="Project Type" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="annotation" label="Annotation" />
                    </FieldBox>
                  </LineStack>
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld name="action_Items" label="Action Items" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="qA_Check_Points" label="QA Check Points" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="qA_Benchmark" label="QA Benchmark" />
                    </FieldBox>
                  </LineStack>
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld name="img_Benchmark" label="Image Benchmark" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="tagging_Benchmark" label="Tagging Benchmark" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="deletion" label="Deletion" />
                    </FieldBox>
                  </LineStack>
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld name="skip_Image" label="Skip Image" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="update" label="Update" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="image_Loading" label="Image Loading" />
                    </FieldBox>
                  </LineStack>
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld name="object_Saving_Time" label="Object Saving Time" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="video_Watch_Time" label="Video Watch Time" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="judgement_Time" label="Judgement Time" />
                    </FieldBox>
                  </LineStack>
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld name="remarks" label="Remarks" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="obj_Benchmark" label="Object Benchmark" />
                    </FieldBox>
                  </LineStack>
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
                    onClick={handleClose}
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
                    Add
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

export default CreateProjectDirectoryModal;
