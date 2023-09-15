import { Box, Typography } from "@mui/material";
import { statusCreateOptions } from "../FIlterOptions";
import ProjectDetailSelect from "./ProjectDetailSelect";
import CheckINOutButton from "./CheckInOutButton";
import ProjectDetailsButton from "./ProjectDetailsButton";

const ProjectDetailsHeader = ({
  value,
  setValue,
  handleChange,
  projectDrawer,
  handleProjectDetailsOpen,
  handleDetailButton,
  handleCheckInButton,
  isDisable,
  handleCheckOutButton,
  checkOutDisable,
  role,
}) => {
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
          {role === "admin" && (
            <ProjectDetailSelect
              defaultVal={projectDrawer.project_status}
              value={value}
              setValue={setValue}
              options={statusCreateOptions}
              handleChange={handleChange}
            />
          )}
        </Box>
      </Box>

      {projectDrawer.project_status && role === "admin" ? (
        <ProjectDetailsButton role={role} value={value} handleProjectDetailsOpen={handleProjectDetailsOpen} />
      ) : (
        <CheckINOutButton
          checkOutDisable={checkOutDisable}
          handleCheckOutButton={handleCheckOutButton}
          isDisable={isDisable}
          handleCheckInButton={handleCheckInButton}
          handleDetailButton={handleDetailButton}
        />
      )}
    </Box>
  );
};

export default ProjectDetailsHeader;
