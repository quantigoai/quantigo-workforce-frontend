/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/SPV/Workspaces
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 27th 2023, 10:42:54 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomDownArrow = styled(KeyboardArrowDownIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});
const Workspaces = ({ workspaces, handleChangeWorkspace }) => {
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
        <InputLabel id="demo-simple-select-label">Select Workspace </InputLabel>
        {workspaces.length > 0 && (
          <Select
            onChange={(e) => handleChangeWorkspace(e)}
            label="workspace"
            defaultValue={""}
            IconComponent={() => <CustomDownArrow />}
            sx={{
              backgroundColor: "#F8F8F8",
              border: "0px solid #DADCDF",
              borderRadius: "4px",
            }}
          >
            {workspaces.map((workspace) => (
              <MenuItem key={workspace.id} value={workspace.id}>
                {workspace.name}
              </MenuItem>
            ))}
          </Select>
        )}
      </FormControl>
    </>
  );
};

export default Workspaces;
