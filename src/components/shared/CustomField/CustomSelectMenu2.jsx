/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/shared/CustomField/CustomSelectMenu2.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Tuesday, October 17th 2023, 10:24:35 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import SearchIcon from "@mui/icons-material/Search";
import {Box, InputAdornment, ListSubheader, MenuItem, Select, styled, TextField, Typography} from "@mui/material";
import React, {useEffect, useMemo, useState} from "react";
import {Controller, useFormContext} from "react-hook-form";
import {CustomFormControl} from "./CustomSelectField";
// import "./styles.css";

const containsText = (text, searchText) => text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

const allOptions = ["Option One", "Option Two", "Option Three", "Option Four"];

export const MySelect = styled(Select)(() => ({
  borderRadius: "8px",
}));

export default function CustomSelectMenu2({ name, helperText, options, label, setValue, defaultValue, ...other }) {
  const [myOptions, setMyOptions] = useState([]);
  // const myOptions = options.map((option) => option.label);

  useEffect(() => {
    setMyOptions(options.map((option) => option.label));
  }, [options]);

  //   const [selectedOption, setSelectedOption] = useState(myOptions[0]);

  const [searchText, setSearchText] = useState("");
  const displayedOptions = useMemo(
    () => myOptions.filter((option) => containsText(option, searchText)),
    [myOptions, searchText]
  );
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <CustomFormControl fullWidth>
            <Box
              sx={{
                height: "100px",
              }}
            >
              <Typography sx={{ mb: 0, color: "#3c4d6b" }} variant="wpf_p4_medium">
                {label}
              </Typography>
              <Box sx={{ width: "100%" }}>
                <MySelect
                  //   ----------------------------
                  // Disables auto focus on MenuItems and allows TextField to be in focus
                  MenuProps={{ autoFocus: false }}
                  //   labelId="search-select-label"
                  //   id="search-select"
                  //   value={selectedOption}
                  //   label="Options"
                  // onChange={(e) => setSelectedOption(e.target.value)}
                  onClose={() => setSearchText("")}
                  //   // This prevents rendering empty string in Select's value
                  //   // if search text would exclude currently selected option.
                  // renderValue={() => selectedOption}
                  //   ----------------------------
                  sx={{
                    mt: 0.3,
                    height: "45px",
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    color: "#000",
                    border: "2px solid #E6ECF5",
                    fontSize: "14px",
                    borderRadius: "5px",
                  }}
                  size="small"
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  {...field}
                  label={label}
                  defaultValue={defaultValue}
                  error={!!error}
                  helperText={error ? error?.message : helperText}
                  {...other}
                >
                  <ListSubheader>
                    <TextField
                      size="small"
                      autoFocus
                      placeholder="Type to search..."
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setSearchText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key !== "Escape") {
                          // Prevents autoselecting item while typing (default Select behaviour)
                          e.stopPropagation();
                        }
                      }}
                    />
                  </ListSubheader>
                  {displayedOptions.map((option, i) => (
                    <MenuItem key={i} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </MySelect>
              </Box>
            </Box>
          </CustomFormControl>
        </>
      )}
    />
  );
}
