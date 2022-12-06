import {Button, Grid, Paper, TextField, Typography} from "@mui/material";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
//import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import {useForm} from "react-hook-form";

export default function EditMyProfile() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const onSubmit = (data) => {
    console.log(data);
    // dispatch(myProfileEdit(data));
  };
  const paperstyle ={padding:'30px 50px', width :1100,height : 450, margin:"0px auto"}
  return (
    <div style={{ padding: "0px" }}>
      <Paper elevation={10} style={paperstyle} sx={{ padding: "0%" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={2}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
          >
            <Typography variant="h3" padding={2} textAlign="center" color="blue">
              Edit Profile
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Grid container spacing={2} direction={"column"}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Name"
                      defaultValue={user.name}
                      {...register("name", { required: true })}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="presentAddress"
                      label="PresentAddress"
                      defaultValue={user.presentAddress}
                      {...register("presentAddress", { required: true })}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="permanentAddressd"
                      label="permanentAddress"
                      type={"permanentAddress"}
                      {...register("permanentAddress", { required: true })}
                    ></TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2} direction={"column"}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="dob"
                      label="dob"
                      defaultValue={user.dob}
                      {...register("dob", { required: true })}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="occupation"
                      fullWidth
                      label="Occupation"
                      defaultValue={user.occupation}
                      {...register("occupation", { required: true })}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="phone"
                      label="Phone"
                      defaultValue={user.phone}
                      {...register("phone")}
                    ></TextField>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" type="submit">
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}
