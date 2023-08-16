import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import u_multiply from "../../../assets/images/u_multiply.png";

const ProjectModalHeader = ({ handleCreateProjectClose }) => {
  return (
    <Box
      sx={{
        paddingTop: "2%",
        width: "695px",
        background: "#F2F6FC",
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
        <Grid item xs={11} sx={{ paddingLeft: "30px" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#3C4D6B",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Create Project
          </Typography>
        </Grid>
        <Grid item xs={1} sx={{ justifyContent: "right" }}>
          <Button onClick={handleCreateProjectClose}>
            <img style={{ width: "20px" }} alt="cross" src={u_multiply} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectModalHeader;