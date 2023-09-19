import { Box, Typography } from "@mui/material";
import { statusCreateOptions } from "../FIlterOptions";
import CheckINOutButton from "./CheckInOutButton";
import ProjectDetailSelect from "./ProjectDetailSelect";
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
  handleOpen,
}) => {
  return (
    <Box
      display={"flex"}
      // alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      sx={{
        // backgroundColor: "red",
        backgroundColor: "white",
        borderRadius: "8px 8px 0px 0px",
      }}
    >
      <Box
        sx={{
          // backgroundColor: "green",
          // backgroundColor: "#F2F6FC",
          width: "100%",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "Center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="wpf_p1_semiBold" color="#091E42">
            {projectDrawer.project_drawer_name}{" "}
          </Typography>

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

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box>
            {projectDrawer.project_status && role === "admin" ? (
              <ProjectDetailsButton role={role} value={value} handleProjectDetailsOpen={handleProjectDetailsOpen} />
            ) : (
              <CheckINOutButton
                handleOpen={handleOpen}
                checkOutDisable={checkOutDisable}
                handleCheckOutButton={handleCheckOutButton}
                isDisable={isDisable}
                handleCheckInButton={handleCheckInButton}
                handleDetailButton={handleDetailButton}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetailsHeader;
