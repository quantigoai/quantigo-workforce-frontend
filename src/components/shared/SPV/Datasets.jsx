/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/SPV/Datasets.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, February 27th 2023, 11:06:05 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import React from "react";
import {FormControl, InputLabel, MenuItem, Select, styled,} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CustomDownArrow = styled(KeyboardArrowDownIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});
const Datasets = ({ jobCreate, datasets, handleChangeDataset, register }) => {
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
        }}>
        <InputLabel id="demo-simple-select-label">Select Dataset </InputLabel>
        {jobCreate ? (
          datasets.length > 0 && (
            <Select
              onChange={(e) => handleChangeDataset(e)}
              label="dataset"
              IconComponent={() => <CustomDownArrow />}
              sx={{
                backgroundColor: "#F8F8F8",
                border: "0px solid #DADCDF",
                borderRadius: "4px",
              }}
              // {...register("datasetId", { required: true })}
            >
              {datasets.map((dataset) => (
                <MenuItem
                  key={dataset.id}
                  par={dataset.imagesCount}
                  value={dataset.id}>
                  {dataset.name} ({dataset.imagesCount})
                </MenuItem>
              ))}
            </Select>
          )
        ) : (
          <Select onChange={(e) => handleChangeDataset(e)} label="dataset">
            {datasets.map((dataset) => (
              <MenuItem
                key={dataset.id}
                par={dataset.imagesCount}
                value={dataset.id}>
                {dataset.name} ({dataset.imagesCount})
              </MenuItem>
            ))}
          </Select>
        )}
      </FormControl>
    </>
  );
};

export default Datasets;
