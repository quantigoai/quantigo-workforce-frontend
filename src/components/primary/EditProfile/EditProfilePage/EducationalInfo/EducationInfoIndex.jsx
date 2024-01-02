import { Box, Button, Grid, Input, InputAdornment, TextField, Typography, styled } from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { useDropzone } from "react-dropzone";

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

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  // border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 50,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  // display: "block",
  width: "300px",
  height: "100%",
};

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

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } = useDropzone({
    maxFiles: 5,
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <p key={file.path}>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </p>
    );
  });
  console.log("🚀 ~ file: EducationInfoIndex.jsx:187 ~ fileRejectionItems ~ fileRejectionItems:", fileRejectionItems);

  const thumbs = files.map((file) => {
    return (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
            // Revoke data uri after image is loaded
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
          />
        </div>
      </div>
    );
  });

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

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
                          </Button>
                        </Box>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Button variant="contained">upload</Button>
                </div>
                <Box sx={{ mt: 2, border: " 1px solid  #EAECF0" }}>
                  <p>{thumbs}</p>
                  {/* <p>{acceptedFileItems}</p> */}
                  <Typography variant="wpf_p4_medium" color="">
                    {fileRejectionItems.length > 0 ? "you have selected more than 5 files" : ""}
                  </Typography>
                </Box>
              </Box>
            </Box>
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
