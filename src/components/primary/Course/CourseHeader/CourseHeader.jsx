import { Box, Button, Grid, IconButton, InputBase, Paper } from "@mui/material";
import React from "react";
import CommonHeader from "../../../shared/CustomComponenet/CommonHeader/CommonHeader";
import { ClearIcon } from "@mui/x-date-pickers";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";

const CourseHeader = () => {
  return (
    <>
      <Box
        className="headerBox"
        sx={{
          height: "100%",
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
            <CommonHeader title="Courses" customButton="Create User" />
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
              //   inputRef={searchRef}
              // onBlur={(e) => handleSearch(e)}
              sx={{ ml: 0, flex: 1 }}
              placeholder="Search"
              //   onKeyDown={(ev) => {
              //     if (ev.key === "Enter") {
              //       handleSearch(ev);
              //       ev.preventDefault();
              //     }
              //   }}
            />

            <Button
              sx={{
                minWidth: "40px",
              }}
            >
              {/* <ClearIcon
                sx={{
                  color: "neutral.N300",
                  "&:hover": {
                    color: "#F04438",
                  },
                }}
                onClick={clearSearch}
              /> */}
            </Button>
          </Paper>

          <IconButton
            // onClick={handleIsFilter}
            sx={{
              px: "5px 0px",
              //   backgroundColor: "primary.B008",
              mx: 2,
              borderRadius: "8px",
            }}
            aria-label="menu"
          >
            <FilterListIcon sx={{ color: "primary.main" }} />
          </IconButton>

          {/* <ExportUserList /> */}
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
            // onClick={handleProjectCreateOpen}
          >
            <i style={{ fontSize: "17px", marginRight: "6px" }} className="ri-add-fill"></i> Create Course
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CourseHeader;
