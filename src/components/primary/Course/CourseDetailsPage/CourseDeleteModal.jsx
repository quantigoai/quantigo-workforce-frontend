import { Box, Button, Dialog, DialogTitle } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Tooltip from "@mui/material/Tooltip";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../../../../assets/images/delete.svg";
import useToaster from "../../../../customHooks/useToaster";
import { deleteACourseById } from "../../../../features/slice/courseSlice";

const CourseDeleteModal = ({ course }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toast = useToaster();
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
        toast.trigger("Course Deleted Successfully", "success");
      } else {
        toast.trigger("Course do not Delete", "error");
      }
    });
  };
  return (
    <>
      <Tooltip title="Delete Course" arrow>
        <Button
          type="submit"
          sx={{
            borderRadius: "2px",
          }}
          onClick={handleClickOpen}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <img src={deleteIcon} />
          </Box>
        </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure Delete Course?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Delete {course.name} Course</DialogContentText>
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
