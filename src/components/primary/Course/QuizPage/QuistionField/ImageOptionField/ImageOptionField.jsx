import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageUploadIndex from "./ImageUploadIndex";
import { RadioOption } from "../BasicOptionField";

const ImageOptionField = ({ handleChangeInput, inputField, inputFields, handleUpdate, update }) => {
  const [coverImageFile, setCoverImageFile] = useState([]);
  const [coverImage1, setCoverImage1] = useState(null);
  const [coverImage2, setCoverImage2] = useState(null);
  const [coverImage3, setCoverImage3] = useState(null);
  const [coverImage4, setCoverImage4] = useState(null);
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
      handleUpdate(e[0], "question1", inputField);
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
      handleUpdate(e[0], "question2", inputField);
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
      handleUpdate(e[0], "question3", inputField);
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
    // const file = e[0];
    // if (file) {
    //   const url = URL.createObjectURL(file);
    //   setCoverImage4(url);
    // }
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
      handleUpdate(e[0], "question4", inputField);
    } else {
      handleChangeInput((inputField.possibleAnswers[3] = e[0]), e[0]);
      const file = e[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setCoverImage3(url);
      }
    }
  };

  const removeImage = () => {
    setCoverImageFile(null);
    setCoverImage1(null);
  };
  const handleCorrectAnswerChange = (event, index, value) => {
    handleChangeInput((inputField.correctAnswerIndex = index), event);
    handleChangeInput((inputField.correctAnswer = value), event);
  };
  return (
    <>
      <Box>
        <Typography
          variant="wpf_h7_medium"
          sx={{
            mb: 0,
            color: "neutral.N300",
          }}>
          List of Options
        </Typography>
        {update ? (
          <>
            {" "}
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <RadioOption
                  checked={inputField?.correctAnswerIndex === 0}
                  onChange={(event) => handleCorrectAnswerChange(event, 0, inputField.possibleAnswers[0])}
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}>
                  Option A
                </Typography>{" "}
                <ImageUploadIndex
                  coverImage={coverImage1}
                  removeImage={removeImage}
                  handleImage={handleImage1}
                  // handleImage={(event) => handleChangeInput((inputField.possibleAnswers[0] = event.target.value), event)}
                  update={true}
                  defaultImage={inputField.possibleAnswers[0]}
                />
              </Grid>
              <Grid item xs={3}>
                <RadioOption
                  checked={inputField?.correctAnswerIndex === 1}
                  onChange={(event) => handleCorrectAnswerChange(event, 1, inputField.possibleAnswers[1])}
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}>
                  Option B
                </Typography>
                <ImageUploadIndex
                  coverImage={coverImage2}
                  removeImage={removeImage}
                  handleImage={handleImage2}
                  update={true}
                  defaultImage={inputField.possibleAnswers[1]}
                />
              </Grid>
              <Grid item xs={3}>
                <RadioOption
                  checked={inputField?.correctAnswerIndex === 2}
                  onChange={(event) => handleCorrectAnswerChange(event, 2, inputField.possibleAnswers[2])}
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}>
                  Option C
                </Typography>
                <ImageUploadIndex
                  coverImage={coverImage3}
                  removeImage={removeImage}
                  handleImage={handleImage3}
                  update={true}
                  defaultImage={inputField.possibleAnswers[2]}
                />
              </Grid>
              <Grid item xs={3}>
                <RadioOption
                  checked={inputField?.correctAnswerIndex === 3}
                  onChange={(event) => handleCorrectAnswerChange(event, 3, inputField.possibleAnswers[3])}
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}>
                  Option D
                </Typography>
                <ImageUploadIndex
                  coverImage={coverImage4}
                  removeImage={removeImage}
                  handleImage={handleImage4}
                  update={true}
                  defaultImage={inputField.possibleAnswers[3]}
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
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}>
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
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}>
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
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}>
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
                />
                <Typography
                  variant="wpf_h7_medium"
                  sx={{
                    mb: 0,
                    color: "neutral.N300",
                  }}>
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
