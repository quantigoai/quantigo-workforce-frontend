import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProfilePicture from "../MyProfile/ProfilePicture";
import { Box, Button, Grid, TextField, Typography, styled } from "@mui/material";
import FieldForProfile from "../FieldForProfile";
import PasswordFieldForProfile from "../../PasswordFieldForProfile";
export const TextFieldQuestion = styled(TextField)(() => ({
  // borderRadius: "8px 0px 0px 8px",
  "& .MuiOutlinedInput-root": {
    height: "40px",
    fontSize: "14px",
    border: "2px solid #E6ECF5 !important",
    backgroundColor: "#F9FAFB",
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
const VerificationInfoIndex = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  const [editAble, setEditAble] = useState(false);
  const [nidNumber, setNidNumber] = useState("");
  const [nameAsNid, setNameAsNid] = useState("");
  const [photo, setPhoto] = useState([]);
  const [resume, setResume] = useState([]);
  const [errorPhoto, setErrorPhoto] = useState("");
  const [errorResume, setErrorResume] = useState("");
  const handleEditProfile = () => {
    setEditAble(true);
  };
  const handleNidNumber = (e) => {
    setNidNumber(e.target.value);
    console.log("🚀 ~ file: VerificationInfoIndex.jsx:59 ~ handleNidNumber ~ e.target.value:", e.target.value);
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

  const handleSubmitChange = () => {
    const data = {
      nidNumber,
      nameAsNid,
      photo,
      resume,
    };
    console.log(data);
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
            //   coverImage={coverImage}
            //   handleImage={handleImage}
            //   coverImageFile={coverImageFile}
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
              <Grid container sx={{ paddingBottom: "20px" }}>
                <Grid item xs={6} sx={{ paddingRight: "2%" }}>
                  <FieldForProfile
                    name="presentAddress"
                    label={"Nid Number"}
                    //   defaultValue={presentAddress}
                    disableItem={false}
                    handleChange={handleNidNumber}
                    editAble={editAble}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FieldForProfile
                    name="Name [as per your  NID]"
                    label={"Name [as per your  NID]"}
                    //   defaultValue={presentAddress}
                    disableItem={false}
                    handleChange={handleNameAdNid}
                    editAble={editAble}
                  />
                </Grid>
              </Grid>

              <Grid container sx={{ paddingBottom: "20px" }}>
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
                    </Box>

                    <Box sx={{ width: "30%" }}>
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
                                setErrorPhoto("Error: File size exceeds 512KB");
                              }
                            }
                          }}
                        />
                      </Button>
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
                    </Box>

                    <Box sx={{ width: "30%" }}>
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
                        <VisuallyHiddenInput
                          type="file"
                          name="questionImage"
                          accept=".pdf, .doc, .docx"
                          onChange={(e) => handleResume(e)}
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
                                setErrorResume("Error: File size exceeds 512KB");
                              }
                            }
                          }}
                        />
                      </Button>
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

export default VerificationInfoIndex;
