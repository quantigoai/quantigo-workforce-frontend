import { Box, Button, ClickAwayListener, Menu, MenuItem } from "@mui/material";
import React from "react";
import actionIcon from "../../../assets/images/fi_more-vertical.png";
import ReAssignPopper from "./SharedComponents/ReAssignPopper";

const ActionOnGoingJob = ({ job, handleReassignedJob }) => {
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
    setPopperAnchorEl(false);
  };

  const [popperAnchorEl, setPopperAnchorEl] = React.useState(null);

  const handlePopperClick = (event) => {
    setPopperAnchorEl(popperAnchorEl ? null : event.currentTarget);
  };

  const popperOpen = Boolean(popperAnchorEl);
  const id = popperOpen ? "simple-popper" : undefined;

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
        <ClickAwayListener
          mouseEvent="onMouseDown"
          touchEvent="onTouchStart"
          onClickAway={handleClickAway}>
          <Box>
            {job.status === "expired" ? (
              <MenuItem onClick={handlePopperClick}>Reassign</MenuItem>
            ) : (
              <></>
            )}
            <ReAssignPopper
              id={id}
              popperOpen={popperOpen}
              popperAnchorEl={popperAnchorEl}
              job={job}
              handleReassignedJob={handleReassignedJob}
              handleClickAway={handleClickAway}
            />
          </Box>
        </ClickAwayListener>

        <MenuItem onClick={handleClose}>Pause/Resume</MenuItem>
        <MenuItem onClick={handleClose}>View Details</MenuItem>
      </Menu>
    </>
  );
};

export default ActionOnGoingJob;
