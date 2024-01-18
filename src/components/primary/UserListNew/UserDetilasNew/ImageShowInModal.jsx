import {Button, Grid, Typography} from "@mui/material";
import React from "react";
import ModalImage from "./ModalImage";
import ViewIcon from "../../../../assets/images/dashboardIcon/ViewIcon.svg";

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
const ImageShowInModal = ({ images, level }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleDetailNid = () => {
    setOpenModal(true);
  };
  const handleClose = () => setOpenModal(false);
  return (
    <>
      <Grid>
        <Grid item xs={12} sx={{ paddingRight: "0%" }}>
          <Button sx={styleBtn} disabled={images.length === 0 ? true : false} onClick={() => handleDetailNid()}>
            <Typography
              variant="wpf_p3_medium"
              color={images.length != 0 ? "primary.B200" : ""}
              sx={{ paddingRight: "4%", filter: images.length === 0 ? "grayscale(100%) opacity(50%)" : "" }}
            >
              {level}
            </Typography>
            <img
              style={{
                filter: images.length === 0 ? "grayscale(100%) opacity(50%)" : "",
              }}
              src={ViewIcon}
            />
          </Button>
        </Grid>
      </Grid>
        <ModalImage openModal={openModal} handleClose={handleClose} images={images} level={level}/>
    </>
  );
};

export default ImageShowInModal;
