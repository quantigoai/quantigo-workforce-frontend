import { IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const SearchBarForAnnotation = ({ handleSearch }) => {
  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}>
        <IconButton
          disabled
          type="button"
          sx={{ p: "10px" }}
          aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search "
          onChange={(e) => handleSearch(e)}
        />
      </Paper>
    </>
  );
};

export default SearchBarForAnnotation;
