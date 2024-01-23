import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import u_multiply from "../../../assets/images/crosIcon.svg";

const ProjectModalHeader = ({ handleCreateProjectClose, modalTitle, isPageDetail }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <Box
      sx={{
        padding: "16px",
        width: "100%",
        // backgroundColor:"#F2F6FC",
        backgroundColor: "neutral.N400",
        // background: isLightTheme ? (isPageDetail ? "white" : "#F2F6FC") : isPageDetail ? "#1E1E1E" : "#2A2A2A",
        borderRadius: "8px 8px 0px 0px",
        borderBottom: "1px solid #EBF0F5",
      }}
    >
      <Grid
        container
        sx={{
          // paddingBottom: "1%",
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          // paddingLeft: "3%",
          // paddingRight: "2%",
          // backgroundColor:"#F2F6FC"
          backgroundColor: "neutral.N400",
        }}
      >
        <Grid item xs={isPageDetail ? 10 : 11} sx={{ backgroundColor: "" }}>
          <Typography
            variant="wpf_p2_semiBold"
            sx={{
              color: isLightTheme ? "#3C4D6B" : "#FFFFFF",
            }}
          >
            {modalTitle}
          </Typography>
          {isPageDetail && (
            <Typography
              variant="div"
              sx={{
                color: isLightTheme ? "#091E42" : "#FFFFFF",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Available for you
            </Typography>
          )}
        </Grid>

        <Grid item xs={1} sx={{ backgroundColor: "" }}>
          <Button onClick={handleCreateProjectClose} sx={{ justifyContent: "", backgroundColor: "" }}>
            <img style={{ width: "15px" }} alt="cross" src={u_multiply} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectModalHeader;
