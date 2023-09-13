import { Button, Grid, styled, Typography } from "@mui/material";
import React from "react";

const ButtonStyleHelp = styled(Button)({
  backgroundColor: "#FFFFFF",
  color: "#2E58FF",
  width: "50%",
  borderRadius: "8px",
  fontSize: "12px",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#FFFFFF",
    color: "#2E58FF",
  },
});
const GetHelpNew = () => {
  const handleHelp = () => {
    window.open("https://discord.gg/YarPssHr6y");
  };

  return (
    <>
      <Grid
        container
        sx={{
          borderRadius: "8px",
          // height: "157px",
          backgroundColor: "#476CFF",
          //   padding: "10%",
        }}>
        <Grid container sx={{ justifyContent: "center", paddingTop: "9%" }}>
          <Typography variant="wf_h5_bold" sx={{ color: "#FFFFFF" }}>
            Need Help?
          </Typography>
        </Grid>
        <Grid
          container
          sx={{
            justifyContent: "center",
            paddingLeft: "9%",
            paddingRight: "9%",
            paddingTop: "2%",
            paddingBottom: "5%",
            textAlign: "center",
          }}>
          <Typography
            sx={{
              color: "#E6ECF5",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "12px",
            }}
            variant="wf_h6_light">
            Our customer support is at your
          </Typography>
          <Typography
            sx={{
              color: "#E6ECF5",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "12px",
            }}
            variant="wf_h6_light">
            service
          </Typography>
        </Grid>
        <Grid
          container
          sx={{
            justifyContent: "center",
            paddingLeft: "10%",
            paddingRight: "10%",
            paddingTop: "2%",
            paddingBottom: "10%",
          }}>
          <ButtonStyleHelp variant="outlined" onClick={handleHelp}>
            <b> Get Help</b>
          </ButtonStyleHelp>

          {/* <iframe
            src="https://discordapp.com/widget?id=919892777150595072&theme=light"
            width="350"
            height="200"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> */}
        </Grid>
      </Grid>
    </>
  );
};

export default GetHelpNew;
