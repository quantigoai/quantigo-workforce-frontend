import { Box } from "@mui/material";
import React from "react";
import DatePickerProgress from "./DatePickerProgress";
import DetailsButton from "./DetailsButton";
import DetailChartarButton from "./DetailChartarButton";
import DetailsUploadHourBUtton from "./DetailsUploadHourBUtton";

const ProjectDetailsButton = ({ value, handleProjectDetailsOpen, role }) => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
      {value === "not-Started" && (
        <Box sx={{ mr: 5 }}>
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
        </Box>
      )}
      {value === "in-Progress" && (
        <>
          <DatePickerProgress />
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailChartarButton />
        </>
      )}
      {value === "completed" && (
        <>
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailsUploadHourBUtton />
          <DetailChartarButton />
        </>
      )}
      {value === "hours-added" && (
        <>
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailsUploadHourBUtton />
          <DetailChartarButton />
        </>
      )}
    </Box>
  );
};

export default ProjectDetailsButton;
