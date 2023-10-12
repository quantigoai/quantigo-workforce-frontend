import {Box, Button, Typography} from "@mui/material";

const SortingButton = ({ filteredCol, column }) => {
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
          backgroundColor: "transparent",
          color: "black",
        },
      }}
    >
      <Box>
        <Typography
          sx={{
            lineHeight: 0,
            fontSize: "15px",
          }}
          color={val.includes(column) ? (filteredCol[column] === "asc" ? "blue" : "#7B98BA") : "#7B98BA"}
        >
          <i className="ri-arrow-up-s-fill"></i>
        </Typography>
        <Typography
          sx={{
            lineHeight: 0,
            mt: 1,
            fontSize: "15px",
          }}
          color={val.includes(column) ? (filteredCol[column] === "desc" ? "blue" : "#7B98BA") : "#7B98BA"}
        >
          <i className="ri-arrow-down-s-fill"></i>
        </Typography>
      </Box>
    </Button>
  );
};

export default SortingButton;
