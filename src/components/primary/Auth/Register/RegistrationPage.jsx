import { Box, Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import bgimg from "../../../../assets/images/LoginBG.png";
import logo from "../../../../assets/images/logo.png";
import Register from "./Register";

const BgBox = styled(Box)({
  backgroundImage: `url(${bgimg})`,
  width: "100vw",
  height: "120vh",
  backgroundRepeat: "no-repeat",
});
const RegistrationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <BgBox>
        <Grid container>
          <Grid container xs={6}>
            <img
              src={logo}
              alt="logo"
              style={{
                width: "175px",
                height: "33px",
                paddingTop: "52px",
                paddingLeft: "64px",
                position: "absolute",
              }}
            />
          </Grid>
          <Grid
            container
            xs={6}
            style={{
              paddingTop: "56px",
              paddingLeft: "350px",
              paddingRight: "110px",
            }}
          >
            <Grid xs={4}>
              <Typography sx={{ color: "#FFFFFF" }} variant="body2">
                <Link
                  onClick={() => navigate("/faq")}
                  sx={{ borderRadius: 1, marginTop: 3, cursor: "pointer" }}
                >
                  FAQ
                </Link>
              </Typography>
            </Grid>
            <Grid xs={4}>
              <Typography sx={{ color: "#FFFFFF" }} variant="body2">
                How it work
              </Typography>
            </Grid>
            <Grid xs={4}>
              <Typography sx={{ color: "#FFFFFF" }} variant="body2">
                About Us
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid container>
            <Grid xs={6} style={{ paddingTop: "20%", paddingBottom: "10%" }}>
              <Typography variant="h3" sx={{ color: "#FFFFFF" }}>
                Take your Productivity to the next level
              </Typography>
            </Grid>
            <Grid xs={6} sm={12} md={6} lg={6} style={{ paddingTop: "5%" }}>
              <Register />
            </Grid>
          </Grid>
        </Grid>
      </BgBox>
    </>
  );
};

export default RegistrationPage;
