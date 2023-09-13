import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import u_multiply from "../../../assets/images/crosIcon.svg";
import CheckINOutButton from "./ProjectDetailsFull/CheckInOutButton";

const ProjectModalHeader = ({ handleCreateProjectClose, modalTitle, isPageDetail, handleCheckInButton, isDisable, handleCheckOutButton }) => {
  return (
    <Box
      sx={{
        paddingTop: "2%",
        width: "100%",
        background: isPageDetail ? "white" : "#F2F6FC",
        borderRadius: "8px",
      }}
    >
      <Grid
        container
        sx={{
          paddingBottom: "1%",
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
        }}
      >
        <Grid item xs={10} sx={{ paddingLeft: "3%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#3C4D6B",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {modalTitle}
          </Typography>
          {isPageDetail && (
            <Typography
              variant="div"
              sx={{
                color: "#091E42",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Available for you
            </Typography>
          )}
        </Grid>
        <Grid item xs={2} sx={{ justifyContent: "right", paddingRight: "2%" }}>
          {isPageDetail ? (
            <CheckINOutButton handleCheckOutButton={handleCheckOutButton} isDisable={isDisable} handleCheckInButton={handleCheckInButton} fromDetails={"true"} />
          ) : (
            <Button onClick={handleCreateProjectClose}>
              <img style={{ width: "20px" }} alt="cross" src={u_multiply} />
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectModalHeader;
