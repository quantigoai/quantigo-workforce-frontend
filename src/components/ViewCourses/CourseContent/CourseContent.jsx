import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {Box, Button, Dialog, Grid, Paper, Typography} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import parse from "html-react-parser";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {deleteACourseById} from "../../../features/slice/courseSlice";

const CourseContent = () => {
  const { course } = useSelector((state) => state.course);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const { role } = user.user;
  const handlequiz = () => {
    navigate("/quiz");
  };
  const buttonstyle = {
    color: "white",
    backgroundColor: "#5F71F1",
    margin: "0px auto",
    width: "550px",
    height: "50px",
    borderRadius: "10px",
  };
  const paperstyle = {
    padding: "0px 0px",
    borderRadius: 20,
    width: 1350,
    height: 850,
    margin: "0px auto",
  };
  const paperstyle1 = {
    paddingTop: "30px",
    paddingLeft: "20px",
    width: 1350,
    height: 650,
    margin: "0px",
    overflow: "scroll",
  };
  const headergrid = {
    paddingTop: " 0px 0px",
    borderRadius: 20,
    backgroundColor: "#5F71F1",
    height: 100,
  };

  const editButton = {
    color: "white",
    backgroundColor: "#4aae80",
    borderRadius: "50%",
    "&:hover": { backgroundColor: "#0fc572" },
  };
  const deleteButton = {
    color: "white",
    backgroundColor: "#d6440b",
    borderRadius: "50%",
    "&:hover": { backgroundColor: "#ca2f9d" },
  };
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleEdit = () => {
    navigate("/updatecourse/" + course._id);
  };
  const handleDelete = () => {
    dispatch(deleteACourseById(course._id)).then((action) => {
      if (action.payload.status === 200) {
        navigate("/admindashboard");
      }
    });
  };

  const scrolldiv = { overflow: "scroll" };
  return (
    <>
      <div elevation={20} style={{ padding: "10px", borderRadius: 20 }}>
        <Paper
          elevation={20}
          style={paperstyle}
          sx={{ padding: "20%", borderRadius: 20 }}
        >
          <div style={headergrid}>
            <Grid container>
              <Grid item xs={6}>
                <Typography
                  variant="h4"
                  sx={{
                    paddingTop: "30px",
                    paddingLeft: "0%",
                    color: "#FFFFFF",
                  }}
                >
                  {course.name}
                </Typography>
                {/* <h6 style={{ paddingTop: "40px", paddingRight: "80px", color: "#FFFFFF" }}>{course.name}</h6> */}
              </Grid>
              <Grid item xs={2} sx={{ paddingTop: "30px", paddingLeft: "0%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Button sx={editButton} onClick={handleEdit}>
                    <EditIcon style={{ color: "white", fontSize: "2rem" }} />
                  </Button>
                  <Button onClick={handleDelete} sx={deleteButton}>
                    <DeleteIcon style={{ color: "white", fontSize: "2rem" }} />
                  </Button>
                </Box>
              </Grid>

              {/* <Grid item xs={6} style={{ paddingTop: "40px", paddingRight: "80px" }}>
                                <ProgressBar striped variant="warning" animated now={45} />;
                            </Grid> */}
            </Grid>
          </div>
          <Box
            style={paperstyle1}
            sx={{ marginLeft: "20px", textAlign: "left" }}
          >
            {course.content && parse(course.content)}
          </Box>
          <div>
            <Grid container>
              <Grid item xs={6}>
                <Button style={buttonstyle} 
                // onClick={handlequiz}
                >
                  Complete Course{" "}
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button style={buttonstyle} 
                // onClick={handlequiz}
                >
                  start Quiz
                </Button>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </div>

      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure Delete Course?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete Course : {course.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete} autoFocus>
            Yes
          </Button>
          <Button onClick={handleClose}>No </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CourseContent;
