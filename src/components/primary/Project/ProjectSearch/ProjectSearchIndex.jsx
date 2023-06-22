import SearchIcon from "@mui/icons-material/Search";
import {IconButton, Paper, Popover, styled} from "@mui/material";
import * as React from "react";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MiniModelForProjectSearch from "./MiniModelForProjectSearch";

const CustomFilterIcon = styled(FilterAltIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});

const ProjectSearchIndex = ({
  anchorEl,
  placeholder,
  handleClickFilter,
  handleCloseFilter,
  setPriorityFilter,
  priorityFilter,
  setStatusFilter,
  statusFilter,
  handleFilterProject,
  handleResetProject,
  handleChange
}) => {
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
          placeholder={placeholder}
          onChange={handleChange}
          inputProps={{ "aria-label": placeholder }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          sx={{ p: "10px" }}
          aria-label="menu"
          onClick={handleClickFilter}>
          <CustomFilterIcon />
        </IconButton>
      </Paper>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseFilter}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        <MiniModelForProjectSearch
          setPriorityFilter={setPriorityFilter}
          priorityFilter={priorityFilter}
          setStatusFilter={setStatusFilter}
          statusFilter={statusFilter}
          handleFilterProject={handleFilterProject}
          handleResetProject={handleResetProject}
          handleCloseFilter={handleCloseFilter}
        />
      </Popover>
    </>
  );
};

export default ProjectSearchIndex;
