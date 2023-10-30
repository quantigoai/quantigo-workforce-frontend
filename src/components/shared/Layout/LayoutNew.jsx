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
import menuFoldLine from "../../../assets/images/menu-fold-line.svg";
import menuUnfoldLne from "../../../assets/images/menu-unfold-line.svg";
import UserBlocked from "../UserBlocked/UserBlocked";

import { Stack } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../Header/Header";
import GetHelpNew from "./GetHelpNew";
import layoutMenuOption from "./layoutMenuOption";

const drawerWidth = "16.66%";

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
  // padding: "7px",
  // margin: "5px",
  width: `calc(${theme.spacing(7)} + 1px)`,
  marginLeft: "10px",
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 5px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
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
  ...theme.mixins.toolbar,
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
  const {
    adminOptions,
    projectManagerOptions,
    projectLeadOptions,
    projectCoordinatorOptions,
    verifiedDmOptions,
    verifiedTrainerOptions,
    verifiedProjectManagerOptions,
    verifiedProjectLeadOptions,
    verifiedProjectCoordinatorOptions,
    verifiedReviewerOptions,
    verifiedDevOptions,
    verifiedRecruitOptions,
    dmOptions,
    anntatorOptions,
    level0AnnotatorOptions,
    Verifiedlevel0AnnotatorOptions,
    trainerOptions,
    reviewerOptions,
    recruitOptions,
    unverifiedOptions,
    devOptions,
    verifiedAccountManagerOptions,
    accountManagerOptions,
    verifiedAnnotatorOptions,
  } = layoutMenuOption();

  const handleOptionClick = (option) => {
    switch (option) {
      case "Dashboard":
        return navigate("/dashboard");
      case "All Users":
        return navigate("/all-users");
      case "Home":
        return navigate("/home");
      case "All Projects":
        return navigate("/allprojects");
      case "Project Directory":
        return navigate("/projectDirectory");
      case "Identity Verification":
        return navigate("/identity-verification");
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
      case "Verify Email":
        return navigate("/verify-email");
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
            backgroundColor: activePath === text.name && "rgba(255, 255, 255, 0.15)",
            "&:hover": {
              backgroundColor: "rgba(255, 154, 69, 0.1)",
            },
          }}
          className="responsive-drawer"
          onClick={() => handleOptionClick(text.name)}
        >
          <ListItemIcon sx={{ color: "#FFFFFF", minWidth: "45px" }}>
            <img src={text.icon} />
          </ListItemIcon>

          <Typography variant="wpf_p3_medium">
            <ListItemText
              disableTypography
              primary={text.name}
              sx={{
                color: "#FFFFFF",
              }}
            />
          </Typography>
        </ListItemButton>
      </ListItem>
    );
  };

  const handleMenuFunction = (role) => {
    if (isLoggedIn) {
      switch (true) {
        case role === "admin":
          return adminOptions.map((text) => handleMenu(text));

        case role === "delivery_manager":
          return isVerified
            ? verifiedDmOptions.map((text) => handleMenu(text))
            : dmOptions.map((text) => handleMenu(text));

        case role === "level_0_annotator":
          return isVerified
            ? Verifiedlevel0AnnotatorOptions.map((text) => handleMenu(text))
            : level0AnnotatorOptions.map((text) => handleMenu(text));

        case role === "level_1_annotator":
          return isVerified
            ? verifiedAnnotatorOptions.map((text) => handleMenu(text))
            : level0AnnotatorOptions.map((text) => handleMenu(text));

        case role === "level_2_annotator":
          return isVerified
            ? verifiedAnnotatorOptions.map((text) => handleMenu(text))
            : level0AnnotatorOptions.map((text) => handleMenu(text));

        case role === "level_3_annotator":
          return isVerified
            ? verifiedAnnotatorOptions.map((text) => handleMenu(text))
            : level0AnnotatorOptions.map((text) => handleMenu(text));

        case role === "trainer":
          return isVerified
            ? verifiedTrainerOptions.map((text) => handleMenu(text))
            : trainerOptions.map((text) => handleMenu(text));

        case role === "reviewer":
          return isVerified
            ? verifiedReviewerOptions.map((text) => handleMenu(text))
            : reviewerOptions.map((text) => handleMenu(text));

        case role === "engineering_lead":
          return devOptions.map((text) => handleMenu(text));

        case role === "account_manager":
          return isVerified
            ? verifiedAccountManagerOptions.map((text) => handleMenu(text))
            : accountManagerOptions.map((text) => handleMenu(text));

        case role === "recruitment_manager":
          // return isVerified
          //   ? verifiedRecruitOptions.map((text) => handleMenu(text))
          //   : recruitOptions.map((text) => handleMenu(text));
          return verifiedRecruitOptions.map((text) => handleMenu(text));

        case role === "project_lead":
          return isVerified
            ? verifiedProjectLeadOptions.map((text) => handleMenu(text))
            : projectLeadOptions.map((text) => handleMenu(text));

        case role === "project_coordinator":
          return isVerified
            ? verifiedProjectCoordinatorOptions.map((text) => handleMenu(text))
            : projectCoordinatorOptions.map((text) => handleMenu(text));

        case role === "project_manager":
          return isVerified
            ? verifiedProjectManagerOptions.map((text) => handleMenu(text))
            : projectManagerOptions.map((text) => handleMenu(text));
        default:
          break;
      }
    }
  };

  return (
    <Stack
      component={motion.div}
      direction={"row"}
      sx={{
        width: "100vw",
      }}
    >
      <AnimatePresence>
        <Box
          component={motion.div}
          animate={{
            width: open ? "16.66%" : "5%",
            transition: { duration: 0.4 },
          }}
          sx={{
            height: "100vh",
            backgroundColor: isLightTheme ? "#2D58FF" : "#050116",
          }}
        >
          <Drawer
            PaperProps={{
              sx: {
                backgroundColor: isLightTheme ? "#2D58FF" : "#050116",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                "&-ms-overflow-style:": {
                  display: "none",
                },
              },
            }}
            variant="permanent"
            open={open}
          >
            <DrawerHeader
              sx={{
                height: "56px",
                position: "sticky",
                top: 0,
                zIndex: 1213,
                backgroundColor: isLightTheme ? "#2D58FF" : "#050116",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: !open ? "center" : "space-between",
                  width: "80%",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                  <Box>
                    <IconButton onClick={handleDrawerClose}>
                      {theme.direction === "rtl" ? <img src={menuFoldLine} /> : <img src={menuFoldLine} />}
                    </IconButton>
                  </Box>
                )}

                {!open && (
                  <Box>
                    <IconButton onClick={handleDrawerOpen}>
                      <img src={menuUnfoldLne} />
                    </IconButton>
                  </Box>
                )}
              </Box>
            </DrawerHeader>

            <Box
              sx={{
                height: {
                  lg: "75%",
                  xl: "75%",
                  xxl: "80%",
                },
                overflowX: "hidden",
                scrollbarWidth: "none", // Firefox scrollbar width
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <Box sx={{ paddingLeft: "11%" }}>
                {open && (
                  <Typography variant="wpf_p4_semiBold" sx={{ color: "#B6C9F0" }}>
                    MAIN MENU
                  </Typography>
                )}
                {!open && (
                  <Typography variant="wpf_p4_semiBold" sx={{ color: "#B6C9F0" }}>
                    MENU
                  </Typography>
                )}
              </Box>

              {isLoggedIn && !isBlocked && !isEmailVerified ? (
                <List>{unverifiedOptions.map((text) => handleMenu(text))}</List>
              ) : (
                <List>{handleMenuFunction(role)}</List>
              )}
            </Box>

            <DrawerFooter>
              <>{open && <GetHelpNew />}</>
            </DrawerFooter>
          </Drawer>
        </Box>
      </AnimatePresence>

      <AnimatePresence>
        <Box
          component={motion.div}
          animate={{
            width: open ? "83.34%" : "95%",
            transition: { duration: 0.4 },
          }}
          sx={{
            height: "100vh",
          }}
        >
          {/* navbar */}
          <Box
            sx={{
              height: { xxl: "7%", xl: "56px", lg: "7.22%" },
            }}
          >
            <Header openDrawer={open} />
          </Box>

          {/* body */}
          <Box
            sx={{
              height: { xxl: "93%", xl: "720px", lg: "92.78", md: "90%" },
              paddingBottom: "0",
              margin: 0,
              backgroundColor: isLightTheme ? "#F2F6FC" : "#121212",
              width: "100%",
              overflowY: "auto",
            }}
          >
            {isLoggedIn && !isBlocked ? (
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
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
      </AnimatePresence>
    </Stack>
  );
}
