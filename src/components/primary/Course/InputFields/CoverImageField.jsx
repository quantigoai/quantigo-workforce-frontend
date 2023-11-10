/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/InputFields/CoverImageField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 12:35:25 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import DeleteIcon from "@mui/icons-material/Delete";
import {Box, Grid} from "@mui/material";
import React, {useMemo} from "react";
import {useDropzone} from "react-dropzone";
import dragiconplus from "../../../../assets/images/dragiconplus.svg";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  height: "150px",
  // overflowY: "scroll",
  borderColor: "rgba(70, 70, 70, 0.2)",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#1D1D1D",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const CoverImageField = ({ handleImage, coverImage, removeImage }) => {
  const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: { "image/*": [] },
    onDrop: handleImage,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  const files = acceptedFiles.map((file) => (
    <span key={file.path}>
      {file.path} - {(file.size * 1e-6).toFixed(3)} Mb
    </span>
  ));

  return (
    <>
      <Grid>
        <Box className="">
          <Box {...getRootProps({ style })}>
            {acceptedFiles.length ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <p>File : {files}</p>
                <img width={"100%"} height={100} src={coverImage} alt="" />
                <DeleteIcon onClick={removeImage} sx={{ color: "red" }} />
              </Box>
            ) : (
              <>
                <input {...getInputProps()} />
                <img src={dragiconplus} />
                <p>Drag and Drop a file here or Browse” (JPG/ JPEG / PNG)</p>
              </>
            )}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default CoverImageField;
