import { Box, Button, Grid, MenuItem, Stack, Typography } from "@mui/material";
import ProjectDrawerStatusChip from "../../../shared/FilterField/ProjectDrawerStatusChip";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"; // Import useState
import UserSkillChange from "../../Users/SkillChange/UserSkillChange";
import PDskillFIeld from "../../../shared/CustomField/PDskillFIeld";
import SkillField from "./SkillField";
import { useAlert } from "react-alert";

const SkillFieldForUserDetails = ({
  ItemTitle,
  Item,
  user,
  skillSet,
  handleChangeSkills,
  setIsEditSkill,
  isEditSkill,
}) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { skills } = useSelector((state) => state.skill);
  // Add a state variable to track hover state
  const [isHovered, setIsHovered] = useState(false);
 
  const handleEditSkill = () => {
    setIsEditSkill(true);
  };
console.log(Item)
  return (
    <>
      {!isEditSkill && (
        <Stack
          sx={{
            borderBottom: "1px solid #E6ECF5",
            position: "relative",
          }}
          onMouseEnter={() => setIsHovered(true)} // Handle mouse enter event
          onMouseLeave={() => setIsHovered(false)} // Handle mouse leave event
        >
          <Grid container>
            <Grid xs={12} sx={{ padding: "2%" }}>
              <Grid container>
                <Typography
                  variant="caption"
                  sx={{
                    color: isLightTheme ? "#091E42" : "#fff",
                    opacity: isLightTheme && "0.7",
                    fontWeight: "400",
                  }}>
                  {ItemTitle}
                </Typography>
                {isHovered && (
                  <Button
                    className={`edit-button ${isHovered ? "visible" : "hidden"}`}
                    sx={{
                      position: "absolute",
                      top: 1,
                      // bottom: "50", // Adjust the button's position as needed
                      right: "0", // Adjust the button's position as needed
                      //   opacity: 0, // Initially, the button is hidden
                      //   transition: "opacity 0.3s ease-in-out",
                    }}
                    onClick={() => handleEditSkill()}>
                    <i className="ri-edit-line"></i>
                  </Button>
                )}
              </Grid>
              {ItemTitle === "Skills" ? (
                <>
                  <Grid container>
                    {Item?.map((p) => (
                      <Box key={p._id} sx={{ paddingRight: "1%", paddingBottom: "1%" }}>
                        <ProjectDrawerStatusChip key={p._id} value={p.name} />
                      </Box>
                    ))}
                  </Grid>
                </>
              ) : (
                <>
                  <Typography variant="wf_h5_bold" sx={{ color: isLightTheme ? "#091E42" : "#fff", fontWeight: "500" }}>
                    {Item ?? Item}
                  </Typography>
                </>
              )}
            </Grid>
          </Grid>
        </Stack>
      )}
      {isEditSkill && (
        <>
          <SkillField skills={skills} skillSet={skillSet} handleChangeSkills={handleChangeSkills} user={user} />
        </>
      )}
    </>
  );
};

export default SkillFieldForUserDetails;
