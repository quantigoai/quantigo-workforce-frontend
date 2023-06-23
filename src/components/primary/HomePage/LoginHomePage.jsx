import {Box, keyframes, styled} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import Login from "../Auth/Login/Login";
import "./bd.css";
import HeaderNav from "./HeaderNav";
import CommonDesign from "./CommonDesign";

const colorbg = keyframes`
        "0%": {
          "backgroundPosition": "0 50%",
        },
        // "50%": {
        //   "backgroundPosition": "100% 50%",
        // },
        "100%": {
          "backgroundPosition": "0 50%",
        },
`;

const Keyframes = styled("div")({
  height: "100vh",
  width: "100%",
  //   animation: "${colorbg} 7s ease infinite",
  //   background:
  //     "linear-gradient(90deg, #090080, #2D58FF,#FF9A45, #090080,#2D58FF)",
  //     @keyframes color: {
  //     "0%": {
  //       "backgroundPosition": "0 50%",
  //     },
  //     "50%": {
  //       "backgroundPosition": "100% 50%",
  //     },
  //     "100%": {
  //       "backgroundPosition": "0 50%",
  //     },
  //   },
});

const LoginHomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <Box className="container"></Box> */}
      {/* <Box className="container1"></Box>
      <Box className="container2"></Box>
      <Box className="container3"></Box>
      <Box className="container4"> </Box> */}
      {/* <Keyframes> */}
      <Box className="container">
        <HeaderNav />
        <CommonDesign>
          <Login />
        </CommonDesign>
      </Box>
      {/* </Keyframes> */}
      {/* </Box> */}
    </>
  );
};

export default LoginHomePage;
