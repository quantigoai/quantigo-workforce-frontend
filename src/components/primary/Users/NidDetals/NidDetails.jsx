import {Box, Grid, Modal, Paper, Skeleton, Typography} from "@mui/material";
import React from "react";
import {capitalizeFirstLetter} from "../../../../helper/capitalizeFirstWord";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //    paddingLeft :"20%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 10,
  p: 1,
};

const paperstyle = { width: 700, height: "100%" };
const NidDetails = ({
  userId,
  openModal,
  handleClose,
  documentImage,
  documentsNo,
  documentsType,
  userName,
}) => {
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Grid container>
            <Paper elevation={5} style={paperstyle} sx={{}}>
              <Grid
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
                  <Typography variant="h5">
                    {capitalizeFirstLetter(documentsType)}
                  </Typography>
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
              </Grid>

              <Grid
                container
                sx={{
                  justifyContent: "center",
                  paddingBottom: "1%",
                  paddingTop: "2%",
                }}>
                {/* <img alt="img"  src={'data:image/jpeg;base64,' + window.btoa(documentImage)} /> */}
                {documentImage.length === 0 ? (
                  <>
                    {" "}
                    <Box sx={{ width: 300 }}>
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
                        width: 400,
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
