import {Grid, Paper, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../../../features/slice/userSlice";
import iconPendding from "../../../../assets/images/dashboardIcon/activeAnnotator.svg";

const TotalUser = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);
  const { totalUsers } = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(getAllUsers({ limit: 10, skip: 0 }));
  }, [dispatch]);
  return (
    <>
      <Grid container>
        <Paper
          elevation={0}
          sx={{
            padding: "0%",
            width: "100%",
            height: "100px",
            borderRadius: "8px",
          }}>
          <Box sx={{ padding: "5%", position: "relative" }}>
            <Grid container sx={{ paddingTop: "0%" }}>
              <Grid item xs={3.5}>
                <img src={iconPendding} />
              </Grid>
              <Grid item xs={8.5}>
                <Grid container>
                <Typography variant={"wpf_p4_medium"} sx={{ color: "neutral.N300" }}>
                   Total Users
                  </Typography>
                </Grid>
                <Grid container sx={{ paddingTop: "4%" }}>
                  <Grid item xs={8}>
                  <Typography sx={{ color: "neutral.750" }} variant="wpf_h4_Bold">
                       <b> {totalUsers}</b>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default TotalUser;
