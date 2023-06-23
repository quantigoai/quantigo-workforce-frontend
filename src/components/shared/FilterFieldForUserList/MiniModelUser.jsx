/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/shared/FilterField/MiniModal.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, March 16th 2023, 11:00:28 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import CloseIcon from "@mui/icons-material/Close";
import {Box, Button, Grid, Typography} from "@mui/material";
import React from "react";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import RoleField from "./RoleField";
import HubField from "./HubField";
import SkillFieldForUserList from "./SkillFieldForUserList";
import StatusChipUserList from "./StatusChipUserList";

const MiniModelUser = ({
  handleClick,
  handleClose,
  setValue,
  setRoleFilter,
  handleFilterUser,
  handleResetUser,
  setHubFilter,
  handleChangeSkills,
  skillSet,
  hubFilter,
  roleFilter,
  isClicked,
  setIsClicked,
  statusType,
  setStatusType,
}) => {
  const { users } = useSelector((state) => state.user);
  // initialize value as an empty string

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
        }}>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}>
          <Typography variant="h6">Filter by</Typography>
          <CloseIcon
            sx={{ color: "#2D58FF", cursor: "pointer", fontweight: "600 " }}
            onClick={handleClose}
          />
        </Box>
        <br />
        <Box sx={{ px: 1 }}>
          <StatusChipUserList
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            statusType={statusType}
            setStatusType={setStatusType}
          />
        </Box>
        <br />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <RoleField
                handleChange={handleChange}
                setRoleFilter={setRoleFilter}
                roleFilter={roleFilter}
              />
            </Grid>
            <Grid item xs={6}>
              <HubField
                handleChange={handleChange}
                setHubFilter={setHubFilter}
                hubFilter={hubFilter}
              />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ paddingTop: "3%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SkillFieldForUserList
                handleChangeSkills={handleChangeSkills}
                skillSet={skillSet}
              />
            </Grid>
          </Grid>
        </Box>

        <br />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button onClick={handleResetUser} fullWidth variant="outlined">
                Reset
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button onClick={handleFilterUser} fullWidth variant="contained">
                Apply
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default MiniModelUser;
