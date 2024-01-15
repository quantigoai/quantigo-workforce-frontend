import { Box, Button, Grid, Input, InputAdornment, TextField, Typography, styled } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import FieldForProfile from "../FieldForProfile";
import ProfilePicture from "../MyProfile/ProfilePicture";
import { myProfileEdit, updateMyEducation, uploadMyImage } from "../../../../../features/slice/userSlice";
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
import ctaImage from "../../../../../assets/images/CTA.png";
import IconImage from "../../../../../assets/images/Icon.png";
import InstitutionSelectAdd from "./InstitutionSelectAdd";
import { DateField } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import UploadImagesField from "../VerificationInfo/UploadImagesField";
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
  width: "140px",
  height: "140px",
  padding: 4,

  boxSizing: "border-box",
};

const thumbInner = {
  // display: "flex",e
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
const focusedStyle = {
  borderColor: "#2196f3",
};

const EducationInfoIndex = ({ data, isDataLoading, editAble, setEditAble }) => {
  console.log("🚀 ~ EducationInfoIndex ~ data:", data);
  const { isLightTheme } = useSelector((state) => state.theme);
  const { user, isLoading } = useSelector((state) => state.user);
  // const [editAble, setEditAble] = useState(false);
  const [higherDegree, setHigherDegree] = useState(data?.highestLevelOfDegree);
  const [field, setField] = useState(data?.fieldOfStudy);
  const [institution, setInstitution] = useState(data?.instituteName);
  const [files, setFiles] = useState(data?.certificateImages);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const toast = useToaster();
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [value, setValue] = React.useState(dayjs(data?.completedYear));
  const [imagesCopy, setImagesCopy] = useState(data?.certificateImages);
  const [removeImagesUpdate, setRemoveImagesUpdate] = useState([
    {
      name: "",
      isRemoved: false,
    },
  ]);
  const [removeImages, setRemoveImages] = useState([]);

  const handleImage = (e) => {
    setCoverImageFile(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };
  const handleEditProfile = () => {
    setEditAble(true);
  };
  const handleDate = (params) => {
    // console.log(params.current);
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
    const formData = new FormData();
    if (higherDegree === null) {
      formData.append("highestLevelOfDegree", "");
    } else {
      higherDegree.title !== undefined && formData.append("highestLevelOfDegree", higherDegree.title);
    }
    if (institution === null) {
      formData.append("instituteName", "");
    } else {
      institution.name !== undefined && formData.append("instituteName", institution.name);
    }
    if (field === null) {
      formData.append("fieldOfStudy", "");
    } else {
      field.title !== undefined && formData.append("fieldOfStudy", field.title);
    }
    formData.append("completedYear", value?.$y);

    files.forEach((item) => {
      if (item.name) {
        formData.append("certificateImages", item);
      }
    });

    if (imagesCopy?.length != 0) {
      imagesCopy?.map((item, index) => {
        const tempData = {
          name: "",
          isRemoved: false,
        };
        const isRemoved = removeImages.includes(item);
        tempData.name = item;
        tempData.isRemoved = isRemoved;
        formData.append(`removedImages[${index}][name]`, tempData.name);
        formData.append(`removedImages[${index}][isRemoved]`, tempData.isRemoved);
      });
    }
    console.log("🚀 ~ files.forEach ~ files:", files);

    const finalData = {
      id: user._id,
      formData,
    };

    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    // dispatch(updateMyEducation(finalData)).then((action) => {
    //   if (action.error) {
    //     toast.trigger(action.error.message, "error");
    //   } else {
    //     toast.trigger("Profile Update Successfully", "success");
    //     setEditAble(false);
    //   }
    // });
  };

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
                    sx={{
                      backgroundColor: editAble ? "" : "neutral.N400",
                      color: "#3c4d6b",
                    }}
                    disabled={!editAble}
                    views={["year"]}
                    openTo="year"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>

            <UploadImagesField
              editAble={editAble}
              label={"sdsadasd"}
              files={files}
              setFiles={setFiles}
              setImagesCopy={setImagesCopy}
              imagesCopy={imagesCopy}
              setRemoveImages={setRemoveImages}
            />
            {/* <Box className="container" sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  borderWidth: 2,
                  borderRadius: 8,
                  height: "100%",
                  borderColor: files.length === 5 ? "rgba(70, 70, 70, 0.1)" : "rgba(70, 70, 70, 0.2)",
                  borderStyle: "dashed",
                  backgroundColor: isLightTheme ? "#FAFBFC" : "#2C2C2C",
                  color: isLightTheme ? "#1D1D1D" : "#fff",
                  outline: "none",
                  transition: "border .24s ease-in-out",
                }}
              >
                <Box
                  sx={{
                    width: "95%",
                    ml: 2,
                    mt: 2,
                    backgroundColor: isLightTheme ? "red" : "#2C2C2C",
                  }}
                  {...getRootProps({
                    // className: `dropzone ${files.length === 5 ? "disabled" : ""}`
                    style,
                  })}
                >
                  <input {...getInputProps()} />
                  <Box
                    sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px", mb: 2 }}
                  >
                    <img
                      style={{
                        width: "30px",
                        filter: files.length === 5 || !editAble ? "grayscale(100%)" : "",
                      }}
                      src={IconImage}
                    />
                    <Typography
                      sx={{ color: files.length === 5 || !editAble ? "gray" : isLightTheme ? "#1D1D1D" : "#fff" }}
                      variant="wpf_p2_regular"
                    >
                      Drag and Drop your Certificate files here or Browse” (JPG/ JPEG / PNG)
                    </Typography>
                    <Typography
                      variant="wpf_p2_regular"
                      sx={{
                        paddingBottom: "2%",
                        color: files.length === 5 || !editAble ? "gray" : isLightTheme ? "#1D1D1D" : "#fff",
                      }}
                    >
                      Maximum file size: 1Mb.
                    </Typography>
                    <img
                      style={{ width: "30px", filter: files.length === 5 || !editAble ? "grayscale(100%)" : "" }}
                      src={ctaImage}
                    />
                  </Box>
                </Box>
                <Box sx={{ display: "flex", width: "100%", justifyContent: "center", padding: "20px" }}>
                  <Box>{files.length <= 5 && thumbs} </Box>
                  <Typography variant="wpf_p4_medium" color="error.500">
                    {files.length > 5 || error ? "you have selected more than 5 files" : ""}
                  </Typography>
                </Box>
              </Box>
            </Box> */}
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
          />
        </Box>

        
      </Box> */}
    </>
  );
};

export default EducationInfoIndex;
