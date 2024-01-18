import {Grid, styled, Tooltip, tooltipClasses, Typography} from "@mui/material";
import React from "react";
import preIcon from "../../../../assets/images/PreIcon.svg";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));
const CoursePrerequisiteChip = ({ prerequisiteCourses }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={1} sx={{ paddingTop: "1%" }}>
          <img src={preIcon} />
        </Grid>

        <Grid item xs={11} sx={{ paddingLeft: "4%" }}>
          <Grid item xs={12}>
            <Typography sx={{ color: "#969CAF" }} variant="caption">
              PRE-REQUISITE
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {prerequisiteCourses?.length === 1 ? (
              <>
                {prerequisiteCourses.map((prerequisiteCourse) => (
                  <Grid key={prerequisiteCourse?._id} item gap={1}>
                    <Typography>
                      {" "}
                      <b>{prerequisiteCourse?.name} </b>
                    </Typography>
                  </Grid>
                ))}
              </>
            ) : prerequisiteCourses?.length === 0 ? (
              <>
                <Typography>
                  {" "}
                  <b>None</b>
                </Typography>
              </>
            ) : (
              <>
                <Grid container>
                  <Typography>
                    {" "}
                    <b>{prerequisiteCourses?.name}, </b>
                  </Typography>
                  <Tooltip
                    title={prerequisiteCourses?.map((prerequisiteCourse) => (
                      <Grid key={prerequisiteCourse._id} item gap={1}>
                        <Typography> {prerequisiteCourse.name}</Typography>
                      </Grid>
                    ))}
                    arrow
                  >
                    <b> + {prerequisiteCourses?.length} more</b>
                  </Tooltip>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CoursePrerequisiteChip;
