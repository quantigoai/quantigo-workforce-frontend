import {Box, Grid, styled, Typography} from "@mui/material";
import React, {useState} from "react";
import ImageUploadIndex from "./ImageUploadIndex";
import {RadioOption} from "../BasicOptionField";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 20,
  height: 20,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: theme.palette.mode === "dark" ? "rgba(57,75,89,.5)" : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#2E58FF",
  backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&::before": {
    display: "block",
    width: 20,
    height: 20,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});
const ImageOptionField = ({ handleChangeInput, inputField, inputFields, handleUpdate, update }) => {
 
  const [coverImageFile, setCoverImageFile] = useState([]);
  const [coverImage1, setCoverImage1] = useState(null);
  const [coverImage2, setCoverImage2] = useState(null);
  const [coverImage3, setCoverImage3] = useState(null);
  const [coverImage4, setCoverImage4] = useState(null);
  const [checkValue, setCheckValue] = useState(inputField?.correctAnswerIndex);
  const handleImage1 = (e) => {
    setCoverImageFile(e[0]);

    // {
    //   inputField?.possibleAnswers?.map((possibleAnswer, index) => (
    // )) }
    if (update) {
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage1(url);
      }
      handleUpdate(e[0], "possibleAnswers_0", inputField);
    } else {
      handleChangeInput((inputField.possibleAnswers[0] = e[0]), e[0]);
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage1(url);
      }
    }
  };
  const handleImage2 = (e) => {
    setCoverImageFile(e[0]);

    // {
    //   inputField?.possibleAnswers?.map((possibleAnswer, index) => (
    // )) }
    if (update) {
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage2(url);
      }
      handleUpdate(e[0], "possibleAnswers_1", inputField);
    } else {
      handleChangeInput((inputField.possibleAnswers[1] = e[0]), e[0]);
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage2(url);
      }
    }
  };
  const handleImage3 = (e) => {
    setCoverImageFile(e[0]);

    // {
    //   inputField?.possibleAnswers?.map((possibleAnswer, index) => (
    // )) }
    if (update) {
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage3(url);
      }
      handleUpdate(e[0], "possibleAnswers_2", inputField);
    } else {
      handleChangeInput((inputField.possibleAnswers[2] = e[0]), e[0]);
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage3(url);
      }
    }
  };
  const handleImage4 = (e) => {
    setCoverImageFile(e[0]);
    // {
    //   inputField?.possibleAnswers?.map((possibleAnswer, index) => (
    // )) }

    if (update) {
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage4(url);
      }
      handleUpdate(e[0], "possibleAnswers_3", inputField);
    } else {
      handleChangeInput((inputField.possibleAnswers[3] = e[0]), e[0]);
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage4(url);
      }
    }
  };

  const removeImage = () => {
    setCoverImageFile(null);
    // setCoverImage1(null);
  };
  const handleCorrectAnswerChange = (event, index, value) => {
    if (update) {
      setCheckValue(index);
      handleUpdate(index, "correctAnswerIndex", inputField);
      // handleUpdate(value, "correctAnswer", inputField);
    } else {
      handleChangeInput((inputField.correctAnswerIndex = index), event);
      // handleChangeInput((inputField.correctAnswer = value), event);
    }

    // handleChangeInput((inputField.correctAnswerIndex = index), event);
    // handleChangeInput((inputField.correctAnswer = value), event);
  };
  return (
    <>
      <Box>
        <Typography
          variant="wpf_h7_medium"
          sx={{
            mb: 0,
            color: "neutral.N300",
          }}
        >
          List of Options
        </Typography>
        {update ? (
          <>
            {" "}
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <RadioOption
                  checked={checkValue === 0}
                  onChange={(event) => handleCorrectAnswerChange(event, 0, inputField.possibleAnswers[0])}
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}
                >
                  Option A
                </Typography>{" "}
                <ImageUploadIndex
                  coverImage={coverImage1}
                  removeImage={removeImage}
                  handleImage={handleImage1}
                  // handleImage={(event) => handleChangeInput((inputField.possibleAnswers[0] = event.target.value), event)}
                  update={true}
                  defaultImage={inputField.possibleAnswers[0]}
                  inputField={inputField}
                />
              </Grid>
              <Grid item xs={3}>
                <RadioOption
                  checked={checkValue === 1}
                  onChange={(event) => handleCorrectAnswerChange(event, 1, inputField.possibleAnswers[1])}
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}
                >
                  Option B
                </Typography>
                <ImageUploadIndex
                  coverImage={coverImage2}
                  removeImage={removeImage}
                  handleImage={handleImage2}
                  update={true}
                  defaultImage={inputField.possibleAnswers[1]}
                  inputField={inputField}
                />
              </Grid>
              <Grid item xs={3}>
                <RadioOption
                  checked={checkValue === 2}
                  onChange={(event) => handleCorrectAnswerChange(event, 2, inputField.possibleAnswers[2])}
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}
                >
                  Option C
                </Typography>
                <ImageUploadIndex
                  coverImage={coverImage3}
                  removeImage={removeImage}
                  handleImage={handleImage3}
                  update={true}
                  defaultImage={inputField.possibleAnswers[2]}
                  inputField={inputField}
                />
              </Grid>
              <Grid item xs={3}>
                <RadioOption
                  checked={checkValue === 3}
                  onChange={(event) => handleCorrectAnswerChange(event, 3, inputField.possibleAnswers[3])}
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}
                >
                  Option D
                </Typography>
                <ImageUploadIndex
                  coverImage={coverImage4}
                  removeImage={removeImage}
                  handleImage={handleImage4}
                  update={true}
                  defaultImage={inputField.possibleAnswers[3]}
                  inputField={inputField}
                />
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            {" "}
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <RadioOption
                  checked={inputField?.correctAnswerIndex === 0}
                  onChange={(event) => handleCorrectAnswerChange(event, 0, inputField.possibleAnswers[0])}
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}
                >
                  Option A
                </Typography>{" "}
                <ImageUploadIndex
                  coverImage={coverImage1}
                  removeImage={removeImage}
                  handleImage={handleImage1}
                  // handleImage={(event) => handleChangeInput((inputField.possibleAnswers[0] = event.target.value), event)}
                  update={false}
                />
              </Grid>
              <Grid item xs={3}>
                <RadioOption
                  checked={inputField?.correctAnswerIndex === 1}
                  onChange={(event) => handleCorrectAnswerChange(event, 1, inputField.possibleAnswers[1])}
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}
                >
                  Option B
                </Typography>
                <ImageUploadIndex
                  coverImage={coverImage2}
                  removeImage={removeImage}
                  handleImage={handleImage2}
                  update={false}
                />
              </Grid>
              <Grid item xs={3}>
                <RadioOption
                  checked={inputField?.correctAnswerIndex === 2}
                  onChange={(event) => handleCorrectAnswerChange(event, 2, inputField.possibleAnswers[2])}
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}
                >
                  Option C
                </Typography>
                <ImageUploadIndex
                  coverImage={coverImage3}
                  removeImage={removeImage}
                  handleImage={handleImage3}
                  update={false}
                />
              </Grid>
              <Grid item xs={3}>
                <RadioOption
                  checked={inputField?.correctAnswerIndex === 3}
                  onChange={(event) => handleCorrectAnswerChange(event, 3, inputField.possibleAnswers[3])}
                  checkedIcon={<BpCheckedIcon />}
                  icon={<BpIcon />}
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}
                >
                  Option D
                </Typography>
                <ImageUploadIndex
                  coverImage={coverImage4}
                  removeImage={removeImage}
                  handleImage={handleImage4}
                  update={false}
                />
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </>
  );
};

export default ImageOptionField;
