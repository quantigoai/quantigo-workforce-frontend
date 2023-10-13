import {Box} from "@mui/material";
import React from "react";
import Register from "../Auth/Register/Register";
import CommonDesign from "./CommonDesign";
import HeaderNav from "./HeaderNav";
import "./bd.css";

const RegisterHomePage = () => {
  return (
    <>
      <Box className="container">
        <Box sx={{ height: "8%" }}>
          <HeaderNav />
        </Box>
        <Box sx={{ height: "92%" }}>
          <CommonDesign>
            <Register />
          </CommonDesign>
        </Box>
      </Box>
    </>
  );
};

export default RegisterHomePage;
