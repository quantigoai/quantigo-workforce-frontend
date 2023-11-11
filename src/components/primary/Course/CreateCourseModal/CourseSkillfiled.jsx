/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Course/InputFields/SkillField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 22nd 2022, 12:21:46 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */

import {Box, Chip, Grid, MenuItem, Select, styled, Typography,} from "@mui/material";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {MyFormControl} from "../../../shared/CustomField/CustomDatePicker";

export const MySelect = styled(Select)(() => ({
  border: "2px solid #E6ECF5",
  // padding: "5px 0px 0px 0px",
  // background: "white",
  height: "50%",
  borderRadius: "8px",
}));
const iconStyle = {
  color: "rgba(45, 88, 255, 1)",
  marginRight: "5px",
  cursor: "pointer",
};
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 2;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 110,
    },
  },
};

const CourseSkillfiled = ({ course, skills, skillSet, handleChangeSkills, MenuProps, user }) => {
  const location = useLocation();
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const { isLightTheme } = useSelector((state) => state.theme);

  //   useEffect(() => {
  //     if (location.pathname === "/create-course" || location.pathname === "/jobs/create-job") {
  //       setIsUpdate(false);
  //     } else {
  //       setIsUpdate(true);
  //     }
  //     setIsLoading(false);
  //   }, [location.pathname]);

  const [isOpen, SetIsOpen] = useState(false);
  const handleOpenClose = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <Grid container>
        <MyFormControl fullWidth>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "500",
              mb: 1,
              color: isLightTheme ? "#091E42" : "#FFFFFF",
            }}>
            Skill
          </Typography>
          <MySelect
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            sx={{
              background: isLightTheme && "#FFFFFF",
            }}
            multiple
            fullWidth
            variant="outlined"
            InputProps={{ disableUnderline: false }}
            // IconComponent={() =>
            //   isOpen ? <KeyboardArrowUpIcon style={iconStyle} /> : <KeyboardArrowDownIcon style={iconStyle} />
            // }
            onOpen={handleOpenClose}
            onClose={handleOpenClose}
            // defaultValue={
            //   isUpdate &&
            //   (location.pathname === "/allusers" ||
            //     location.pathname === "/users" ||
            //     location.pathname === "/annotators" ||
            //     location.pathname === "/reviewers")
            //     ? user.skills.map((s) => s.name)
            //     : isUpdate
            //     ? course.skills.map((s) => s.name)
            //     : skillSet
            // }
            defaultValue={isUpdate ? skills.map((s) => s.name) : skillSet}
            onChange={handleChangeSkills}
            // input={<FilledInput id="select-multiple-chip" label="Chip" />}
            // MenuProps={MenuProps}
            // renderValue={(selected) => (
            //   <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            //     {selected.map((value) => (
            //       <Chip key={value} label={value} />
            //     ))}
            //   </Box>
            //           )}

            renderValue={(selected) => (
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,1fr)",
                  gap: 0.5,
                  fontSize: "12px",
                  height: "20px",
                }}>
                {selected?.map(
                  (value, i) =>
                    [0].includes(i) && <Chip sx={{ fontSize: "12px", height: "95%" }} key={value} label={value} />
                )}
                {selected.length > 1 && (
                  <Typography variant="p" sx={{ ml: 2, mt: 0 }}>
                    {" "}
                    + {selected.length} more
                  </Typography>
                )}
              </Box>
            )}
            MenuProps={MenuProps}>
            {skills.map((skill) => (
              <MenuItem key={skill._id} value={skill.name}>
                {skill.name}
              </MenuItem>
            ))}
          </MySelect>
        </MyFormControl>
      </Grid>
    </>
  );
};

export default CourseSkillfiled;
