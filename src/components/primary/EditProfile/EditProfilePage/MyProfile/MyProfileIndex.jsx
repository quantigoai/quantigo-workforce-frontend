import { Box, Button, Grid, Typography } from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../../../customHooks/useToaster";
import { myProfileEdit, uploadMyImage } from "../../../../../features/slice/userSlice";
import CommonFieldTest from "../CommonFieldTest";
import CommonSelectField from "../CommonSelectField";
import ProfilePicture from "./ProfilePicture";
import { capitalizeFirstLetter } from "../../../../../helper/capitalizeFirstWord";

const MyProfileIndex = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  const [editAble, setEditAble] = useState(false);
  const dispatch = useDispatch();

  const toast = useToaster();
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
          toast.trigger("Profile Picture Update Successfully", "success");
          setEditAble(false);
        }
      });
    Object.keys(filteredData).length > 0 &&
      dispatch(myProfileEdit(finalData)).then((action) => {
        if (action.payload.status === 200) {
          toast.trigger("Profile Update Successfully", "success");
          setEditAble(false);
        }
      });
  };
  const DOB = moment.utc(user.dob).format("MMM Do, YYYY");
  return (
    <>
      <Box sx={{
        flex: "1", overflowY: "auto", backgroundColor: "",
        // height: "85vh"
        height: { xxl: "85vh", xl: "85vh", lg: "82vh" },
      }}>
        <Box sx={{ flex: "0 0 auto", height: { xxl: "15%", xl: "17%", lg: "17%" }, backgroundColor: "" }}>
          <ProfilePicture
            user={user}
            editAble={editAble}
            handleEditProfile={handleEditProfile}
            coverImage={coverImage}
            handleImage={handleImage}
            coverImageFile={coverImageFile}
          />
        </Box>

        <Box
           sx={{
            flex: "1",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "0",
            },
            backgroundColor: "",
            height: { xxl: "85%", xl: "83%", lg: "83%" },
          }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ paddingLeft: "2%", paddingRight: "2%" }}>
              <Grid container sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
                <Typography sx={{ color: "primary.B200" }} variant="wpf_p4_medium">
                  Personal Information
                </Typography>
              </Grid>

              <Grid container spacing={0} sx={{ backgroundColor: "  " }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
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
              <Grid container>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <CommonFieldTest
                    name="gender"
                    label={"Gender"}
                    defaultValue={capitalizeFirstLetter(user.gender)}
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
              <Grid container>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
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
              <Grid container sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
                <Typography sx={{ fontSize: "12px", color: "primary.B200" }}>Contact Info.</Typography>
              </Grid>
              <Grid container>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
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
              <Grid container>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
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
              <Grid container>
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

              <Grid container sx={{ paddingBottom: "1%", backgroundColor: "" }}>
                {editAble && (
                  <>
                    
                    <Box sx={{ paddingRight: "3%" }}>
                      <Button
                        type="submit"
                        // variant="contained"
                        disabled={isLoading}
                        sx={{
                          backgroundColor: "primary.B200",
                          color: "neutral.N000",
                          borderRadius: "8px",
                          textTransform: "none",
                          fontSize: "12px",
                          width: "150px",

                          "&:hover": {
                            backgroundColor: "primary.B200",
                            color: "neutral.N000",
                          },
                        }}>
                        Save Changes
                      </Button>
                    </Box>

                    <Button
                      // variant="contained"
                      // disabled={isLoading}
                      onClick={() => setEditAble(false)}
                      sx={{
                        textTransform: "none",
                        backgroundColor: "#F2F6FC",
                        borderRadius: "8px",
                        fontSize: "12px",
                        color: "#253E5C",
                        // padding: " 10px 16px",
                        width: "150px",
                        "&:hover": {
                          background: "#F2F6FC",
                        },
                      }}>
                      Cancel
                    </Button>
                  </>
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
