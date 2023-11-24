import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageUploadIndex from "./ImageUploadIndex";
import { RadioOption } from "../BasicOptionField";

const ImageOptionField = ({ handleChangeInput, inputField, inputFields }) => {
  console.log("🚀 ~ file: ImageOptionField.jsx:7 ~ ImageOptionField ~ inputFields:", inputFields);
  console.log("🚀 ~ file: ImageOptionField.jsx:7 ~ ImageOptionField ~ inputField:", inputField);
  const [coverImageFile, setCoverImageFile] = useState([]);
  const [coverImage1, setCoverImage1] = useState(null);
  const [coverImage2, setCoverImage2] = useState(null);
  const [coverImage3, setCoverImage3] = useState(null);
  const [coverImage4, setCoverImage4] = useState(null);
  const handleImage1 = (e) => {
    console.log("🚀 ~ file: ImageOptionField.jsx:17 ~ handleImage ~ e:", e[0]);
    setCoverImageFile(e[0]);

    // {
    //   inputField?.possibleAnswers?.map((possibleAnswer, index) => (
    // )) }

    handleChangeInput((inputField.possibleAnswers[0] = e[0]), e[0]);
    const file = e[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage1(url);
    }
  };
  const handleImage2 = (e) => {
    console.log("🚀 ~ file: ImageOptionField.jsx:17 ~ handleImage ~ e:", e[0]);
    setCoverImageFile(e[0]);

    // {
    //   inputField?.possibleAnswers?.map((possibleAnswer, index) => (
    // )) }

    handleChangeInput((inputField.possibleAnswers[1] = e[0]), e[0]);
    const file = e[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage2(url);
    }
  };
  const handleImage3 = (e) => {
    console.log("🚀 ~ file: ImageOptionField.jsx:17 ~ handleImage ~ e:", e[0]);
    setCoverImageFile(e[0]);

    // {
    //   inputField?.possibleAnswers?.map((possibleAnswer, index) => (
    // )) }

    handleChangeInput((inputField.possibleAnswers[2] = e[0]), e[0]);
    const file = e[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage3(url);
    }
  };
  const handleImage4 = (e) => {
    console.log("🚀 ~ file: ImageOptionField.jsx:17 ~ handleImage ~ e:", e[0]);
    setCoverImageFile(e[0]);

    // {
    //   inputField?.possibleAnswers?.map((possibleAnswer, index) => (
    // )) }

    handleChangeInput((inputField.possibleAnswers[3] = e[0]), e[0]);
    const file = e[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage4(url);
    }
  };

  const removeImage = () => {
    setCoverImageFile(null);
    setCoverImage1(null);
  };
  const handleCorrectAnswerChange = (event, index, value) => {
    console.log("🚀 ~ file: BasicOptionField.jsx:38 ~ handleCorrectAnswerChange ~ value:", value);
    console.log("🚀 ~ file: BasicOptionField.jsx:38 ~ handleCorrectAnswerChange ~ index:", index);
    console.log("🚀 ~ file: BasicOptionField.jsx:38 ~ handleCorrectAnswerChange ~ event:", event);
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
      </Box>
    </>
  );
};

export default ImageOptionField;
