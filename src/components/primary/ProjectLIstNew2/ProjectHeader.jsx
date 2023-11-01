/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ProjectHeader.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Thursday, October 12th 2023, 11:38:29 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Grid, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
const ProjectHeader = ({
  isFilter,
  isLightTheme,
  handleIsFilter,
  handleProjectCreateOpen,
  handleSearch,
  search,
  searchRef,
  clearSearch,
  role,
}) => {
  return (
    <>
      <Box
        className="contentHeader"
        sx={{
          backgroundColor: "neutral.N000",
        }}
      >
        <Box sx={{ width: "30%", padding: "12px 16px" }}>
          <Grid
            container
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            {/* TODO Need to remove the unnecessary custom button */}
            <CommonHeader title="Projects" customButton="Create User" />
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 20px",
          }}
        >
          {/* <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "240px",
              backgroundColor: "primary.B008",
              border: "1px solid #EFF3FE",
              borderRadius: "8px",
              outline: "none",
              boxShadow: "none",
            }}
          >
            <IconButton disabled type="button" sx={{ p: "5px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ ml: 0, flex: 1 }} placeholder="Search" />
          </Paper> */}
          <Paper
            // component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "240px",
              backgroundColor: "primary.B008",
              border: "1px solid #EFF3FE",
              borderRadius: "8px",
              outline: "none",
              boxShadow: "none",
            }}
          >
            <IconButton disabled type="button" sx={{ p: "5px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              inputRef={searchRef}
              // onBlur={(e) => handleSearch(e)}
              sx={{ ml: 0, flex: 1 }}
              placeholder="Search"
              onKeyDown={(ev) => {
                if (ev.key === "Enter") {
                  handleSearch(ev);
                  ev.preventDefault();
                }
              }}
            />
            {search && (
              <Button
                sx={{
                  height: "30px",
                  minWidth: "40px",
                }}
              >
                <ClearIcon
                  sx={{
                    color: "neutral.N300",
                    "&:hover": {
                      color: "#F04438",
                    },
                  }}
                  onClick={clearSearch}
                />
              </Button>
            )}
          </Paper>
          <IconButton
            onClick={handleIsFilter}
            sx={{
              px: "5px 0px",
              backgroundColor: "primary.B008",
              mx: 2,
              borderRadius: "8px",
            }}
            aria-label="menu"
          >
            {isFilter ? (
              <FilterListOffIcon sx={{ color: "primary.main" }} />
            ) : (
              <FilterListIcon sx={{ color: "primary.main" }} />
            )}
          </IconButton>
          {role === "admin" ||
            role === "project_lead" ||
            role === "project_lead" ||
            role === "project_coordinator" ||
            role === "project_manager" ||
            (role === "delivery_manager" && (
              <Button
                sx={{
                  textTransform: "none",
                  borderRadius: "8px",
                  backgroundColor: "#2E58FF",
                  height: "40px",
                  width: "128px",
                  color: "white",
                  "&:hover": {
                    background: "#244EF5",
                  },
                }}
                // variant="contained"
                onClick={handleProjectCreateOpen}
              >
                Create Project
              </Button>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default ProjectHeader;
