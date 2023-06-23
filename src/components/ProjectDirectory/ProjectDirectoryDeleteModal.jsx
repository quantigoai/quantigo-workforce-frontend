import {Box, Button, Dialog, DialogTitle} from "@mui/material";
import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useAlert} from "react-alert";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Tooltip from "@mui/material/Tooltip";
import {deleteProjectDirectory} from "../../features/slice/ProjectDirectory";

const ProjectDirectoryDeleteModal = ({ item }) => {
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
  const handleDelete = (id) => {
    setOpen(false);
    dispatch(deleteProjectDirectory(id)).then((action) => {
      if (action?.payload?.status === 200) {
        alert.show("Successfully Deleted Project Directory", {
          type: "success",
        });
      } else {
        alert.show("Project Directory do not Delete", { type: "error" });
      }
    });
  };
  return (
    <>
      <Tooltip title="Delete Project Directory" arrow>
        <Button
          variant="contained"
          // disabled={isLoading}
          type="submit"
          sx={{
            width: "100%",

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
          </Box>
        </Button>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {"Are you sure Delete ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete {item.Project_Name}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={() => handleDelete(item._id)} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProjectDirectoryDeleteModal;
