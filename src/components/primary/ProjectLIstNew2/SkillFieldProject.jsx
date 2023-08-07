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
import { useTheme } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 210,
    },
  },
};

function getStyles(name, addSkills, theme) {
  return {
    fontWeight:
      addSkills.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const SkillFieldProject = () => {
  const { skills } = useSelector((state) => state.skill);
  console.log(skills);
  const [mainSKills, setMainSkills] = useState([]);
  const [addSKills, setAddSkills] = useState([]);

  useEffect(() => {
    setMainSkills(skills);
  }, [skills]);
  const theme = useTheme();
  const namesArray = mainSKills.map((item) => item.name);

  console.log(namesArray);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setAddSkills(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  console.log(mainSKills);
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
            value={addSKills}
            onChange={handleChange}
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
            {namesArray?.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, addSKills, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default SkillFieldProject;
