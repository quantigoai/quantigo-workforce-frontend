/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/CustomComponenet/SelectField/BasicSelect.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, February 15th 2023, 12:16:47 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import styled from "@emotion/styled";
import {Select} from "@mui/material";
import React from "react";

export const SelectBlue = styled(Select)({
  background: "#F8F8F8",
  borderRadius: "4px",
  flex: "none",
  order: 0,
  border: "1px solid #DADCDF",
  alignSelf: "stretch",
  flexGrow: 0,
  "& .MuiSvgIcon-root": {
    color: "rgba(45, 88, 255, 1)",
    marginRight: "10px",
    cursor: "pointer",
  },
  "& .MuiSelect-select:focus": {
    backgroundColor: "transparent",
  },
});

const BasicSelect = ({
  children,
  style,
  IconComponent,
  labelId,
  id,
  label,
  defaultValue,
}) => {
  return (
    <SelectBlue
      style={style}
      IconComponent={IconComponent}
      labelId={labelId}
      id={id}
      label={label}
      defaultValue={defaultValue}
    >
      {children}
    </SelectBlue>
  );
};

export default BasicSelect;
