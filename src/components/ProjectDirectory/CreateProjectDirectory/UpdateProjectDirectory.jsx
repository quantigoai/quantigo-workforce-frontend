import { Box, Button, Grid, Modal, Paper, styled, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import { updateProjectDirectory } from "../../../features/slice/ProjectDirectorySlice";

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
  //    paddingLeft :"20%",
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 0,
  // p: 1,
};

const paperstyle = { width: 1000 };

const UpdateProjectDirectory = ({ item, openProjectModalEdit, setOpenProjectModalEdit, handleEditClose }) => {
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const toast = useToaster();
  // const [openModal, setOpenModal] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data._id = item._id;
    const finalData = {
      data,
      id: item._id,
    };

    dispatch(updateProjectDirectory(finalData)).then((action) => {
      if (action?.payload?.status === 200) {
        setOpenProjectModalEdit(false);
        toast.trigger("Successfully Updated Project Directory", "success");
      } else {
        toast.trigger("Project Directory can not Updated", "error");
      }
    });
  };
  const handleUpdateProjectDirectory = (projectDirectory) => {
    setOpenProjectModalEdit(true);
  };

  return (
    <>
      <Box>
        <Modal
          open={openProjectModalEdit}
          onClose={handleEditClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Paper elevation={5} style={paperstyle} sx={{}}>
              <Grid container sx={{ justifyContent: "center", paddingTop: "1%" }}>
                <Typography variant="h4">
                  Update Project Directory
                  {/* ({job._id}) */}
                </Typography>
              </Grid>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container sx={{ padding: "1%" }}>
                  <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                    <TextField
                      fullWidth
                      sx={{ backgroundColor: "#FFFFFF" }}
                      variant="filled"
                      name="SINo"
                      label="Project Name"
                      defaultValue={item.Project_Name}
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
                      defaultValue={item.Client_Alias}
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
                      defaultValue={item.Industry}
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
                      defaultValue={item.Platform}
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
                      defaultValue={item.Tool_Type}
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
                      defaultValue={item.PDR}
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
                      defaultValue={item.Project_Type}
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
                      defaultValue={item.Action_Items}
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
                      defaultValue={item.QA_Check_Points}
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
                      defaultValue={item.Obj_Benchmark}
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
                      defaultValue={item.Img_Benchmark}
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
                      defaultValue={item.Tagging_Benchmark}
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
                      defaultValue={item.Deletion}
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
                      defaultValue={item.Skip_Image}
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
                      defaultValue={item.Skip_Image}
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
                      defaultValue={item.Image_Loading}
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
                      defaultValue={item.Object_Saving_Time}
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
                      defaultValue={item.Video_Watch_Time}
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
                      defaultValue={item.Judgement_Time}
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
                      defaultValue={item.QA_Benchmark}
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
                      defaultValue={item.Annotation}
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
                      defaultValue={item.QA}
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
                      defaultValue={item.Remarks}
                      {...register("Remarks", {
                        required: false,
                      })}
                    ></TextField>
                  </Grid>
                </Grid>

                <Grid
                  container
                  xs={12}
                  sx={{
                    paddingLeft: "10%",
                    paddingRight: "10%",
                    paddingBottom: "1%",
                    justifyContent: "center",
                  }}
                >
                  <ButtonStyle
                    //   disabled={isLoading}
                    variant="contained"
                    type="submit"
                  >
                    Update
                  </ButtonStyle>
                </Grid>
              </form>
            </Paper>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default UpdateProjectDirectory;
