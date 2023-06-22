import { Chip, Grid, Link, styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import u_multiply from "../../../assets/images/u_multiply.png";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import { useSelector } from "react-redux";
const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  // color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});

const ProjectDirectoryDetailsIndex = ({ item }) => {
  const [state, setState] = React.useState({
    right: false,
  });
  const handleClick = (link) => {
    window.open(link);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <>
      <Box
        sx={{
          width: anchor === "top" || anchor === "bottom" ? "auto" : 550,
          // padding: "4%",
        }}
        role="presentation"
        //   onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <Box sx={{ paddingTop: "4%", paddingLeft: "4%" }}>
          <Grid container>
            <Grid item xs={10}>
              <Typography variant="h6" sx={{ color: "#090080" }}>
                Details
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ justifyContent: "right" }}>
              <Button onClick={toggleDrawer(anchor, false)}>
                <img src={u_multiply} />
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ padding: "4%" }}>
          <Grid container>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}
            >
              <Grid
                item
                xs={3}
                sx={{
                  justifyContent: "left",
                }}
              >
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Project Name
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Project_Name}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}
            >
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Client Name
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Client_Name}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}
            >
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Use Case
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Use_Case}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}
            >
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Guideline
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  <Link
                    onClick={() => handleClick(item.Guideline)}
                    underline="hover"
                    sx={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    Go to Guideline
                  </Link>
                  {/* <Button onClick={() => handleClick(item.Guideline)}>
                    Link
                  </Button> */}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}
            >
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Edge_Case
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Edge_Case}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}
            >
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Benchmark
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Benchmark}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}
            >
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Project Charter
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  <Link
                    onClick={() => handleClick(item.Project_Charter)}
                    underline="hover"
                    sx={{
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    Go to Project Charter
                  </Link>
                  {/* <Button
                    onClick={() => handleClick(item.Project_Charter)}
                  >
                    Link
                  </Button> */}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}
            >
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Remarks
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Remarks}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );

  return (
    <>
      <Box>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <ButtonStyle
              variant="outlined"
              onClick={toggleDrawer(anchor, true)}
            >
              Details
            </ButtonStyle>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Box>
    </>
  );
};

export default ProjectDirectoryDetailsIndex;
