import { Alert, Box, Button, Grid, Paper, Typography, styled } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateDocumentModal from "../../Documents/UpdateDocumentModal";
import NDAuploadModal from "../../Nda/NDAuploadModal";
import ProgressBarForDashboard from "../ProgressBarForDashboard";
const ButtonStyle = styled(Button)({
  backgroundColor: "#FFFFFF",
  color: "#2E58FF",
  // fontSize: "14px",
  // fontWeight: "500",
  borderRadius: "6px",
  border: "1px solid #E6ECF5",
  height: "35px",
  // width: "25%",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
  // mr: 1,
});
const DashboardDocument = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [openModalNid, setOpenModalNid] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useSelector((state) => state);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemenu = () => {
    setAnchorEl(null);
  };

  const paperstyle = {
    backgroundColor: "#FFFFFF",
    // padding: "2%",
    // width: "100%",
    height: "100%",
    borderRadius: "8px",
  };

  const teamicondiv = { paddingLeft: "1%", paddingTop: "0%" };

  const handleNDAModal = () => {
    setOpenModal(true);
  };
  const handleClose = () => setOpenModal(false);

  const handleNDAModalNid = () => {
    setOpenModalNid(true);
  };
  const handleCloseNid = () => setOpenModalNid(false);
  return (
    <>
      <Box>
        <Paper elevation={0} sx={paperstyle}>
          <Box sx={{ borderBottom: "1px solid #F2F4F7" }}>
            <Grid container sx={{ justifyContent: "space-between", padding: "1%" }}>
              <Grid xs={8}>
                <Typography variant="wpf_h6_semiBold">Profile Completion</Typography>
                <br />
                <Typography variant="wpf_p4_regular">
                  Please update your profile to get full access to the account
                </Typography>
              </Grid>
              <Grid xs={4}>
                <Grid container sx={{ justifyContent: "right" }}>
                  <ProgressBarForDashboard />
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{}}>
            <Grid container sx={{ padding: "1%" }}>
              <Grid xs={6} sx={{ backgroundColor: "", paddingRight: "1%" }}>
                <Box sx={{ backgroundColor: "#F2F4F7", borderRadius: "8px", padding: "2%" }}>
                  <Grid xs={12}>
                    <Typography variant="wpf_h6_semiBold" sx={{ color: "#090080" }}>
                      NDA Upload
                    </Typography>
                    <br />
                    <Typography variant="wpf_h7_regular" sx={{ color: "#090080" }}>
                      Please download, sign and upload the NDA form.
                    </Typography>
                  </Grid>
                  <Grid xs={12} sx={{ paddingTop: "2%" }}>
                    {!user.user.isNDASigned || user.user.isNDAApproved === "rejected" ? (
                      <ButtonStyle onClick={() => handleNDAModal()}>
                        <i className="ri-upload-2-line"></i>
                        <Typography variant="body" sx={{ ml: 1, textTransform: "none", fontWeight: "500" }}>
                          Upload NDA
                        </Typography>
                      </ButtonStyle>
                    ) : (
                      <ButtonStyle disabled onClick={() => handleNDAModal()}>
                        <i className="ri-upload-2-line"></i>
                        <Typography variant="body" sx={{ ml: 1, textTransform: "none", fontWeight: "500" }}>
                          Upload NDA
                        </Typography>
                      </ButtonStyle>
                    )}
                  </Grid>
                </Box>
              </Grid>
              <Grid xs={6} sx={{ backgroundColor: "", paddingRight: "0%" }}>
                <Box sx={{ backgroundColor: "#F2F4F7", borderRadius: "8px", padding: "2%" }}>
                  <Grid xs={12}>
                    <Typography variant="wpf_h6_semiBold" sx={{ color: "#090080" }}>
                      Document Upload
                    </Typography>
                    <br />
                    <Typography variant="wpf_h7_regular" sx={{ color: "#090080" }}>
                      Please attach a scanned image of your NID or passport and carefully fill in the number.
                    </Typography>
                  </Grid>
                  <Grid xs={12} sx={{ paddingTop: "2%" }}>
                    {user.user.isDocumentsSubmitted === "submitted" || user.user.isDocumentsSubmitted === "approved" ? (
                      <>
                        <ButtonStyle
                          disabled
                          onClick={() => handleNDAModalNid()}
                          // onClick={handleClick}
                        >
                          <i className="ri-upload-2-line"></i>
                          <Typography variant="body" sx={{ ml: 1, textTransform: "none", fontWeight: "500" }}>
                            Upload Document
                          </Typography>
                        </ButtonStyle>
                      </>
                    ) : (
                      <>
                        <ButtonStyle
                          // variant="contained"
                          onClick={() => handleNDAModalNid()}
                          // onClick={handleClick}
                        >
                          <i className="ri-upload-2-line"></i>
                          <Typography variant="body" sx={{ ml: 1, textTransform: "none", fontWeight: "500" }}>
                            Upload Document
                          </Typography>
                        </ButtonStyle>
                      </>
                    )}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ paddingLeft: "1%", paddingRight: "1%", paddingBottom: "1%" }}>
            {user.user.isDocumentsSubmitted === "rejected" ? (
              <>
                {" "}
                <Alert
                  severity="warning"
                  sx={{
                    border: "1px solid #F2A200",
                    color: "#F2A200",
                    backgroundColor: "#FFF8EB",
                    borderRadius: "6px",
                    // height:"45px"
                  }}
                  icon={<InfoOutlinedIcon />}>
                  Rejection Cause: {user.user.rejectionCause}
                </Alert>
                {/* <Alert severity="error">Rejection Cause: {user.user.rejectionCause}</Alert> */}
              </>
            ) : user.user.isDocumentsSubmitted === "submitted" ? (
              <>
                <Alert severity="info"> Waiting for Admin approval</Alert>
              </>
            ) : (
              <></>
            )}
          </Box>
        </Paper>
      </Box>

      <NDAuploadModal openModal={openModal} handleClose={handleClose} />
      <UpdateDocumentModal openModal={openModalNid} handleClose={handleCloseNid} />
    </>
    // <>
    //   <Grid container style={teamicondiv}>
    //     <Grid xs={12}>
    //       <Box>
    //         <Paper elevation={0} style={paperstyle}>
    //           <Grid container>
    //             <Grid xs={12}>
    //               <Typography variant="h4" sx={{ color: "#090080" }}>
    //                 Profile Completion
    //               </Typography>
    //             </Grid>
    //             <Grid xs={12}>
    //               <Typography variant="caption" sx={{ color: "#090080" }}>
    //                 Please update your profile to get full access to the account
    //               </Typography>
    //             </Grid>
    //           </Grid>
    //           <Grid
    //             container
    //             spacing={2}
    //             sx={{ paddingTop: "5%", paddingLeft: "2%" }}>
    //             <Grid xs={3}>
    //               {/* <img src={circularpro} /> */}
    //               <ProgressBarForDashboard />
    //             </Grid>
    //             <Grid
    //               xs={4.5}
    //               sx={{
    //                 border: "1px solid #DADCDF",
    //                 borderRadius: "12px",
    //               }}>
    //               <Grid container>
    //                 <Typography
    //                   variant="h7"
    //                   sx={{
    //                     color: "#090080",
    //                     paddingTop: "3%",
    //                     paddingLeft: "3%",
    //                   }}>
    //                   NDA Upload
    //                 </Typography>
    //               </Grid>
    //               <Grid container>
    //                 <Typography
    //                   variant="caption"
    //                   sx={{ color: "#969CAF", paddingLeft: "3%" }}>
    //                   Please download, sign and upload the NDA form
    //                 </Typography>
    //               </Grid>
    //               <Grid
    //                 container
    //                 xs={12}
    //                 sx={{
    //                   justifyContent: "right",
    //                   paddingRight: "5%",
    //                   paddingTop: "5%",
    //                 }}>
    //                 {!user.user.isNDASigned ||
    //                 user.user.isNDAApproved === "rejected" ? (
    //                   <Button
    //                     sx={{
    //                       border: "1px solid #2D58FF",
    //                       borderRadius: "2px",
    //                       color: "#2D58FF",
    //                     }}
    //                     onClick={() => handleNDAModal()}>
    //                     UPLOAD NDA
    //                   </Button>
    //                 ) : (
    //                   <Button
    //                     disabled
    //                     sx={{
    //                       border: "1px solid #2D58FF",
    //                       borderRadius: "2px",
    //                       color: "#2D58FF",
    //                     }}
    //                     onClick={() => handleNDAModal()}>
    //                     UPLOADED
    //                   </Button>
    //                 )}
    //               </Grid>
    //             </Grid>
    //             <Grid xs={0.5}></Grid>
    //             <Grid
    //               xs={4}
    //               sx={{
    //                 border: "1px solid #DADCDF",
    //                 borderRadius: "12px",
    //               }}>
    //               <Grid container>
    //                 <Typography
    //                   variant="h7"
    //                   sx={{
    //                     color: "#090080",
    //                     paddingTop: "3%",
    //                     paddingLeft: "3%",
    //                   }}>
    //                   Document Upload
    //                 </Typography>
    //               </Grid>
    //               <Grid container>
    //                 <Typography
    //                   variant="caption"
    //                   sx={{ color: "#969CAF", paddingLeft: "3%" }}>
    //                   Please attach your NID/passport scanned image and
    //                   carefully fillup the number
    //                 </Typography>
    //               </Grid>
    //               <Grid
    //                 container
    //                 xs={12}
    //                 sx={{
    //                   justifyContent: "right",
    //                   paddingRight: "5%",
    //                   paddingTop: "5%",
    //                 }}>
    //                 {user.user.isDocumentsSubmitted === "submitted" ||
    //                 user.user.isDocumentsSubmitted === "approved" ? (
    //                   <>
    //                     <Button
    //                       disabled
    //                       sx={{
    //                         border: "1px solid #2D58FF",
    //                         borderRadius: "2px",
    //                         color: "#2D58FF",
    //                       }}
    //                       onClick={() => handleNDAModalNid()}
    //                       // onClick={handleClick}
    //                     >
    //                       UPLOADED
    //                     </Button>
    //                   </>
    //                 ) : (
    //                   <>
    //                     <Button
    //                       sx={{
    //                         border: "1px solid #2D58FF",
    //                         borderRadius: "2px",
    //                         color: "#2D58FF",
    //                       }}
    //                       onClick={() => handleNDAModalNid()}
    //                       // onClick={handleClick}
    //                     >
    //                       UPLOAD Document
    //                     </Button>
    //                   </>
    //                 )}

    //                 {/* <Menu
    //                   id="demo-positioned-menu"
    //                   aria-labelledby="demo-positioned-button"
    //                   anchorEl={anchorEl}
    //                   open={open}
    //                   onClose={handleClosemenu}
    //                   anchorOrigin={{
    //                     vertical: "top",
    //                     horizontal: "left",
    //                   }}
    //                   transformOrigin={{
    //                     vertical: "top",
    //                     horizontal: "left",
    //                   }}>
    //                   <MenuItem onClick={handleClosemenu}>NID</MenuItem>
    //                   <MenuItem onClick={handleClosemenu}>Passport</MenuItem>
    //                 </Menu> */}
    //               </Grid>
    //             </Grid>
    //           </Grid>

    //           {}

    //           {user.user.isDocumentsSubmitted === "rejected" ? (
    //             <>
    //               <Grid
    //                 container
    //                 sx={{ justifyContent: "center", paddingTop: "10%" }}>
    //                 <Typography variant="h4" sx={{ color: "#090080" }}>
    //                   Rejected
    //                 </Typography>
    //               </Grid>
    //               <Grid
    //                 container
    //                 sx={{ justifyContent: "center", paddingTop: "1%" }}>
    //                 <Typography variant="h4" sx={{ color: "#090080" }}>
    //                   Rejection Cause: {user.user.rejectionCause}
    //                 </Typography>
    //               </Grid>
    //               <Grid
    //                 container
    //                 sx={{ justifyContent: "center", paddingTop: "5%" }}>
    //                 <Typography variant="h6" sx={{ color: "#090080" }}>
    //                   Please upload again
    //                 </Typography>
    //               </Grid>
    //             </>
    //           ) : user.user.isDocumentsSubmitted === "submitted" ? (
    //             // &&
    //             //   user.isNDASigned &&
    //             //   (user.user.isNDASigned ||
    //             //   user.user.isDocumentsSubmitted)
    //             <>
    //               <Grid
    //                 container
    //                 sx={{ justifyContent: "center", paddingTop: "7%" }}>
    //                 <Typography variant="h4" sx={{ color: "#090080" }}>
    //                   Waiting for Admin approval
    //                 </Typography>
    //               </Grid>
    //             </>
    //           ) : (
    //             <>
    //               <Grid container></Grid>
    //             </>
    //           )}
    //         </Paper>
    //       </Box>
    //     </Grid>
    //   </Grid>
    //   <NDAuploadModal openModal={openModal} handleClose={handleClose} />
    //   <UpdateDocumentModal
    //     openModal={openModalNid}
    //     handleClose={handleCloseNid}
    //   />
    // </>
  );
};

export default DashboardDocument;
