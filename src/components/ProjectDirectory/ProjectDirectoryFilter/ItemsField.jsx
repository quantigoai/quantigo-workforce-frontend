/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/ProjectDirectory/ProjectDirectoryFilter/ItemsField.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Friday, January 26th 2024, 12:06:29 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getType } from '../../../features/slice/ProjectDirectorySlice';

const ItemsField = ({
  setClientAliasesFilter,
  clientAliasFilter,
  isLightTheme,
  title,
  type,
}) => {
  const [menu, setMenu] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getType(type)).then((action) => {
      if (action.payload.status === 200) {
        setMenu(action.payload.data.types);
      }
    });
  }, []);
  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setClientAliasesFilter(e.target.value)}
          value={clientAliasFilter || ''}
          sx={{
            backgroundColor: isLightTheme ? '#F8F8F8' : '',
            border: '1px solid #DADCDF',
            borderRadius: '4px',
          }}
        >
          {menu.map((m) => (
            <MenuItem key={m} value={m}>
              {m}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default ItemsField;
