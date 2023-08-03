import { Box, Chip, FilledInput, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };


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
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
const SkillFieldProject = () => {
    const { skills } = useSelector((state) => state.skill);
    const [mainSKills,setMainSkills]=useState([]);
  useEffect(()=>{
    setMainSkills(skills);
  },[skills])
    const theme = useTheme();
    const [newSKills, setNewSkills] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setNewSkills(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    // const [skill, setSkill] = React.useState([]);
    // const [isOpen, SetIsOpen] = useState(false);
    // const handleOpenClose = () => {
    //   SetIsOpen(!isOpen);
    // };
    // const handleChangeSkills = (event) => {
    //     const {
    //       target: { value },
    //     } = event;
    
    //     const selectedSkills = value.map((skill) => {
    //       return skills.find((s) => s.name === skill);
    //     });
    
    //     setSkill(
    //       // On autofill we get a stringified value.
    //       typeof selectedSkills === "string" ? value.split(",") : selectedSkills
    //     );
    //   };
    return (
       <>
        <Grid sx={{mt:"10px"}} item xs={12}>
          {/* <FormControl fullWidth >
          <Typography sx={{fontWeight:"500",mb:"10px",fontSize:"14px"}} variant='h6' >Skill</Typography>
            {/* <InputLabel id="demo-simple-select-label">Select</InputLabel> */}
            {/* <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
            //   multiple
             
              onOpen={handleOpenClose}
              onClose={handleOpenClose}
                value={skill}
              onChange={handleChangeSkills}
              input={<FilledInput id="select-multiple-chip" label="Chip" />}
              MenuProps={MenuProps}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              >
              {skills.map((skill) => (
                <MenuItem key={skill._id} value={skill.name}>
                  {skill.name}
                </MenuItem>
              ))}
            </Select> */}
          {/* </FormControl> */} 
          <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={newSKills}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          { mainSKills?.map((skill) => (
            <MenuItem
              key={skill}
              value={skill}
              style={getStyles(skill, newSKills, theme)}
            >
              {skill}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </Grid>
       </>
    );
};

export default SkillFieldProject;