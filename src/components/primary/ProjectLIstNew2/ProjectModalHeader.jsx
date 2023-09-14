import { Box, Button, Grid, Typography } from "@mui/material";
import u_multiply from "../../../assets/images/crosIcon.svg";
import CheckINOutButton from "./ProjectDetailsFull/CheckInOutButton";

const ProjectModalHeader = ({
  handleCreateProjectClose,
  modalTitle,
  isPageDetail,
  isDisable,
  checkOutDisable,
  handleCheckInButton,
  handleCheckOutButton,
}) => {
  return (
    <Box
      sx={{
        paddingTop: "2%",
        width: "100%",
        background: isPageDetail ? "white" : "#F2F6FC",
        borderRadius: "8px",
      }}
    >
      <Grid
        container
        sx={{
          paddingBottom: "1%",
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
        }}
      >
        <Grid item xs={isPageDetail ? 10 : 11} sx={{ paddingLeft: "3%" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#3C4D6B",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            {modalTitle}
          </Typography>
          {isPageDetail && (
            <Typography
              variant="div"
              sx={{
                color: "#091E42",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Available for you
            </Typography>
          )}
        </Grid>
        {isPageDetail ? (
          <Grid item xs={2} sx={{ justifyContent: "right", paddingRight: "2%" }}>
            <CheckINOutButton
              handleCheckInButton={handleCheckInButton}
              handleCheckOutButton={handleCheckOutButton}
              isDisable={isDisable}
              checkOutDisable={checkOutDisable}
              fromDetails={"true"}
            />
          </Grid>
        ) : (
          <Grid item xs={1} sx={{ justifyContent: "right", paddingRight: "2%" }}>
            <Button onClick={handleCreateProjectClose}>
              <img style={{ width: "20px" }} alt="cross" src={u_multiply} />
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ProjectModalHeader;
