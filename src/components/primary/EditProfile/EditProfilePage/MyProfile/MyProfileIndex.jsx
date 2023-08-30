import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";
import CreateProjectField from "../../../ProjectLIstNew2/CreateProjectField";
import CommonField from "../CommonField";
import { useSelector } from "react-redux";
import PDTextFIeld from "../../../../shared/CustomField/PDTextFIeld";
import { useForm } from "react-hook-form";
const MyProfileIndex = () => {
  const { register, handleSubmit } = useForm();
  const { user, isLoading } = useSelector((state) => state.user);
  const [editAble, setEditAble] = useState(false);
  const handleEditProfile = () => {
    setEditAble(true);
  };
  const onSubmit = (data) => {
    console.log(data);
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
            <Grid container sx={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <Typography sx={{ fontSize: "12px", color: "#2E58FF" }}>
                Personal Information
              </Typography>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CommonField
                  label={"First Name"}
                  registerName={"firstName"}
                  register={register}
                  defaultValue={user.name}
                  type={"text"}
                  disableItem={false}
                  editAble={editAble}
                />
              </Grid>
              <Grid item xs={6}>
                <CommonField
                  label={"Last Name"}
                  registerName={"lastName"}
                  register={register}
                  defaultValue={user.name}
                  type={"text"}
                  disableItem={false}
                  editAble={editAble}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CommonField
                  label={"Gender"}
                  registerName={"guideline"}
                  register={register}
                  defaultValue={user.gender}
                  disableItem={true}
                  type={"text"}
                  editAble={editAble}
                />
              </Grid>
              <Grid item xs={6}>
                <CommonField
                  label={"Occupation"}
                  registerName={"occupation"}
                  register={register}
                  defaultValue={user.occupation}
                  type={"text"}
                  disableItem={false}
                  editAble={editAble}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CommonField
                  label={"Date Of Birth"}
                  registerName={"dob"}
                  register={register}
                  defaultValue={user.dob}
                  type={"text"}
                  disableItem={false}
                  editAble={editAble}
                />
              </Grid>
              <Grid item xs={6}>
                <CommonField
                  label={"Blood Group "}
                  registerName={"bloodGroup"}
                  register={register}
                  defaultValue={user.bloodGroup}
                  type={"text"}
                  disableItem={false}
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
                <CommonField
                  label={"Phone No."}
                  registerName={"phone"}
                  // register={register}
                  defaultValue={user.phone}
                  type={"text"}
                  disableItem={false}
                  editAble={editAble}
                />
              </Grid>
              <Grid item xs={6}>
                <CommonField
                  label={"Nagad No."}
                  registerName={"billingAccountNo"}
                  register={register}
                  defaultValue={user.billingAccountNo}
                  type={"text"}
                  disableItem={false}
                  editAble={editAble}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CommonField
                  label={"Email"}
                  registerName={"guideline"}
                  // register={register}
                  defaultValue={user.email}
                  type={"text"}
                  disableItem={true}
                  editAble={editAble}
                />
              </Grid>
              <Grid item xs={6}>
                <CommonField
                  label={"Present Address"}
                  registerName={"presentAddress"}
                  register={register}
                  defaultValue={user.presentAddress}
                  type={"text"}
                  disableItem={false}
                  editAble={editAble}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CommonField
                  label={"Permanent Address"}
                  registerName={"permanentAddress"}
                  register={register}
                  defaultValue={user.permanentAddress}
                  type={"text"}
                  disableItem={false}
                  editAble={editAble}
                />
              </Grid>
            </Grid>
            <Grid container sx={{ paddingTop: "1%" }}>
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
                  }}>
                  Save Changes
                </Button>
              )}
            </Grid>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default MyProfileIndex;
