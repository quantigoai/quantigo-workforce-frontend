import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloseIcon from "@mui/icons-material/Close";
import ndaUploadStyle from "../../../Nda/ndaUploadStyle";
import { useSelector } from "react-redux";
import ctaImage from "../../../../../assets/images/CTA.png";
import IconImage from "../../../../../assets/images/Icon.png";
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
  width: "140px",
  height: "140px",
  padding: 4,

  boxSizing: "border-box",
};

const thumbInner = {
  // display: "flex",e
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

const UploadImagesField = ({ editAble, label, files, setFiles, setImagesCopy, imagesCopy, setRemoveImages }) => {
  // const [files, setFiles] = useState([]);
  const { isLightTheme } = useSelector((state) => state.theme);
  // const { baseUploadBoxStyle } = ndaUploadStyle(isLightTheme);
  const [error, setError] = useState(false);
  const baseUploadBoxStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // padding: "20px",
    borderWidth: 2,
    borderRadius: 10,
    height: "200px",
    borderColor: files?.length === 5 ? "rgba(70, 70, 70, 0.2)" : "rgba(70, 70, 70, 0.6)",
    borderStyle: "dashed",
    // backgroundColor: isLightTheme ? "primary.B200" : "neutral.N400",
    backgroundColor: isLightTheme ? "#FAFBFC" : "#2C2C2C",
    color: isLightTheme ? "#1D1D1D" : "#fff",
    outline: "none",
    transition: "border .24s ease-in-out",
  };
  const { getRootProps, getInputProps, isFocused } = useDropzone({
    disabled: files?.length === 5 || !editAble ? true : false,
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
        } else if (acceptedFiles.length + files.length < 5) {
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
      ...baseUploadBoxStyle,
      ...(isFocused ? focusedStyle : {}),
    }),
    [isFocused, isLightTheme]
  );

  const thumbs = files?.map((file, index) => {
    return (
      <Box style={thumb} key={file.name}>
        <Box style={thumbInner}>
          {editAble && (
            <Box
              onClick={() => handleDelete(file)}
              sx={{
                position: "absolute",
                top: -2,
                right: -1,
                backgroundColor: "#FF4757",
                color: "#fff",
                width: "30px",
                // fontSize: "10px",
                height: "30px",
                textAlign: "center",
                borderRadius: "50%",
                "&:hover": { backgroundColor: "#F53142" },
                cursor: "pointer",
              }}
            >
              <CloseIcon sx={{ fontSize: "18px", mt: "8px" }} />
            </Box>
          )}
          <img
            src={file.preview ? file.preview : file}
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
    if (!fileToDelete.name) {
      setRemoveImages((prevRemoveImages) => [...prevRemoveImages, fileToDelete]);
    }
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToDelete));
  };
  useEffect(() => {
    return () => {
      files?.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <>
      <Box className="container" sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            borderWidth: 2,
            borderRadius: 8,
            height: "100%",
            borderColor: files?.length === 5 ? "rgba(70, 70, 70, 0.1)" : "rgba(70, 70, 70, 0.2)",
            borderStyle: "dashed",
            backgroundColor: isLightTheme ? "#FAFBFC" : "#2C2C2C",
            color: isLightTheme ? "#1D1D1D" : "#fff",
            outline: "none",
            transition: "border .24s ease-in-out",
          }}
        >
          <Box
            sx={{
              width: "95%",
              ml: 2,
              mt: 2,
            }}
            {...getRootProps({
              // className: `dropzone ${files.length === 5 ? "disabled" : ""}`
              style,
            })}
          >
            <input {...getInputProps()} />
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px", mb: 2 }}>
              <img
                style={{
                  width: "30px",
                  filter: files?.length === 5 || !editAble ? "grayscale(100%)" : "",
                }}
                src={IconImage}
              />
              <Typography
                sx={{ color: files?.length === 5 || !editAble ? "gray" : isLightTheme ? "#1D1D1D" : "#fff" }}
                variant="wpf_p2_regular"
              >
                Drag and Drop your Certificate files here or Browse” (JPG/ JPEG / PNG)
              </Typography>
              <Typography
                variant="wpf_p2_regular"
                sx={{
                  paddingBottom: "2%",
                  color: files?.length === 5 || !editAble ? "gray" : isLightTheme ? "#1D1D1D" : "#fff",
                }}
              >
                Maximum file size: 1Mb.
              </Typography>
              <img
                style={{ width: "30px", filter: files?.length === 5 || !editAble ? "grayscale(100%)" : "" }}
                src={ctaImage}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", width: "100%", justifyContent: "center", padding: "20px" }}>
            <Box>{files?.length <= 5 && thumbs} </Box>
            <Typography variant="wpf_p4_medium" color="error.500">
              {files?.length > 5 || error ? "you have selected more than 5 files" : ""}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UploadImagesField;
