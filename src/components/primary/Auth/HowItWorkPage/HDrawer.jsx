/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Auth/HowItWorkPage/HDrawer.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, May 15th 2023, 2:38:04 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Grid } from "@mui/material";

const drawerWidth = 240;

export default function HDrawer() {
  return (
    <Grid container>
      <Grid item xs={3}>
        <ul>
          <li>
            <a href="#what-is-qai-workforce">What is QAI Workforce?</a>
          </li>
          <li>
            <a href="#what-is-qai-workforce">What is QAI Workforce?</a>
          </li>
          <li>
            <a href="#what-is-qai-workforce">What is QAI Workforce?</a>
          </li>
          <li>
            <a href="#what-is-qai-workforce">What is QAI Workforce?</a>
          </li>
          <li>
            <a href="#what-is-qai-workforce">What is QAI Workforce?</a>
          </li>
          <li>
            <a href="#what-is-qai-workforce">What is QAI Workforce?</a>
          </li>
          <li>
            <a href="#what-is-qai-workforce">What is QAI Workforce?</a>
          </li>
          <li>
            <a href="#what-is-qai-workforce">What is QAI Workforce?</a>
          </li>
        </ul>
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  );
}
