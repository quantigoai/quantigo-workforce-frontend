import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React, {useState} from "react";
import {styled} from "@mui/material/styles";
import croxButton from "../../../assets/images/u_multiply.png";
import {useDropzone} from "react-dropzone";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {updateMyDocuments} from "../../../features/slice/userSlice";
import {useAlert} from "react-alert";
import {socket} from "../../../App";
import DocumentImageUpload from "./DocumentImageUpload";

const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  borderRadius: "2px",
  width: "100%",
  height: "30px",
});

const UpdateDocumentModal = ({ openModal, handleClose, onDrop, accept }) => {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept,
      onDrop,
    });
  const [coverImageFile, setCoverImageFile] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.user);
  const alert = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const handleImage = (e) => {
  //   setCoverImageFile(e.target.files[0]);
  //   const file = e.target.files[0];
  //   if (file) {
  //     const url = URL.createObjectURL(file);
  //     setCoverImage(url);
  //   }
  // };
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
    dispatch(updateMyDocuments(finalData)).then((action) => {
      if (action.payload?.status === 200 || 201) {
        if (
          action.payload.data.isNDAApproved !== "rejected" &&
          action.payload.data.isDocumentsSubmitted !== "rejected"
        ) {
          socket.emit("uploadNDAOrDocuments", user);
        }
        alert.show("User Documents update successfully", { type: "success" });
        handleClose();
      } else {
        alert.show("Failed to update User Documents", { type: "error" });
      }
    });
  };

  return (
    <>
      <Dialog
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
                }}>
                <InputLabel id="demo-simple-select-filled-label">
                  Document Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  {...register("documentsType", { required: true })}>
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
              }}>
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
                    type="submit">
                    SUBMIT
                  </ButtonStyle>
                </>
              )}
            </Grid>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default UpdateDocumentModal;
