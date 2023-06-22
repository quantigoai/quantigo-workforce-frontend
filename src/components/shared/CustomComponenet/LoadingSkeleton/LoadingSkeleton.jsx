/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/CustomComponenet/LoadingSkeleton/LoadingSkeleton.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 20th 2023, 11:07:07 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import PropTypes from "prop-types";
import * as React from "react";

const data = [
  {
    src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
  },
  {
    src: "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
    title: "Queen - Greatest Hits",
    channel: "Queen Official",
    views: "40M views",
    createdAt: "3 years ago",
  },
  {
    src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
    title: "Calvin Harris, Sam Smith - Promises (Official Video)",
    channel: "Calvin Harris",
    views: "130M views",
    createdAt: "10 months ago",
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container>
      {(loading ? Array.from(new Array(12)) : data).map((singleItem, index) => (
        <Grid
          item
          xs={3}
          key={index}
          //   fullwidth
          sx={{ my: 5, display: "flex", justifyContent: "center" }}
        >
          {singleItem ? (
            <Box sx={{ pr: 2 }}></Box>
          ) : (
            <Box
              sx={{
                pt: 0.5,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Skeleton variant="rectangular" width="80%" height={200} />
              <Skeleton width="75%" />
              <Skeleton width="75%" />
              <Skeleton width="75%" />
            </Box>
          )}
        </Grid>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function LoadingSkeleton() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading />
    </Box>
  );
}
