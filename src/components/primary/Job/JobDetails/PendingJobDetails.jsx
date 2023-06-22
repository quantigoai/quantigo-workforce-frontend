import { Chip, Grid, styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import u_multiply from "../../../../assets/images/u_multiply.png";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";
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

const PendingJobDetails = ({ job }) => {
  const { user, isLoading } = useSelector((state) => state.user);
  const [state, setState] = React.useState({
    right: false,
  });

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
            <Grid container>
              <Grid
                item
                xs={3}
                sx={{ justifyContent: "left", paddingBottom: "2%" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Title
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "20%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {job.title}
                </Typography>
              </Grid>
            </Grid>
            <Grid container sx={{ paddingBottom: "2%" }}>
              <Grid
                item
                xs={3}
                sx={{ justifyContent: "left", paddingBottom: "2%" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Skill
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "20%" }}>
                {job.skills.length === 0 ? (
                  <>
                    {" "}
                    <Typography variant="body1">None</Typography>
                  </>
                ) : (
                  <>
                    {job.skills.map((skill) => (
                      <>
                        <Grid key={skill._id} item gap={1}>
                          <Chip
                            sx={{
                              color: "#00A671",
                              background: "rgba(0, 166, 113, 0.12)",
                            }}
                            label={capitalizeFirstLetter(skill.name)}
                          />
                        </Grid>
                      </>
                    ))}
                  </>
                )}
              </Grid>
            </Grid>
            {user.role === "level_0_annotator" ||
            user.role === "level_1_annotator" ||
            user.role === "level_2_annotator" ||
            user.role === "level_3_annotator" ||
            user.role === "reviewer" ? (
              <></>
            ) : (
              <>
                <Grid container>
                  <Grid
                    item
                    xs={3}
                    sx={{ justifyContent: "left", paddingBottom: "2%" }}>
                    <Typography variant="h8" sx={{ color: "#969CAF" }}>
                      Reviewer
                    </Typography>
                  </Grid>
                  <Grid item xs={7} sx={{ paddingLeft: "20%" }}>
                    <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                      {job?.reviewer.qaiUserName}
                    </Typography>
                  </Grid>
                </Grid>
              </>
            )}

            <Grid container>
              <Grid
                item
                xs={3}
                sx={{ justifyContent: "left", paddingBottom: "2%" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Path
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "20%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {job.teamName} /{job.projectName}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={3}
                sx={{ justifyContent: "left", paddingBottom: "2%" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Active Hub
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "20%" }}>
                {job.activeHub &&
                  job.activeHub.map((item) => (
                    <>
                      <Box key={item}>
                        <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                          {item},
                        </Typography>
                      </Box>
                    </>
                  ))}
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={3}
                sx={{ justifyContent: "left", paddingBottom: "2%" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Category
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "20%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {capitalizeFirstLetter(job.category)}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={3}
                sx={{ justifyContent: "left", paddingBottom: "2%" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Server
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "20%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {capitalizeFirstLetter(job.server_agent)}
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid
                item
                xs={3}
                sx={{ justifyContent: "left", paddingBottom: "2%" }}>
                <Typography variant="h8" sx={{ color: "#969CAF" }}>
                  Time Limit
                </Typography>
              </Grid>
              <Grid item xs={7} sx={{ paddingLeft: "20%" }}>
                <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                  {job.timeLimit} Minutes
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid sx={{ border: "1px solid #DADCDF" }}></Grid>
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

export default PendingJobDetails;
