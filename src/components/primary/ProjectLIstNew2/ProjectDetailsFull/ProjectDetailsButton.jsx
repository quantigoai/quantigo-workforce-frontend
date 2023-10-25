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
          <DetailChartarButton role={role}/>
        </>
      )}
      {value === "completed" && (
        <>
          <DetailsUploadHourBUtton role={role}/>
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailChartarButton role={role}/>
        </>
      )}
      {value === "hours-added" && (
        <>
          <DetailsUploadHourBUtton role={role}/>
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailChartarButton role={role}/>
        </>
      )}
      {value === "hours-approved" && (
        <>
          <DetailsUploadHourBUtton role={role}/>
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailChartarButton role={role}/>
        </>
      )}
      {value === "payment-done" && (
        <>
          <DetailsUploadHourBUtton role={role}/>
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailChartarButton role={role}/>
        </>
      )}
    </Box>
  );
};

export default ProjectDetailsButton;
