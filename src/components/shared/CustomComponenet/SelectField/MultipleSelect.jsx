/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/CustomComponenet/SelectField/MultipleSelect.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, February 15th 2023, 1:44:59 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import React from "react";
import {SelectBlue} from "./BasicSelect";

const MultipleSelect = ({
  children,
  labelId,
  id,
  multiple,
  label,
  IconComponent,
  value,
  onChange,
  input,
  MenuProps,
  renderValue,
}) => {
  return (
    <SelectBlue
      labelId={labelId}
      id={id}
      multiple={multiple}
      label={label}
      IconComponent={IconComponent}
      value={value}
      onChange={onChange}
      input={input}
      MenuProps={MenuProps}
      renderValue={renderValue}
    >
      {children}
    </SelectBlue>
  );
};

export default MultipleSelect;
