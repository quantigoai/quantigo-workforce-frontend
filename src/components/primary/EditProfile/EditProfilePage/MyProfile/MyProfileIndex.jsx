import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";

import React from "react";
import { useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";
import CreateProjectField from "../../../ProjectLIstNew2/CreateProjectField";
import CommonField from "../CommonField";
import { useDispatch, useSelector } from "react-redux";
import PDTextFIeld from "../../../../shared/CustomField/PDTextFIeld";
import { useForm } from "react-hook-form";
import CommonFieldTest from "../CommonFieldTest";
import { useAlert } from "react-alert";
import { myProfileEdit } from "../../../../../features/slice/userSlice";
const MyProfileIndex = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  const [editAble, setEditAble] = useState(false);
  const dispatch = useDispatch();
  const alert = useAlert();
  const handleEditProfile = () => {
    setEditAble(true);
  };

  const { handleSubmit, control, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, value]) => value !== undefined)
    );

    console.log(filteredData);
    const finalData = {
      id: user._id,
      data,
    };
    dispatch(myProfileEdit(finalData)).then((action) => {
      if (action.payload.status === 200) {
        alert.show("Profile Update Successfully", { type: "success" });
        setEditAble(false);
      }
    });
  };

  return (
    <>
      <Box sx={{ padding: "0%" }}>
        <ProfilePicture
          user={user}
          editAble={editAble}
          handleEditProfile={handleEditProfile}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ paddingLeft: "2%", paddingRight: "2%" }}>
            <Grid container sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
              <Typography sx={{ fontSize: "12px", color: "#2E58FF" }}>
                Personal Information
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CommonFieldTest
                  name="firstName"
                  label={"First Name"}
                  defaultValue={user.firstName}
                  disableItem={false}
                  control={control}
                  rules={{ required: false }}
                  errors={errors}
                  editAble={editAble}
                />
              </Grid>
              <Grid item xs={6}>
                <CommonFieldTest
                  name="lastName"
                  label={"Last Name"}
                  defaultValue={user.lastName}
                  disableItem={false}
                  control={control}
                  rules={{ required: false }}
                  errors={errors}
                  editAble={editAble}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CommonFieldTest
                  name="gender"
                  label={"Gender"}
                  defaultValue={user.gender}
                  disableItem={true}
                  control={control}
                  rules={{ required: false }}
                  errors={errors}
                  editAble={editAble}
                />
              </Grid>
              <Grid item xs={6}>
                <CommonFieldTest
                  name="occupation"
                  label={"Occupation"}
                  defaultValue={user.occupation}
                  disableItem={false}
                  control={control}
                  rules={{ required: false }}
                  errors={errors}
                  editAble={editAble}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CommonFieldTest
                  name="dob"
                  label={"Date Of Birth"}
                  defaultValue={user.dob}
                  disableItem={true}
                  control={control}
                  rules={{ required: false }}
                  errors={errors}
                  editAble={editAble}
                />
              </Grid>
              <Grid item xs={6}>
                <CommonFieldTest
                  name="bloodGroup"
                  label={"Blood Group"}
                  defaultValue={user.bloodGroup}
                  disableItem={true}
                  control={control}
                  rules={{ required: false }}
                  errors={errors}
                  editAble={editAble}
                />
              </Grid>
            </Grid>
            <Grid container sx={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <Typography sx={{ fontSize: "12px", color: "#2E58FF" }}>
                Contact Information
              </Typography>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CommonFieldTest
                  name="phone"
                  label={"Phone No."}
                  defaultValue={user.phone}
                  disableItem={false}
                  control={control}
                  rules={{ required: false }}
                  errors={errors}
                  editAble={editAble}
                />
              </Grid>
              <Grid item xs={6}>
                <CommonFieldTest
                  name="billingAccountNo"
                  label={"Nagad No."}
                  defaultValue={user.billingAccountNo}
                  disableItem={false}
                  control={control}
                  rules={{ required: false }}
                  errors={errors}
                  editAble={editAble}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CommonFieldTest
                  name="email"
                  label={"Email"}
                  defaultValue={user.email}
                  disableItem={true}
                  control={control}
                  rules={{ required: false }}
                  errors={errors}
                  editAble={editAble}
                />
              </Grid>
              <Grid item xs={6}>
                <CommonFieldTest
                  name="presentAddress"
                  label={"Present Address"}
                  defaultValue={user.presentAddress}
                  disableItem={false}
                  control={control}
                  rules={{ required: false }}
                  errors={errors}
                  editAble={editAble}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CommonFieldTest
                  name="permanentAddress"
                  label={"Permanent Address"}
                  defaultValue={user.permanentAddress}
                  disableItem={false}
                  control={control}
                  rules={{ required: false }}
                  errors={errors}
                  editAble={editAble}
                />
              </Grid>
            </Grid>
            <Grid container sx={{ paddingTop: "2%" }}>
              {editAble && (
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#2E58FF",
                    color: "#FFFFF",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontSize: "12px",
                    width: "150px",

                    "&:hover": {
                      backgroundColor: "#2E58FF",
                      color: "#FFFFF",
                    },
                  }}>
                  Save Changes
                </Button>
              )}
            </Grid>
            {/* <button type="submit">Submit</button> */}
          </Box>
        </form>
      </Box>
    </>
  );
};

export default MyProfileIndex;
