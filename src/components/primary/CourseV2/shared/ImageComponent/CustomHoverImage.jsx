/*
 * File           : CustomHoverImage.jsx
 * Project        : wmpfrontv2
 * Created Date   : Th 21 Mar 2024 12:07:07
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Thu Mar 21 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */
import { Box } from "@mui/material";
import React from "react";

const CustomHoverImage = ({ height, width, maxHeight, maxWidth, alt, imageUrl }) => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        minHeight: maxHeight,
        minWidth: maxWidth,
      }}
    >
      <Box
        component="img"
        sx={{
          height: height,
          width: width,
          maxHeight: maxHeight,
          maxWidth: maxWidth,
          padding: "0 0 0 0 ",
          objectFit: "cover",
          borderRadius: "10px 10px 0px 0px",
          "&:hover": {
            padding: "0 0 0 0 ",
            objectFit: "cover",
            borderRadius: "10px 10px 0px 0px !important",
            transform: "scale(1.04) ",
            transition: "all 1.2s ease",
          },
        }}
        alt={alt}
        src={imageUrl}
      />
    </Box>
  );
};

export default CustomHoverImage;
