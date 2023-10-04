import { Box, Button, Grid, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../../App";
import croxButton from "../../../assets/images/u_multiply.png";
import { updateMyDocuments } from "../../../features/slice/userSlice";
import DocumentImageUpload from "./DocumentImageUpload";
import ProjectModalHeader from "../ProjectLIstNew2/ProjectModalHeader";
export const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { height: "80%", fontSize: "14px" },
}));
export const MySelect = styled(Select)(() => ({
  border: "2px solid #E6ECF5",
  // padding: "5px 0px 0px 0px",
  borderRadius: "8px",
  background: "none",
  // backgroundColor:"red",
  fontSize: "14px",
  height: "7%",
}));
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
  height: "30px",
});

const UpdateDocumentModal = ({ openModal, handleClose }) => {
  const [coverImageFile, setCoverImageFile] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.user);
  const alert = useAlert();

  const { register, handleSubmit } = useForm();

  const handleImage = (e) => {
    setCoverImageFile(e[0]);
    const file = e[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };

  const removeImage = () => {
    setCoverImageFile([]);
    setCoverImage(null);
  };
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("documentsImage", coverImageFile);
    formData.append("documentsType", data.documentsType);
    formData.append("documentNo", data.documentNo);
    const finalData = {
      id: user._id,
      formData: formData,
    };
    console.log("🚀 ~ file: UpdateDocumentModal.jsx:86 ~ onSubmit ~ finalData:", finalData)
    // dispatch(updateMyDocuments(finalData)).then((action) => {
    //   if (action.payload?.status === 200 || action.payload?.status === 201) {
    //     if (
    //       action.payload.data.isNDAApproved !== "rejected" &&
    //       action.payload.data.isDocumentsSubmitted !== "rejected"
    //     ) {
    //       socket.emit("uploadNDAOrDocuments", user);
    //     }
    //     alert.show("User Documents update successfully", { type: "success" });
    //     handleClose();
    //   } else {
    //     alert.show("Failed to update User Documents", { type: "error" });
    //   }
    // });
  };

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
            height: { xl: "53%", lg: "75%" },
            width: { xl: "35%", lg: "40%" },
          }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ flex: "0 0 5%" }}>
              <ProjectModalHeader handleCreateProjectClose={handleClose} modalTitle={"Upload Document"} />
            </Box>

            <Box
              sx={{
                flex: "1",
                overflowY: "auto",
                padding: "3%",
              }}>
              <Box sx={{}}>
                <Grid container sx={{ padding: "0%", paddingLeft: "0%" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      mb: 1,
                      // color: isLightTheme ? "#091E42" : "#FFFFFF",
                      // paddingBottom:"1%"
                    }}>
                    Document Type
                  </Typography>

                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    variant="outlined"
                    fullWidth
                    // defaultValue={"reject"}
                    placeholder="Select"
                    sx={{
                      border: "2px solid #E6ECF5",
                      // padding: "5px 0px 0px 0px",
                      borderRadius: "8px",
                      background: "none",
                      // backgroundColor:"red",
                      fontSize: "14px",
                      height: "43px",
                    }}
                    {...register("documentsType", { required: true })}>
                    <MenuItem value={"NID"} sx={{ fontSize: "14px" }}>
                      NID
                    </MenuItem>
                    <MenuItem value={"passport"} sx={{ fontSize: "14px" }}>
                      Passport
                    </MenuItem>
                  </Select>
                  {/* <FormControl
                  variant="filled"
                  fullWidth
                  sx={{
                    backgroundColor: "#F8F8F8",
                    border: "1px solid #DADCDF",
                    borderRadius: "4px",
                    // width: "238.5px",
                    height: "58px",
                  }}>
                  <InputLabel id="demo-simple-select-filled-label">Document Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    {...register("documentsType", { required: true })}>
                    <MenuItem value={"NID"}>NID</MenuItem>
                    <MenuItem value={"passport"}>Passport</MenuItem>
                  </Select>
                </FormControl> */}
                </Grid>

                <Grid container sx={{ padding: "0%", paddingTop: "2%", paddingBottom: "1%" }}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      mb: 1,
                      // color: isLightTheme ? "#091E42" : "#FFFFFF",
                      paddingBottom: "0%",
                    }}>
                    Document NO
                  </Typography>
                  <MyTextField
                    // type={isNumber || isNumberPdr ? "number" : "text"}
                    //   id="outlined-basic"
                    variant="outlined"
                    // {...field}
                    fullWidth
                    // multiline
                    // rows={5}
                    InputProps={{ disableUnderline: true }}
                    {...register("documentNo", { required: true })}
                  />

                  {/* <TextField
                  id="input-with-icon-textfield"
                  fullWidth
                  label="Document NO"
                  variant="filled"
                  sx={{
                    backgroundColor: "#F8F8F8",
                    border: "1px solid #DADCDF",
                    borderRadius: "4px",
                  }}
                  {...register("documentNo", { required: true })}
                /> */}
                </Grid>

                <Grid container>
                  <DocumentImageUpload
                    coverImageFile={coverImageFile}
                    coverImage={coverImage}
                    removeImage={removeImage}
                    handleImage={handleImage}
                  />
                </Grid>
              </Box>
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
                      disabled={isLoading}
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
          </form>
        </Box>
      </Modal>

      {/* <Dialog
        PaperProps={{
          sx: {
            width: "80vh",
            // maxHeight: 500,
          },
        }}
        open={openModal}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <Grid container>
          <Grid xs={10}>
            <DialogTitle id="dialog-title" sx={{ color: "#090080" }}>
              {"Upload Document"}
            </DialogTitle>
          </Grid>
          <Grid xs={2}>
            <DialogTitle id="dialog-title">
              <Button
                onClick={() => {
                  handleClose();
                }}
              >
                <img src={croxButton} />
              </Button>
            </DialogTitle>
          </Grid>
        </Grid>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <Grid container>
              <DocumentImageUpload
                coverImageFile={coverImageFile}
                coverImage={coverImage}
                removeImage={removeImage}
                handleImage={handleImage}
              />
            </Grid>
          </DialogContent>
          <DialogContent>
            <Grid container sx={{ padding: "0%", paddingLeft: "0%" }}>
              <FormControl
                variant="filled"
                fullWidth
                sx={{
                  backgroundColor: "#F8F8F8",
                  border: "1px solid #DADCDF",
                  borderRadius: "4px",
                  // width: "238.5px",
                  height: "58px",
                }}
              >
                <InputLabel id="demo-simple-select-filled-label">
                  Document Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  {...register("documentsType", { required: true })}
                >
                  <MenuItem value={"NID"}>NID</MenuItem>
                  <MenuItem value={"passport"}>Passport</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </DialogContent>
          <DialogContent>
            <Grid container sx={{ padding: "0%", paddingLeft: "0%" }}>
              <TextField
                id="input-with-icon-textfield"
                fullWidth
                label="Document NO"
                variant="filled"
                sx={{
                  backgroundColor: "#F8F8F8",
                  border: "1px solid #DADCDF",
                  borderRadius: "4px",
                }}
                {...register("documentNo", { required: true })}
              />
            </Grid>
          </DialogContent>

          <DialogActions>
            <Grid
              container
              sx={{
                paddingLeft: "2%",
                paddingRight: "2%",
                paddingBottom: "1%",
              }}
            >
              {!coverImageFile?.name ? (
                <>
                  {" "}
                  <ButtonStyle variant="contained" disabled type="submit">
                    SUBMIT
                  </ButtonStyle>
                </>
              ) : (
                <>
                  {" "}
                  <ButtonStyle
                    variant="contained"
                    disabled={isLoading}
                    type="submit"
                  >
                    SUBMIT
                  </ButtonStyle>
                </>
              )}
            </Grid>
          </DialogActions>
        </form>
      </Dialog> */}
    </>
  );
};

export default UpdateDocumentModal;
