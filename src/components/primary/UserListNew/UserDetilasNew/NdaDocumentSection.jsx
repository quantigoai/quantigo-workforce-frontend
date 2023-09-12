import { Button, Grid, Typography, styled } from "@mui/material";
import ArrowIcon from "../../../../assets/images/dashboardIcon/ArrowIcon.svg";
import React from "react";
const ButtonStyle = styled(Button)({
  width: "100%",
  textTransform: "none",
  backgroundColor: "#F4F7FE",
  color: "#2E58FF",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#F4F7FE",
    color: "#2E58FF",
    border: "1px solid #2E58FF",
  },
});
const NdaDocumentSection = ({ user }) => {
  const handleClick = (signNda) => {
    window.open(signNda);
  };

  return (
    <>
      <Grid container sx={{ padding: "2%" }}>
        <Grid item xs={6} sx={{ paddingRight: "2%" }}>
          <ButtonStyle>
            <Typography sx={{ paddingRight: "4%" }}> Document </Typography>
            <img src={ArrowIcon} />
          </ButtonStyle>
        </Grid>
        <Grid item xs={6}>
          <ButtonStyle disabled={!user.signImage} onClick={() => handleClick(user.signImage)}>
            <Typography sx={{ paddingRight: "4%" }}> NDA</Typography>
            <img src={ArrowIcon} />
          </ButtonStyle>
        </Grid>
      </Grid>
    </>
  );
};

export default NdaDocumentSection;
