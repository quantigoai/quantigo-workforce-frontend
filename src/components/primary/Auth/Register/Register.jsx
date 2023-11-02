/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Auth/Register/Register.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 1:42:28 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Grid } from "@mui/material";

import { BgBox } from "../Login/Login";
import RegistrationForm from "./RegistrationForm";

const Register = () => {
  return (
    <>
      <BgBox>
        <Grid container >
          <RegistrationForm />
        </Grid>
      </BgBox>
    </>
  );
};

export default Register;
