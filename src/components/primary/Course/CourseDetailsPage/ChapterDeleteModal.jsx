import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {Box, Button, Dialog, DialogTitle} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import useToaster from "../../../../customHooks/useToaster";
import {setActiveChapterIndex} from "../../../../features/slice/activePathSlice";
import {deleteAChapterById, manuallySetCourseChapter} from "../../../../features/slice/courseSlice";

const ChapterDeleteModal = () => {
  const [open, setOpen] = React.useState(false);
  const { courseChapter } = useSelector((state) => state.course);
  const navigate = useNavigate();
  const { activeChapterIndex, activeCourseId } = useSelector((state) => state.activePath);

  const toast = useToaster();
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteChapter = (id) => {
    dispatch(deleteAChapterById(id)).then((action) => {
      if (action.payload.status === 200) {
        // TODO handle navigation in delete chapter set index to previous chapter if its not 0
        const previousIndex = activeChapterIndex === 0 ? 0 : activeChapterIndex - 1;
        dispatch(setActiveChapterIndex(previousIndex));
        dispatch(manuallySetCourseChapter(previousIndex));
        navigate(`/course-details/${activeCourseId}/index`);
        setOpen(false);
        toast.trigger("Chapter Deleted Successfully", "success");
      }
    });
  };

  return (
    <>
      <Button
        variant="contained"
        type="submit"
        sx={{
          height: "45px",
          backgroundColor: "#D8514B",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#FF9A45",
            color: "#1D1D1D",
          },
          borderRadius: "2px",
        }}
        onClick={handleClickOpen}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <DeleteOutlineIcon />
          Delete Chapter
        </Box>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure Delete Chapter?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Delete {courseChapter.title}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={() => handleDeleteChapter(courseChapter._id)} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ChapterDeleteModal;
