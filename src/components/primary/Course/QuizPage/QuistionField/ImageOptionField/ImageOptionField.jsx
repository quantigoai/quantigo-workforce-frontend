import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageUploadIndex from "./ImageUploadIndex";

const ImageOptionField = () => {
  const [coverImageFile, setCoverImageFile] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const handleImage = (e) => {
    setCoverImageFile(e[0]);
    const file = e[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
  };

  const removeImage = () => {
    setCoverImageFile(null);
    setCoverImage(null);
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
            <Typography
              variant="wpf_h7_medium"
              sx={{
                mb: 0,
                color: "neutral.N300",
              }}>
              Option A
            </Typography>{" "}
            <ImageUploadIndex
              coverImage={coverImage}
              removeImage={removeImage}
              handleImage={handleImage}
              update={false}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="wpf_h7_medium"
              sx={{
                mb: 0,
                color: "neutral.N300",
              }}>
              Option B
            </Typography>
            <ImageUploadIndex
              coverImage={coverImage}
              removeImage={removeImage}
              handleImage={handleImage}
              update={false}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="wpf_h7_medium"
              sx={{
                mb: 0,
                color: "neutral.N300",
              }}>
              Option C
            </Typography>
            <ImageUploadIndex
              coverImage={coverImage}
              removeImage={removeImage}
              handleImage={handleImage}
              update={false}
            />
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="wpf_h7_medium"
              sx={{
                mb: 0,
                color: "neutral.N300",
              }}>
              Option D
            </Typography>
            <ImageUploadIndex
              coverImage={coverImage}
              removeImage={removeImage}
              handleImage={handleImage}
              update={false}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ImageOptionField;
