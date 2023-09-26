import { Box, Grid, Modal, Paper, Skeleton, Typography } from "@mui/material";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 10,
//   p: 1,
// };
const style = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  boxShadow: '0px 0px 10px 2px black',
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
// const paperStyle = { width: 700, height: "100%" };
const NidDetails = ({ openModal, handleClose, documentImage, documentsNo, documentsType, userName }) => {
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Grid container>
            <Paper elevation={5} sx={{}}>
              {/* <Grid
                container
                sx={{
                  justifyContent: "center",
                  color: "#090080",
                  paddingBottom: "2%",
                }}>
                <Typography variant="h4">Document</Typography>
              </Grid>
              <Grid
                container
                sx={{
                  justifyContent: "center",
                }}>
                <Grid
                  item
                  xs={5}
                  sx={{
                    paddingLeft: "25%",
                  }}>
                  <Typography variant="h5">Name </Typography>
                </Grid>

                <Grid
                  item
                  xs={7}
                  sx={{
                    paddingLeft: "2%",
                  }}>
                  <Typography variant="h5">{userName}</Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  justifyContent: "center",
                }}>
                <Grid
                  item
                  xs={5}
                  sx={{
                    paddingLeft: "25%",
                  }}>
                  <Typography variant="h5">Type </Typography>
                </Grid>

                <Grid
                  item
                  xs={7}
                  sx={{
                    paddingLeft: "2%",
                  }}>
                  <Typography variant="h5">{capitalizeFirstLetter(documentsType)}</Typography>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{
                  justifyContent: "center",
                }}>
                <Grid
                  item
                  xs={5}
                  sx={{
                    paddingLeft: "25%",
                  }}>
                  <Typography variant="h5"> NO </Typography>
                </Grid>

                <Grid
                  item
                  xs={7}
                  sx={{
                    paddingLeft: "2%",
                  }}>
                  <Typography variant="h5">{documentsNo}</Typography>
                </Grid>
              </Grid> */}

              <Grid
                container
                sx={{
                  justifyContent: "center",
                  // paddingBottom: "1%",
                  // paddingTop: "2%",
                  padding: "3%",
                }}>
                {/* <img alt="img"  src={'data:image/jpeg;base64,' + window.btoa(documentImage)} /> */}
                {documentImage?.length === 0 ? (
                  <>
                    {" "}
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
                      }}
                    />
                  </>
                )}
              </Grid>
            </Paper>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default NidDetails;
