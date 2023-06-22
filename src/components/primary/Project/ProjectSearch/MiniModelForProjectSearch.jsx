import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PriorityFieldFilter from "./ProjectFilterFields/PriorityFieldFilter";
import StatusFilterField from "./ProjectFilterFields/StatusFilterField";
import ProjectTypeFilter from "./ProjectFilterFields/ProjectTypeFields";

const MiniModelForProjectSearch = ({
  setPriorityFilter,
  priorityFilter,
  setStatusFilter,
  statusFilter,
  handleFilterProject,
  handleResetProject,
  handleCloseFilter,
}) => {
  return (
    <>
      <Box
        sx={{
          // border: 1,
          p: 1,
          bgcolor: "background.paper",
          width: "570px",
          height: "250px",
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
            onClick={handleCloseFilter}
          />
        </Box>
        <br />
        <Box sx={{ px: 1 }}></Box>
        <br />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <PriorityFieldFilter
                setPriorityFilter={setPriorityFilter}
                priorityFilter={priorityFilter}
              />
            </Grid>

            <Grid item xs={6}>
              <ProjectTypeFilter
                setStatusFilter={setStatusFilter}
                statusFilter={statusFilter}
              />
              {/* <StatusFilterField  setStatusFilter={setStatusFilter}
                statusFilter={statusFilter}/> */}
            </Grid>
          </Grid>
        </Box>

        <br />
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button fullWidth variant="outlined" onClick={handleResetProject}>
                Reset
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                onClick={handleFilterProject}
                fullWidth
                variant="contained">
                Apply
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default MiniModelForProjectSearch;
