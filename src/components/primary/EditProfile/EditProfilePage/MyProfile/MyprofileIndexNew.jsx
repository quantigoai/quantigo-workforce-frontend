import { Box, Button, Grid, Typography } from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../../../customHooks/useToaster";
import { myProfileEdit, uploadMyImage } from "../../../../../features/slice/userSlice";
import { capitalizeFirstLetter } from "../../../../../helper/capitalizeFirstWord";
// import FormProvider from "../../../../shared/FormProvider/FormProvider";
import { useEffect } from "react";
import PasswordFieldForProfile from "../../PasswordFieldForProfile";
import CommonFieldTest from "../CommonFieldTest";
import FieldForProfile from "../FieldForProfile";
import SelectFieldForProfile from "../SelectFieldForProfile";
import ProfilePicture from "./ProfilePicture";

const MyprofileIndexNew = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  const [editAble, setEditAble] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [occupation, setOccupation] = useState(user.occupation);
  const [bloodGroup, setBloodGroup] = useState(user.bloodGroup);
  const [contactNo, setContactNo] = useState(user.contactNo);
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
    setContactNo(e.target.value);
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

  const handleCancel = () => {
    setEditAble(false);
  };

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setContactNo(user.contactNo);
    setOccupation(user.occupation);
    setBloodGroup(user.bloodGroup);
    setPermanentAddress(user.permanentAddress);
    setPresentAddress(user.presentAddress);
    setBillingAccountNo(user.billingAccountNo);
    setCoverImage(null);
  }, [editAble]);

  const handleSubmitChange = () => {
    const data = {
      firstName,
      lastName,
      occupation,
      bloodGroup,
      contactNo,
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
            lg: "95%",
            xl: "100%",
            xxl: "100%",
          },
        }}
      >
        <Box
          sx={{
            // flex: "0 0 auto",
            height: {
              lg: "17%",
              xl: "17%",
              xxl: "17%",
            },
            // backgroundColor: "yellow",
          }}
        >
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
              lg: "78%",
              xl: "71%",
              xxl: "75%",
            },
            // backgroundColor: "black",
          }}
        >
          <Box
            sx={{
              height: "100%",
            }}
          >
            <Box
              sx={{
                height: "100%",
                "&::-webkit-scrollbar": {
                  width: "0",
                },
                overflowY: "auto",
              }}
            >
              <Grid container sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
                <Typography sx={{ color: "primary.B200" }} variant="wpf_p4_medium">
                  Personal Information
                </Typography>
              </Grid>

              <Grid container spacing={0} sx={{ paddingBottom: "20px" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <FieldForProfile
                    name="firstName"
                    label={"First Name"}
                    handleChange={handleFirstNameChange}
                    defaultValue={firstName}
                    disableItem={false}
                    editAble={editAble}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FieldForProfile
                    name="lastName"
                    label={"Last Name"}
                    handleChange={handleLasttNameChange}
                    defaultValue={lastName}
                    disableItem={false}
                    editAble={editAble}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ paddingBottom: "20px" }}>
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
                    defaultValue={occupation}
                    disableItem={false}
                    handleChange={handleOccupationChange}
                    editAble={editAble}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ paddingBottom: "5px" }}>
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
                    defaultValue={bloodGroup}
                    disableItem={false}
                    editAble={editAble}
                    handleChange={handleChangeBloodGroup}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
                <Typography sx={{ fontSize: "12px", color: "primary.B200" }}>Contact Info.</Typography>
              </Grid>

              <Grid container sx={{ paddingBottom: "20px" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <PasswordFieldForProfile
                    name="phone"
                    label={"Phone No."}
                    defaultValue={contactNo}
                    disableItem={false}
                    handleChange={handlePhoneNumberChange}
                    editAble={editAble}
                    phone={contactNo}
                  />
                </Grid>
                <Grid item xs={6}>
                  <PasswordFieldForProfile
                    name="billingAccountNo"
                    label={"Nagad No."}
                    defaultValue={billingAccountNo}
                    disableItem={false}
                    handleChange={handlebillingAccountNoChange}
                    editAble={editAble}
                    phone={billingAccountNo}
                  />
                </Grid>
              </Grid>

              <Grid container sx={{ paddingBottom: "20px" }}>
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
                    defaultValue={presentAddress}
                    disableItem={false}
                    handleChange={handlePresentAddressChange}
                    editAble={editAble}
                  />
                </Grid>
              </Grid>
              <Grid container sx={{ paddingBottom: "20px" }}>
                <Grid item xs={12}>
                  <FieldForProfile
                    name="permanentAddress"
                    label={"Permanent Address"}
                    defaultValue={permanentAddress}
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
              xl: "14%",
              xxl: "8%",
            },
          }}
        >
          <Grid
            container
            sx={{
              height: "100%",
            }}
          >
            {editAble && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    // p: 2
                  }}
                >
                  <Button
                    onClick={() => handleSubmitChange()}
                    disabled={isLoading}
                    sx={{
                      height: {
                        lg: "30px",
                        xl: "40px",
                        xxl: "40px",
                      },
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
                      "&.Mui-disabled": {
                        background: "#B6C9F0",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    Save Changes
                  </Button>
                  <Button
                    // variant="contained"
                    // disabled={isLoading}
                    // onClick={() => setEditAble(false)}
                    onClick={() => handleCancel()}
                    sx={{
                      height: {
                        lg: "30px",
                        xl: "40px",
                        xxl: "40px",
                      },
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
                    }}
                  >
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
