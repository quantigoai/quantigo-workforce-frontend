import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../features/slice/userSlice";
import logo1 from "../../assets/images/logo1.png";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {styled as mstyled} from "@mui/material/styles";
import {useState} from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Avatar} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';

export const NavBarFull = mstyled(AppBar)(({ theme }) => ({
    height: "auto",
    width: "auto",
    // margin: { md: "1rem 14rem" },
    display: "flex",
    justifyContent: "space-between",
    padding: "0rem",
    color: "black",
    background: "rgba(255, 255, 255, 0.15)",
    boxShadow: "0px 0px 0px rgba(31, 30, 120, 0.37)",
    // borderRadius: "10px",
    //backdropFilter: "blur(8px)",
}));

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const { user } = useSelector((state) => state);
    // const {user} = useSelector((state) => state.user);
    const { isLoggedIn } = user;
    const dispatch = useDispatch();

    const { role } = user.user;
    const { name } = user.user;
    const handleLogOut = () => {
        navigate("/");
        dispatch(logout());
        const open = false
        // open(open);
        setAnchorEl(null);

    };
    const handleEditprofile = () => {
        navigate("/account");
        setAnchorEl(null);
    }
    const handleUpdateMyDocument = () => {
        navigate("/annotatordashboard");
        setAnchorEl(null);
    }
    const handleAdminDashboard = () => {
        navigate("/admindashboard");
        setAnchorEl(null);
    }
    const handleprojectleaddashboard = () => {
        navigate("/projectdashboard")
        setAnchorEl(null);
    }
    const handlereviewerashboard = () => {
        navigate("/reviwerdashboard");
        setAnchorEl(null);
    }
    const handledelivaryashboard = () => {
        navigate("/delivarydashboard")
    }
    const handledashboard = () => {
        navigate("/dashboard")
    }
    const handletask = () => {
        navigate("/task")
    }
    const handletasklog = () => {
        navigate("/profile")
    }
    const handlecreateCourse = () => {
        navigate("/createcourse")
    }
    const handleuserdetails = () => {
        navigate("/userdetails")
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <Box sx={{ flexGrow: 1 }}>
            {/*<AppBar position="static">*/}
            <NavBarFull
                position="static"
                sx={{
                    margin: { md: "1rem 2rem" },
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "space-Between" }}>

                    <img src={logo1} alt="logo" style={{ width: "200px", height: "40px" }} onClick={() => navigate("/")} />
                    <Box>
                        {!isLoggedIn ? (
                            <div>
                                <Button color="inherit"> About Us</Button>
                                <Button color="inherit"> Blogs</Button>
                                <Button color="inherit"> How it works</Button>
                                <Button onClick={() => navigate("/auth")} color="primary">
                                    Login / Signup
                                </Button>
                            </div>

                        ) : (
                            <div>
                                {/* {role === "admin" && (

                                    <Button onClick={() => navigate("/allusers")} color="inherit">
                                        All Users
                                    </Button>


                                )}                      {role === "admin" ?
                                    <Button onClick={() => navigate("admindashboard")} color="inherit" >Admin Dashboard</Button>
                                    :
                                    <Button onClick={handledashboard} color="inherit">Dashboard</Button>}
                                {role === "admin" ? <Button onClick={handleuserdetails} color="inherit">user statistics</Button> :
                                    <Button onClick={handletasklog} color="inherit">
                                        Task Log
                                    </Button>}
                                <Button onClick={handletask} color="inherit">
                                    Training Course
                                </Button> */}

                                {/* <Button onClick={handleUpdateMyDocument} color="inherit">
                                    Update My Document
                                </Button> */}
                                <Button onClick={handleEditprofile}><SettingsIcon /></Button>
                                <Button><NotificationsNoneIcon /></Button>


                                <Button

                                    id="fade-button"
                                    // aria-controls={open ? 'fade-menu' : undefined}
                                    // aria-haspopup="true"
                                    // aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <Avatar sx={{ bgcolor: "#D3ECFA" }}></Avatar>
                                    <div style={{ paddingLeft: "2%" }}>{name}</div>
                                    <ArrowDropDownIcon />
                                </Button>
                                <Menu
                                    // id="fade-menu"
                                    // MenuListProps={{
                                    // 'aria-labelledby': 'fade-button',
                                    // }}
                                    sx={{ zIndex: '2123132123123' }}
                                    anchorEl={anchorEl}

                                    open={open}
                                    onClose={handleClose}
                                //TransitionComponent={Fade}
                                >
                                    <MenuItem >{role === "level_1_annotator" ? "Level_1 " : role === "level_2_annotator" ? "Level_2 " : role === "project_lead" ? "Project Lead" : role === "delivery_manager" ? "Delivery Manager" : role === 'reviewer' ? "Reviewer" : role === 'trainer' ? "Trainer" :role}</MenuItem>
                                    {/* {role === "admin" ? <MenuItem onClick={handlecreateCourse}>Create Course</MenuItem> : <></>} */}
                                    {role === "admin" || role ==="trainer" ? <MenuItem onClick={handleAdminDashboard}>Dashboard</MenuItem> : role === "project_lead" ? <MenuItem onClick={handleprojectleaddashboard}>Dashboard</MenuItem> : role === "reviewer" ? <MenuItem onClick={handlereviewerashboard}>Dashboard</MenuItem> : role === "delivery_manager" ? <MenuItem onClick={handledelivaryashboard}>Dashboard</MenuItem> : <MenuItem onClick={handleUpdateMyDocument}>Dashboard</MenuItem>}

                                    {/* <MenuItem onClick={handleEditprofile}>Account</MenuItem> */}

                                    <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                                </Menu>
                            </div>
                        )}

                    </Box>
                </Toolbar>
            </NavBarFull>
        </Box>

    );
};

export default Header;
