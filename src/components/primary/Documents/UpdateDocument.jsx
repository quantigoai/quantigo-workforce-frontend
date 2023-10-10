/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Documents/UpdateDocument.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, March 2nd 2023, 2:45:42 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

// TODO Remove this file and its references
import { PhotoCamera } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import { updateMyDocuments } from "../../../features/slice/userSlice";

const UpdateDocument = () => {
  const dispatch = useDispatch();
  const teamicondiv = { paddingLeft: "5%", paddingTop: "2%" };
  const paperstyle = {
    padding: "3%",
    width: "80%",
    height: "100%",
    borderRadius: 10,
    margin: "10px auto",
  };
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const { user } = useSelector((state) => state.user);
  const alert = useAlert();

  const toast = useToaster();
  const { register, handleSubmit } = useForm();

  const handleImage = (e) => {
    setCoverImageFile(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };
  const removeImage = () => {
    setCoverImageFile(null);
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
      if (action.payload?.status === 200 || action.payload?.status === 201) {
        toast.trigger("User Documents update successfully", "success");
      } else {
        toast.trigger("Failed to update Document", "error");
      }
    });
  };
  return (
    <>
      <Box style={{ background: "#F5F7F9", width: "100%" }}>
        <Grid container style={teamicondiv}>
          <Grid xs={1} style={{ paddingLeft: "5%" }}>
            <Avatar sx={{ bgcolor: "#D3ECFA" }}>
              <UploadFileIcon style={{ color: "#1974D2" }} />
            </Avatar>
          </Grid>
          <Grid xs={2}>
            <Typography variant="h5" style={{ color: "#1974D2" }}>
              Update Documents
            </Typography>
          </Grid>
        </Grid>

        <Grid xs={6}>
          <Box style={{ padding: "0px", paddingLeft: "0%" }}>
            <Paper elevation={2} style={paperstyle}>
              {user.documentNo ? (
                <>
                  <Grid>
                    <Typography variant="h4">Your Document</Typography>
                  </Grid>
                  <Grid>
                    <Typography variant="h4">{user.documentsType}</Typography>
                  </Grid>
                  <Grid>
                    <Typography variant="h5">{user.documentNo}</Typography>
                  </Grid>
                  <Grid>
                    <img src={`data:image/jpeg;base64,${user.documentsImage}`} />
                  </Grid>
                </>
              ) : (
                <>
                  <Grid container style={{ paddingTop: "1%", paddingLeft: "35%" }}>
                    <Typography variant="h4">Update Document</Typography>
                  </Grid>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container style={{ paddingTop: "5%", paddingLeft: "10%" }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Document Type</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Level"
                          // defaultValue={course && course.level || "basic"}
                          {...register("documentsType", { required: true })}
                        >
                          <MenuItem value={"NID"}>NID</MenuItem>
                          <MenuItem value={"passport"}>Passport</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid container style={{ paddingTop: "5%", paddingLeft: "10%" }}>
                      <TextField
                        fullWidth
                        name="Document NO"
                        label="Document NO"
                        {...register("documentNo", { required: true })}
                      ></TextField>
                    </Grid>
                    <Grid container style={{ paddingTop: "5%", paddingLeft: "20%" }}>
                      <Box>
                        <img width={"100%"} height={150} src={coverImage} alt="" />
                      </Box>
                      <Stack direction="row" alignItems="center" justifyContent={"center"} spacing={2}>
                        <Typography variant={"body1"}>Upload NID Image</Typography>
                        <IconButton color="primary" aria-label="upload picture" component="label">
                          <input hidden accept="image/*" type="file" onChange={handleImage} />
                          <PhotoCamera />
                        </IconButton>
                        <IconButton color="warning" aria-label="remove picture" component="label" onClick={removeImage}>
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                    </Grid>

                    <Grid container style={{ paddingTop: "5%", paddingLeft: "50%" }}>
                      <Button type="submit" variant="contained">
                        Update
                      </Button>
                    </Grid>
                  </form>
                </>
              )}
            </Paper>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default UpdateDocument;

// TODO Try this for image buffer
// //convert buffer data to image local url
// const handleBufferToUrl = (bufferArray) => {
//     const bytes = new Uint8Array(bufferArray)
//     const blob = new Blob([bytes.buffer]);
//     setImgSrc(URL.createObjectURL(blob), 'name', 'resizeable=1')
// }

// // get user image buffer and name from server
// useEffect(() => {
//     setIsLoading(true);
//     getImgName(id)
//         .then(({ data }) => {
//             setName(data.name)
//             handleBufferToUrl(data.avatar?.data);
//         })
//         .catch(() => setName(''))
//         .finally(() => setIsLoading(false))
// }, [])
