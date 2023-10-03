import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpdateDocumentModal from "../../Documents/UpdateDocumentModal";
import NDAuploadModal from "../../Nda/NDAuploadModal";
import ProgressBarForDashboard from "../ProgressBarForDashboard";
import dashboardStyle from "./dashboardStyle";

const DashboardDocument = () => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [openModalNid, setOpenModalNid] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useSelector((state) => state);
  const open = Boolean(anchorEl);
  const { buttonStyle } = dashboardStyle();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemenu = () => {
    setAnchorEl(null);
  };

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
      <Box className="projectBox">
        {/* TODO Filter functionality need to be checked for last page  */}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "8px",
            backgroundColor: "neutral.N000",
          }}
        >
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
                <Box sx={{ backgroundColor: "primary.B008", borderRadius: "8px", padding: "2%" }}>
                  <Grid xs={12}>
                    <Typography variant="wpf_h6_semiBold" sx={{ color: "primary.B300" }}>
                      NDA Upload
                    </Typography>
                    <br />
                    <Typography variant="wpf_h7_regular" sx={{ color: "primary.B300" }}>
                      Please download, sign and upload the NDA form.
                    </Typography>
                  </Grid>
                  <Grid xs={12} sx={{ paddingTop: "2%" }}>
                    {!user.user.isNDASigned || user.user.isNDAApproved === "rejected" ? (
                      <Button sx={buttonStyle} onClick={() => handleNDAModal()}>
                        <i className="ri-upload-2-line"></i>
                        <Typography variant="body" sx={{ ml: 1, textTransform: "none", fontWeight: "500" }}>
                          Upload NDA
                        </Typography>
                      </Button>
                    ) : (
                      <Button sx={buttonStyle} disabled onClick={() => handleNDAModal()}>
                        <i className="ri-upload-2-line"></i>
                        <Typography variant="body" sx={{ ml: 1, textTransform: "none", fontWeight: "500" }}>
                          Upload NDA
                        </Typography>
                      </Button>
                    )}
                  </Grid>
                </Box>
              </Grid>

              <Grid xs={6} sx={{ backgroundColor: "", paddingRight: "0%" }}>
                <Box sx={{ backgroundColor: "primary.B008", borderRadius: "8px", padding: "2%" }}>
                  <Grid xs={12}>
                    <Typography variant="wpf_h6_semiBold" sx={{ color: "primary.B300" }}>
                      Document Upload
                    </Typography>
                    <br />
                    <Typography variant="wpf_h7_regular" sx={{ color: "primary.B300" }}>
                      Please attach a scanned image of your NID or passport and carefully fill in the number.
                    </Typography>
                  </Grid>
                  <Grid xs={12} sx={{ paddingTop: "2%" }}>
                    {user.user.isDocumentsSubmitted === "submitted" || user.user.isDocumentsSubmitted === "approved" ? (
                      <>
                        <Button sx={buttonStyle} disabled onClick={() => handleNDAModalNid()}>
                          <i className="ri-upload-2-line"></i>
                          <Typography variant="body" sx={{ ml: 1, textTransform: "none", fontWeight: "500" }}>
                            Upload Document
                          </Typography>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button sx={buttonStyle} onClick={() => handleNDAModalNid()}>
                          <i className="ri-upload-2-line"></i>
                          <Typography variant="body" sx={{ ml: 1, textTransform: "none", fontWeight: "500" }}>
                            Upload Document
                          </Typography>
                        </Button>
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
                <Alert
                  severity="warning"
                  sx={{
                    border: "1px solid #F2A200",
                    color: "warning.400",
                    backgroundColor: "warning.100",
                    borderRadius: "6px",
                  }}
                  icon={<InfoOutlinedIcon />}
                >
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
        </Box>
      </Box>

      <NDAuploadModal openModal={openModal} handleClose={handleClose} />
      <UpdateDocumentModal openModal={openModalNid} handleClose={handleCloseNid} />
    </>
  );
};

export default DashboardDocument;
