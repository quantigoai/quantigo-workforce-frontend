/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/FilterField/MiniModal.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, March 16th 2023, 11:00:28 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useOutletContext } from "react-router-dom";
import AttemptLeftField from "./AttemptLeftField";
import DateField from "./DateField";
import StatusChip from "./StatusChip";
import UsersRadioGroup from "./UsersRadioGroup";
import ProjectIdField from "./ProjectIdField";
import SkillFieldForUserList from "../FilterFieldForUserList/SkillFieldForUserList";

const MiniModal = () => {
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
    setProjectIdFilter,
    projectIdFilter,
    handleChangeSkills,
    skill,
  ] = useOutletContext();

  const { users, user } = useSelector((state) => state.user);
  console.log("🚀 ~ file: MiniModal.jsx:44 ~ MiniModal ~ user:", user.role);
  const [value, setValue] = useState(""); // initialize value as an empty string

  const location = useLocation();
  const handleChange = (event) => {
    setValue(event.target.value); // update the value state with the selected value
  };

  return (
    <>
      <Box
        sx={{
          // border: 1,
          p: 1,
          bgcolor: "background.paper",
          width: "570px",
          height: "350px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Filter by</Typography>
          <CloseIcon
            sx={{ color: "#2D58FF", cursor: "pointer", fontweight: "600 " }}
            onClick={handleClose}
          />
        </Box>
        <br />
        <Box sx={{ px: 1 }}>
          {location.pathname === "/jobs/alljobs" ? (
            <></>
          ) : (
            <>
              {" "}
              <StatusChip />
            </>
          )}
        </Box>
        <br />
        <Box>
          <Grid container spacing={2}>
            {location.pathname !== "/jobs/alljobs" && (
              <>
                <Grid item xs={6}>
                  {user.role === "level_1_annotator" ||
                  user.role === "level_0_annotator" ||
                  user.role === "level_2_annotator" ||
                  user.role === "level_3_annotator" ||
                  user.role === "reviewer" ? (
                    <></>
                  ) : (
                    <>
                      {" "}
                      <UsersRadioGroup
                        users={users}
                        handleChange={handleChange}
                      />
                    </>
                  )}
                </Grid>
                <Grid item xs={6}>
                  {user.role === "level_1_annotator" ||
                  user.role === "level_0_annotator" ||
                  user.role === "level_2_annotator" ||
                  user.role === "level_3_annotator" ||
                  user.role === "reviewer" ? (
                    <></>
                  ) : (
                    <>
                      {" "}
                      <UsersRadioGroup
                        users={users}
                        handleChange={handleChange}
                        isReviewers={true}
                      />
                    </>
                  )}
                </Grid>
              </>
            )}
            <>
              {location.pathname !== "/jobs/alljobs" && (
                <Grid item xs={6}>
                  <AttemptLeftField />
                </Grid>
              )}
              <Grid item xs={location.pathname === "/jobs/alljobs" ? 12 : 6}>
                <DateField />
              </Grid>
            </>

            {location.pathname === "/jobs/alljobs" && (
              <Grid item xs={12}>
                <SkillFieldForUserList
                  handleChangeSkills={handleChangeSkills}
                  skillSet={skill}
                />
              </Grid>
            )}
          </Grid>
        </Box>

        <br />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button fullWidth variant="outlined" onClick={handleReset}>
                Reset
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button onClick={handleFilter} fullWidth variant="contained">
                Apply
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default MiniModal;
