import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  textAlign: "center",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
const MainModal = ({
  open,
  handleDelete,
  params,
  handleClose,
  isEdit,
  handleClick,
}) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "42%",
              width: "32px",
              textAlign: "center",
              fontSize: "32px",
              padding: "16px",
              background: isEdit ? "#FFAB00" : "#FF4757",
              borderRadius: "80px",
              color: "white",
            }}
          >
            {" "}
            {isEdit ? (
              <i className="ri-alert-line"></i>
            ) : (
              <i className="ri-delete-bin-6-line"></i>
            )}
          </Box>
          {isEdit ? (
            <Typography
              sx={{ mt: "28%" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Change Status
            </Typography>
          ) : (
            <Typography
              sx={{ mt: "28%" }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Delete Project
            </Typography>
          )}
          {isEdit ? (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Are you sure you want to change your Project status?
            </Typography>
          ) : (
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Are you sure you want to delete your Project? If you delete your
              project, you will lose all the charter information
            </Typography>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            {
              <Button
                sx={{
                  textTransform: "none",
                  backgroundColor: "#FFF0F2",
                  borderRadius: "10px",
                  border: "1px solid #FFF0F2",
                  color: "black",
                  padding: " 10px 16px",
                  width: "150px",
                  "&:hover": {
                    border: "1px solid #FF4757",
                    backgroundColor: "#FFF0F2",
                  },
                }}
                onClick={handleClose}
                variant="contained"
              >
                {isEdit ? "no" : "keep"}
              </Button>
            }
            <Button
              onClick={() => {
                isEdit ? handleClick(params) : handleDelete(params);
              }}
              sx={{
                textTransform: "none",
                background: isEdit ? "#FFAB00" : "#FF4757",
                borderRadius: "10px",
                width: "150px",
                ":hover": {
                  backgroundColor: isEdit ? "#F2A200" : "#F53142",
                },
              }}
              variant="contained"
            >
              {isEdit ? "Yes" : "Delete"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default MainModal;
