import { Box, Typography } from "@mui/material";
import { statusCreateOptions } from "../FIlterOptions";
import CheckINOutButton from "./CheckInOutButton";
import ProjectDetailSelect from "./ProjectDetailSelect";
import ProjectDetailsButton from "./ProjectDetailsButton";
import { useSelector } from "react-redux";

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
  range,
  setRange,
  usersWorkHistoryCount,
}) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <Box
      display={"flex"}
      // alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      margin="auto"
      sx={{
        // backgroundColor: "red",
        backgroundColor: isLightTheme ? "white" : "#121212",
        borderRadius: "8px 8px 0px 0px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "Center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="wpf_p1_semiBold" color={isLightTheme ? "#091E42" : "white"}>
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
            {role === "admin" ? (
              <ProjectDetailsButton
                range={range}
                setRange={setRange}
                role={role}
                value={value}
                handleProjectDetailsOpen={handleProjectDetailsOpen}
              />
            ) : (
              <CheckINOutButton
                usersWorkHistoryCount={usersWorkHistoryCount}
                handleOpen={handleOpen}
                handleProjectDetailsOpen={handleProjectDetailsOpen}
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
