/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/SPV/Teams.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 27th 2023, 10:42:48 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomDownArrow = styled(KeyboardArrowDownIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});
const Teams = ({ isDisabled, teams, handleChangeTeam }) => {
  return (
    <>
      <FormControl
        variant="filled"
        fullWidth
        sx={{
          backgroundColor: "#F8F8F8",
          border: "1px solid #DADCDF",
          borderRadius: "4px",
          height: "56px",
        }}
      >
        <InputLabel id="demo-simple-select-label">Select Team</InputLabel>
        {teams.length > 0 && (
          <Select
            disabled={isDisabled}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={""}
            onChange={(e) => handleChangeTeam(e)}
            IconComponent={() => <CustomDownArrow />}
            label="Select Team"
            sx={{
              backgroundColor: "#F8F8F8",
              border: "0px solid #DADCDF",
              borderRadius: "4px",
            }}
          >
            {teams.map((team) => (
              <MenuItem key={team.id} value={team.id}>
                {team.name}
              </MenuItem>
            ))}
          </Select>
        )}
      </FormControl>
    </>
  );
};

export default Teams;
