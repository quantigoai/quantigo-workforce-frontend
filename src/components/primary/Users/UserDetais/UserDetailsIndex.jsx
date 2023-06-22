import { Chip, Grid, styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { useSelector } from "react-redux";
import u_multiply from "../../../../assets/images/u_multiply.png";
import RoleChange from "../RoleChange/RoleChange";
import UserSkillChange from "../SkillChange/UserSkillChange";
import UserStatusChange from "../UserStatusChange/UserStatusChange";
import { useState } from "react";
import NidDetails from "../NidDetals/NidDetails";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";
import TakenTime from "../../../shared/CountDown/TakenTime";
import axios from "axios";
import { realToken } from "../../../../helper/lib";
import JobStatusChange from "../JobStatusChange/JobStatusChange";
const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  // color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});

const UserDetailsIndex = ({ user }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [documentsImage, setDocumentsImage] = useState([]);
  const [documentsType, setDocumentsType] = useState("");
  const { role } = useSelector((state) => state.user.user);
  const [userName, setUserName] = useState([]);
  const [documentsNo, setDocumentsNo] = useState();
  const BACKEND_URL = process.env.REACT_APP_SERVER_URL;
  const [state, setState] = React.useState({
    right: false,
  });

  const customHub = (userName) => {
    const hubCode = userName ? userName?.split("_")[1]?.substring(0, 2) : "";
    switch (hubCode) {
      case "DK":
        return "Dhaka";
      case "KH":
        return "Khulna";
      case "SG":
        return "Sirajganj";
      case "CD":
        return "Chuadanga";
      case "MS":
        return "Mymensingh";
      default:
        return "Unknown";
    }
  };
  const handleDetailNid = (documentImage, documentNo, documentType, name) => {
    setOpenModal(true);

    setDocumentsNo(documentNo);
    setDocumentsType(documentType);
    setUserName(name);
    const id = user._id;
    axios
      .get(`${BACKEND_URL}/users/get-user-documents/${id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      })
      .then((res) => {
        setDocumentsImage(res.data.documentsImage);
      });
  };
  const handleClick = (signNda) => {
    window.open(signNda);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleClose = () => setOpenModal(false);
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 550,
        // padding: "4%",
      }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <Box sx={{ paddingTop: "4%", paddingLeft: "4%" }}>
        <Grid container>
          <Grid item xs={10}>
            <Typography variant="h6" sx={{ color: "#090080" }}>
              Details
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ justifyContent: "right" }}>
            <Button onClick={toggleDrawer(anchor, false)}>
              <img alt="profilePic" src={u_multiply} />
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ paddingLeft: "4%", paddingTop: "2%", paddingRight: "1%" }}>
        <Grid container>
          {user.role === "admin" ? (
            <></>
          ) : (
            <>
              <Grid container sx={{ paddingBottom: "4%" }}>
                <Grid
                item
                  xs={3}
                  sx={{ justifyContent: "left", paddingBottom: "2%" }}>
                  <Typography variant="h8" sx={{ color: "#969CAF" }}>
                    Skill
                  </Typography>
                </Grid>
                <Grid item xs={7} sx={{ paddingLeft: "5%" }}>
                  <Grid container spacing={1}>
                    {user.skills.map((item) => (
                      <Grid key={item._id} item gap={1}>
                        <Chip
                          sx={{
                            color: "#00A671",
                            background: "rgba(0, 166, 113, 0.12)",
                          }}
                          label={capitalizeFirstLetter(item.name)}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}
          <Grid container>
            <Grid item xs={3} sx={{ justifyContent: "left", paddingBottom: "2%" }}>
              <Typography variant="h8" sx={{ color: "#969CAF" }}>
                Role
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ paddingLeft: "5%" }}>
              <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                {user.role === "level_1_annotator"
                  ? "Level 1 Annotator"
                  : user.role === "level_2_annotator"
                  ? "Level 2 Annotator"
                  : user.role === "level_0_annotator"
                  ? "Level 0 Annotator"
                  : user.role === "level_3_annotator"
                  ? "Level 3 Annotator"
                  : capitalizeFirstLetter(user?.role)}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3} sx={{ justifyContent: "left", paddingBottom: "2%" }}>
              <Typography variant="h8" sx={{ color: "#969CAF" }}>
                Hub
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ paddingLeft: "5%" }}>
              <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                {customHub(user.qaiUserName)}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3} sx={{ justifyContent: "left", paddingBottom: "2%" }}>
              <Typography variant="h8" sx={{ color: "#969CAF" }}>
                Gender
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ paddingLeft: "5%" }}>
              <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                {user.gender === "male"
                  ? "Male"
                  : user.gender === "female"
                  ? "Female"
                  : "Others"}
                {/* {capitalizeFirstLetter(user?.gender)} */}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={3} sx={{ justifyContent: "left", paddingBottom: "2%" }}>
              <Typography variant="h8" sx={{ color: "#969CAF" }}>
                Date Of Birth
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ paddingLeft: "5%" }}>
              <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                <TakenTime takenAt={user.dob} />
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={3} sx={{ justifyContent: "left", paddingBottom: "2%" }}>
              <Typography variant="h8" sx={{ color: "#969CAF" }}>
                Phone No
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ paddingLeft: "5%" }}>
              <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                {user.phone}
              </Typography>
            </Grid>
          </Grid>

          {/* <Grid  container >
            <Grid xs={3} sx={{ justifyContent: "left", paddingBottom: "2%" }}>
              <Typography variant="h8" sx={{ color: "#969CAF" }}>
                User Status
              </Typography>
            </Grid>
            <Grid xs={7} sx={{ paddingLeft: "5%" }}>
              <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                {user.isBlocked ? "Block" : "Unblock"}
              </Typography>
            </Grid>
          </Grid> */}
          {user.role === "admin" ? (
            <></>
          ) : (
            <>
              <Grid container>
                <Grid
                  xs={3}
                  item
                  sx={{ justifyContent: "left", paddingBottom: "2%" }}>
                  <Typography variant="h8" sx={{ color: "#969CAF" }}>
                    Complete Course
                  </Typography>
                </Grid>
                <Grid item xs={7} sx={{ paddingLeft: "5%" }}>
                  {user?.completedCourses.length === 0 ? (
                    <>
                      <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                        No Course Completed
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Typography variant="h8" sx={{ color: "#1D1D1D" }}>
                        {user?.completedCourses.length}
                      </Typography>
                    </>
                  )}
                </Grid>
              </Grid>
            </>
          )}
          <Grid container>
            <Grid item xs={3} sx={{ justifyContent: "left", paddingBottom: "2%" }}>
              <Typography variant="h8" sx={{ color: "#969CAF" }}>
                Address
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{ paddingLeft: "5%" }}>
              {user.presentAddress}
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ border: "1px solid #DADCDF" }}></Grid>
      </Box>
      {role === "delivery_manager" ? (
        <></>
      ) : (
        <>
          <Box sx={{ paddingTop: "2%", paddingLeft: "4%" }}>
            <Grid container sx={{ paddingRight: "3%" }}>
              <Grid item xs={6} sx={{ paddingRight: "3%" }}>
                {" "}
                {user.documentNo ? (
                  <ButtonStyle 
                    variant="outlined"
                    fullWidth
                    onClick={() =>
                      handleDetailNid(
                        user.documentsImage,
                        user.documentNo,
                        user.documentsType,
                        user.name
                      )
                    }>
                    Document
                  </ButtonStyle>
                ) : (
                  <ButtonStyle
                    variant="outlined"
                    fullWidth
                    disabled
                    onClick={() =>
                      handleDetailNid(
                        user.documentsImage,
                        user.documentNo,
                        user.documentsType,
                        user.name
                      )
                    }>
                    Document
                  </ButtonStyle>
                )}
              </Grid>
              <Grid item xs={6}>
                {user.signImage ? (
                  <ButtonStyle
                    variant="outlined"
                    fullWidth
                    onClick={() => handleClick(user.signImage)}>
                    NDA
                  </ButtonStyle>
                ) : (
                  <ButtonStyle
                    variant="outlined"
                    fullWidth
                    disabled
                    onClick={() => handleClick(user.signImage)}>
                    NDA
                  </ButtonStyle>
                )}
              </Grid>
            </Grid>
          </Box>
        </>
      )}
      <Box sx={{ paddingTop: "2%", paddingLeft: "4%" }}></Box>
      {/* role Change */}

      <Box sx={{ paddingTop: "2%", paddingLeft: "4%" }}>
        <Grid container>
          <Grid item xs={10}>
            <Typography variant="h7" sx={{ color: "#090080" }}>
              Change Role
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: "4%" }}>
        <RoleChange user={user} />
      </Box>
      {user.role === "admin" ? (
        <></>
      ) : (
        <>
          <Box sx={{ paddingTop: "2%", paddingLeft: "4%" }}>
            <Grid container>
              <Grid item xs={10}>
                <Typography variant="h7" sx={{ color: "#090080" }}>
                  Change Skill
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ padding: "4%" }}>
            <UserSkillChange user={user} />
          </Box>
        </>
      )}
      {role === "admin" ? (
        <>
          <Box sx={{ paddingTop: "2%", paddingLeft: "4%" }}>
            <Grid container>
              <Grid item xs={10}>
                <Typography variant="h7" sx={{ color: "#090080" }}>
                  Change Status
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ padding: "4%" }}>
            <UserStatusChange user={user} />
          </Box>
        </>
      ) : (
        <></>
      )}
      {!user.isJobBlocked ? (
        <></>
      ) : (
        <>
          <Box sx={{ paddingTop: "2%", paddingLeft: "4%" }}>
            <Grid container>
              <Grid item xs={10}>
                <Typography variant="h7" sx={{ color: "#090080" }}>
                  Job Change Status
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ padding: "4%" }}>
            <JobStatusChange user={user} />
          </Box>
        </>
      )}
    </Box>
  );

  return (
    <>
      <Box>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <ButtonStyle
              variant="outlined"
              onClick={toggleDrawer(anchor, true)}>
              Details
            </ButtonStyle>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Box>
      <NidDetails
        userId={user._id}
        openModal={openModal}
        handleClose={handleClose}
        documentImage={documentsImage}
        documentsNo={documentsNo}
        documentsType={documentsType}
        userName={userName}
      />
    </>
  );
};

export default UserDetailsIndex;
