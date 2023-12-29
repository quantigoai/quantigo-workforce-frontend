import { Box, Button, Grid, InputAdornment, TextField, Typography, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
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
import { TextFieldQuestion } from "../../../Course/QuizPage/QuistionField/ImageFieldForQuestion";

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
  const [degree, setDegree] = useState("");
  const [study, setStudy] = useState("");
  const [institution, setInstitution] = useState("");

  const dispatch = useDispatch();

  const toast = useToaster();
  const handleEditProfile = () => {
    setEditAble(true);
  };
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dateRef = useRef(null);

  const handleImage = (e) => {
    setCoverImageFile(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };

  const { handleSubmit, control, errors, setValue } = useForm();

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };
  const handleStudyChange = (e) => {
    setStudy(e.target.value);
  };
  const handleInstitutionChange = (e) => {
    setInstitution(e.target.value);
  };

  const handleCancel = () => {
    setEditAble(false);
  };

  // useEffect(() => {
  //   setDegree(user.firstName);
  //   setStudy(user.lastName);
  //   setContactNo(user.contactNo);
  //   setOccupation(user.occupation);
  //   setBloodGroup(user.bloodGroup);
  //   setPermanentAddress(user.permanentAddress);
  //   setPresentAddress(user.presentAddress);
  //   setBillingAccountNo(user.billingAccountNo);
  //   setCoverImage(null);
  // }, [editAble]);

  const handleSubmitChange = () => {
    const data = {
      degree,
      study,
      institution,
      completion: dateRef.current.value,
    };

    const finalData = {
      id: user._id,
      data,
    };

    // const formData = new FormData();
    // formData.append("image", coverImageFile);

    // const finalImageData = {
    //   id: user._id,
    //   formData,
    // };

    // coverImageFile &&
    //   dispatch(uploadMyImage(finalImageData)).then((action) => {
    //     if (action.payload.status === 200) {
    //       toast.trigger("Profile Picture Update Successfully", "success");
    //       setEditAble(false);
    //       setCoverImageFile(null);
    //     }
    //   });
    // //   Object.keys(filteredData).length > 0 &&
    // dispatch(myProfileEdit(finalData)).then((action) => {
    //   if (action.error) {
    //     toast.trigger(action.error.message, "error");
    //   }
    //   if (action.payload.status === 200) {
    //     toast.trigger("Profile Update Successfully", "success");
    //     setEditAble(false);
    //   }
    // });
  };
  const handleImageFn = () => {};

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
                    handleChange={handleDegreeChange}
                    // defaultValue={firstName}
                    disableItem={false}
                    editAble={editAble}
                  />
                </Grid>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <FieldForProfile
                    name="study"
                    label={"Field of Study"}
                    handleChange={handleStudyChange}
                    // defaultValue={firstName}
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
                    handleChange={handleInstitutionChange}
                    // defaultValue={firstName}
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
                    <Typography sx={{ mb: "10px" }} variant="wpf_p4_medium" color="neutral.N300">
                      Year of completion
                    </Typography>
                    <MyDatePicker
                      disabled={!editAble}
                      size="small"
                      sx={{
                        backgroundColor: editAble ? "" : "neutral.N400",
                        color: "#3c4d6b",
                      }}
                      views={["year"]}
                      openTo="year"
                      inputRef={dateRef}
                    ></MyDatePicker>
                  </LocalizationProvider>
                </Grid>
              </Grid>
              <Grid container spacing={0} sx={{ paddingBottom: "20px" }}>
                <Grid item xs={12} sx={{ paddingRight: "2%" }}>
                  <Grid item xs={12}>
                    <Typography
                      variant="wpf_h7_medium"
                      sx={{
                        mb: 0,
                        color: "neutral.N300",
                      }}
                    >
                      Upload Relevant Certificates
                    </Typography>
                    <Box sx={{ width: "100%", height: "50px" }}>
                      <Grid container>
                        <Box sx={{ width: "90%" }}>
                          <TextFieldQuestion
                            sx={{
                              backgroundColor: editAble ? "" : "neutral.N400",
                              color: "#3c4d6b",
                            }}
                            // defaultValue={inputField?.question?.questionImage?.name}
                            disabled={!editAble}
                            size="small"
                            type={"text"}
                            id="outlined-basic"
                            // placeholder={inputField?.question?.questionImage?.name}
                            // {...field}
                            fullWidth
                            variant="outlined"
                            // required={label === "Benchmark" ? false : true}
                            // helperText={error}
                          />
                        </Box>

                        <Box sx={{ width: "10%" }}>
                          <input
                            style={{ display: "none" }}
                            id="upload-photo"
                            name="questionImage"
                            type="file"
                            accept="image/png,  image/jpeg, image/jpg"
                            // onChange={(e) => handleImage(e, inputField._id)}
                            onChange={(e) => handleImageFn(e)}
                            // onchange="handleImageChange"
                          />
                          <Button
                            component="label"
                            // variant="contained"
                            // startIcon={<CloudUploadIcon />}
                            onSubmit={(e) => e.preventDefault()}
                            sx={{
                              height: "40px",
                              width: "100%",
                              fontSize: "14px",
                              border: "2px solid #E6ECF5 !important",
                              borderRadius: "0px 8px 8px 0px",
                              zIndex: 2,
                              backgroundColor: "#fff",
                            }}
                          >
                            <i color="#2E58FF" className="ri-upload-2-line"></i>
                            <Typography
                              variant="wpf_h7_medium"
                              sx={{
                                pl: 1,
                                textTransform: "none",
                                color: "#2E58FF",
                              }}
                            >
                              Upload
                            </Typography>
                            {/* <VisuallyHiddenInput
                              type="file"
                              name="questionImage"
                              accept="image/png, image/jpeg, image/jpg"
                              onChange={(e) => {
                                const selectedFile = e.target.files[0];

                                // Check if a file is selected
                                // if (selectedFile) {
                                //   const fileSize = selectedFile.size; // Size in bytes
                                //   const maxSizeInBytes = 512 * 1024; // 512KB

                                //   if (fileSize <= maxSizeInBytes) {
                                //     setError("");
                                //     update
                                //       ? handleUpdate(selectedFile, "questionImage", inputField)
                                //       : handleChangeInput(inputField.uniqueId, e);
                                //   } else {
                                //     setError("Error: File size exceeds 512KB");
                                //   }
                                // }
                              }}
                            /> */}

                            {/* <VisuallyHiddenInput
                  type="file"
                  name="questionImage"
                  accept="image/png,  image/jpeg, image/jpg"
                  name="questionImage"
                  onChange={
                    update
                      ? (e) => handleUpdate(e.target.files[0], "questionImage", inputField)
                      : (e) => handleChangeInput(inputField.uniqueId, e)
                  }
                /> */}
                          </Button>
                        </Box>
                      </Grid>
                    </Box>
                  </Grid>
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
