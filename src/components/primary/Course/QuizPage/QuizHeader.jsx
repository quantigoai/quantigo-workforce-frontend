import { Box, Button, Grid, IconButton, InputBase, Paper, Typography } from "@mui/material";
import React from "react";
import CommonHeader from "../../../shared/CustomComponenet/CommonHeader/CommonHeader";
import { ClearIcon } from "@mui/x-date-pickers";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";

const QuizHeader = () => {
  return (
    <>
      <Box
        className="headerBox"
        sx={{
          height: "100%",
          backgroundColor: "neutral.N000",
        }}
      >
        <Box sx={{ width: "60%", padding: "12px 16px" }}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "start",
              alignItems: "start",
              paddingX: "10px",
            }}
          >
            <CommonHeader title="Interaction Design for Usability" customButton="Create User" />
            <Typography sx={{ mt: 1 }} variant="wpf_p3_regular">
              Course Duration: <span style={{ fontWeight: "bold" }}>4 hrs 32 mins</span>{" "}
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Button sx={{ backgroundColor: "#DFF2EA", color: "#36B37E" }}>Chapter</Button>
              <Button
                sx={{
                  backgroundColor: "#36B37E",
                  color: "#fff",
                  ml: 2,
                  "&:hover": {
                    color: "#000",
                  },
                }}
              >
                Quiz
              </Button>
            </Box>
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 20px",
          }}
        >
          {/* <ExportUserList /> */}
        </Box>
      </Box>
    </>
  );
};

export default QuizHeader;
