import { Avatar, Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import ProfilePicture from "./ProfilePicture";
import CreateProjectField from "../../../ProjectLIstNew2/CreateProjectField";
import CommonField from "../CommonField";
import { useSelector } from "react-redux";
import PDTextFIeld from "../../../../shared/CustomField/PDTextFIeld";

const MyProfileIndex = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  const [editAble, setEditAble] = useState(false);
  const handleEditProfile = () => {
    setEditAble(true);
  };
  return (
    <>
      <Box sx={{ padding: "0%" }}>
        <ProfilePicture
          user={user}
          editAble={editAble}
          handleEditProfile={handleEditProfile}
        />
        <Box sx={{ paddingLeft: "2%", paddingRight: "2%" }}>
          <Grid container sx={{ paddingTop: "1%", paddingBottom: "1%" }}>
            <Typography sx={{ fontSize: "12px", color: "#2E58FF" }}>
              Personal Information
            </Typography>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CommonField
                field={"First Name"}
                registerName={"guideline"}
                // register={register}
                defaultValue={user.name}
                type={"text"}
                editAble={editAble}
              />
            </Grid>
            <Grid item xs={6}>
              <CommonField
                field={"Last Name"}
                registerName={"guideline"}
                // register={register}
                defaultValue={user.name}
                type={"text"}
                editAble={editAble}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CommonField
                field={"Gender"}
                registerName={"guideline"}
                // register={register}
                defaultValue={user.gender}
                type={"text"}
                editAble={editAble}
              />
            </Grid>
            <Grid item xs={6}>
              <CommonField
                field={"Occupation"}
                registerName={"guideline"}
                // register={register}
                defaultValue={user.occupation}
                type={"text"}
                editAble={editAble}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CommonField
                field={"Date Of Birth"}
                registerName={"guideline"}
                // register={register}
                defaultValue={user.dob}
                type={"text"}
                editAble={editAble}
              />
            </Grid>
            <Grid item xs={6}>
              <CommonField
                field={"Blood Group "}
                registerName={"guideline"}
                // register={register}
                defaultValue={user.bloodGroup}
                type={"text"}
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
                field={"Phone No."}
                registerName={"guideline"}
                // register={register}
                defaultValue={user.phone}
                type={"text"}
                editAble={editAble}
              />
            </Grid>
            <Grid item xs={6}>
              <CommonField
                field={"Nagad No."}
                registerName={"guideline"}
                // register={register}
                // defaultValue={defaultValue}
                type={"text"}
                editAble={editAble}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CommonField
                field={"Email"}
                registerName={"guideline"}
                // register={register}
                defaultValue={user.email}
                type={"text"}
                editAble={editAble}
              />
            </Grid>
            <Grid item xs={6}>
              <CommonField
                field={"Present Address"}
                registerName={"guideline"}
                // register={register}
                defaultValue={user.presentAddress}
                type={"text"}
                editAble={editAble}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CommonField
                field={"Permanent Address"}
                registerName={"guideline"}
                // register={register}
                defaultValue={user.permanentAddress}
                type={"text"}
                editAble={editAble}
              />
            </Grid>
          </Grid>
          <Grid container sx={{ paddingTop: "1%" }}>
            {editAble && (
              <Button
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
      </Box>
    </>
  );
};

export default MyProfileIndex;
