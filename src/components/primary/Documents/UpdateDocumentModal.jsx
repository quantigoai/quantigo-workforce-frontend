import { Box, Button, Grid, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { socket } from "../../../App";
import { updateMyDocuments } from "../../../features/slice/userSlice";
import ProjectModalHeader from "../ProjectLIstNew2/ProjectModalHeader";
import DocumentImageUpload from "./DocumentImageUpload";
import useToaster from "../../../customHooks/useToaster";

export const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": {
    height: "80%",
    fontSize: "14px",
    color: "neutral.N000",
  },
}));
export const MySelect = styled(Select)(() => ({
  border: "2px solid #E6ECF5",
  borderRadius: "8px",
  background: "none",
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
    height: "20px",
    borderRadius: "8px",
  },
  select: {
    height: "20px",
  },
};
const ButtonStyle = styled(Button)({
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

  const toast = useToaster();

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
  const [documentsType, setDocumentsType] = useState("");
  const [documentNo, setDocumentNo] = useState("");

  // const onSubmit = (data) => {
  const handleChange = (data) => {
    const formData = new FormData();
    formData.append("documentsImage", coverImageFile);
    formData.append("documentsType", documentsType);
    formData.append("documentNo", documentNo);

    const finalData = {
      id: user._id,
      formData: formData,
    };
    dispatch(updateMyDocuments(finalData)).then((action) => {
      if (action.payload?.status === 200 || action.payload?.status === 201) {
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
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            height: { xl: "56%", lg: "75%" },
            width: { xl: "35%", lg: "40%" },
          }}
        >
          <Box sx={{ flex: "0 0 5%" }}>
            <ProjectModalHeader handleCreateProjectClose={handleClose} modalTitle={"Upload Document"} />
          </Box>

          <Box
            sx={{
              flex: "1",
              overflowY: "auto",
              padding: "3%",
            }}
          >
            <Box>
              <Grid container sx={{ padding: "0%", paddingLeft: "0%" }}>
                <Typography
                  variant={"wpf_p4_semiBold"}
                  sx={{
                    mb: 1,
                  }}
                >
                  Document Type
                </Typography>

                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  variant="outlined"
                  fullWidth
                  placeholder="Select"
                  sx={{
                    border: "2px solid #E6ECF5",
                    borderRadius: "8px",
                    background: "none",
                    fontSize: "14px",
                    height: "43px",
                  }}
                  onChange={(e) => setDocumentsType(e.target.value)}
                >
                  <MenuItem value={"NID"} sx={{ fontSize: "14px" }}>
                    NID
                  </MenuItem>
                  <MenuItem value={"passport"} sx={{ fontSize: "14px" }}>
                    Passport
                  </MenuItem>
                </Select>
              </Grid>

              <Grid container sx={{ padding: "0%", paddingTop: "2%", paddingBottom: "1%" }}>
                <Typography
                  variant={"wpf_p4_semiBold"}
                  sx={{
                    mb: 1,
                  }}
                >
                  Document NO
                </Typography>
                <MyTextField
                  variant="outlined"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  placeholder="Enter Document No"
                  onChange={(e) => setDocumentNo(e.target.value)}
                />
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
                    disabled={isLoading}
                    sx={{
                      width: "128px",
                      textTransform: "none",
                      backgroundColor: "#2E58FF",
                      color: "#FFFFFF",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#F4F7FE",
                        color: "#62728F",
                        border: "1px solid #F4F7FE",
                      },
                    }}
                    onClick={handleChange}
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

export default UpdateDocumentModal;
