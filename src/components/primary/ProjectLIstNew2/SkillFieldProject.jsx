import {
  Box,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 110,
    },
  },
};

const SkillFieldProject = ({ skills, handleChangeSkill, addSkills }) => {
  // const [addSkills, setAddSkills] = useState([]);

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;

  //   const selectedSkills = value.map((skill) => {
  //     return skills.find((s) => s.name === skill);
  //   });

  //   setAddSkills(
  //     // On autofill we get a stringified value.
  //     typeof selectedSkills === "string" ? value.split(",") : selectedSkills
  //   );
  // };

  return (
    <>
      <Grid sx={{ mt: "18px" }} item xs={6}>
        <Typography sx={{ fontSize: "14px" }} variant="h6">
          {" "}
          Skills
        </Typography>
        <FormControl sx={{ mt: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            defaultValue={addSkills}
            onChange={handleChangeSkill}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected?.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
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

export default SkillFieldProject;
