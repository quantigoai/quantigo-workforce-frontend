import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import congImg from "../../../../assets/images/Frame 626711.png";
import { useNavigate } from "react-router-dom";

const CongratulationComponents = () => {
  const paperstyle = {
    backgroundColor: "#FFFFFF",
    padding: "3%",
    // width: "100%",
    // height: "100%",
    borderRadius: "2px",
  };

  const teamicondiv = { padding: "1%", paddingTop: "0%" };
  const navigate = useNavigate();
  return (
    <>
      <Grid container style={teamicondiv}>
        <Grid xs={12}>
          <Box>
            <Paper elevation={0} style={paperstyle}>
              <Grid container>
                <Grid xs={3} sx={{ paddingLeft: "2%" }}>
                  <img src={congImg} />
                </Grid>
                <Grid xs={9}>
                  <Grid xs={12}>
                    <Typography variant="h3" sx={{ color: "#090080" }}>
                      Congratulations
                    </Typography>
                  </Grid>
                  <Grid xs={12}>
                    {/* <Typography variant="caption" sx={{ color: "#969CAF" }}>
                      Lorem ipsum dolor sit amet consectetur. Senectus placerat
                      metus sit massa urna non tristique. Faucibus arcu faucibus
                      id odio enim egestas.
                    </Typography> */}
                  </Grid>
                  <Grid xs={12} sx={{ paddingTop: "5%" }}>
                    <Button
                      onClick={() => {
                        navigate("/course");
                      }}
                      sx={{
                        backgroundColor: "#2D58FF",
                        color: "#FFFFFF",
                        "&:hover": {
                          backgroundColor: "#FF9A45",
                          color: "#1D1D1D",
                        },
                        borderRadius: "1px",
                        width: "173px",
                        height: "40px",
                      }}>
                      Get Started
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CongratulationComponents;
