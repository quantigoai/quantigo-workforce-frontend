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
const QuestionWithImage = ({ handleChangeInput, inputField, inputFields, handleUpdate, update }) => {

  const [coverImageFile, setCoverImageFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const handleImage = (e) => {
    setCoverImageFile(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
    if (update) {
      handleUpdate(e.target.files[0], "questionImage", inputField);
   
    } else {
      handleChangeInput(inputField.uniqueId, e);
    }
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
              }}
            >
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
                defaultValue={inputField.question.questionText}
                // required={label === "Benchmark" ? false : true}
                // onChange={(event) => handleChangeInput(inputField.uniqueId, event)}
                onChange={(event) =>
                  update
                    ? handleUpdate(event.target.value, "questionText", inputField)
                    : handleChangeInput(inputField.uniqueId, event)
                }
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
              }}
            >
              Upload Image
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Grid container>
                <Box sx={{ width: "70%" }}>
                  <TextField
                    sx={{
                      height: "35px",
                      fontSize: "14px",
                      border: "2px solid #E6ECF5 !important",
                      borderRadius: "8px 0px 0px 8px",
                    }}
                    size="small"
                    type={"text"}
                    id="outlined-basic"
                    // placeholder="Choose "
                    // {...field}
                    fullWidth
                    variant="outlined"
                    // required={label === "Benchmark" ? false : true}
                  />
                </Box>

                <Box sx={{ width: "30%" }}>
                  {" "}
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
                        height: "35px",
                        width: "100%",
                        fontSize: "14px",
                        border: "2px solid #E6ECF5 !important",

                        borderRadius: "0px 8px 8px 0px",
                        zIndex: 2,
                      }}
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <i className="ri-upload-2-line"></i>
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
                    </Button>
                  </label>
                </Box>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default QuestionWithImage;
