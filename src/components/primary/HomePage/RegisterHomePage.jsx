import {Box} from "@mui/material";
import React from "react";
import Register from "../Auth/Register/Register";
import "./bd.css";
import HeaderNav from "./HeaderNav";
import CommonDesign from "./CommonDesign";

const RegisterHomePage = () => {
  return (
    <>
      <Box className="container">
        <HeaderNav />
        <CommonDesign>
          <Register />
        </CommonDesign>
      </Box>
    </>
  );
};

export default RegisterHomePage;
