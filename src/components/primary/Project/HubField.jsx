/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Project/HubField.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, January 16th 2023, 12:08:40 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import React, { useEffect } from "react";
import {
  Checkbox,
  FilledInput,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomDownArrow = styled(KeyboardArrowDownIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});
const allHubs = [
  "All",
  "Dhaka",
  "Khulna",
  "Sirajganj",
  "Mymensingh",
  "Chuadanga",
];

const HubField = ({ handleChangeHubs, MenuProps, hubLists }) => {
  const [activeHubs, setActiveHubs] = React.useState(hubLists);

  useEffect(() => {
    setActiveHubs(hubLists);
  }, [hubLists]);

  const handleChange = (event) => {
    setActiveHubs(event.target.value);
    handleChangeHubs(event, hubLists);
  };

  return (
    <>
      <FormControl sx={{ m: 0, width: 190 }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          multiple
          value={activeHubs}
          onChange={handleChange}
          IconComponent={() => <CustomDownArrow />}
          input={<FilledInput label="Active Hub" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}>
          {allHubs.map((hub) => (
            <MenuItem key={hub} value={hub}>
              <Checkbox checked={activeHubs.indexOf(hub) > -1} />
              <ListItemText primary={hub} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default HubField;
