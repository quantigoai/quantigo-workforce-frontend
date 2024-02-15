import { Grid, Tooltip, Typography } from "@mui/material";
import React from "react";

const MoreComponents = ({ moreArray }) => {
  return (
    <>
      {moreArray?.length === 1 ? (
        <>
          {moreArray.map((prerequisiteCourse) => (
            <Grid key={prerequisiteCourse?._id} item gap={1}>
              <Typography variant='wpf_p3_medium_2' color={"grey.600"}>
                {" "}
                <b>{prerequisiteCourse?.name} </b>
              </Typography>
            </Grid>
          ))}
        </>
      ) : moreArray?.length === 0 ? (
        <>
          <Typography variant='wpf_p3_medium_2' color={"grey.600"}>
            {" "}
            <b>None</b>
          </Typography>
        </>
      ) : (
        <>
          <Typography variant='wpf_p3_medium_2' color={"grey.600"}>
            {" "}
            {moreArray && moreArray[0]?.name},
          </Typography>
          <Tooltip
            title={moreArray?.map((prerequisiteCourse, index) => (
              <Grid key={prerequisiteCourse._id} item gap={1}>
                {index != 0 && <Typography> {prerequisiteCourse.name}</Typography>}
              </Grid>
            ))}
            arrow
          >
            <Typography variant='wpf_p3_medium_2' color={"grey.600"}>
              {" "}
              + {moreArray?.length - 1} more
            </Typography>
          </Tooltip>
        </>
      )}
    </>
  );
};

export default MoreComponents;
