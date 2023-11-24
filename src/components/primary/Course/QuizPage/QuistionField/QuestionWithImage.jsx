import { Box, Button, Grid, IconButton, TextField, Typography, styled } from "@mui/material";
import React, { useState } from "react";
export const TextFieldQuestion = styled(TextField)(() => ({
  borderRadius: "5px",

  "& .MuiOutlinedInput-root": {
    height: "35px",
    fontSize: "14px",
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",

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
    color: "#12B76A",
    "&.Mui-error": {
      color: "#F04438",
    },
  },
}));
const QuestionWithImage = ({ handleChangeInput, inputField, inputFields }) => {
  const [coverImageFile, setCoverImageFile] = useState(null);
  console.log("🚀 ~ file: QuestionWithImage.jsx:35 ~ QuestionWithImage ~ coverImageFile:", coverImageFile)
  const [coverImage, setCoverImage] = useState(null);
  console.log("🚀 ~ file: QuestionWithImage.jsx:37 ~ QuestionWithImage ~ coverImage:", coverImage)

  const handleImage = (e) => {
    setCoverImageFile(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
    handleChangeInput(inputField.uniqueId, e)
  };

  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={6} sx={{ paddingRight: "1%" }}>
            {" "}
            <Typography
              variant="wpf_h7_medium"
              sx={{
                mb: 0,
                color: "neutral.N300",
              }}>
              Question Name
            </Typography>
            <Box sx={{ width: "100%" }}>
              <TextFieldQuestion
                size="small"
                type={"text"}
                id="outlined-basic"
                // {...field}
                fullWidth
                variant="outlined"
                name="questionText"
                // required={label === "Benchmark" ? false : true}
                onChange={(event) => handleChangeInput(inputField.uniqueId, event)}
                sx={{
                  backgroundColor: "neutral.N000",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            {" "}
            <Typography
              variant="wpf_h7_medium"
              sx={{
                mb: 0,
                color: "neutral.N300",
              }}>
              Upload Image
            </Typography>
            <Box sx={{ width: "100%" }}>
              <TextFieldQuestion
                size="small"
                type={"text"}
                id="outlined-basic"
                // {...field}
                fullWidth
                variant="outlined"
                // required={label === "Benchmark" ? false : true}
                sx={{
                  backgroundColor: "neutral.N000",
                }}
              />
              <input
                style={{ display: "none" }}
                id="upload-photo"
                name="questionImage"
                type="file"
                accept="image/png,  image/jpeg, image/jpg"
                onChange={handleImage}
                // onchange="handleImageChange"
              />
              <label htmlFor="upload-photo">
                <Button
                  sx={{
                    border: "1px solid #ff1744",
                  
                   
                    zIndex: 2,
                  }}
                  color="primary"
                  aria-label="upload picture"
                  component="span">
                  {/* <img src={EditIconProfile} /> */}
                  {/* <PhotoCameraIcon /> */}
                </Button>
              </label>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default QuestionWithImage;
