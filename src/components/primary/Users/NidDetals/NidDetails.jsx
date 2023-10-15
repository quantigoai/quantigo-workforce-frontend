import { Box, Grid, IconButton, Modal, Paper, Skeleton, Stack, Typography } from "@mui/material";
import u_multiply from "../../../../assets/images/crosIcon.svg"; // Import your close (cross) button icon here

const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
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
  let drawerStatus = (status) => {
    switch (status) {
      case "passport":
        return "Passport";
      case "NID":
        return "NID";

      default:
        return status;
    }
  };

  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                    <img style={{}} alt="cross" src={u_multiply} />
                  </IconButton>
                </Grid>

                <Box
                  // container
                  sx={{
                    width: "600px",
                    justifyContent: "center",
                    borderRadius: "10px",
                    padding: "2%",
                  }}
                >
                  {documentImage?.length === 0 ? (
                    <>
                      <Box sx={{ width: "100%", height: "100%", padding: "1%" }}>
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                        <Skeleton />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                        <Skeleton animation={"wave"} />
                        <Skeleton animation="wave" />
                        <Skeleton animation={false} />
                      </Box>
                    </>
                  ) : (
                    <Box
                      sx={{
                        padding: "1%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          alignConyent: "center",
                          padding: "10px",
                          backgroundColor: "neutral.N600",
                          borderRadius: "10px",
                        }}
                      >
                        <Stack direction="row">
                          <Typography variant="wpf_p2_semiBold" sx={{ color: "neutral.N300" }}>
                            Document Type :
                          </Typography>

                          <Typography variant="wpf_p2_semiBold" sx={{ color: "primary.B200", marginLeft: "6px" }}>
                            {" "}
                            {drawerStatus(documentsType)}
                          </Typography>
                        </Stack>
                        <Stack direction="row" sx={{ justifyContent: "center" }}>
                          <Typography variant="wpf_p2_semiBold" sx={{ color: "neutral.N300" }}>
                            Document No :{" "}
                          </Typography>
                          <Typography variant="wpf_p2_semiBold" sx={{ color: "neutral.N300", marginLeft: "6px" }}>
                            {documentsNo}
                          </Typography>
                        </Stack>
                      </Box>
                      <Box sx={{ paddingTop: "2%" }}>
                        <img
                          src={`data:image/jpeg;base64,${documentImage}`}
                          style={{
                            height: documentsType === "NID" ? 300 : 500,
                            width: "100%",
                            borderRadius: "10px",
                          }}
                        />
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default NidDetails;
