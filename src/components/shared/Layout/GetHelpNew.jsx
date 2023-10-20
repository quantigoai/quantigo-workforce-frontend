import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const GetHelpNew = () => {
  const handleHelp = () => {
    window.open("https://discord.gg/YarPssHr6y");
  };

  return (
    <>
      <Grid
        container
        sx={{
          margin: "4% 4%",
          borderRadius: "8px",
          backgroundColor: "primary.P600",
        }}
      >
        <Grid container sx={{ justifyContent: "center", paddingTop: "9%" }}>
          <Typography variant="wpf_p3_semiBold" sx={{ color: "neutral.N700" }}>
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
          }}
        >
          <Typography
            sx={{
              color: "neutral.N700",
              justifyContent: "center",
              textAlign: "center",
            }}
            variant="wpf_p4_regular"
          >
            Our customer support is at your
          </Typography>

          <Typography
            sx={{
              color: "neutral.N700",
              justifyContent: "center",
              textAlign: "center",
            }}
            variant="wpf_p4_regular"
          >
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
          }}
        >
          <Button
            sx={{
              backgroundColor: "neutral.N000",
              width: "50%",
              borderRadius: "8px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "neutral.N000",
                color: "primary.B200",
              },
            }}
            variant="outlined"
            onClick={handleHelp}
          >
            <Typography variant="wpf_p4_medium" color="primary.B200">
              {" "}
              Get Help
            </Typography>
          </Button>

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
