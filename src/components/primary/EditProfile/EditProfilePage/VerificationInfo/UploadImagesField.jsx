import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloseIcon from "@mui/icons-material/Close";
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#000",
  // borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  // border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 300,
  height: 200,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  position: "relative",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  // display: "block",
  width: "100%",
  height: "100%",
  borderRadius: "15px",
};

const UploadImagesField = ({ editAble, label }) => {
  const [files, setFiles] = useState([]);

  const [error, setError] = useState(false);

  const { getRootProps, getInputProps, acceptedFiles, fileRejections, isFocused } = useDropzone({
    disabled: files.length === 5 ? true : false,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: (acceptedFiles) => {
      if (files.length === 0) {
        if (acceptedFiles.length > 5) {
          setError(true);
        } else {
          setFiles((prev) => [
            ...prev,
            ...acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            ),
          ]);
          setError(false);
        }
      } else if (files.length !== 0 && files.length <= 5) {
        if (acceptedFiles.length + files.length === 5) {
          setFiles((prev) => [
            ...prev,
            ...acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            ),
          ]);
          setError(false);
        } else {
          setFiles([]);
          setError(true);
        }
      }
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
    }),
    [isFocused]
  );

  const thumbs = files.map((file, index) => {
    return (
      <Box style={thumb} key={file.name}>
        <Box style={thumbInner}>
          <Box
            onClick={() => handleDelete(file)}
            sx={{
              position: "absolute",
              top: -1,
              right: 0,
              backgroundColor: "#FF4757",
              color: "#fff",
              width: "35px",
              // fontSize: "10px",
              height: "35px",
              textAlign: "center",
              borderRadius: "50%",
              "&:hover": { backgroundColor: "#F53142" },
              cursor: "pointer",
            }}
          >
            <CloseIcon sx={{ fontSize: "18px", mt: "8px" }} />
          </Box>
          <img
            src={file.preview}
            style={img}
            onLoad={() => {
              URL.revokeObjectURL(file.preview);
            }}
            alt={file.name}
          />
        </Box>
      </Box>
    );
  });

  const handleDelete = (fileToDelete) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToDelete));
  };
  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <>
      <Box className="container" sx={{ width: "100%" }}>
        <div {...getRootProps({ className: `dropzone ${files.length === 5 ? "disabled" : ""}` })}>
          <input {...getInputProps()} />
          <Typography variant="contained">Upload your {label} certificates</Typography>
        </div>
        <Box sx={{ mt: 2, border: " 1px solid  #EAECF0" }}>
          <Box>{files.length <= 5 && thumbs} </Box>
          <Typography variant="wpf_p4_medium" color="error.500">
            {fileRejectionItems.length > 0 || files.length > 5 || error ? "you have selected more than 5 files" : ""}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UploadImagesField;
