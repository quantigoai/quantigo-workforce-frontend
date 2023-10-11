import { Box, Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import u_multiply from "../../../assets/images/crosIcon.svg";

const ProjectModalHeader = ({ handleCreateProjectClose, modalTitle, isPageDetail }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  return (
    <Box
      sx={{
        paddingTop: "20px",
        width: "100%",
        backgroundColor: "neutral.N000",
        // background: isLightTheme ? (isPageDetail ? "white" : "#F2F6FC") : isPageDetail ? "#1E1E1E" : "#2A2A2A",
        borderRadius: "8px",
        borderBottom: "1px solid #EBF0F5",
      }}
    >
      <Grid
        container
        sx={{
          paddingBottom: "1%",
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          paddingLeft: "3%",
          paddingRight: "2%",
        }}
      >
        <Grid item xs={isPageDetail ? 10 : 11}>
          <Typography
            variant="h6"
            sx={{
              color: isLightTheme ? "#3C4D6B" : "#FFFFFF",
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
                color: isLightTheme ? "#091E42" : "#FFFFFF",
                fontSize: "12px",
                fontWeight: "400",
              }}
            >
              Available for you
            </Typography>
          )}
        </Grid>

        <Grid item xs={1} sx={{ justifyContent: "right" }}>
          <Button onClick={handleCreateProjectClose}>
            <img style={{ width: "20px" }} alt="cross" src={u_multiply} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectModalHeader;
