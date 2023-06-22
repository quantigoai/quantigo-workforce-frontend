import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getClientAliases, getType } from "../../../features/slice/ProjectDirectory";

const ClientAliasField = ({ setClientAliasesFilter, clientAliasFilter }) => {
  const [clientAlias, setClientAliases] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getType("Client_Alias")).then((action) => {
      if (action.payload.status === 200) {
        setClientAliases(action.payload.data);
      }
    });
  }, []);
  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Client Alias</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => setClientAliasesFilter(e.target.value)}
          value={clientAliasFilter || ""}
          sx={{
            backgroundColor: "#F8F8F8",
            border: "1px solid #DADCDF",
            borderRadius: "4px",
          }}>
          {clientAlias.map((Industry) => (
            <MenuItem key={Industry} value={Industry}>
              {Industry}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default ClientAliasField;
