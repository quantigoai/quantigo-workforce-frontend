import {LinearProgress, styled, Tooltip, tooltipClasses, Typography,} from "@mui/material";
import React from "react";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
const ProjectProgressIndex = ({ projectName }) => {
  return (
    <>
      <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Project Progress</Typography>
            <LinearProgress
              value={40}
              variant="determinate"
              sx={{
                borderRadius: "5px",
              }}
            />
            <Typography variant="body2" color="textSecondary">
              40 %
            </Typography>
            {/* <LinearProgress color="secondary" /> */}
          </React.Fragment>
        }>
        <Typography
          color="inherit"
          variant="subtitle2"
          sx={{ cursor: "pointer" }}>
          {projectName}
        </Typography>
      </HtmlTooltip>
    </>
  );
};

export default ProjectProgressIndex;
