import { Box, Button, Grid, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import FieldForProfile from "../FieldForProfile";
import ProfilePicture from "../MyProfile/ProfilePicture";
import { myProfileEdit, uploadMyImage } from "../../../../../features/slice/userSlice";
import moment from "moment";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../../../customHooks/useToaster";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const MyDatePicker = styled(DatePicker)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { height: "40px", fontSize: "14px", color: "#3C4D6B" },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: `1px solid #2E58FF !important`,
  },
  "& .MuiInputBase-input.Mui-focused": {
    color: "blue",
  },
}));
const EducationInfoIndex = () => {
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

  const { handleSubmit, control, errors, setValue } = useForm();

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
                  Educational Information
                </Typography>
              </Grid>

              <Grid container spacing={0} sx={{ paddingBottom: "20px" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <FieldForProfile
                    name="degree"
                    label={"Highest level of degree"}
                    handleChange={handleFirstNameChange}
                    defaultValue={firstName}
                    disableItem={false}
                    editAble={editAble}
                  />
                </Grid>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <FieldForProfile
                    name="study"
                    label={"Field of Study"}
                    handleChange={handleFirstNameChange}
                    defaultValue={firstName}
                    disableItem={false}
                    editAble={editAble}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={0} sx={{ paddingBottom: "20px" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <FieldForProfile
                    name="institution"
                    label={"Institution Name"}
                    handleChange={handleFirstNameChange}
                    defaultValue={firstName}
                    disableItem={false}
                    editAble={editAble}
                  />
                </Grid>
                <Grid item xs={6} sx={{ paddingRight: "2%", display: "flex", flexDirection: "column" }}>
                  {/* <FieldForProfile
                    name="year"
                    label={"Year of Completion"}
                    handleChange={handleFirstNameChange}
                    defaultValue={firstName}
                    disableItem={false}
                    editAble={editAble}
                  /> */}
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Typography sx={{ mb: "10px" }} variant="wpf_p4_medium" color="#3c4d6b">
                      Year of completion
                    </Typography>
                    <MyDatePicker
                      size="small"
                      sx={{
                        backgroundColor: "#FFFFFF",
                        color: "#3c4d6b",
                      }}
                      inputFormat="DD-MM-YYYY"
                      // minDate={minDob}
                      // maxDate={maxDob}
                      // onChange={(newValue) => {
                      //   handleDate(newValue);
                      // }}
                      // slotProps={{
                      //   textField: {
                      //     error: !!error,
                      //     helperText: error && error?.message,
                      //     id: 'date-picker',
                      //     sx: {
                      //       color: '#3c4d6b',
                      //       mt: '6px',
                      //     },
                      //   },
                      // }}
                    >
                      {/* <TextField
                  size="small"
                  sx={{
                    color: '#3c4d6b',
                    // border: '2px solid green.800',
                  }}
                  error={!!error}
                  helperText={error && error?.message}
                  id="date-picker"
                /> */}
                    </MyDatePicker>
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Grid container spacing={0} sx={{ paddingBottom: "20px" }}>
                <Grid item xs={12} sx={{ paddingRight: "2%" }}>
                  <FieldForProfile
                    name="certificate"
                    label={"Upload Your Certificate Copy"}
                    handleChange={handleFirstNameChange}
                    defaultValue={firstName}
                    disableItem={false}
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
      </Box>
    </>
  );
};

export default EducationInfoIndex;
