import {Box, Button, Modal, Typography} from "@mui/material";
import React from "react";
import useToaster from "../../../customHooks/useToaster";
import {useDispatch, useSelector} from "react-redux";
import {deleteAChapterById, manuallySetCourseChapter} from "../../../features/slice/courseSlice";
import deleteIcon from "../../../assets/images/delete.svg";
import { setActiveChapterIndex } from "../../../features/slice/activePathSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  textAlign: "center",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
const ChapterDeleteModal = ({ courseChapter }) => {
  const [open, setOpen] = React.useState(false);
  const { activeChapterIndex, activeCourseId } = useSelector((state) => state.activePath);

  const toast = useToaster();
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const { isLightTheme } = useSelector((state) => state.theme);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteCourse = (id) => {
  
    dispatch(deleteAChapterById(id)).then((action) => {
      if (action.error) {
        toast.trigger(action.error.message, "error");
      } else {
        const previousIndex = activeChapterIndex === 0 ? 0 : activeChapterIndex - 1;
        dispatch(setActiveChapterIndex(previousIndex));
        dispatch(manuallySetCourseChapter(previousIndex));
        setOpen(false);
        toast.trigger(action.payload.data.message, "success");
        // navigate(`/course-details/${course._id}`);
      }
    });
  };
  return (
    <>
      <Button
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              position: "absolute",
              top: "12%",
              left: "42%",
              width: "60px",
              textAlign: "center",
              fontSize: "32px",
              background: "#FF4757",
              borderRadius: "55%",
              height: "60px",
              paddingTop: "4px",
              color: "white",
            }}
          >
            <i style={{ width: "60px", height: "60px" }} className="ri-delete-bin-6-line"></i>
          </Box>

          <Typography
            sx={{ mt: "30%", pb: 1, color: isLightTheme ? "#091E42" : "#fff", fontSize: "18px", fontWeight: "600" }}
            id="modal-modal-title"
            variant="h6"
          >
            Delete Chapter
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{
              fontSize: "14px",
              color: isLightTheme ? "#3C4D6B" : "#fff",
              fontWeight: "400",
              lineHeight: "20px",
            }}
          >
            Are you sure you want to delete this chapter? If you delete your chapter, you will lose all the chapter
            information.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            {
              <Button
                sx={{
                  textTransform: "none",
                  backgroundColor: "#FFF0F2",
                  border: "1px solid #FFF0F2",
                  color: "black",
                  borderRadius: "10px",
                  width: "150px",
                  "&:hover": {
                    backgroundColor: "#FAE4C3",
                  },
                }}
                onClick={handleClose}
                // variant="contained"
              >
                Keep
              </Button>
            }
            <Button
              onClick={() => {
                handleDeleteCourse(courseChapter._id);
              }}
              sx={{
                textTransform: "none",
                background: "#FF4757",
                borderRadius: "10px",
                color: "#fff",
                width: "150px",
                ":hover": {
                  backgroundColor: "#F53142",
                },
              }}
              // variant="contained"
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ChapterDeleteModal;
