import {Box, Button, Typography} from "@mui/material";
import React from "react";

const GetHelpNew = () => {
  const handleHelp = () => {
    window.open("https://discord.gg/YarPssHr6y");
  };

  return (
    <>
      <Box
        sx={{
          margin: { lg: "5%", xl: "4%", xxl: "4%" },
          borderRadius: "8px",
          backgroundColor: "primary.P600",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "9%" }}>
          <Typography variant="wpf_p3_semiBold" sx={{ color: "neutral.N700" }}>
            Need Help?
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: {xl: "flex", xxl:"flex"},
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "3%",
            px: "4%",
            paddingBottom: "5%",
            textAlign: "center",
            whiteSpace: "normal",
          }}
        >
          <Typography
            sx={{
              color: "neutral.N700",
              textAlign: "center",
            }}
            variant="wpf_p4_regular"
          >
            Our customer support is at your
          </Typography>

          <Typography
            sx={{
              color: "neutral.N700",
              textAlign: "center",
            }}
            variant="wpf_p4_regular"
          >
            &nbsp;service
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "2%",
            paddingBottom: "10%",
          }}
        >
          <Button
            sx={{
              backgroundColor: "neutral.N000",
              width: "60%",
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
        </Box>
      </Box>
    </>
  );
};

export default GetHelpNew;
