import { Box, Button, Grid, Typography } from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../../../customHooks/useToaster";
import { myProfileEdit, uploadMyImage } from "../../../../../features/slice/userSlice";
import { capitalizeFirstLetter } from "../../../../../helper/capitalizeFirstWord";
// import FormProvider from "../../../../shared/FormProvider/FormProvider";
import CommonFieldTest from "../CommonFieldTest";
import CommonSelectField from "../CommonSelectField";
import ProfilePicture from "./ProfilePicture";
import FieldForProfile from "../FieldForProfile";
import SelectFieldForProfile from "../SelectFieldForProfile";

const MyprofileIndexNew = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  const [editAble, setEditAble] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [occupation, setOccupation] = useState(user.occupation);
  const [bloodGroup, setBloodGroup] = useState(user.bloodGroup);
  const [phone, setPhone] = useState(user.phone);
  const [billingAccountNo, setBillingAccountNo] = useState(user.billingAccountNo);
  const [presentAddress, setPresentAddress] = useState(user.presentAddress);
  const [permanentAddress, setPermanentAddress] = useState(user.permanentAddress);
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

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLasttNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhone(e.target.value);
  };
  const handlebillingAccountNoChange = (e) => {
    setBillingAccountNo(e.target.value);
  };
  const handlePresentAddressChange = (e) => {
    setPresentAddress(e.target.value);
  };
  const handlepermanentAddressChange = (e) => {
    setPermanentAddress(e.target.value);
  };

  const handleChangeBloodGroup = (e) => {
    setBloodGroup(e.target.value);
  };
  const handleSubmitChange = () => {
    console.log("hsdd");
    const data = {
      firstName,
      lastName,
      occupation,
      bloodGroup,
      phone,
      billingAccountNo,
      presentAddress,
      permanentAddress,
    };
   
    const finalData = {
      id: user._id,
      data,
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
    //   Object.keys(filteredData).length > 0 &&
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
      <Box
        sx={{
          flex: "1",
          height: {
            lg: "82vh",
            xl: "100%",
            xxl: "100%",
          },
        }}>
        <Box
          sx={{
            // flex: "0 0 auto",
            height: {
              lg: "17%",
              xl: "17%",
              xxl: "17%",
            },
            // backgroundColor: "yellow",
          }}>
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
            // flex: "1",
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: "0",
            },
            height: {
              lg: "70%",
              xl: "74%",
              xxl: "75%",
            },
            // backgroundColor: "black",
          }}>
          <Box
            sx={{
              paddingLeft: "2%",
              paddingRight: "2%",
              height: "100%",
            
            }}>
            <Box
              sx={{
                height: "100%",
                // height: {
                //   xl: "478px",
                //   xxl: "710px",
                //   lg: "420px",
                // },
                overflowY: "auto",
              }}>
              <Grid container sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
                <Typography sx={{ color: "primary.B200" }} variant="wpf_p4_medium">
                  Personal Information
                </Typography>
              </Grid>

              <Grid container spacing={0} sx={{ backgroundColor: " " }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <FieldForProfile
                    name="firstName"
                    label={"First Name"}
                    handleChange={handleFirstNameChange}
                    defaultValue={user.firstName}
                    disableItem={false}
                    editAble={editAble}
                  />
                 
                </Grid>
                <Grid item xs={6}>
                  <FieldForProfile
                    name="lastName"
                    label={"Last Name"}
                    handleChange={handleLasttNameChange}
                    defaultValue={user.lastName}
                    disableItem={false}
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
                  <FieldForProfile
                    name="occupation"
                    label={"Occupation"}
                    defaultValue={user.occupation}
                    disableItem={false}
                    handleChange={handleOccupationChange}
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
                  <SelectFieldForProfile
                    name="bloodGroup"
                    label={"Blood Group"}
                    defaultValue={user.bloodGroup}
                    disableItem={false}
                    editAble={editAble}
                    handleChange={handleChangeBloodGroup}
                  />

                </Grid>
              </Grid>
              <Grid container sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
                <Typography sx={{ fontSize: "12px", color: "primary.B200" }}>Contact Info.</Typography>
              </Grid>

              <Grid container>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <FieldForProfile
                    name="phone"
                    label={"Phone No."}
                    defaultValue={user.phone}
                    disableItem={false}
                    handleChange={handlePhoneNumberChange}
                    editAble={editAble}
                  />
                  
                </Grid>
                <Grid item xs={6}>
                  <FieldForProfile
                    name="billingAccountNo"
                    label={"Nagad No."}
                    defaultValue={user.billingAccountNo}
                    disableItem={false}
                    handleChange={handlebillingAccountNoChange}
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
                  <FieldForProfile
                    name="presentAddress"
                    label={"Present Address"}
                    defaultValue={user.presentAddress}
                    disableItem={false}
                    handleChange={handlePresentAddressChange}
                    editAble={editAble}
                  />
                
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <FieldForProfile
                    name="permanentAddress"
                    label={"Permanent Address"}
                    defaultValue={user.permanentAddress}
                    disableItem={false}
                    handleChange={handlepermanentAddressChange}
                    editAble={editAble}
                  />
                
                </Grid>
              </Grid>
            </Box>

            {/* <button type="submit">Submit</button> */}
          </Box>
        </Box>

        <Box
          sx={{
            // py:3,
            // height: "10%",
            height: {
              lg: "10%",
              xl: "9%",
              xxl: "8%",
            },
          }}>
          <Grid
            container
            sx={{
              height: "100%",
            }}>
            {editAble && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    // p: 2
                  }}>
                  <Button
                    onClick={() => handleSubmitChange()}
                    disabled={isLoading}
                    sx={{
                      height: "40px",
                      backgroundColor: "primary.B200",
                      color: "neutral.N000",
                      borderRadius: "8px",
                      textTransform: "none",
                      fontSize: "12px",
                      width: "150px",
                      mr: 3,
                      "&:hover": {
                        backgroundColor: "primary.B200",
                        color: "neutral.N000",
                      },
                    }}>
                    Save Changes
                  </Button>
                  <Button
                    // variant="contained"
                    // disabled={isLoading}
                    onClick={() => setEditAble(false)}
                    sx={{
                      height: "40px",
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
                </Box>
              </>
            )}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default MyprofileIndexNew;