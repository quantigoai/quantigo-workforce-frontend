import { Box, Grid, IconButton, Modal, Paper } from "@mui/material";
import u_multiply from "../../../../assets/images/crosIcon.svg"; // Import your close (cross) button icon here
import ImageSwiperIndex from "../../Users/NidDetals/ImageSwiperIndex";

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  // left: "5%",
  transform: "translate(-50%, -50%)",
  // bgcolor: "background.paper",
  // border: "none",
  // borderRadius: "0px",
  // boxShadow: "0px 0px 10px 2px black",
  p: 0,
  // width: { xl: "30%", lg: "40%" },
  input: {
    color: "black",
    height: "20px",
    borderRadius: "8px",
  },
  select: {
    height: "20px",
  },
};

const ModalImage = ({ openModal, handleClose, images, level }) => {
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            left: level === "Standard Photo" ? "50%" : { xxl: "50%", xl: "50%", lg: "50%" },
          }}
        >
          <Grid container sx={{}}>
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
                  }}
                >
                  <IconButton
                    // variant="outlined"
                    onClick={handleClose}
                    sx={{
                      border: "3px solid neutral.N000",
                      position: "absolute",
                      top: "0px",
                      right: "0px",
                      zIndex: 1,
                      backgroundColor: "neutral.N000",
                      height: "30px",
                      width: "30px",
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: "neutral.N000",
                        color: "#62728F",
                        // border: "1px solid #F4F7FE",
                      },
                    }}
                  >
                    <img alt="cross" src={u_multiply} />
                  </IconButton>
                </Grid>

                <Box
                  // container
                  sx={{
                    // width: "920px",
                    width: {
                      lg: level === "Standard Photo" ? "250px" : "600px",
                      xl: level === "Standard Photo" ? "300px" : "690px",
                      xxl: level === "Standard Photo" ? "300px" : "770px",
                    },
                    height: {
                      lg: level === "Standard Photo" ? "250px" : "500px",
                      xl: level === "Standard Photo" ? "300px" : "550px",
                      xxl: level === "Standard Photo" ? "300px" : "620px",
                    },
                    justifyContent: "center",
                    borderRadius: "8px",
                    padding: "2%",
                  }}
                >
                  <ImageSwiperIndex images={images} level={level} />
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default ModalImage;
