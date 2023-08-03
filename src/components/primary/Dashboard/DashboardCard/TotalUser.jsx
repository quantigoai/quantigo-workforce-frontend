import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../features/slice/userSlice";

const TotalUser = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.user);
  const { totalUsers } = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(getAllUsers({ limit: 10, skip: 0 }));

  }, [dispatch]);
  return (
    !isLoading && (
      <>
        <Grid container>
          <Paper
            elevation={0}
            sx={{ padding: "0%", width: "100%", height: "100px" }}
          >
            <Box sx={{ padding: "4%" }}>
              <Grid container>
                <Typography sx={{ color: "#969CAF" }}>Total Users</Typography>
              </Grid>
              <Grid container sx={{ paddingTop: "4%" }}>
                <Grid item xs={8}>
                  <Typography sx={{ color: "##1D1D1D" }} variant="h5">
                    {totalUsers}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </>
    )
  );
};

export default TotalUser;
