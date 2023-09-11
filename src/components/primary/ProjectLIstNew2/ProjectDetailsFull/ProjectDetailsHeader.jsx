import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { statusCreateOptions } from "../FIlterOptions";
import ProjectDetailSelect from "./ProjectDetailSelect";
import DatePickerProgress from "./DatePickerProgress";
import DetailsButton from "./DetailsButton";
import DetailChartarButton from "./DetailChartarButton";
import DetailsUploadHourBUtton from "./DetailsUploadHourBUtton";

const ProjectDetailsHeader = ({ value, setValue, handleChange, selectedProjects }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      sx={{
        backgroundColor: "#F2F6FC",
        borderBottom: "2px solid #F2F6FC",
      }}
    >
      <Box display={"flex"} justifyContent={""} alignItems={"Center"}>
        <Typography variant="body">{selectedProjects?.project_drawer_name} </Typography>

        <Box sx={{ ml: 2 }}>
          <ProjectDetailSelect defaultVal={selectedProjects?.project_status} value={value} setValue={setValue} options={statusCreateOptions} handleChange={handleChange} />
        </Box>
      </Box>

      <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        {value === "not-Started" && (
          <Box sx={{ mr: 5 }}>
            <DetailsButton />
          </Box>
        )}
        {value === "in-Progress" && (
          <>
            <DatePickerProgress />
            <DetailsButton />
            <DetailChartarButton />
          </>
        )}
        {value === "completed" && (
          <>
            <DetailsButton />
            <DetailsUploadHourBUtton />
            <DetailChartarButton />
          </>
        )}
        {value === "hours-added" && (
          <>
            <DetailsButton />
            <DetailsUploadHourBUtton />
            <DetailChartarButton />
          </>
        )}
        {value === "" && (
          <>
            <DetailsButton />
          </>
        )}
      </Box>
    </Box>
  );
};

export default ProjectDetailsHeader;
