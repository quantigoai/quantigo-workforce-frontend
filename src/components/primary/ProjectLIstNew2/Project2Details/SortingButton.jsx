import { Box, Button, Typography } from "@mui/material";

const SortingButton = ({ filteredCol, col }) => {
  const val = Object.keys(filteredCol);

  return (
    <Button
      sx={{
        display: "flex",
        minWidth: "15px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        ":hover": {
          backgroundColor: "rgba(242, 246, 252, 1)",
          color: "black",
        },
      }}
    >
      <Box>
        <Typography
          sx={{
            lineHeight: 0,
            fontSize: "15px",
            mt: 0.3,
            color: val.includes(col) ? (filteredCol[col] === "asc" ? "blue" : "#7B98BA") : "#7B98BA",
          }}
        >
          <i className="ri-arrow-up-s-fill"></i>
        </Typography>
        <Typography
          sx={{
            lineHeight: 0,
            mt: 1,
            fontSize: "15px",
            color: val.includes(col) ? (filteredCol[col] === "desc" ? "blue" : "#7B98BA") : "#7B98BA",
          }}
        >
          <i className="ri-arrow-down-s-fill"></i>
        </Typography>
      </Box>
    </Button>
  );
};

export default SortingButton;
