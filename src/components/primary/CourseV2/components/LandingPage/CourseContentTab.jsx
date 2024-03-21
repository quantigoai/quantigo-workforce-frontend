/*
 * File           : CourseContentTab.jsx
 * Project        : wmpfrontv2
 * Created Date   : Fr 22 Mar 2024 01:31:09
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Fri Mar 22 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */

import { TabContext, TabList } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";
const tabStyle = {
  textTransform: "none",
  color: "#667085",
  fontWeight: "600",
};
const CourseContentTab = ({ value, handleChange }) => {
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab sx={{ ...tabStyle, fontSize: { xxl: "14px", xl: "14px", lg: "12px" } }} label="About" value="1" />
          <Tab sx={{ ...tabStyle, fontSize: { xxl: "14px", xl: "14px", lg: "12px" } }} label="Courses" value="2" />
          <Tab sx={{ ...tabStyle, fontSize: { xxl: "14px", xl: "14px", lg: "12px" } }} label="Testimonial" value="3" />
        </TabList>
      </Box>
    </TabContext>
  );
};

export default CourseContentTab;
