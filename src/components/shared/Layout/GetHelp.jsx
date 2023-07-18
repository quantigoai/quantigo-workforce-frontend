import { Button, Grid, Paper, styled, Typography } from "@mui/material";
import React from "react";
import HelpIcon from "../../../assets/images/IconHelp.svg";

const ButtonStyleHelp = styled(Button)({
  // backgroundColor: "#2D58FF",
  // color: "#FFFFFF",
  width: "100%",
  borderRadius: "2px",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const GetHelp = () => {
  const handleHelp = () => {
    window.open("https://discord.gg/YarPssHr6y");
  };

  return (
    <>
      <Paper sx={{ borderRadius: "2px" }}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            bottom: "20px",
            justifyContent: "center",
          }}>
          <img src={HelpIcon} />
        </Grid>
        <Grid container sx={{ justifyContent: "center" }}>
          <Typography variant="h7" sx={{ color: "#1D1D1D" }}>
            Need Help?
          </Typography>
        </Grid>
        <Grid
          container
          sx={{
            justifyContent: "center",
            paddingLeft: "9%",
            paddingRight: "5%",
            paddingTop: "2%",
            textAlign: "center",
          }}>
          <Typography
            sx={{
              color: "#969CAF",
              justifyContent: "center",
              textAlign: "center",
            }}
            variant="body2">
            Our customer support is at your service.
          </Typography>
        </Grid>
        <Grid
          container
          sx={{
            justifyContent: "center",
            paddingLeft: "7%",
            paddingRight: "7%",
            paddingTop: "2%",
            paddingBottom: "5%",
          }}>
          <ButtonStyleHelp variant="outlined" onClick={handleHelp}>
            Get Help
          </ButtonStyleHelp>

          {/* <iframe
            src="https://discordapp.com/widget?id=919892777150595072&theme=light"
            width="350"
            height="200"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe> */}
        </Grid>
      </Paper>
    </>
  );
};

export default GetHelp;
