import {Box, Button, Grid, Modal, Paper, styled, Typography,} from "@mui/material";
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

const UpdateProjectDirectoryModal = (
  openModal,
  handleClose,
  item,
  onSubmit
) => {
  
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
            <Grid container sx={{ justifyContent: "center", paddingTop: "2%" }}>
              <Typography variant="h4">
                Update Project Directory
                {/* ({job._id}) */}
              </Typography>
            </Grid>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container sx={{ padding: "2%" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="SI No"
                    defaultValue={item.Sl_No}
                    {...register("Sl_No", {
                      required: false,
                    })}></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Project_Timeline"
                    defaultValue={item.Project_Timeline}
                    {...register("Project_Timeline", {
                      required: false,
                    })}></TextField>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: "2%" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Client Name"
                    defaultValue={item.Project_Timeline}
                    {...register("Client_Name", {
                      required: false,
                    })}></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Client Alias"
                    defaultValue={item.Project_Timeline}
                    {...register("Client_Alias", {
                      required: false,
                    })}></TextField>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: "2%" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    defaultValue={item.Project_Timeline}
                    label="Project Name"
                    {...register("Project_Name", {
                      required: false,
                    })}></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Industry Type"
                    defaultValue={item.Industry_Type}
                    {...register("Industry_Type", {
                      required: false,
                    })}></TextField>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: "2%" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="UseCase"
                    defaultValue={item.Use_Case}
                    {...register("Use_Case", {
                      required: false,
                    })}></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Guideline"
                    defaultValue={item.Guideline}
                    {...register("Guideline", {
                      required: false,
                    })}></TextField>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: "2%" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Edge Case"
                    defaultValue={item.Edge_Case}
                    {...register("Edge_Case", {
                      required: false,
                    })}></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Annotation_Type"
                    defaultValue={item.Annotation_Type}
                    {...register("Annotation_Type", {
                      required: false,
                    })}></TextField>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: "2%" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Data Type"
                    defaultValue={item.Data_Type}
                    {...register("Data_Type", {
                      required: false,
                    })}></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Benchmark"
                    defaultValue={item.Benchmark}
                    {...register("Benchmark", {
                      required: false,
                    })}></TextField>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: "2%" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="PDR"
                    defaultValue={item.PDR}
                    {...register("PDR", {
                      required: false,
                    })}></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="Project_Timeline"
                    label="Project Charter"
                    defaultValue={item.Project_Charter}
                    {...register("Project_Charter", {
                      required: false,
                    })}></TextField>
                </Grid>
              </Grid>
              <Grid container sx={{ padding: "2%" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <TextField
                    fullWidth
                    sx={{ backgroundColor: "#FFFFFF" }}
                    variant="filled"
                    name="SINo"
                    label="Remarks"
                    defaultValue={item.Remarks}
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
                  paddingBottom: "5%",
                  justifyContent: "center",
                }}>
                <ButtonStyle
                  //   disabled={isLoading}
                  variant="contained"
                  type="submit">
                  Update
                </ButtonStyle>
              </Grid>
            </form> */}
          </Paper>
        </Box>
      </Modal>
    </>
  );
};

export default UpdateProjectDirectoryModal;
