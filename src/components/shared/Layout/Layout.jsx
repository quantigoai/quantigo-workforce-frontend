/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Layout/Layout.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Tuesday, December 13th 2022, 1:40:32 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import BenchmarkSvg from "../../../assets/images/wmp_svg/drawer/benchMarknew.svg";
import CourseSvg from "../../../assets/images/wmp_svg/drawer/courseNew.svg";
// import DashboardSvg from "../../../assets/images/wmp_svg/drawer/dashboard.svg";
import DashboardSvg from "../../../assets/images/wmp_svg/drawer/u_apps.svg";

import JobSvg from "../../../assets/images/wmp_svg/drawer/jobsNew.svg";
// import LogoutSvg from "../../../assets/images/wmp_svg/drawer/logout.svg";
import ProjectSvg from "../../../assets/images/wmp_svg/drawer/projectNew.svg";
import PaymentSvg from "../../../assets/images/wmp_svg/drawer/u_credit-card.svg";
import UserSvg from "../../../assets/images/wmp_svg/drawer/userNew.svg";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import UserBlocked from "../UserBlocked/UserBlocked";
import GetHelp from "./GetHelp";

const drawerWidth = "15%";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}%`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
  paddingLeft: "10%",
}));

const DrawerFooter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  bottom: "0px",
  justifyContent: "center",
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  // justifyContent: "flex-end",
}));

const Layout = ({ children }) => {
  const { activePath } = useSelector((state) => state.activePath);
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);

  const { isBlocked } = useSelector((state) => state.user.user);

  const { isVerified, role, isEmailVerified } = useSelector((state) => state.user.user);
  const [open, setOpen] = React.useState(true);

  const adminOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "All Users", icon: UserSvg },
    { name: "All Projects2", icon: ProjectSvg },
    { name: "Skill", icon: CourseSvg },
    { name: "Projects", icon: ProjectSvg },
    { name: "Course", icon: CourseSvg },
    { name: "Jobs", icon: JobSvg },
    { name: "Benchmark", icon: BenchmarkSvg },
    { name: "Sync Server", icon: BenchmarkSvg },
    { name: "Project Directory", icon: ProjectSvg },
    // { name: "Hour Calculation", icon: HourSvg },
  ];
  const projectManagerOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "All Users", icon: UserSvg },
    { name: "Skill", icon: CourseSvg },
    { name: "Projects", icon: ProjectSvg },
    { name: "Jobs", icon: JobSvg },
    { name: "Benchmark", icon: BenchmarkSvg },
    { name: "Sync Server", icon: BenchmarkSvg },
    { name: "Project Directory", icon: ProjectSvg },
  ];
  const projectLeadOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "All Users", icon: UserSvg },
    { name: "Skill", icon: CourseSvg },
    { name: "Projects", icon: ProjectSvg },
    { name: "Jobs", icon: JobSvg },
    { name: "Benchmark", icon: BenchmarkSvg },
    { name: "Project Directory", icon: ProjectSvg },
    { name: "Sync Server", icon: BenchmarkSvg },
  ];
  const projectCoordinatorOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Projects", icon: ProjectSvg },
    { name: "Jobs", icon: JobSvg },
    { name: "Sync Server", icon: BenchmarkSvg },
    { name: "Project Directory", icon: ProjectSvg },
  ];

  const dmOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Annotator List", icon: UserSvg },
    { name: "Reviewer List", icon: UserSvg },
    { name: "Skill", icon: CourseSvg },
    { name: "Projects", icon: ProjectSvg },
    { name: "Jobs", icon: JobSvg },
    { name: "Benchmark", icon: BenchmarkSvg },
    { name: "Project Directory", icon: ProjectSvg },
    { name: "Sync Server", icon: BenchmarkSvg },
  ];

  const anntatorOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Course", icon: CourseSvg },
    { name: "Jobs", icon: JobSvg },
    // { name: "Payment", icon: PaymentSvg },
  ];

  const level0AnnotatorOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Course", icon: CourseSvg },
  ];
  const trainerOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "All Users", icon: UserSvg },
    { name: "Course", icon: CourseSvg },
    { name: "Skill", icon: CourseSvg },
  ];

  const reviewerOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Course", icon: CourseSvg },
    { name: "Jobs", icon: JobSvg },
  ];

  const recruitOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Users", icon: UserSvg },
  ];

  const unverifiedOptions = [{ name: "Account Activation", icon: DashboardSvg }];

  const devOptions = [
    { name: "Account Activation", icon: DashboardSvg },
    { name: "AllUsers", icon: UserSvg },
    { name: "All Projects2", icon: ProjectSvg },
    { name: "Annotator List", icon: UserSvg },
    { name: "Archive Job", icon: JobSvg },
    // { name: "Calculate Annotation", icon: HourSvg },
    { name: "Course", icon: CourseSvg },
    { name: "Benchmark", icon: BenchmarkSvg },
    { name: "Create Course", icon: CourseSvg },
    { name: "Create Job", icon: JobSvg },
    { name: "Create Quiz", icon: CourseSvg },
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Job List", icon: JobSvg },
    { name: "On Going Job", icon: JobSvg },
    { name: "Projects", icon: ProjectSvg },
    { name: "Quiz", icon: CourseSvg },
    { name: "Reviewer Course", icon: CourseSvg },
    { name: "Reviewer Job Lst", icon: JobSvg },
    { name: "Reviewer List", icon: UserSvg },
    { name: "Benchmark", icon: BenchmarkSvg },
    { name: "Skill", icon: PaymentSvg },
    { name: "Show Quiz", icon: CourseSvg },
    { name: "Users", icon: UserSvg },
    { name: "Sync Server", icon: BenchmarkSvg },
  ];

  const handleOptionClick = (option) => {
    switch (option) {
      case "Dashboard":
        return navigate("/dashboard");
      case "All Users":
        return navigate("/allusers");
      case "All Projects2":
        return navigate("/allprojects");
      case "Project Directory":
        return navigate("/projectDirectory");
      case "Users":
        return navigate("/users");
      case "Task Log":
        return navigate("/tasklog");
      case "Annotator List":
        return navigate("/annotators");
      case "Reviewer List":
        return navigate("/reviewers");
      case "Course":
        return navigate("/course");
      case "Reviewer Course":
        return navigate("/course");
      case "Quiz":
        return navigate("/quiz");
      case "Create Course":
        return navigate("/create-course");
      case "Show Quiz":
        return navigate("/quiz");
      case "Create Quiz":
        return navigate("/create-quiz");
      case "Calculate Annotation":
        return navigate("/calculate-annotation");
      case "Create Job":
        return navigate("/jobs/create-job");
      case "Jobs":
        return role === "reviewer" ? navigate("/jobs/availablejobs") : navigate("/jobs/alljobs");
      case "On Going Job":
        return navigate("/jobs/activejobs");
      case "Archive Job":
        return navigate("/jobs/archivejobs");
      case "Reviewer Job Lst":
        return navigate("/jobs/reviwerJoblist");
      case "Benchmark":
        return navigate("/benchmarknew/list");
      case "Projects":
        return navigate("/projectlist");
      case "Payment":
        return navigate("/payment");
      case "Hour Calculation":
        return navigate("/calculate-annotation");
      case "Account Activation":
        return navigate("/dashboard");
      case "Skill":
        return navigate("/skillcreate");
      case "Sync Server":
        return navigate("/serversync");
      default:
        return navigate("/");
    }
  };

  const handleMenu = (text) => {
    return (
      <ListItem key={text.name} disablePadding sx={{ paddingLeft: "8%" }}>
        <ListItemButton
          sx={{
            borderRadius: activePath === text.name && "4px",
            justifyContent: "left",
            borderLeft: activePath === text.name && "3px solid #FFFFFF",
            backgroundColor: activePath === text.name && "rgba(255, 255, 255, 0.15)",
            "&:hover": {
              backgroundColor: "rgba(255, 154, 69, 0.1)",
              paddingLeft: "3%",
            },
          }}
          onClick={() => handleOptionClick(text.name)}
        >
          <ListItemIcon sx={{ color: "#FFFFFF" }}>
            <img src={text.icon} />
          </ListItemIcon>
          <ListItemText primary={text.name} sx={{ color: "#FFFFFF", fontSize: "16px", justifyContent: "left" }} />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <Header /> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            // boxSizing: "border-box",
            backgroundColor: "#2D58FF",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <DrawerHeader>
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="logo"
            style={{ width: "148.65px", height: "28px", cursor: "pointer" }}
          />
        </DrawerHeader>

        {/*  SideBar Menu */}

        {isLoggedIn && !isBlocked && !isEmailVerified ? (
          <List>{unverifiedOptions.map((text) => handleMenu(text))}</List>
        ) : (
          <List>
            {isLoggedIn && role === "admin" && adminOptions.map((text) => handleMenu(text))}
            {isLoggedIn && role === "delivery_manager" && dmOptions.map((text) => handleMenu(text))}
            {isLoggedIn && role === "level_1_annotator" && anntatorOptions.map((text) => handleMenu(text))}
            {isLoggedIn && role === "level_2_annotator" && anntatorOptions.map((text) => handleMenu(text))}
            {isLoggedIn && role === "level_3_annotator" && anntatorOptions.map((text) => handleMenu(text))}
            {isLoggedIn && role === "trainer" && trainerOptions.map((text) => handleMenu(text))}
            {isLoggedIn && role === "reviewer" && reviewerOptions.map((text) => handleMenu(text))}
            {isLoggedIn && role === "engineering_lead" && devOptions.map((text) => handleMenu(text))}
            {isLoggedIn && role === "recruitment_manager" && recruitOptions.map((text) => handleMenu(text))}
            {isLoggedIn && role === "project_lead" && projectLeadOptions.map((text) => handleMenu(text))}
            {isLoggedIn && role === "project_coordinator" && projectCoordinatorOptions.map((text) => handleMenu(text))}
            {isLoggedIn && role === "project_manager" && projectManagerOptions.map((text) => handleMenu(text))}
            {isLoggedIn &&
              isVerified &&
              role === "level_0_annotator" &&
              level0AnnotatorOptions.map((text) => handleMenu(text))}
          </List>
        )}

        <DrawerFooter sx={{ paddingLeft: "8%", paddingRight: "5%", paddingBottom: "5%" }}>
          <GetHelp />
        </DrawerFooter>
      </Drawer>

      <Box
        // component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          bgcolor: "#F5F5F5",
          height: "100%",
        }}
      >
        <Main open={open}>
          <DrawerHeader />
          {isLoggedIn && !isBlocked ? children : <UserBlocked />}
        </Main>
      </Box>
    </Box>
  );
};

export default Layout;
