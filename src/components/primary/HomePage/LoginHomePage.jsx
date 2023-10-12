import {Box, keyframes, styled} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import Login from "../Auth/Login/Login";
import CommonDesign from "./CommonDesign";
import HeaderNav from "./HeaderNav";
import "./bd.css";

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
  // width: "100%",
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
      {/* <Keyframes> */}
      <Box className="container">
        <Box sx={{ height: "8%" }}>
          <HeaderNav />
        </Box>
        <Box sx={{ height: "92%" }}>
          <CommonDesign>
            <Login />
          </CommonDesign>
        </Box>
      </Box>
      {/* </Keyframes> */}
    </>
  );
};

export default LoginHomePage;
