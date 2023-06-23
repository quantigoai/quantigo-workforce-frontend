import {Grid, Paper, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../../../features/slice/userSlice";

const TotalUser = () => {
  const dispatch = useDispatch();
  const { totalCountData } = useSelector((state) => state.dashboard);
  const { users } = useSelector((state) => state.user);

  const userLength = users.length;

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <>
      <Grid container>
        <Paper
          elevation={0}
          sx={{ padding: "0%", width: "100%", height: "100px" }}>
          <Box sx={{ padding: "4%" }}>
            <Grid container>
              <Typography sx={{ color: "#969CAF" }}>Total Users</Typography>
            </Grid>
            <Grid container sx={{ paddingTop: "4%" }}>
              <Grid item xs={8}>
                <Typography sx={{ color: "##1D1D1D" }} variant="h5">
                  {userLength}
                </Typography>
              </Grid>
              {/* <Grid
                container
                item
                xs={4}
                sx={{ justifyContent: "right", paddingTop: "2%" }}>
                <Typography sx={{ color: "#2D58FF" }} variant="body2">
                  + {userLength}
                </Typography>
                <NorthIcon sx={{ color: "#2D58FF", fontSize: "small" }} />
              </Grid> */}
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default TotalUser;
