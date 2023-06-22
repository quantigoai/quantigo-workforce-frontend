import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  p: 0,
};

const ImageModal = ({ Img }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <img
        width="500"
        src={Img}
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {" "}
          <img width="950" height="500" src={Img} onClick={handleOpen} />
        </Box>
      </Modal>
    </>
  );
};

export default ImageModal;
