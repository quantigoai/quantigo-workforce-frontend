import { Box, Button, Grid, IconButton, Modal, Paper, Skeleton, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";
import u_multiply from "../../../../assets/images/crosIcon.svg"; // Import your close (cross) button icon here

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // bgcolor: "background.paper",
  // border: "none",
  // borderRadius: "0px",
  // boxShadow: "0px 0px 10px 2px black",
  p: 0,
  width: { xl: "30%", lg: "40%" },
  input: {
    color: "black",
    height: "20px",
    borderRadius: "8px",
  },
  select: {
    height: "20px",
  },
};

const NidDetails = ({ openModal, handleClose, documentImage, documentsNo, documentsType, userName }) => {
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Grid container sx={{  }}>
            <Paper sx={{ borderRadius: "10px" }}>
              <Box sx={{ position: "relative", borderRadius: "10px" }}>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    bottom: "10px",
                    // right: "0px",
                    left: "8px",
                    justifyContent: "right",
                  }}>
                  <IconButton
                    // variant="outlined"
                    onClick={handleClose}
                    sx={{
                      border: "3px solid #FFFFFF",
                      position: "absolute",
                      top: "0px",
                      right: "0px",
                      zIndex: 1,
                      backgroundColor: "#FFFFFF",
                      height: "30px",
                      width: "30px",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "#F4F7FE",
                        color: "#62728F",
                        // border: "1px solid #F4F7FE",
                      },
                    }}>
                    <img style={{}} alt="cross" src={u_multiply} />
                  </IconButton>
                </Grid>

                <Grid
                  container
                  sx={{
                    justifyContent: "center",
                    borderRadius: "10px",
                  }}>
                  {documentImage?.length === 0 ? (
                    <>
                      <Box sx={{ width: 600 }}>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                      </Box>
                    </>
                  ) : (
                    <>
                      <img
                        src={`data:image/jpeg;base64,${documentImage}`}
                        style={{
                          height: documentsType === "NID" ? 300 : 500,
                          width: 600,
                          borderRadius: "10px",
                        }}
                      />
                    </>
                  )}
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default NidDetails;
