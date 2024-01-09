import { Box, Button, Grid, Input, InputAdornment, TextField, Typography, styled } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import DegreeSelect from "./DegreeSelect";
import FieldSelectAdd from "./FieldSelectAdd";
import InstitutionSelectAdd from "./InstitutionSelectAdd";
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

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  // border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 300,
  height: 200,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  position: "relative",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  // display: "block",
  width: "100%",
  height: "100%",
  borderRadius: "15px",
};

const EducationInfoIndex = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  const [editAble, setEditAble] = useState(false);
  const [degree, setDegree] = useState("");
  const [higherDegree, setHigherDegree] = useState(null);
  const [field, setField] = useState(null);
  const [institution, setInstitution] = useState(null);
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(false);
  const [studies, setStudies] = useState(null);
  const { handleSubmit, control, errors } = useForm();
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
  const { getRootProps, getInputProps, isFocused } = useDropzone({
    disabled: files.length === 5 ? true : false,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: (acceptedFiles) => {
      if (files.length === 0) {
        if (acceptedFiles.length > 5) {
          setError(true);
        } else {
          setFiles((prev) => [
            ...prev,
            ...acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            ),
          ]);
          setError(false);
        }
      } else if (files.length !== 0 && files.length <= 5) {
        if (acceptedFiles.length + files.length === 5) {
          setFiles((prev) => [
            ...prev,
            ...acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            ),
          ]);
          setError(false);
        } else if (acceptedFiles.length + files.length < 5) {
          setFiles((prev) => [
            ...prev,
            ...acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            ),
          ]);
          setError(false);
        } else {
          setFiles([]);
          setError(true);
        }
      }
    },
  });

  const thumbs = files.map((file, index) => {
    return (
      <Box style={thumb} key={file.name}>
        <Box style={thumbInner}>
          <Box
            onClick={() => handleDelete(file)}
            sx={{
              position: "absolute",
              top: -1,
              right: 0,
              backgroundColor: "#FF4757",
              color: "#fff",
              width: "35px",
              // fontSize: "10px",
              height: "35px",
              textAlign: "center",
              borderRadius: "50%",
              "&:hover": { backgroundColor: "#F53142" },
              cursor: "pointer",
            }}
          >
            <CloseIcon sx={{ fontSize: "18px", mt: "8px" }} />
          </Box>
          <img
            src={file.preview}
            style={img}
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
            alt={file.name}
          />
        </Box>
      </Box>
    );
  });

  const handleDelete = (fileToDelete) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToDelete));
  };
  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  // const handleDegreeChange = (e) => {
  //   setDegree(e.target.value);
  // };
  // const handleStudyChange = (e) => {
  //   setStudy(e.target.value);
  // };
  // const handleInstitutionChange = (e) => {
  //   setInstitution(e.target.value);
  // };

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
    const finalData = {
      id: user._id,
      completion: dateRef.current.value,
      certificates: files,
      higherStudy: higherDegree,
      field: field,
      institution: institution,
    };

    const formData = new FormData();
    formData.append("image", coverImageFile);
    const formDataUploadImage = new FormData();
    formData.append("certificates", files);

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
                  <DegreeSelect
                    label={"Highest level of degree"}
                    disableItem={false}
                    editAble={editAble}
                    higherDegree={higherDegree}
                    setHigherDegree={setHigherDegree}
                  />
                </Grid>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <FieldSelectAdd
                    label={"Field of Study"}
                    disableItem={false}
                    editAble={editAble}
                    field={field}
                    setField={setField}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={0} sx={{ paddingBottom: "20px" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <InstitutionSelectAdd
                    label={"Institution Name"}
                    disableItem={false}
                    editAble={editAble}
                    institution={institution}
                    setInstitution={setInstitution}
                  />
                </Grid>
                <Grid item xs={6} sx={{ paddingRight: "2%", display: "flex", flexDirection: "column" }}>
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

              <Box className="container" sx={{ width: "100%" }}>
                <div {...getRootProps({ className: `dropzone ${files.length === 5 ? "disabled" : ""}` })}>
                  <input {...getInputProps()} />
                  <Typography variant="contained">Upload your relevant certificates</Typography>
                </div>
                <Box sx={{ mt: 2, border: " 1px solid  #EAECF0" }}>
                  <Box>{files.length <= 5 && thumbs} </Box>
                  <Typography variant="wpf_p4_medium" color="error.500">
                    {files.length > 5 || error ? "you have selected more than 5 files" : ""}
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
