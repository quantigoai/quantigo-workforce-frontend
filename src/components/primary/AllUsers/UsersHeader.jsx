/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/AllUsers/UsersHeader.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Thursday, September 28th 2023, 2:15:36 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Grid, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import "../ProjectLIstNew2/index.css";
import "./index.css";

const UsersHeader = ({
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
          height: isFilter ? "55%" : "100%",
          background: isLightTheme ? "#FFFFFF" : "#1E1E1E",
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
            <InputBase
              inputRef={searchRef}
              onBlur={(e) => handleSearch(e)}
              sx={{ ml: 0, flex: 1 }}
              placeholder="Search"
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
              background: isLightTheme ? "#F4F7FE" : "black",
              mx: 2,
              borderRadius: "8px",
            }}
            aria-label="menu"
          >
            <i style={{ color: "#266AED" }} className="ri-filter-3-line"></i>
          </IconButton>
          <Button
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              backgroundColor: "#2E58FF",
              color: "white",
              "&:hover": {
                background: "#244EF5",
              },
            }}
            variant="contained"
            onClick={handleProjectCreateOpen}
          >
            Export
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UsersHeader;
