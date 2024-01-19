import { LoadingButton } from "@mui/lab";
import { Alert, Box, Button, Grid, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import { updateMyDocuments } from "../../../features/slice/userSlice";
import ProjectModalHeader from "../ProjectLIstNew2/ProjectModalHeader";
import UploadImagesField from "../EditProfile/EditProfilePage/VerificationInfo/UploadImagesField";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
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

const UpdateDocumentModal = ({ openModal, handleClose }) => {
  const { user, isLoading } = useSelector((state) => state.user);
  const [coverImageFile, setCoverImageFile] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const [documentsType, setDocumentsType] = useState(user?.documentsType);
  const [documentNo, setDocumentNo] = useState(user?.documentNo);
  const [imagesCopy, setImagesCopy] = useState(user?.documentsImage);
  const [isDocumentNoValid, setDocumentNoValid] = useState(false);
  const [isDocumentTypeValid, setDocumentTypeValid] = useState(false);
  const [images, setImages] = useState(user?.documentsImage);
  const [removeImagesUpdate, setRemoveImagesUpdate] = useState([
    {
      name: "",
      isRemoved: false,
    },
  ]);
  const [removeImages, setRemoveImages] = useState([]);

  const toast = useToaster();
  const maxSize = 1024000;
  const handleDocumentNoChange = (e) => {
    const documentNo = e.target.value;
    setDocumentNo(e.target.value);
    // Check if the document number is not empty
    setDocumentNoValid(documentNo.trim() !== "");
  };

  const handleDocumentTypeChange = (e) => {
    const documentType = e.target.value;
    setDocumentsType(e.target.value);
    // Check if a document type is selected

    setDocumentTypeValid(documentType !== "");
  };
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

  // const onSubmit = (data) => {
  const handleChange = (data) => {
    const formData = new FormData();
    // formData.append("documentsImage", coverImageFile);
    formData.append("documentsType", documentsType);
    formData.append("documentNo", documentNo);
    images.forEach((item) => {
      if (item.name) {
        formData.append("documentsImage", item);
      }
    });

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
    const finalData = {
      id: user._id,
      formData: formData,
    };

    dispatch(updateMyDocuments(finalData)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, "error");
      } else {
        toast.trigger("Your Documents has been update successfully.", "success");
        handleClose();
        setCoverImage(null);
        setDocumentNoValid(false);
        setDocumentTypeValid(false);
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
            height: {
              lg: "80%",
              xl: "74%",
              xxl: "70%",
            },
            width: {
              lg: "50%",
              xl: "45%",
              xxl: "45%",
            },
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
                  Document Type<span style={{ color: "red" }}>*</span>
                </Typography>

                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  variant="outlined"
                  fullWidth
                  placeholder="Select"
                  value={documentsType}
                  sx={{
                    border: "2px solid #E6ECF5",
                    borderRadius: "8px",
                    background: "none",
                    fontSize: "14px",
                    height: "43px",
                  }}
                  onChange={(e) => {
                    // setDocumentsType(e.target.value);
                    handleDocumentTypeChange(e); // Validate document type
                  }}
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
                  Document No.<span style={{ color: "red" }}>*</span>
                </Typography>
                <MyTextField
                  variant="outlined"
                  fullWidth
                  value={documentNo}
                  InputProps={{ disableUnderline: true }}
                  placeholder="Enter Document No."
                  onChange={(e) => {
                    // setDocumentNo(e.target.value);
                    handleDocumentNoChange(e); // Validate document number
                  }}
                  icon={<InfoOutlinedIcon />}
                />
              </Grid>

              <Grid container sx={{}}>
                <UploadImagesField
                  editAble={true}
                  label={"sdfsfdsf"}
                  files={images}
                  setFiles={setImages}
                  setImagesCopy={setImagesCopy}
                  imagesCopy={imagesCopy}
                  setRemoveImages={setRemoveImages}
                />
                {/* <DocumentImageUpload
                  coverImageFile={coverImageFile}
                  coverImage={coverImage}
                  removeImage={removeImage}
                  handleImage={handleImage}
                /> */}
                {/* <UploadMultipleImage /> */}
              </Grid>
              {user?.rejectionCause && (
                <Box sx={{ padding: "10px" }}>
                  <Alert
                    severity="warning"
                    sx={{
                      border: "1px solid #F2A200",
                      color: "warning.400",
                      backgroundColor: "warning.100",
                      borderRadius: "6px",
                      height: "50px",
                    }}
                  >
                    Rejection Cause: {user?.rejectionCause}
                  </Alert>
                </Box>
              )}
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
                  <LoadingButton
                    type="submit"
                    // disabled={true}
                    loading={isLoading}
                    // disabled={
                    //   !isDocumentNoValid ||
                    //   !isDocumentTypeValid ||
                    //   // !coverImage ||
                    //   // isLoading ||
                    //   // coverImageFile?.size > maxSize
                    //   // documentNo && documentsType &&
                    //   images.length === 0
                    // }
                    disabled={!documentsType || !documentNo || images.length === 0}
                    sx={{
                      width: "128px",
                      textTransform: "none",
                      backgroundColor: "#2E58FF",
                      color: "#FFFFFF",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#476CFF",
                        color: "#FFFFFF",
                      },
                      "&.Mui-disabled": {
                        background: "#B6C9F0",
                        color: "#FFFFFF",
                      },
                    }}
                    onClick={handleChange}
                  >
                    Upload
                  </LoadingButton>
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
