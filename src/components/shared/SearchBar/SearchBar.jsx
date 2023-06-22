/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/SearchBar/SearchBar.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, March 1st 2023, 2:03:26 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Paper, Popover, Typography, styled } from "@mui/material";
import * as React from "react";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MiniModal from "../FilterField/MiniModal";
import { useOutletContext } from "react-router-dom";

const CustomFilterIcon = styled(FilterAltIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});

const SearchBar = ({ placeholder, func }) => {
  const [
    statusType,
    setStatusType,
    annotator,
    setAnnotator,
    reviewer,
    setReviewer,
    attemptLeft,
    setAttemptLeft,
    date,
    setDate,
    handleFilter,
    handleReset,
    handleClose,
    anchorEl,
    setAnchorEl,
    isClicked,
    setIsClicked,
    dateValue,
    setDateValue,
  ] = useOutletContext();
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Paper
        component="form"
        
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <IconButton
          disabled
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
          onChange={func}
          inputProps={{ "aria-label": placeholder }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton sx={{ p: "10px" }} aria-label="menu" onClick={handleClick}>
          <CustomFilterIcon />
        </IconButton>
      </Paper>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <MiniModal />
      </Popover>
    </>
  );
};

export default SearchBar;
