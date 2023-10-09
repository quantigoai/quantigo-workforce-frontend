import { Box, Button, Grid, Typography } from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { myProfileEdit, uploadMyImage } from "../../../../../features/slice/userSlice";
import CommonFieldTest from "../CommonFieldTest";
import CommonSelectField from "../CommonSelectField";
import ProfilePicture from "./ProfilePicture";
const MyProfileIndex = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  const [editAble, setEditAble] = useState(false);
  const dispatch = useDispatch();
  const alert = useAlert();
  const handleEditProfile = () => {
    setEditAble(true);
  };
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const handleImage = (e) => {
    setCoverImageFile(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };

  const { handleSubmit, control, errors } = useForm();

  const onSubmit = (data) => {
    const filteredData = Object.fromEntries(Object.entries(data).filter(([_, value]) => value !== undefined));

    // let name =filteredData.firstName.concat(" ", filteredData.lastName);

    // filteredData.firstName ||
    //   (filteredData.lastName &&
    //     (name = filteredData.firstName.concat(" ", filteredData.lastName)));
    // if (filteredData.firstName && filteredData.lastName) {
    //   name = filteredData.firstName.concat(" ", filteredData.lastName);
    // } else if (filteredData.firstName || filteredData.lastName) {
    //   if (filteredData.firstName) {
    //     name = filteredData.firstName.concat(" ", user.lastName);
    //   } else {
    //     name = user.firstName.concat(" ", user.lastName);
    //   }
    // } else {
    //   name = user.name;
    // }

    const dataAll = {
      ...filteredData,
    };
    const finalData = {
      id: user._id,
      dataAll,
    };

    const formData = new FormData();
    formData.append("image", coverImageFile);

    const finalImageData = {
      id: user._id,
      formData,
    };

    coverImageFile &&
      dispatch(uploadMyImage(finalImageData)).then((action) => {
        if (action.payload.status === 200) {
          alert.show("Profile Picture Update Successfully", {
            type: "success",
          });
          setEditAble(false);
        }
      });
    Object.keys(filteredData).length > 0 &&
      dispatch(myProfileEdit(finalData)).then((action) => {
        if (action.payload.status === 200) {
          alert.show("Profile Update Successfully", { type: "success" });
          setEditAble(false);
        }
      });
  };
  const DOB = moment.utc(user.dob).format("MMM Do, YYYY");
  return (
    <>
      <Box sx={{ flex: "1", overflowY: "auto", backgroundColor: "", height: "80vh" }}>
        <Box sx={{ flex: "0 0 auto", height: { xl: "16%", lg: "20%" } }}>
          <ProfilePicture
            user={user}
            editAble={editAble}
            handleEditProfile={handleEditProfile}
            coverImage={coverImage}
            handleImage={handleImage}
          />
        </Box>
        <Box
          sx={{
            flex: "1",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "0",
            },
            height: { xl: "84%", lg: "80%" },
          }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ paddingLeft: "2%", paddingRight: "2%" }}>
              <Grid container sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
                <Typography sx={{ fontSize: "12px", color: "#2E58FF" }}>Personal Information</Typography>
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
                    defaultValue={DOB}
                    disableItem={true}
                    control={control}
                    rules={{ required: false }}
                    errors={errors}
                    editAble={editAble}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CommonSelectField
                    name="bloodGroup"
                    label={"Blood Group"}
                    defaultValue={user.bloodGroup}
                    disableItem={false}
                    control={control}
                    rules={{ required: false }}
                    errors={errors}
                    editAble={editAble}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ paddingTop: "1%", paddingBottom: "1%" }}>
                <Typography sx={{ fontSize: "12px", color: "#2E58FF" }}>Contact Information</Typography>
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
                    disabled={isLoading}
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
      </Box>
    </>
  );
};

export default MyProfileIndex;
