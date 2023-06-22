import {Box, LinearProgress, styled, Tooltip, tooltipClasses, Typography,} from "@mui/material";
import React from "react";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: "100%",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
const DatasetProgressIndex = ({ dataset }) => {

  return (
    <>
      <HtmlTooltip
        title={
          <React.Fragment>
            {/* <Typography color="inherit">dataset Progress</Typography> */}
            <Typography variant="body2" color="textSecondary">
              Completed Jobs / Total Jobs
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {dataset.completedJobs}/{dataset.totalJobs}
            </Typography>
            {/* <LinearProgress color="secondary" /> */}
          </React.Fragment>
        }>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress
              value={dataset.completedPercentage}
              variant="determinate"
              sx={{
                cursor: "pointer",
                height: "10px",
                borderRadius: "5px",
              }}
            />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">
              {dataset.completedPercentage}%
            </Typography>
          </Box>
        </Box>
      </HtmlTooltip>
    </>
  );
};

export default DatasetProgressIndex;
