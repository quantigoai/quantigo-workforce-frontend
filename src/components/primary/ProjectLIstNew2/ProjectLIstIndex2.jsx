import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import { Box, Button, Grid, IconButton, Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActivePath } from "../../../features/slice/activePathSlice";
import CommonHeader from "../../shared/CustomComponenet/CommonHeader/CommonHeader";
import CreateProjectDrawer from "./CreateProjectDrawer";
import DataTable from "./DataTable";
const ProjectLIstIndex2 = () => {
  const CustomFilterIcon = styled(SortIcon)({
    color: "#266AED",
    background: "#EFF3FE",
    borderRadius: "8px",
    padding: "10px",
  });
  const ButtonStyle = styled(Button)({
    backgroundColor: "#2D58FF",
    color: "#FFFFFF",
    textTransform: "none",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#FF9A45",
      color: "#1D1D1D",
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActivePath("All Projects2"));
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ width: "40%" }}>
          <Grid
            container
            sx={{
              paddingBottom: "0%",
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <CommonHeader title="Projects" customButton="Create User" />
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "40%",
            alignItems: "center",
          }}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "250px",
              background: "#F4F7FE",
            }}
          >
            <IconButton
              disabled
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
            <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          </Paper>
          <IconButton
            sx={{ p: "0px", background: "#F4F7FE" }}
            aria-label="menu"
            //   onClick={handleClickFilter}
          >
            <CustomFilterIcon />
          </IconButton>

          <Box>
            <CreateProjectDrawer />
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: "40px" }}>
        <DataTable />
      </Box>
    </>
  );
};

export default ProjectLIstIndex2;
