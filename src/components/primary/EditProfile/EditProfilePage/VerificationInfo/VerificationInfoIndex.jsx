import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfilePicture from "../MyProfile/ProfilePicture";
import { Box, Button, Grid, TextField, Typography, styled } from "@mui/material";
import FieldForProfile from "../FieldForProfile";
import PasswordFieldForProfile from "../../PasswordFieldForProfile";
// import { TextFieldQuestion } from "../../../Course/QuizPage/QuistionField/ImageFieldForQuestion";
import UploadImagesField from "./UploadImagesField";
import SelectFieldForProfile from "../SelectFieldForProfile";
import { getUserVerificationInfo, updateMyVerification } from "../../../../../features/slice/userSlice";
import useToaster from "../../../../../customHooks/useToaster";
import { capitalizeFirstLetter } from "../../../../../helper/capitalizeFirstWord";
import LoadingComponent from "../../../../shared/Loading/LoadingComponent";

const TextFieldQuestion = styled(TextField)(() => ({
  // borderRadius: "8px 0px 0px 8px",
  "& .MuiOutlinedInput-root": {
    height: "40px",
    fontSize: "14px",
    border: "2px solid #E6ECF5 !important",
    backgroundColor: "#F9FAFB",
    backgroundColor: "neutral.N000",

    // borderRadius: "8px",
    borderRadius: "8px 0px 0px 8px",
    "@media (max-width: 1439px)": {
      fontSize: "12px",
    },
    "@media (mix-width: 1920px)": {
      fontSize: "14px",
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: "0px 0px 0px 8px",
  },
  "& .MuiOutlinedInput-notchedOutline ": {},
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "#56627a",
  },
  "& .MuiFormHelperText-root": {
    color: "#F04438",
    "&.Mui-error": {
      color: "#F04438",
    },
  },
}));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 10,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 10,
});
const TypeVerificationOption = [
  { value: "NID", label: "NID" },
  { value: "passport", label: "Passport" },
  { value: "birthCertificate", label: "Birth Certificate" },
];
const VerificationInfoIndex = ({ data, isDataLoading, editAble, setEditAble }) => {
  const { user, isLoading } = useSelector((state) => state.user);
  const [nidNumber, setNidNumber] = useState(data?.extraDocumentNo);
  const [nameAsNid, setNameAsNid] = useState(data?.extraDocumentName);
  const [photo, setPhoto] = useState([]);
  const [resume, setResume] = useState([]);
  const [errorPhoto, setErrorPhoto] = useState("");
  const [errorResume, setErrorResume] = useState("");
  const [documentType, setDocumentType] = useState(data?.extraDocumentType);
  const [images, setImages] = useState(data?.extraDocumentImages);
  const [imagesCopy, setImagesCopy] = useState(data?.extraDocumentImages);
  const [removeImagesUpdate, setRemoveImagesUpdate] = useState([
    {
      name: "",
      isRemoved: false,
    },
  ]);
  const [removeImages, setRemoveImages] = useState([]);
  
  const dispatch = useDispatch();
  const toast = useToaster();

  const handleChangeDocumentType = (e) => {
    setDocumentType(e.target.value);
  };
  const handleNidNumber = (e) => {
    setNidNumber(e.target.value);
  };
  const handleNameAdNid = (e) => {
    setNameAsNid(e.target.value);
  };
  const handleCancel = () => {
    setEditAble(false);
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
  };
  const handleResume = (e) => {
    setResume(e.target.files[0]);
  };
  const handleClick = (signNda) => {
    window.open(signNda);
  };
  const handleSubmitChange = () => {
    const data = {
      documentType,
      nidNumber,
      nameAsNid,
      photo,
      resume,
      images,
    };

    const formData = new FormData();
    documentType && formData.append("extraDocumentType", documentType);
    nidNumber && formData.append("extraDocumentNo", nidNumber);
    nameAsNid && formData.append("extraDocumentName", nameAsNid);

    images.forEach((item) => {
      if (item.name) {
        formData.append("images", item);
      }
    });

    photo.length != 0 && formData.append("photo", photo);
    resume.length != 0 && formData.append("resume", resume);

    if (imagesCopy.length != 0) {
      imagesCopy.map((item, index) => {
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

    const finalImageData = {
      id: user._id,
      formData,
    };

    dispatch(updateMyVerification(finalImageData)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, "error");
      }
      if (action.payload.status === 200) {
        toast.trigger("Profile Update Successfully", "success");
        setEditAble(false);
      }
    });
    for (let pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
  };
  return (
    <>
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
              <Grid container sx={{ paddingBottom: "20px", paddingTop: "2%" }}>
                <Grid container sx={{ paddingBottom: "20px", paddingTop: "1%" }}>
                  <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                    <Grid container>
                      <Typography
                        sx={{
                          color: "neutral.N300",

                          mb: 1,
                        }}
                        variant="wpf_p4_medium"
                      >
                        Please Upload Your Passport Size Photo*
                      </Typography>

                      <Box sx={{ width: "70%" }}>
                        {data.standardPhoto && !editAble ? (
                          <>
                            {/* <TextFieldQuestion
                              sx={
                                {
                                  // height: '35px',
                                  // fontSize: '14px',
                                  // border: '2px solid #E6ECF5 !important',
                                  // borderRadius: '8px 0px 0px 8px',
                                }
                              }
                              placeholder={photo.name}
                              disabled={true}
                              size="small"
                              type={"text"}
                              id="outlined-basic"
                              // {...field}
                              fullWidth
                              variant="outlined"
                              helperText={errorPhoto}
                            /> */}
                          </>
                        ) : (
                          <>
                            {" "}
                            <TextFieldQuestion
                              sx={
                                {
                                  // height: '35px',
                                  // fontSize: '14px',
                                  // border: '2px solid #E6ECF5 !important',
                                  // borderRadius: '8px 0px 0px 8px',
                                }
                              }
                              placeholder={photo.name}
                              disabled={true}
                              size="small"
                              type={"text"}
                              id="outlined-basic"
                              // {...field}
                              fullWidth
                              variant="outlined"
                              helperText={errorPhoto}
                            />
                          </>
                        )}
                      </Box>

                      <Box sx={{ width: data.resume && !editAble ? "100%" : "30%" }}>
                        {data.standardPhoto && !editAble ? (
                          <>
                            <Button
                              sx={{
                                height: "40px",
                                width: "100%",
                                fontSize: "14px",
                                border: "2px solid #E6ECF5 !important",
                                // borderRadius: "0px 8px 8px 0px",
                                borderRadius: "8px",

                                zIndex: 2,
                                backgroundColor: "neutral.N00",
                              }}
                              onClick={() => handleClick(data.standardPhoto)}
                            >
                              <Typography
                                variant="wpf_h7_medium"
                                sx={{
                                  pl: 1,
                                  textTransform: "none",
                                  color: "#2E58FF",
                                }}
                              >
                                View
                              </Typography>
                            </Button>
                          </>
                        ) : (
                          <>
                            {" "}
                            <Button
                              disabled={!editAble}
                              component="label"
                              // variant="contained"
                              // startIcon={<CloudUploadIcon />}
                              // onSubmit={(e) => e.preventDefault()}
                              sx={{
                                height: "40px",
                                width: "100%",
                                fontSize: "14px",
                                border: "2px solid #E6ECF5 !important",
                                borderRadius: "0px 8px 8px 0px",
                                zIndex: 2,
                                backgroundColor: "neutral.N00",
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
                              <VisuallyHiddenInput
                                type="file"
                                name="questionImage"
                                accept="image/png, image/jpeg, image/jpg"
                                // onChange={(e) => handlePhoto(e)}
                                onChange={(e) => {
                                  const selectedFile = e.target.files[0];

                                  // Check if a file is selected
                                  if (selectedFile) {
                                    const fileSize = selectedFile.size; // Size in bytes
                                    const maxSizeInBytes = 512 * 1024; // 512KB

                                    if (fileSize <= maxSizeInBytes) {
                                      setErrorPhoto("");
                                      handlePhoto(e);
                                    } else {
                                      setPhoto([]);
                                      setErrorPhoto("Error: File size exceeds 512KB");
                                    }
                                  }
                                }}
                              />
                            </Button>
                          </>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container>
                      <Typography
                        sx={{
                          color: "neutral.N300",

                          mb: 1,
                        }}
                        variant="wpf_p4_medium"
                      >
                        Please Upload Your Updated Resume *
                      </Typography>
                      <Box sx={{ width: "70%" }}>
                        {data.resume && !editAble ? (
                          <></>
                        ) : (
                          <>
                            <TextFieldQuestion
                              placeholder={resume.name}
                              disabled={true}
                              size="small"
                              type={"text"}
                              id="outlined-basic"
                              // {...field}
                              fullWidth
                              variant="outlined"
                              helperText={errorResume}
                            />
                          </>
                        )}
                      </Box>

                      <Box sx={{ width: data.resume && !editAble ? "100%" : "30%" }}>
                        {data.resume && !editAble ? (
                          <>
                            <Button
                              sx={{
                                height: "40px",
                                width: "100%",
                                fontSize: "14px",
                                border: "2px solid #E6ECF5 !important",
                                borderRadius: "8px",
                                zIndex: 2,
                                backgroundColor: "neutral.N00",
                              }}
                              onClick={() => handleClick(data.resume)}
                            >
                              <Typography
                                variant="wpf_h7_medium"
                                sx={{
                                  pl: 1,
                                  textTransform: "none",
                                  color: "#2E58FF",
                                }}
                              >
                                View
                              </Typography>
                            </Button>
                          </>
                        ) : (
                          <>
                            {" "}
                            <Button
                              disabled={!editAble}
                              component="label"
                              // variant="contained"
                              // startIcon={<CloudUploadIcon />}
                              // onSubmit={(e) => e.preventDefault()}
                              sx={{
                                height: "40px",
                                width: "100%",
                                fontSize: "14px",
                                border: "2px solid #E6ECF5 !important",
                                borderRadius: "0px 8px 8px 0px",
                                zIndex: 2,
                                backgroundColor: "neutral.N00",
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
                              <VisuallyHiddenInput
                                type="file"
                                name="questionImage"
                                accept=".pdf, .doc, .docx"
                                // onChange={(e) => handleResume(e)}
                                onChange={(e) => {
                                  const selectedFile = e.target.files[0];

                                  // Check if a file is selected
                                  if (selectedFile) {
                                    const fileSize = selectedFile.size; // Size in bytes
                                    const maxSizeInBytes = 512 * 1024; // 512KB

                                    if (fileSize <= maxSizeInBytes) {
                                      setErrorResume("");
                                      handleResume(e);
                                    } else {
                                      setResume([]);
                                      setErrorResume("Error: File size exceeds 1MB");
                                    }
                                  }
                                }}
                              />
                            </Button>
                          </>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sx={{ paddingRight: "0%" }}>
                  <SelectFieldForProfile
                    name="bloodGroup"
                    label={"Document Type"}
                    defaultValue={documentType}
                    disableItem={false}
                    editAble={editAble}
                    handleChange={handleChangeDocumentType}
                    options={TypeVerificationOption}
                  />
                </Grid>
              </Grid>

              <Grid container sx={{ paddingBottom: "20px", paddingTop: "%" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <FieldForProfile
                    name="presentAddress"
                    // label={"Nid Number"}
                    label={`${capitalizeFirstLetter(documentType)} Number`}
                    defaultValue={nidNumber}
                    disableItem={false}
                    handleChange={handleNidNumber}
                    editAble={editAble}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FieldForProfile
                    name="Name [as per your  NID]"
                    label={` Name [as per your  ${documentType}]  `}
                    // label={"Name [as per your  NID]"}
                    defaultValue={nameAsNid}
                    disableItem={false}
                    handleChange={handleNameAdNid}
                    editAble={editAble}
                  />
                </Grid>
              </Grid>
              {/* <Grid container> */}
              <UploadImagesField
                editAble={editAble}
                label={`${documentType} Photo`}
                files={images}
                setFiles={setImages}
                setImagesCopy={setImagesCopy}
                imagesCopy={imagesCopy}
                setRemoveImages={setRemoveImages}
              />
              {/* </Grid> */}
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
      </>
    </>
  );
};

export default VerificationInfoIndex;
