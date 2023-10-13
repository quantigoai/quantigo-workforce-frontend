import React, { useEffect } from "react";
import DashboardDocument from "../DashBoardForDocument/DashboardDocument";
import { Box } from "@mui/material";
import { setActivePath } from "../../../../features/slice/activePathSlice";
import { useDispatch } from "react-redux";

const AccountActivation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActivePath("Identity Verification"));
  }, []);

  return (
    <>
      <Box sx={{ padding: "1%" }}>
        <DashboardDocument />
      </Box>
    </>
  );
};

export default AccountActivation;
