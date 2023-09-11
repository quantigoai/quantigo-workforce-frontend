import { Box, Button, Typography } from "@mui/material";

const SortingButton = ({ handleCount, filteredCol, col }) => {
  const val = Object.keys(filteredCol);

  return (
    <Button
      onClick={() => handleCount()}
      sx={{
        display: "flex",
        minWidth: "25px",
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
            fontSize: "20px",
            color: val.includes(col) ? (filteredCol[col] === "asc" ? "blue" : "#7B98BA") : "#7B98BA",
          }}
        >
          <i className="ri-arrow-up-s-fill"></i>
        </Typography>
        <Typography
          sx={{
            lineHeight: 0,
            mt: 1.5,
            fontSize: "20px",
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
