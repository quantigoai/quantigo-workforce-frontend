import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import ModalImage from "./ModalImage";
const styleBtn = {
  width: "100%",
  textTransform: "none",
  backgroundColor: "primary.B008",
  color: "#2E58FF",
  borderRadius: "8px",
  border: "1px solid #F4F7FE",
  "&:hover": {
    backgroundColor: "primary.B008",
    color: "#2E58FF",
    border: "1px solid #2E58FF",
  },
};
const ImageShowInModal = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleDetailNid = () => {
    setOpenModal(true);
  };
  const handleClose = () => setOpenModal(false);
  return (
    <>
      <Grid>
        <Grid item xs={6} sx={{ paddingRight: "2%" }}>
          <Button
            sx={styleBtn}
            // disabled={isDisabled}
            onClick={() => handleDetailNid()}
          >
            <Typography
              variant="wpf_p3_medium"
            //   color={user.documentNo ? "primary.B200" : ""}
            //   sx={{ paddingRight: "4%", filter: isDisabled ? "grayscale(100%) opacity(50%)" : "" }}
            >
              Document
            </Typography>
            {/* <img
              style={{
                filter: "grayscale(100%) opacity(50%)"
              }}
              src={ViewIcon}
            /> */}
          </Button>
        </Grid>
      </Grid>
      <ModalImage openModal={openModal} handleClose={handleClose} />
    </>
  );
};

export default ImageShowInModal;
