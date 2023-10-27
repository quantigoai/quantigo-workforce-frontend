import { Box } from "@mui/material";
import DateRangeComponent from "./DateRangePicker/DateRangeComponent";
import DetailChartarButton from "./DetailChartarButton";
import DetailsButton from "./DetailsButton";
import DetailsUploadHourBUtton from "./DetailsUploadHourBUtton";
import ApproveProjectPaymentButton from "./ApproveProjectPaymentButton";
import DownloadEffectiveHours from "./DownloadEffectiveHours";

const ProjectDetailsButton = ({ range, setRange, value, handleProjectDetailsOpen, role }) => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} > 
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
          <DetailChartarButton role={role} />
        </>
      )}
      {value === "completed" && (
        <>
          {role !== "account_manager" && <DetailsUploadHourBUtton value={value} role={role} />}{" "}
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailChartarButton role={role} />
        </>
      )}
      {value === "hours-added" && (
        <>
          <DetailsUploadHourBUtton value={value} role={role} />
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          {/* <DetailChartarButton role={role} /> */}
          <DownloadEffectiveHours/>
        </>
      )}
      {value === "hours-approved" && (
        <>
          {/* <DetailsUploadHourBUtton value={value} role={role} /> */}
          <ApproveProjectPaymentButton role={role}/>
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailChartarButton role={role} />
        </>
      )}
      {value === "payment-done" && (
        <>
          {/* <DetailsUploadHourBUtton value={value} role={role} /> */}
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailChartarButton role={role} />
        </>
      )}
    </Box>
  );
};

export default ProjectDetailsButton;
