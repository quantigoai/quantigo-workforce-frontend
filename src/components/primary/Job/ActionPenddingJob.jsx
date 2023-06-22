import {Button, Menu, MenuItem,} from "@mui/material";
import React from "react";
import actionIcon from "../../../assets/images/fi_more-vertical.png";

const ActionPenddingJob = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openReassign, setOpenReassign] = React.useState(false);

  const handleClickRessign = () => {
    setOpenReassign((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpenReassign(false);
  };
  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        <img src={actionIcon} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>View Details</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </>
  );
};

export default ActionPenddingJob;
