import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import BenchmarkSvg from "../../../assets/images/wmp_svg/drawer/banchmarkIcon.svg";
import CourseSvg from "../../../assets/images/wmp_svg/drawer/courseNew.svg";
import SkillIcon from "../../../assets/images/wmp_svg/drawer/skillIcon.svg";
import UserBlocked from "../UserBlocked/UserBlocked";
// import DashboardSvg from "../../../assets/images/wmp_svg/drawer/dashboard.svg";
import menuFoldLine from "../../../assets/images/menu-fold-line.svg";
import menuUnfoldLne from "../../../assets/images/menu-unfold-line.svg";
import DashboardSvg from "../../../assets/images/wmp_svg/drawer/DashboardIcon.svg";
import JobSvg from "../../../assets/images/wmp_svg/drawer/jobsNew.svg";
// import LogoutSvg from "../../../assets/images/wmp_svg/drawer/logout.svg";
import { Stack } from "@mui/material";
import ProjectSvg from "../../../assets/images/wmp_svg/drawer/projectNew.svg";
import SyncIcon from "../../../assets/images/wmp_svg/drawer/syncIcon.svg";
import PaymentSvg from "../../../assets/images/wmp_svg/drawer/u_credit-card.svg";
import UserSvg from "../../../assets/images/wmp_svg/drawer/userNew.svg";
import Header from "../Header/Header";
import GetHelpNew from "./GetHelpNew";

const drawerWidth = "15%";

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // paddingLeft: "1%",
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  // backgroundColor: "#2D58FF",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
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
export default function LayoutNew({ children }) {
  const { activePath } = useSelector((state) => state.activePath);
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);

  const { isBlocked } = useSelector((state) => state.user.user);

  const { isVerified, role, isEmailVerified } = useSelector((state) => state.user.user);
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const { isLightTheme } = useSelector((state) => state.theme);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const adminOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "All Users", icon: UserSvg },
    { name: "All Users 2", icon: UserSvg },
    { name: "All Projects2", icon: ProjectSvg },
    { name: "Skill", icon: SkillIcon },
    { name: "Projects", icon: ProjectSvg },
    { name: "Course", icon: CourseSvg },
    { name: "Jobs", icon: JobSvg },
    { name: "Benchmark", icon: BenchmarkSvg },
    { name: "Sync Server", icon: SyncIcon },
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
    { name: "Sync Server", icon: SyncIcon },
    { name: "Project Directory", icon: ProjectSvg },
  ];
  const projectLeadOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "All Users", icon: UserSvg },
    { name: "Skill", icon: SkillIcon },
    { name: "Projects", icon: ProjectSvg },
    { name: "Jobs", icon: JobSvg },
    { name: "Benchmark", icon: BenchmarkSvg },
    { name: "Project Directory", icon: ProjectSvg },
    { name: "Sync Server", icon: SyncIcon },
  ];
  const projectCoordinatorOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Projects", icon: ProjectSvg },
    { name: "Jobs", icon: JobSvg },
    { name: "Sync Server", icon: SyncIcon },
    { name: "Project Directory", icon: ProjectSvg },
  ];

  const dmOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "Annotator List", icon: UserSvg },
    { name: "Reviewer List", icon: UserSvg },
    { name: "Skill", icon: SkillIcon },
    { name: "Projects", icon: ProjectSvg },
    { name: "Jobs", icon: JobSvg },
    { name: "Benchmark", icon: BenchmarkSvg },
    { name: "Project Directory", icon: ProjectSvg },
    { name: "Sync Server", icon: SyncIcon },
  ];

  const anntatorOptions = [
    { name: "Dashboard", icon: DashboardSvg },
    { name: "All Projects2", icon: ProjectSvg },
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
    { name: "Skill", icon: SkillIcon },
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
      case "All Users 2":
        return navigate("/all-users");
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
      <ListItem key={text.name} disablePadding sx={{ paddingLeft: "7%", paddingRight: "7%" }}>
        <ListItemButton
          sx={{
            borderRadius: activePath === text.name && "8px",
            // justifyContent: "left",
            // border: activePath === text.name && "3px solid #FFFFFF",
            backgroundColor: activePath === text.name && "rgba(255, 255, 255, 0.15)",
            "&:hover": {
              backgroundColor: "rgba(255, 154, 69, 0.1)",
              // paddingLeft: "3%",
            },
          }}
          className="responsive-drawer"
          onClick={() => handleOptionClick(text.name)}
        >
          <ListItemIcon sx={{ color: "#FFFFFF", minWidth: "45px" }}>
            <img src={text.icon} />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={text.name}
            sx={{
              color: "#FFFFFF",
              // backgroundColor: "red",
              // fontSize: "14px",
              fontSize: { xl: "14px", lg: "13px", md: "12px" },
              justifyContent: "left",
            }}
          />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Stack direction={"row"}>
      <Box
        sx={{
          width: open ? "15%" : "3%",
          height: "100vh",
          backgroundColor: isLightTheme ? "#2D58FF" : "#050116",
        }}
      >
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: isLightTheme ? "#2D58FF" : "#050116",
            },
          }}
          variant="permanent"
          open={open}
        >
          <DrawerHeader>
            <Box sx={{}}>
              <img
                onClick={() => navigate("/")}
                src={logo}
                alt="logo"
                style={{
                  cursor: "pointer",
                  ...(!open && { display: "none" }),
                }}
                className="responsive-logo"
              />
            </Box>

            {open && (
              <Box sx={{ justifyContent: "left", paddingLeft: { xl: "20%", lg: "1%", md: "1%" } }}>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? <img src={menuFoldLine} /> : <img src={menuFoldLine} />}
                </IconButton>
              </Box>
            )}
            {!open && (
              <IconButton onClick={handleDrawerOpen}>
                <img src={menuUnfoldLne} />
              </IconButton>
            )}
          </DrawerHeader>
          <Box sx={{ paddingLeft: "11%" }}>
            {open && (
              <Typography variant="caption" sx={{ color: "#B6C9F0" }}>
                <b>MAIN MENU</b>
              </Typography>
            )}
            {!open && (
              <Typography variant="caption" sx={{ color: "#B6C9F0", paddingLeft: "10%" }}>
                <b>MENU</b>
              </Typography>
            )}
          </Box>

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
              {isLoggedIn &&
                role === "project_coordinator" &&
                projectCoordinatorOptions.map((text) => handleMenu(text))}
              {isLoggedIn && role === "project_manager" && projectManagerOptions.map((text) => handleMenu(text))}
              {isLoggedIn &&
                isVerified &&
                role === "level_0_annotator" &&
                level0AnnotatorOptions.map((text) => handleMenu(text))}
            </List>
          )}

          <DrawerFooter sx={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "5%" }}>
            {open && <GetHelpNew />}
          </DrawerFooter>
        </Drawer>
      </Box>

      <Box
        sx={{
          width: open ? "85%" : "97%",
          height: "100vh",
        }}
      >
        {/* navbar */}
        <Box
          sx={{
            height: { xl: "7%", lg: "9%", md: "10%" },
            width: "100%",
          }}
        >
          <Header openDrawer={open} />
        </Box>

        {/* body */}
        <Box
          sx={{
            height: { xl: "93%", lg: "91%", md: "90%" },
            paddingBottom: "1%",
            backgroundColor: isLightTheme ? "#F2F6FC" : "#121212",
            width: "100%",
            overflowY: "auto",
          }}
        >
          {isLoggedIn && !isBlocked ? (
            <Box
              sx={{
                height: "100%",
                overflowY: "auto",
              }}
            >
              {children}
            </Box>
          ) : (
            <UserBlocked />
          )}
        </Box>

        {/* TODO Fix this */}
      </Box>
    </Stack>
  );
}
