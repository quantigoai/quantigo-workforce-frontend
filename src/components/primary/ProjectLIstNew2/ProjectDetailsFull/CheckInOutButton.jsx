import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CheckInButton from "./CheckInButton";
import CheckOutButton from "./CheckOutButton";
import DetailsButton from "./DetailsButton";

const CheckINOutButton = ({
  usersWorkHistoryCount,
  handleDetailButton,
  handleProjectDetailsOpen,
  fromDetails,
  handleCheckInButton,
  isDisable,
  handleCheckOutButton,
  checkOutDisable,
  handleOpen,
}) => {
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  const { user } = useSelector((state) => state.user);
  const [isAvailable, setIsAvailable] = React.useState(false);
  useEffect(() => {
    const projectSkills = projectDrawer?.project_skills?.map((skill) => skill.id);
    const userSkills = user?.skills?.map((skill) => skill.id);
    const matched = projectSkills?.every((skill) => userSkills?.includes(skill));
    
    setIsAvailable(matched && projectDrawer.project_status === "in-Progress");
  }, []);

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
      {usersWorkHistoryCount > 0 && <DetailsButton handleProjectDetailsOpen={handleProjectDetailsOpen} />}
      {isAvailable && (
        <>
          <CheckInButton isDisable={isDisable} handleCheckInButton={handleCheckInButton} />
          <CheckOutButton
            isDisable={isDisable}
            handleOpen={handleOpen}
            checkOutDisable={checkOutDisable}
            handleCheckOutButton={handleCheckOutButton}
          />
        </>
      )}
    </Box>
  );
};

export default CheckINOutButton;
