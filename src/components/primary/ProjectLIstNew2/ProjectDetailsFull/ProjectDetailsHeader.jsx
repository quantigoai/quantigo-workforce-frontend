import { Box, Typography } from "@mui/material";
import { statusCreateOptions } from "../FIlterOptions";
import ProjectDetailSelect from "./ProjectDetailSelect";
import DatePickerProgress from "./DatePickerProgress";
import DetailsButton from "./DetailsButton";
import DetailChartarButton from "./DetailChartarButton";
import DetailsUploadHourBUtton from "./DetailsUploadHourBUtton";

const ProjectDetailsHeader = ({ value, setValue, handleChange, projectDrawer, handleProjectDetailsOpen }) => {
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
        <Typography variant="body">{projectDrawer.project_drawer_name} </Typography>

        <Box sx={{ ml: 2 }}>
          <ProjectDetailSelect defaultVal={projectDrawer.project_status} value={value} setValue={setValue} options={statusCreateOptions} handleChange={handleChange} />
        </Box>
      </Box>

      {projectDrawer.project_status && (
        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
          {value === "not-Started" && (
            <Box sx={{ mr: 5 }}>
              <DetailsButton handleProjectDetailsOpen={handleProjectDetailsOpen} />
            </Box>
          )}
          {value === "in-Progress" && (
            <>
              <DatePickerProgress />
              <DetailsButton handleProjectDetailsOpen={handleProjectDetailsOpen} />
              <DetailChartarButton />
            </>
          )}
          {value === "completed" && (
            <>
              <DetailsButton handleProjectDetailsOpen={handleProjectDetailsOpen} />
              <DetailsUploadHourBUtton />
              <DetailChartarButton />
            </>
          )}
          {value === "hours-added" && (
            <>
              <DetailsButton handleProjectDetailsOpen={handleProjectDetailsOpen} />
              <DetailsUploadHourBUtton />
              <DetailChartarButton />
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ProjectDetailsHeader;
