import { Box, Button, Dialog, DialogTitle } from "@mui/material";
import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { deleteASkill, getAllSkills } from "../../../features/slice/skillSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const SkillDeleteModal = ({ skill }) => {
  const [open, setOpen] = React.useState(false);
 ;

  const { activeChapterIndex, activeCourseId } = useSelector(
    (state) => state.activePath
  );
  const alert = useAlert();
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDeleteSkill = (id) => {
    dispatch(deleteASkill(id)).then((action) => {
      if (action.payload.status === 200 || 201) {
        dispatch(getAllSkills());
        alert.show("Skill Delete", { type: "success" });
      } else {
        alert.show("Skill Not Delete", { type: "error" });
      }
    });
  };

  return (
    <>
      <Button
        variant="contained"
        // disabled={isLoading}
        type="submit"
        sx={{
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
            // justifyContent: "center",
          }}>
          <DeleteOutlineIcon />
        </Box>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {"Are you sure Delete Skill?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete {skill.name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={() => handleDeleteSkill(skill._id)} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SkillDeleteModal;
