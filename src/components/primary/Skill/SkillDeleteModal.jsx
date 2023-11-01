import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Button, Dialog, DialogTitle, Modal, Typography } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "../../../customHooks/useToaster";
import { deleteASkill, getAllSkills } from "../../../features/slice/skillSlice";

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
const SkillDeleteModal = ({ skill }) => {
  const [open, setOpen] = React.useState(false);
  const {isLoading } = useSelector((state) => state.skill);
  const { isLightTheme } = useSelector((state) => state.theme);

  const toast = useToaster();
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
        toast.trigger("Skill Delete", "success");
        setOpen(false);
      } else {
        toast.trigger("Skill Not Delete", "error");
      }
    });
  };

  return (
    <>
      <Button
        // variant="contained"
        // disabled={isLoading}
        type="submit"
        // sx={{
        //   backgroundColor: "#D8514B",
        //   color: "#FFFFFF",
        //   "&:hover": {
        //     backgroundColor: "#FF9A45",
        //     color: "#1D1D1D",
        //   },
        //   borderRadius: "2px",
        // }}
        sx={{ color: "#D8514B" }}
        onClick={handleClickOpen}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            // justifyContent: "center",
          }}>
          <i className="ri-delete-bin-6-line"></i>
          {/* <DeleteOutlineIcon sx={{color:"#D8514B"}} /> */}
        </Box>
      </Button>
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Are you sure Delete Skill?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Delete {skill.name}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={() => handleDeleteSkill(skill._id)} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
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
            }}>
            <i style={{ width: "60px", height: "60px" }} className="ri-delete-bin-6-line"></i>
          </Box>

          <Typography
            sx={{ mt: "30%", color: isLightTheme ? "#091E42" : "#fff", fontSize: "18px", fontWeight: "600" }}
            id="modal-modal-title"
            variant="h6"
            component="h2">
            Delete Skill
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{
              fontSize: "14px",
              color: isLightTheme ? "#3C4D6B" : "#fff",
              fontWeight: "400",
              lineHeight: "20px",
            }}>
            Are you sure you want to delete {skill.name} skill ?
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "20px",
            }}>
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
                    backgroundColor: "#FFF0F2",
                  },
                }}
                onClick={handleClose}
                // variant="contained"
              >
                No
              </Button>
            }
            <Button
              disabled={isLoading}
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
              onClick={() => handleDeleteSkill(skill._id)}
              // variant="contained"
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default SkillDeleteModal;
