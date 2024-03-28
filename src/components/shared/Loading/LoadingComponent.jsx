/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/Loading/Loading.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Tuesday, August 1st 2023, 11:28:36 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { keyframes } from "@emotion/react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import qaiLogo from "../../../assets/images/qai.png";
import "./index.css";

const fadeInOut = keyframes`
0%, 20%, 50%, 80%, 100% {
  transform: translateY(0);
}
40% {
  transform: translateY(-40px);
}
60% {
  transform: translateY(-40px);
}
}
`;
const spin = keyframes`
0% {
  transform: rotate(0);
}
100% {
  transform: rotate(360deg);
}
}
`;
const wiggle = keyframes`
0%, 100% {
  transform: rotate(0);
}
25% {
  transform: rotate(-10deg);
}
50% {
  transform: rotate(10deg);
}
75% {
  transform: rotate(-5deg);
}
}
`;
const ping = keyframes`
0% {
  transform: scale(0);
  opacity: 0.8;
}
50% {
  transform: scale(1.2);
  opacity: 0.4;
}
100% {
  transform: scale(0);
  opacity: 0;
}
}
`;
const index = Math.floor(Math.random() * 4);
const BodyBox = styled(Box)(({ theme }) => ({
  animation: `${arr[index]} 2s ease-in-out infinite`,
}));
const arr = [ping, wiggle, spin, fadeInOut];

const LoadingComponent = ({ height }) => {
  return (
    <Box
      sx={{
        height: height || "90vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <BodyBox>
        <img width={100} height={100} src={qaiLogo} alt='Loading...' />
      </BodyBox>
    </Box>
  );
};

export default LoadingComponent;
