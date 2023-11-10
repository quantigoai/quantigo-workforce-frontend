import {Box, Grid, Stack, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import ProjectDrawerStatusChip from "../../../shared/FilterField/ProjectDrawerStatusChip";

const SingleItem = ({ ItemTitle, Item }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <>
      <Stack sx={{ borderBottom: "1px solid #E6ECF5" }}>
        <Grid container>
          <Grid item xs={12} sx={{ padding: "2%" }}>
            <Grid container>
              <Typography
                variant="wpf_h8_regular"
                sx={{ color: isLightTheme ? "#091E42" : "#fff", opacity: isLightTheme && "0.7", fontWeight: "400" }}
              >
                {ItemTitle}
              </Typography>
            </Grid>
            {ItemTitle === "Skills" ? (
              <>
                <Grid container>
                  {Item?.map((p) => (
                    <Box key={p._id} sx={{ paddingRight: "1%", paddingBottom: "1%" }}>
                      <ProjectDrawerStatusChip key={p._id} value={p.name} />
                    </Box>
                  ))}
                </Grid>
              </>
            ) : (
              <>
                <Typography
                  variant="wpf_p3_medium"
                  sx={{ color: isLightTheme ? "#091E42" : "#fff", fontWeight: "500" }}
                >
                  {Item ?? Item}
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default SingleItem;
