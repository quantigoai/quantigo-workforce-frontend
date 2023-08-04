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
const LoadingComponent = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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