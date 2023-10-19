/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/AllUsers/UsersHeader.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Thursday, September 28th 2023, 2:15:36 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import ClearIcon from "@mui/icons-material/Clear";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Grid, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import "../ProjectLIstNew2/index.css";
import ExportUserList from "./ExportUserList";
import "./index.css";
import FilterListOffIcon from "@mui/icons-material/FilterListOff";
const UsersHeader = ({
  isCourse,
  isFilter,
  isLightTheme,
  handleIsFilter,
  handleProjectCreateOpen,
  handleSearch,
  search,
  searchRef,
  clearSearch,
}) => {
  return (
    <>
      <Box
        className="headerBox"
        sx={{
          height: isFilter ? "50%" : "80%",
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
              paddingX: "10px",
            }}
          >
            <CommonHeader title="All Users" customButton="Create User" />
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

          <ExportUserList />
        </Box>
      </Box>
    </>
  );
};

export default UsersHeader;
