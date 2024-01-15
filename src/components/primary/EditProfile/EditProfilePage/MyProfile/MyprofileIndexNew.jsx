import { Box, Button, Grid, Typography } from "@mui/material";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../../../customHooks/useToaster";
import {
  getUserPersonalInfo,
  myProfileEdit,
  readMyProfile,
  uploadMyImage,
} from "../../../../../features/slice/userSlice";
import { capitalizeFirstLetter } from "../../../../../helper/capitalizeFirstWord";
import PasswordFieldForProfile from "../../PasswordFieldForProfile";
import CommonFieldTest from "../CommonFieldTest";
import FieldForProfile from "../FieldForProfile";
import SelectFieldForProfile from "../SelectFieldForProfile";
import ProfilePicture from "./ProfilePicture";
const maritalStatusOption = [
  { value: "married", label: "Married" },
  { value: "single", label: "Single" },
  { value: "others", label: "Other" },
];
const bloodGroupOption = [
  { value: "(A+)", label: "A+" },
  { value: "(A-)", label: "A-" },
  { value: "(B+)", label: "B+" },
  { value: "(B-)", label: "B-" },
  { value: "(O+)", label: "O+" },
  { value: "(O-)", label: "O-" },
  { value: "(AB+)", label: "AB+" },
  { value: "(AB-)", label: "AB-" },
];
const religionOption = [
  { value: "islam", label: "Islam" },
  { value: "christian", label: "Christian" },
  { value: "hindu", label: "Hindu" },
  { value: "buddhism", label: "Buddhism" },
  { value: "others", label: "Other" },
];
const MyprofileIndexNew = ({ data, editAble, setEditAble }) => {
  const { user, isLoading } = useSelector((state) => state.user);

  // const [editAble, setEditAble] = useState(false);
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [occupation, setOccupation] = useState(data.occupation);
  const [bloodGroup, setBloodGroup] = useState(data.bloodGroup);
  const [religion, setReligion] = useState(data.religion);
  const [maritalStatus, setMaritalStatus] = useState(data.maritalStatus);
  const [contactNo, setContactNo] = useState(data.contactNo);
  const [billingAccountNo, setBillingAccountNo] = useState(data.billingAccountNo);
  const [fathersName, setFatherName] = useState(data.fathersName);
  const [mothersName, setMotherName] = useState(data.mothersName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readMyProfile());
    dispatch(getUserPersonalInfo(user._id));
  }, [dispatch]);

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
  const handleFatherNameChange = (e) => {
    setFatherName(e.target.value);
  };
  const handleMotherName = (e) => {
    setMotherName(e.target.value);
  };

  const handleChangeBloodGroup = (e) => {
    setBloodGroup(e.target.value);
  };
  const handleChangeReligion = (e) => {
    setReligion(e.target.value);
  };

  const handleChangeMaritalStatus = (e) => {
    setMaritalStatus(e.target.value);
  };

  const handleCancel = () => {
    setEditAble(false);
  };

  useEffect(() => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    // setContactNo(data.contactNo);
    setOccupation(data.occupation);
    setBloodGroup(data.bloodGroup);
    // setPermanentAddress(user.permanentAddress);
    // setPresentAddress(user.presentAddress);
    // setBillingAccountNo(user.billingAccountNo);
    setCoverImage(null);
  }, [editAble]);

  const handleSubmitChange = () => {
    const data = {
      firstName,
      lastName,
      occupation,
      bloodGroup,
      religion,
      maritalStatus,
      fathersName,
      mothersName,
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
          setCoverImageFile(null);
        }
      });
    //   Object.keys(filteredData).length > 0 &&
    dispatch(myProfileEdit(finalData)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, "error");
      }
      if (action.payload.status === 200) {
        toast.trigger("Profile Update Successfully", "success");
        setEditAble(false);
      }
    });
  };

  const DOB = moment.utc(data.dob).format("MMM Do, YYYY");
  return (
    <>
      <Box
        sx={{
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "0",
          },
          height: {
            lg: "78%",
            xl: "71%",
            xxl: "75%",
          },
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
                  defaultValue={capitalizeFirstLetter(data.gender)}
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
            <Grid container sx={{ paddingBottom: "20px" }}>
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
                  options={bloodGroupOption}
                />
              </Grid>
            </Grid>
            {/* <Grid container sx={{ paddingTop: "2%", paddingBottom: "1%" }}>
                <Typography sx={{ color: "primary.B200" }} variant="wpf_p4_medium">
                  Contact Info.
                </Typography>
              </Grid> */}

            <Grid container sx={{ paddingBottom: "20px" }}>
              <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                <SelectFieldForProfile
                  name="bloodGroup"
                  label={"Marital Status"}
                  defaultValue={maritalStatus}
                  disableItem={false}
                  editAble={editAble}
                  handleChange={handleChangeMaritalStatus}
                  options={maritalStatusOption}
                />
              </Grid>
              <Grid item xs={6}>
                <SelectFieldForProfile
                  name="bloodGroup"
                  label={"Religion"}
                  defaultValue={religion}
                  disableItem={false}
                  editAble={editAble}
                  handleChange={handleChangeReligion}
                  options={religionOption}
                />
              </Grid>
            </Grid>

            <Grid container sx={{ paddingBottom: "20px" }}>
              <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                <FieldForProfile
                  name="presentAddress"
                  label={"Father's Name"}
                  defaultValue={fathersName}
                  disableItem={false}
                  handleChange={handleFatherNameChange}
                  editAble={editAble}
                />
              </Grid>
              <Grid item xs={6}>
                <FieldForProfile
                  name="presentAddress"
                  label={"Mother's Name"}
                  defaultValue={mothersName}
                  disableItem={false}
                  handleChange={handleMotherName}
                  editAble={editAble}
                />
              </Grid>
            </Grid>
            <Grid container sx={{ paddingBottom: "20px", paddingTop: "%" }}>
              <Grid item xs={12}>
                <CommonFieldTest
                  name="email"
                  label={"Email"}
                  defaultValue={data.email}
                  disableItem={true}
                  control={control}
                  rules={{ required: false }}
                  errors={errors}
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

      {/* <Box
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
            profileImageChange={true}
          />
        </Box>

       
      </Box> */}
    </>
  );
};

export default MyprofileIndexNew;
