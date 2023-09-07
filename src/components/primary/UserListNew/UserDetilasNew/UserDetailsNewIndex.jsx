import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Fade, Grid } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import ProjectModalHeader from "../../ProjectLIstNew2/ProjectModalHeader";
import DetailsTab from "./DetailsTab";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: "90%",
  // height: "1000",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  p: 0,
  input: {
    color: "black",
    height: "20px",
    borderRadius: "8px",
  },
  select: {
    height: "20px",
  },
};
export default function UserDetailsNewIndex({ user }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box sx={{ height: "5%" }}>
            <ProjectModalHeader
              handleCreateProjectClose={handleClose}
              modalTitle={"Details"}
            />
          </Box>

          <Box sx={{ padding: "3%" }}>
            <DetailsTab user={user} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "0px",
              borderTop: "2px solid #F2F6FC",
              width: "100%",
              height: "64px",
            }}>
            <Grid container sx={{ padding: "2%" }}>
              <Grid item xs={6}>
                <Button
                  sx={{
                    width: "120px",
                    textTransform: "none",
                    backgroundColor: "#F4F7FE",
                    color: "#62728F",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#F4F7FE",
                      color: "#62728F",
                      border: "1px solid #F4F7FE",
                    },
                  }}>
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Grid container sx={{ justifyContent: "right" }}>
                  <Button
                    sx={{
                      width: "128px",
                      textTransform: "none",
                      backgroundColor: "#2E58FF",
                      color: "#FFFFFF",
                      borderRadius: "8px",
                      "&:hover": {
                        backgroundColor: "#2E58FF",
                        color: "#FFFFFF",
                        // border: "1px solid #2E58FF",
                      },
                    }}>
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
