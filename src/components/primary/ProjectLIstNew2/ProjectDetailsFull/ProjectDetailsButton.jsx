import { Box } from "@mui/material";
import DateRangeComponent from "./DateRangePicker/DateRangeComponent";
import DetailChartarButton from "./DetailChartarButton";
import DetailsButton from "./DetailsButton";
import DetailsUploadHourBUtton from "./DetailsUploadHourBUtton";
import ApproveProjectPaymentButton from "./ApproveProjectPaymentButton";
import DownloadEffectiveHours from "./DownloadEffectiveHours";
import { useSelector } from "react-redux";


const ProjectDetailsButton = ({ range, setRange, value, handleProjectDetailsOpen, role }) => {
  const { project_status } = useSelector((state) => state.projectDrawer.projectDrawer);

 
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
      {project_status === "not-Started" && (
        <Box>
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
        </Box>
      )}
      {project_status === "in-Progress" && (
        <>
          {/* <DatePickerProgress /> */}

          <DateRangeComponent range={range} setRange={setRange} />
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailChartarButton role={role} />
        </>
      )}
      {project_status === "completed" && (
        <>
          {role !== "account_manager" && <DetailsUploadHourBUtton value={value} role={role} />}{" "}
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailChartarButton role={role} />
        </>
      )}
      {project_status === "hours-added" && (
        <>
          <DetailsUploadHourBUtton value={value} role={role} />
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          {/* <DetailChartarButton role={role} /> */}
          <DownloadEffectiveHours />
        </>
      )}
      {project_status === "hours-approved" && (
        <>
          {/* <DetailsUploadHourBUtton value={value} role={role} /> */}
          <ApproveProjectPaymentButton role={role} />
          <DetailsButton role={role} handleProjectDetailsOpen={handleProjectDetailsOpen} />
          <DetailChartarButton role={role} />
        </>
      )}
      {project_status === "payment-done" && (
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
