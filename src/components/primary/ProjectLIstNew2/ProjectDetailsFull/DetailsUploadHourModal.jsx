import { Box, Button, Grid, Modal, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import pdfSvg from "../../../../assets/images/csvIcon.png";
import deleteIcon from "../../../../assets/images/fi_trash-2.png";

// import useToaster from "../../../../customHooks/useToaster";
import axios from "axios";
import { toast } from "react-toastify";
import { realToken } from "../../../../helper/lib";
import ProjectModalHeader from "../ProjectModalHeader";
import CsvUploadField from "./CsvUploadField";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  p: 0,
  input: {
    color: "black",
    height: "20px",
    borderRadius: "8px",
  },
  select: {
    height: "20px",
  },
};
const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",

  borderRadius: "2px",
  width: "100%",
  height: "40px",
  backgroundColor: "#2D58FF",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
  "&:disabled": {
    backgroundColor: "#7c91df",
    color: "#FFFFFF",
  },
});

const DetailsUploadHourModal = ({ openModal, handleClose }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  const [selectedFile, setSelectedFile] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const maxSize = 1 * 1024 * 1024;
  // const toast = useToaster();
  const dispatch = useDispatch();
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({});
  const handleImage = (e) => {
    setCoverImageFile(e[0]);
    setSelectedFile(e[0]);
    setIsSelected(true);
    const file = e[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
    if (e.length === 0 || e[0].size > maxSize) {
      //   setStepper(1);
    } else {
      //   setStepper(3);
    }
  };

  const removeImage = () => {
    setCoverImageFile([]);
    setSelectedFile([]);
    setCoverImage(null);
    // setStepper(1);
  };
  const url = import.meta.env.VITE_APP_SERVER_URL;

  useEffect(() => {}, [acceptedFiles]);
  console.log(projectDrawer._id);

  const handleSubmission = async () => {
    const formData = new FormData();
    formData.append("hoursData", selectedFile);
    const data = {
      id: projectDrawer._id,
      hoursData: formData,
    };
    handleClose();
    const response = await toast.promise(
      () => {
        try {
          return axios.patch(`${url}/project-drawer/upload-hours/${data.id}`, data.hoursData, {
            headers: {
              Authorization: `Bearer ${realToken()}`,
            },
            content: {
              "Content-Type": "multipart/form-data",
            },
          });
        } catch (error) {
          throw new Error(error.response.data.message);
        }
      },
      {
        pending: {
          render() {
            return "CSV is uploading...";
          },
          // icon: false,
        },
        success: {
          render({ data }) {
            return `${data.data.message}`;
          },
          // other options
          icon: "🤙",
        },
        error: {
          render({ data }) {
            return data.response.data.message;
          },
        },
      }
    );
    console.log(response);
    // .then((action) => {
    // if (action.payload?.status === 200) {
    //   toast.trigger(action.payload?.data.message, "success");
    //   // handleClose();
    // } else {
    //   toast.trigger("action.error.message", "error");
    //   // handleClose();
    // }
  };

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            height: { xl: "%", lg: "%" },
            width: { xl: "35%", lg: "40%" },
          }}
        >
          <Box sx={{ flex: "0 0 5%" }}>
            <Grid container sx={{ paddingRight: "0%" }}>
              <ProjectModalHeader handleCreateProjectClose={handleClose} modalTitle={"Upload Effective Hour"} />
            </Grid>
          </Box>

          <Box
            sx={{
              flex: "1",
              overflowY: "auto",
              padding: "3%",
            }}
          >
            <Box sx={{ paddingLeft: "1%", paddingRight: "1%" }}>
              <CsvUploadField handleImage={handleImage} selectedFile={selectedFile} />
            </Box>

            <Box sx={{ paddingLeft: "1%", paddingRight: "1%" }}>
              <Typography
                sx={{
                  fontWeight: "500",
                  mt: "5px",
                  fontSize: "14px",
                  mb: "7px",
                }}
                variant="h6"
              >
                Attachment
              </Typography>

              <Stack
                sx={{
                  border: "1px solid #E6ECF5",
                  padding: "16px",
                  borderRadius: "8px",
                  backgroundColor: "neutral.N600",
                  height: "75px",
                  color: "neutral.700",
                }}
              >
                {!selectedFile?.name || selectedFile.size > maxSize ? (
                  <></>
                ) : (
                  <>
                    <Grid item xs={12} sx={{}}>
                      <Grid container sx={{ paddingRight: "2%" }}>
                        <Grid item xs={1} sx={{ paddingTop: "2%" }}>
                          <img src={pdfSvg} height={27} />
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          sx={{
                            paddingTop: "2%",
                            textAlign: "left",
                            paddingRight: "3%",
                            paddingLeft: "2%",
                          }}
                        >
                          <Typography variant="wpf_p3_medium">{selectedFile?.name}</Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Button onClick={removeImage}>
                            <img src={deleteIcon} />
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Stack>
            </Box>
          </Box>

          <Box
            sx={{
              flex: "0 0 64px",
              borderTop: "2px solid #F2F6FC",
              backgroundColor: "neutral.N000",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 2%",

              bottom: "0px",
              borderRadius: "8px",
            }}
          >
            <Grid container sx={{ padding: "2%" }}>
              <Grid item xs={6}>
                <Button
                  sx={{
                    width: "120px",
                    textTransform: "none",
                    backgroundColor: "primary.B008",
                    color: "neutral.N650",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "neutral.N600",
                      color: "neutral.N650",
                    },
                  }}
                  onClick={() => handleClose()}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Grid container sx={{ justifyContent: "right" }}>
                  <Button
                    type="submit"
                    // disabled={!selectedFile?.name || isLoading || selectedFile?.size > maxSize}
                    sx={{
                      width: "128px",
                      textTransform: "none",
                      backgroundColor: "#2E58FF",
                      color: "#FFFFFF",

                      borderRadius: "8px",
                      "&.Mui-disabled": {
                        background: "#B6C9F0",
                        color: "#FFFFFF",
                      },
                      "&:hover": {
                        backgroundColor: "#2E58FF",
                        color: "#FFFFFF",
                        // border: "1px solid #2E58FF",
                      },
                    }}
                    onClick={handleSubmission}
                  >
                    Upload
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DetailsUploadHourModal;
