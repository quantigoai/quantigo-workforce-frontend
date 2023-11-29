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
      {/* <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Paper elevation={5} style={paperstyle} sx={{}}>
            <Grid container sx={{ justifyContent: "center", paddingTop: "1%", height: "20%" }}>
              <Typography variant="h4">Create Project Directory</Typography>
            </Grid>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Grid container sx={{ padding: "1%", height: "40%" }}>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Project Name"
                    {...register("Project_Name", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Client Alias"
                    {...register("Client_Alias", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>

                <Grid item xs={4} sx={{ paddingRight: "0%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Industry"
                    {...register("Industry", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: "1%" }}>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Platform"
                    {...register("Platform", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Tool Type"
                    {...register("Tool_Type", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="PDR"
                    {...register("PDR", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: "1%" }}>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Project Type"
                    {...register("Project_Type", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Action Items"
                    {...register("Action_Items", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "0%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="QA Check Points"
                    {...register("QA_Check_Points", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
              </Grid>

              <Grid container sx={{ padding: "1%" }}>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Object Benchmark"
                    {...register("Obj_Benchmark", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Image Benchmark"
                    {...register("Img_Benchmark", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Tagging Benchmark"
                    {...register("Tagging_Benchmark", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
              </Grid>

              <Grid container sx={{ padding: "1%" }}>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Deletion"
                    {...register("Deletion", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Skip Image"
                    {...register("Skip_Image", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "0%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Update"
                    {...register("Update", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: "1%" }}>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Image Loading"
                    {...register("Image_Loading", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Object Saving Time"
                    {...register("Object_Saving_Time", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "0%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Video Watch Time"
                    {...register("Video_Watch_Time", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
              </Grid>

              <Grid container sx={{ padding: "1%" }}>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Judgement Time"
                    {...register("Judgement_Time", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="QA Benchmark"
                    {...register("QA_Benchmark", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "0%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Annotation"
                    {...register("Annotation", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: "1%" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="QA"
                    {...register("QA", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
                <Grid item xs={6} sx={{ paddingRight: "0%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Remarks"
                    {...register("Remarks", {
                      required: false,
                    })}
                  ></TextField>
                </Grid>
              </Grid>

              <Grid
                container
                xs={12}
                style={{
                  paddingLeft: "10%",
                  paddingRight: "10%",
                  paddingBottom: "2%",
                  justifyContent: "center",
                  height: "20%",
                }}
              >
                <ButtonStyle variant="contained" type="submit">
                  Create
                </ButtonStyle>
              </Grid>
            </FormProvider>
          </Paper>
        </Box>
      </Modal> */}
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
                      <PDTextFIeld name="Project_Name" label="Project Name" isRequired={true} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="Client_Alias" label="Client Alias" isRequired={true} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="Industry" label="Industry" isRequired={true} />
                    </FieldBox>
                  </LineStack>
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld name="Platform" label="Platform" isRequired={true} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="Tool_Type" label="Tool Type" isRequired={true} />
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
                        isRequired={true}
                      />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="Project_Type" label="Project Type" isRequired={true} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="Annotation" label="Annotation" />
                    </FieldBox>
                  </LineStack>
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld name="Action_Items" label="Action Items" isRequired={true} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="QA_Check_Points" label="QA Check Points" isRequired={true} />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="QA_Benchmark" label="QA Benchmark" isRequired={true} />
                    </FieldBox>
                  </LineStack>
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld name="Img_Benchmark" label="Image Benchmark" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="Tagging_Benchmark" label="Tagging Benchmark" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="Deletion" label="Deletion" />
                    </FieldBox>
                  </LineStack>
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld name="Skip_Image" label="Skip Image" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="Update" label="Update" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="Image_Loading" label="Image Loading" />
                    </FieldBox>
                  </LineStack>
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld name="Object_Saving_Time" label="Object Saving Time" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="Video_Watch_Time" label="Video Watch Time" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="Judgement_Time" label="Judgement Time" />
                    </FieldBox>
                  </LineStack>
                  <LineStack>
                    <FieldBox>
                      <PDTextFIeld name="Remarks" label="Remarks" />
                    </FieldBox>
                    <FieldBox>
                      <PDTextFIeld name="Obj_Benchmark" label="Object Benchmark" />
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
