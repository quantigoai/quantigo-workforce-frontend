/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/Loading/Loading.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Tuesday, August 1st 2023, 11:28:36 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import Box from "@mui/material/Box";
import qaiLogo from "../../../assets/images/qai.png";
import "./index.css";

const LoadingComponent = ({ height }) => {
  return (
    <Box
      sx={{
        height: height || "90vh",
        width: "95%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        // position: "absolute",
        // left: 50,
        // top: 50,
      }}
    >
      <img
        width={100}
        height={100}
        src={qaiLogo}
        alt="Loading..."
        style={{
          animation: "fade-in 2s",
          opacity: 0,
        }}
      />
    </Box>
  );
};

export default LoadingComponent;
