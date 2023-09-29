import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Modal,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import pdfSvg from "../../../assets/images/PDF.svg";
import actionIcon from "../../../assets/images/drag_indicator_24px.png";
import downloadIcon from "../../../assets/images/fi_download.png";
import deleteIcon from "../../../assets/images/fi_trash-2.png";
import croxButton from "../../../assets/images/u_multiply.png";
import Ndafile from "../../../assets/ndifile/NDA - Independant Contractor.docx_2.pdf";
import { signingNda } from "../../../features/slice/userSlice";
import "./ndaUpload.css";
import PdfNdaUploadField from "./PdfNdaUploadField";
import ProjectModalHeader from "../ProjectLIstNew2/ProjectModalHeader";
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

const NDAuploadModal = ({ openModal, handleClose, onDrop, accept }) => {
  // const [open, setOpen] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  const [selectedFile, setSelectedFile] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const alert = useAlert();
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    accept,
    onDrop,
  });
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
  const { isLightTheme } = useSelector((state) => state.theme);

  const [coverImageFile, setCoverImageFile] = useState(null);
  const [stepper, setStepper] = useState(0);
  const [coverImage, setCoverImage] = useState(null);
  const handleDowload = () => {
    setStepper(1);
    console.log("hittt");
  };
  const handleImage = (e) => {
    setCoverImageFile(e[0]);
    setSelectedFile(e[0]);
    setIsSelected(true);
    const file = e[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
    setStepper(3);
  };
  const removeImage = () => {
    setCoverImageFile([]);
    setSelectedFile([]);
    setCoverImage(null);
    setStepper(1);
  };
  useEffect(() => {}, [acceptedFiles]);
  const files = acceptedFiles.map((file) => (
    // <li key={file.path}>
    //   {file.path} - {file.size} bytes
    // </li>
    <>
      <img src={pdfSvg} /> {file.path}
    </>
  ));

  // function handleClickOpen() {
  //   setOpen(true);
  // }

  // function handleClose() {
  //   setOpen(false);
  // }

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append("signImage", selectedFile);
    const data = {
      id: user._id,
      signImage: formData,
    };

    dispatch(signingNda(data)).then((action) => {
      if (action.payload?.status === 200) {
        alert.show("NDA Upload Successful", { type: "success" });
        handleClose();
      } else {
        alert.show("Can not upload NDA", { type: "error" });
        handleClose();
      }
    });
  };
  const steps = ["Downlaod NDA form", "Sign the form", " Upload the signed document"];
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={{
            ...style,
            height: { xl: "54%", lg: "75%" },
            width: { xl: "35%", lg: "40%" },
          }}>
          <Box sx={{ flex: "0 0 5%" }}>
            <ProjectModalHeader handleCreateProjectClose={handleClose} modalTitle={"Upload NDA Form"} />
          </Box>

          <Box
            sx={{
              flex: "1",
              overflowY: "auto",
              padding: "3%",
            }}>
            <Box sx={{ width: "100%", paddingTop: "1%", paddingBottom: "3%" }}>
              <Stepper activeStep={stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Box sx={{ width: "100%", paddingTop: "1%", paddingBottom: "3%", paddingLeft: "1%", paddingRight: "1%" }}>
              <Grid container>
                <a
                  href={Ndafile}
                  download="Nda_File.pdf"
                  onClick={() => handleDowload()}
                  style={{ textDecoration: "none", color: "#266AED" }}>
                  <i className="ri-download-2-line"></i>
                  {/* <img src={downloadIcon} style={{ marginRight: "12px",marginTop:"5px" }}/> */}
                  <Typography variant="body" sx={{ ml: 1, textTransform: "none" }}>
                    Download Non-disclosure Agreement
                  </Typography>
                </a>
              </Grid>
            </Box>
            <Box sx={{ paddingLeft: "1%", paddingRight: "1%" }}>
              <PdfNdaUploadField handleImage={handleImage} selectedFile={selectedFile} />
            </Box>

            <Box sx={{ paddingLeft: "1%", paddingRight: "1%" }}>
              <Typography
                sx={{
                  fontWeight: "500",
                  mt: "5px",
                  fontSize: "14px",
                  mb: "7px",
                  // color: isLightTheme ? "#091E42" : "#fff",
                }}
                variant="h6">
                Attachment
              </Typography>

              <Stack
                sx={{
                  border: "1px solid #E6ECF5",
                  padding: "16px",
                  borderRadius: "8px",
                  background: isLightTheme ? "#FAFCFF" : "#1E2A41",
                  // maxHeight: 200,
                  height: "75px",
                  color: isLightTheme ? "#091E42" : "#FFFFFF",
                  // overflowY: "auto",
                }}>
                {!selectedFile?.name ? (
                  <></>
                ) : (
                  <>
                    <Grid item xs={12} sx={{}}>
                      <Grid container>
                        <Grid item xs={1} sx={{ paddingTop: "1%" }}>
                          <img src={pdfSvg} />
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          sx={{
                            paddingTop: "2%",
                            textAlign: "left",
                            paddingRight: "2%",
                          }}>
                          <Typography>{selectedFile?.name}</Typography>
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

            {/* <>
              {!selectedFile?.name ? (
                <></>
              ) : (
                <>
                  <Grid container sx={{ paddingBottom: "1%" }}>
                    <Grid xs={12} sx={{ paddingBottom: "1%" }}>
                      <Typography variant="h5" sx={{ color: "" }}>
                        Attachment
                      </Typography>
                    </Grid>
                    <Grid container>
                      <Grid item xs={1} sx={{ paddingTop: "3%" }}>
                        <img src={actionIcon} />
                      </Grid>
                      <Grid
                        item
                        xs={11}
                        sx={{
                          border: "1px solid #DADCDF",
                          borderRadius: "2px",
                          padding: "2%",
                        }}>
                        <Grid container>
                          <Grid item xs={1} sx={{ paddingTop: "1%" }}>
                            <img src={pdfSvg} />
                          </Grid>
                          <Grid
                            item
                            xs={10}
                            sx={{
                              paddingTop: "2%",
                              textAlign: "left",
                              paddingRight: "2%",
                            }}>
                            <Typography>{selectedFile?.name}</Typography>
                          </Grid>
                          <Grid item xs={1}>
                            <Button onClick={removeImage}>
                              <img src={deleteIcon} />
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              )}
            </> */}
          </Box>
          <Box
            sx={{
              flex: "0 0 64px",
              borderTop: "2px solid #F2F6FC",
              backgroundColor: "#FFFFFF",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 2%",

              bottom: "0px",
              borderRadius: "8px",
            }}>
            <Grid container sx={{ padding: "2%" }}>
              <Grid item xs={6}>
                <Button
                  sx={{
                    width: "120px",
                    textTransform: "none",
                    backgroundColor: "#F4F7FE",
                    color: "#62728F",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#F4F7FE",
                      color: "#62728F",
                      border: "1px solid #F4F7FE",
                    },
                  }}
                  onClick={() => handleClose()}>
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Grid container sx={{ justifyContent: "right" }}>
                  <Button
                    type="submit"
                    sx={{
                      width: "128px",
                      textTransform: "none",
                      backgroundColor: "#2E58FF",
                      color: "#FFFFFF",

                      borderRadius: "8px",
                      "&.Mui-disabled": {
                        // background: "#eaeaea",
                        color: "#FFFFFF",
                      },
                      "&:hover": {
                        backgroundColor: "#2E58FF",
                        color: "#FFFFFF",
                        // border: "1px solid #2E58FF",
                      },
                    }}
                    // onClick={() => handleChange()}
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

export default NDAuploadModal;
