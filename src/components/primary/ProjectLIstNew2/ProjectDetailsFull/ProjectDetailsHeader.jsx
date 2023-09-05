import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { statusCreateOptions } from "../FIlterOptions";
import ProjectDetailSelect from "./ProjectDetailSelect";
import DatePickerProgress from "./DatePickerProgress";
import DetailsButton from "./DetailsButton";
import DetailChartarButton from "./DetailChartarButton";
import DetailsUploadHourBUtton from "./DetailsUploadHourBUtton";

const ProjectDetailsHeader = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Box display={"flex"} justifyContent={""} alignItems={"Center"}>
        <Typography variant="body"> Car Annotation</Typography>

        <Box sx={{ ml: 2 }}>
          <ProjectDetailSelect
            value={value}
            setValue={setValue}
            options={statusCreateOptions}
            handleChange={handleChange}
          />
        </Box>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
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
