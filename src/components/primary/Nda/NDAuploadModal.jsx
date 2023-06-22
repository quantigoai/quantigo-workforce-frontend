import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography,} from "@mui/material";
import {styled} from "@mui/material/styles";
import React, {useEffect, useState} from "react";
import {useAlert} from "react-alert";
import {useDropzone} from "react-dropzone";
import {useDispatch, useSelector} from "react-redux";
import pdfSvg from "../../../assets/images/PDF.svg";
import actionIcon from "../../../assets/images/drag_indicator_24px.png";
import downloadIcon from "../../../assets/images/fi_download.png";
import deleteIcon from "../../../assets/images/fi_trash-2.png";
import croxButton from "../../../assets/images/u_multiply.png";
import Ndafile from "../../../assets/ndifile/NDA - Independant Contractor.docx_2.pdf";
import {signingNda} from "../../../features/slice/userSlice";
import "./ndaUpload.css";
import PdfNdaUploadField from "./PdfNdaUploadField";

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
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept,
      onDrop,
    });
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const handleImage = (e) => {
    setCoverImageFile(e[0]);
    setSelectedFile(e[0]);
    setIsSelected(true);
    const file = e[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };
  const removeImage = () => {
    setCoverImageFile([]);
    setSelectedFile([]);
    setCoverImage(null);
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
  function deleteNda() {
    acceptedFiles.length = 0;
  }

  // function handleClickOpen() {
  //   setOpen(true);
  // }

  // function handleClose() {
  //   setOpen(false);
  // }

  function handleClick() {
    setClicked(true);
  }
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
  return (
    <>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <Dialog
        PaperProps={{
          sx: {
            width: "80vh",
            maxHeight: 700,
          },
        }}
        open={openModal}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description">
        <Grid container>
          <Grid xs={10}>
            <DialogTitle id="dialog-title" sx={{ color: "#090080" }}>
              {"Upload NDA Form"}
            </DialogTitle>
          </Grid>
          <Grid xs={2}>
            <DialogTitle id="dialog-title">
              <Button
                onClick={() => {
                  handleClose();
                }}>
                <img src={croxButton} />
              </Button>
            </DialogTitle>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container>
            <Typography variant="h6" sx={{ color: "#090080" }}>
              Steps
            </Typography>
          </Grid>
          <Grid container>
            <Typography variant=" subtitle1" sx={{ color: "#090080" }}>
              1. Downlaod NDA form.
            </Typography>
          </Grid>
          <Grid container>
            <Typography variant=" subtitle1" sx={{ color: "#090080" }}>
              2. Sign the form.
            </Typography>
          </Grid>
          <Grid container>
            <Typography variant=" subtitle1" sx={{ color: "#090080" }}>
              3. Upload the signed document.
            </Typography>
          </Grid>
        </DialogContent>
        <DialogContent>
          <Grid>
            <PdfNdaUploadField
              handleImage={handleImage}
              selectedFile={selectedFile}
            />
          </Grid>
        </DialogContent>
        <DialogContent>
          <Grid container sx={{ paddingBottom: "1%" }}>
            <Grid xs={1} sx={{ paddingTop: "1%" }}>
              <a href={Ndafile} download="Nda_File.pdf">
                <img src={downloadIcon} />
              </a>
            </Grid>
            <Grid xs={11}>
              <a href={Ndafile} download="Nda_File.pdf">
                <Typography variant="h5" sx={{ color: "#2D58FF" }}>
                  Download NDA Form
                </Typography>
              </a>
            </Grid>
          </Grid>
          <>
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
          </>
        </DialogContent>

        <DialogActions>
          <Grid
            container
            sx={{
              paddingLeft: "2%",
              paddingRight: "2%",
              paddingBottom: "1%",
            }}>
            {!selectedFile?.name ? (
              <ButtonStyle disabled variant="contained">
                SUBMIT
              </ButtonStyle>
            ) : (
              <ButtonStyle
                variant="contained"
                disabled={isLoading}
                onClick={handleSubmission}>
                SUBMIT
              </ButtonStyle>
            )}
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NDAuploadModal;
