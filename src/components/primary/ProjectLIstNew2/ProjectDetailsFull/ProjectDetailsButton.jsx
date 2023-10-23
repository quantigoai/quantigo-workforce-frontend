import { Box } from "@mui/material";
import DateRangeComponent from "./DateRangePicker/DateRangeComponent";
import DetailChartarButton from "./DetailChartarButton";
import DetailsButton from "./DetailsButton";
import DetailsUploadHourBUtton from "./DetailsUploadHourBUtton";

const ProjectDetailsButton = ({ range, setRange, value, handleProjectDetailsOpen, role }) => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
      {value === "not-Started" && (
        <Box>
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
        </Box>
      )}
      {value === "in-Progress" && (
        <>
          {/* <DatePickerProgress /> */}

          <DateRangeComponent range={range} setRange={setRange} />
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailChartarButton />
        </>
      )}
      {value === "completed" && (
        <>
          <DetailsUploadHourBUtton />
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailChartarButton />
        </>
      )}
      {value === "hours-added" && (
        <>
          <DetailsUploadHourBUtton />
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailChartarButton />
        </>
      )}
    </Box>
  );
};

export default ProjectDetailsButton;
