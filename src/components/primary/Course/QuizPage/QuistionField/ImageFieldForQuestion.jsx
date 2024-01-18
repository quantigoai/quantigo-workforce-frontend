/*
 * File           : ImageFieldForQuestion.js
 * Project        : wmpfrontv2
 * Created Date   : We 13 Dec 2023 12:26:49
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Wed Dec 13 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import React, {useState} from "react";

export const TextFieldQuestion = styled(TextField)(() => ({
  // borderRadius: "8px 0px 0px 8px",
  "& .MuiOutlinedInput-root": {
    height: "40px",
    fontSize: "14px",
    border: "2px solid #E6ECF5 !important",
    backgroundColor: "#F9FAFB",
    // borderRadius: "8px",
    borderRadius: "8px 0px 0px 8px",
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
    color: "#F04438",
    "&.Mui-error": {
      color: "#F04438",
    },
  },
}));
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 10,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 10,
});

const ImageFieldForQuestion = ({ inputField, handleUpdate, handleChangeInput, update }) => {
  const [error, setError] = useState("");
  return (
    <>
      <Grid item xs={6}>
        <Typography
          variant="wpf_h7_medium"
          sx={{
            mb: 0,
            color: "neutral.N300",
          }}
        >
          Upload Image
        </Typography>
        <Box sx={{ width: "100%", height: "50px" }}>
          <Grid container>
            <Box sx={{ width: "70%" }}>
              <TextFieldQuestion
                sx={
                  {
                    // height: '35px',
                    // fontSize: '14px',
                    // border: '2px solid #E6ECF5 !important',
                    // borderRadius: '8px 0px 0px 8px',
                  }
                }
                defaultValue={inputField?.question?.questionImage?.name}
                disabled={true}
                size="small"
                type={"text"}
                id="outlined-basic"
                placeholder={inputField?.question?.questionImage?.name}
                // {...field}
                fullWidth
                variant="outlined"
                // required={label === "Benchmark" ? false : true}
                helperText={error}
              />
            </Box>

            <Box sx={{ width: "30%" }}>
              {/* <input
                style={{ display: 'none' }}
                id="upload-photo"
                name="questionImage"
                type="file"
                accept="image/png,  image/jpeg, image/jpg"
                // onChange={(e) => handleImage(e, inputField._id)}
                onChange={(e) => handleImageFn(e, inputField._id)}
                // onchange="handleImageChange"
              /> */}
              <Button
                component="label"
                // variant="contained"
                // startIcon={<CloudUploadIcon />}
                // onSubmit={(e) => e.preventDefault()}
                sx={{
                  height: "40px",
                  width: "100%",
                  fontSize: "14px",
                  border: "2px solid #E6ECF5 !important",
                  borderRadius: "0px 8px 8px 0px",
                  zIndex: 2,
                  backgroundColor: "#fff",
                }}
              >
                <i color="#2E58FF" className="ri-upload-2-line"></i>
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
                <VisuallyHiddenInput
                  type="file"
                  name="questionImage"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(e) => {
                    const selectedFile = e.target.files[0];

                    // Check if a file is selected
                    if (selectedFile) {
                      const fileSize = selectedFile.size; // Size in bytes
                      const maxSizeInBytes = 512 * 1024; // 512KB

                      if (fileSize <= maxSizeInBytes) {
                        setError("");
                        update
                          ? handleUpdate(selectedFile, "questionImage", inputField)
                          : handleChangeInput(inputField.uniqueId, e);
                      } else {
                        setError("Error: File size exceeds 512KB");
                      }
                    }
                  }}
                />

                {/* <VisuallyHiddenInput
                  type="file"
                  name="questionImage"
                  accept="image/png,  image/jpeg, image/jpg"
                  name="questionImage"
                  onChange={
                    update
                      ? (e) => handleUpdate(e.target.files[0], "questionImage", inputField)
                      : (e) => handleChangeInput(inputField.uniqueId, e)
                  }
                /> */}
              </Button>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default ImageFieldForQuestion;
