import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
  Box,
  Chip,
  FilledInput,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllSkills } from "../../../features/slice/skillSlice";
import { useDispatch, useSelector } from "react-redux";

const iconStyle = {
  color: "rgba(45, 88, 255, 1)",
  marginRight: "5px",
  cursor: "pointer",
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SkillFieldForUserList = ({ handleChangeSkills, skillSet }) => {
 
  const { skills } = useSelector((state) => state.skill);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSkills());
  }, []);
  const [isOpen, SetIsOpen] = useState(false);
  const handleOpenClose = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <>
      <Grid>
        <FormControl fullWidth variant="filled">
          <InputLabel id="demo-simple-select-label">Skills</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            IconComponent={() =>
              isOpen ? (
                <KeyboardArrowUpIcon style={iconStyle} />
              ) : (
                <KeyboardArrowDownIcon style={iconStyle} />
              )
            }
            onOpen={handleOpenClose}
            onClose={handleOpenClose}
            onChange={handleChangeSkills}
            defaultValue={skillSet || ""}
            input={<FilledInput id="select-multiple-chip" label="Chip" />}
            MenuProps={MenuProps}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}>
            {skills.map((skill) => (
              <MenuItem key={skill._id} value={skill.name}>
                {skill.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default SkillFieldForUserList;
