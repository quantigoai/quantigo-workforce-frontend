import {Grid, Link, styled, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import u_multiply from "../../../assets/images/u_multiply.png";

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
        onKeyDown={toggleDrawer(anchor, false)}>
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
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid
                item
                xs={3}
                sx={{
                  justifyContent: "left",
                }}>
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
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Platform
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Platform}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Action Items
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Action_Items}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Guideline
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {/* <Link
                    onClick={() => handleClick(item.Guideline)}
                    underline="hover"
                    sx={{
                      color: "blue",
                      cursor: "pointer",
                    }}>
                    {item.Guideline}
                  </Link> */}
                  <Button onClick={() => handleClick(item.Guideline)}>
                    Link
                  </Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  QA Check Points
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.QA_Check_Points}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Object Benchmark
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Obj_Benchmark}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Image Benchmark
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Img_Benchmark}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Tagging Benchmark
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Tagging_Benchmark}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Deletion
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Deletion}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Skip Image
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Skip_Image}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Update
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Update}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Image Loading
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Image_Loading}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Object Saving Time
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Object_Saving_Time}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Video Watch Time
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Video_Watch_Time}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Judgement Time
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Judgement_Time}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  QA Benchmark
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.QA_Benchmark}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Annotation
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.Annotation}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
              <Grid item xs={3} sx={{ justifyContent: "left" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  QA
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "15%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {item.QA}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ paddingY: "2%", borderBottom: "1px solid #d8e5d8" }}>
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
              onClick={toggleDrawer(anchor, true)}>
              Details
            </ButtonStyle>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Box>
    </>
  );
};

export default ProjectDirectoryDetailsIndex;
