import {Box, Button, Grid, Modal, Paper, styled, TextField, Typography,} from "@mui/material";
import React from "react";
import {useForm} from "react-hook-form";

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

const CreateProjectDirectoryModal = ({ openModal, handleClose, onSubmit }) => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Paper elevation={5} style={paperstyle} sx={{}}>
            <Grid container sx={{ justifyContent: "center", paddingTop: "1%" }}>
              <Typography variant="h4">
                Create Project Directory
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
                    {...register("Project_Name", {
                      required: false,
                    })}></TextField>
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
                    })}></TextField>
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
                    })}></TextField>
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
                    })}></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Tool_Type"
                    {...register("Tool_Type", {
                      required: false,
                    })}></TextField>
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
                    })}></TextField>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: "1%" }}>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Project_Type"
                    {...register("Project_Type", {
                      required: false,
                    })}></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Action_Items"
                    {...register("Action_Items", {
                      required: false,
                    })}></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "0%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="QA_Check_Points"
                    {...register("QA_Check_Points", {
                      required: false,
                    })}></TextField>
                </Grid>
              </Grid>

              <Grid container sx={{ padding: "1%" }}>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Obj_Benchmark"
                    {...register("Obj_Benchmark", {
                      required: false,
                    })}></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Img_Benchmark"
                    {...register("Img_Benchmark", {
                      required: false,
                    })}></TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Tagging_Benchmark"
                    {...register("Tagging_Benchmark", {
                      required: false,
                    })}></TextField>
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
                    })}></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Skip_Image"
                    {...register("Skip_Image", {
                      required: false,
                    })}></TextField>
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
                    })}></TextField>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: "1%" }}>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Image_Loading"
                    {...register("Image_Loading", {
                      required: false,
                    })}></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Object_Saving_Time"
                    {...register("Object_Saving_Time", {
                      required: false,
                    })}></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "0%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Video_Watch_Time"
                    {...register("Video_Watch_Time", {
                      required: false,
                    })}></TextField>
                </Grid>
              </Grid>

              <Grid container sx={{ padding: "1%" }}>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Judgement_Time"
                    {...register("Judgement_Time", {
                      required: false,
                    })}></TextField>
                </Grid>
                <Grid item xs={4} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="QA_Benchmark"
                    {...register("QA_Benchmark", {
                      required: false,
                    })}></TextField>
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
                    })}></TextField>
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
                    })}></TextField>
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
                    })}></TextField>
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
                }}>
                <ButtonStyle
                  //   disabled={isLoading}
                  variant="contained"
                  type="submit">
                  Create
                </ButtonStyle>
              </Grid>
            </form>
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export default CreateProjectDirectoryModal;
