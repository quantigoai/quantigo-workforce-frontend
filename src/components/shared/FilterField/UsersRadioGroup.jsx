/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/FilterField/UsersRadioGroup.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 20th 2023, 11:17:48 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const UsersRadioGroup = ({ users, isReviewers = false }) => {
  const [statusType, setStatusType, annotator, setAnnotator, reviewer, setReviewer, attemptLeft, setAttemptLeft, date, setDate, handleFilter, handleReset, handleClose, anchorEl, setAnchorEl, isClicked, setIsClicked, dateValue, setDateValue, setProjectIdFilter, projectIdFilter] = useOutletContext();
  const [isOpen, SetIsOpen] = useState(false);
  const handleOpenClose = () => {
    SetIsOpen(!isOpen);
  };
  const iconStyle = {
    color: "rgba(45, 88, 255, 1)",
    marginRight: "5px",
    cursor: "pointer",
  };

  return (
    <>
      <FormControl fullWidth variant="filled">
        <InputLabel id="demo-simple-select-label">{!isReviewers ? "Annotators" : "Reviewers"}</InputLabel>
        <Select IconComponent={() => (isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />)} onOpen={handleOpenClose} onClose={handleOpenClose} labelId="demo-simple-select-label" id="demo-simple-select" value={!isReviewers ? annotator : reviewer}>
          {users.map((user) => {
            if (!isReviewers) {
              if (user.role === "level_1_annotator" || user.role === "level_2_annotator" || user.role === "level_3_annotator") {
                return (
                  <MenuItem key={user._id} onClick={() => setAnnotator(user._id)} value={user._id}>
                    {user.qaiUserName || user.name}
                  </MenuItem>
                );
              } else {
                return null;
              }
            } else {
              if (user.role === "reviewer") {
                return (
                  <MenuItem key={user._id} onClick={() => setReviewer(user._id)} defaultValue={reviewer} value={user._id}>
                    {user.qaiUserName || user.name}
                  </MenuItem>
                );
              } else {
                return null;
              }
            }
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default UsersRadioGroup;
