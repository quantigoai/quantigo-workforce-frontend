/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Auth/Register/Register.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 1:42:28 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import RegistrationForm from "./RegistrationForm";

const BgBox = styled(Box)({
  display: "flex",
  color: "#fffff",
  width: "75.11%",
  // backgroundColor: "rgba(255, 255, 255, 0.34)",
  // backdropFilter: "blur(8px)",
  // borderRadius: "36px",
  // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
});

const Register = () => {
  return (
    <>
      <>
        <BgBox>
          <Grid container sx={{ padding: "6%" }}>
            <RegistrationForm />
          </Grid>
        </BgBox>
      </>
    </>
  );
};

export default Register;
