import { Box, Button, Dialog, DialogTitle } from "@mui/material";
import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { deleteACourseById } from "../../../../features/slice/courseSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Tooltip from "@mui/material/Tooltip";
const CourseDeleteModal = ({ course }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteCourse = (id) => {
    setOpen(false);
    dispatch(deleteACourseById(id)).then((action) => {
      if (action.payload.status === 200) {
        navigate("/course");
        alert.show("Course Deleted Successfully", { type: "success" });
      } else {
        alert.show("Course do not Delete", { type: "error" });
      }
    });
  };
  return (
    <>
      <Tooltip title="Delete Course" arrow>
        <Button
          variant="contained"
          // disabled={isLoading}
          type="submit"
          sx={{
            width: "100%",
            height: "45px",
            backgroundColor: "#D8514B",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#FF9A45",
              color: "#1D1D1D",
            },
            borderRadius: "2px",
          }}
          onClick={handleClickOpen}>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "center",
            }}>
            <DeleteOutlineIcon />
            {/* Course */}
          </Box>
        </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {"Are you sure Delete Course?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete {course.name} Course
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={() => handleDeleteCourse(course._id)} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CourseDeleteModal;
