import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const QuizResultShowIndex = () => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const ShowResultField = [
    {
      label: "Total Questions",
      value: 30,
    },
    {
      label: "Total Questions",
      value: 30,
    },
    {
      label: "Total Questions",
      value: 30,
    },
    {
      label: "Total Questions",
      value: 30,
    },
  ];
  return (
    <>
      <Box
        sx={{
          backgroundColor: "neutral.N000",
          height: "100%",
        }}
      >
        <Box
          sx={{
            backgroundColor: isLightTheme ? "#F1F5F9" : "",
            height: { xl: "23%", xxl: "18%", lg: "25%" },
            // paddingLeft: "10%",
            // paddingRight: "10%",
            // paddingTop: "1%",
            // paddingBottom: "3%",
            borderBottom: "2px solid ##F8FAFC",
            display: "flex",
            // justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid container>
            <Grid xs={12} sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
              <Typography variant='wpf_h4_Bold'>Chapter 1: Quiz Result</Typography>
            </Grid>
            <Grid xs={12} sx={{ paddingLeft: "10%", paddingRight: "10%" }}>
              <Typography variant='wpf_p3_regular'>Explore your proficiency with your quiz results </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            // height: "82%",
            height: { xl: "77%", xxl: "82%", lg: "75%" },
            paddingLeft: "10%",
            paddingRight: "10%",
            // overflow: "auto",
            // scrollbarWidth: "thin",
            // "&::-webkit-scrollbar": {
            //   width: "0.4em",
            // },
            // "&::-webkit-scrollbar-track": {
            //   background: "#f1f1f1",
            // },
            // "&::-webkit-scrollbar-thumb": {
            //   backgroundColor: "#888",
            // },
            // "&::-webkit-scrollbar-thumb:hover": {
            //   background: "#555",
            // },
          }}
        >
          <Grid container gap={2} sx={{ paddingTop: "3%" }}>
            {ShowResultField.map((item) => (
              <>
                <Grid
                  item
                  xs={2.8}
                  sx={{
                    backgroundColor: isLightTheme ? "#F8FAFC" : "",
                    borderRadius: "12px",
                    height: "130px",
                    border: "1px solid #E2E8F0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // alignContent: "center",
                  }}
                >
                  <Grid container>
                    <Grid
                      xs={12}
                      sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "4%" }}
                    >
                      <Typography variant='wpf_h6_regular'>{item.label}</Typography>
                    </Grid>
                    <Grid xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <Typography variant='wpf_h4_Bold'>{item.value}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default QuizResultShowIndex;
