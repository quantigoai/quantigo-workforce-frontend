import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const PaginationTable = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    pageSize: 10,
  });
  const totalData = 190;
  const totalPageNeeded = Math.ceil(totalData / pagination.pageSize);

  const totalItems = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const itemPerPage = 5;
  const totalPages = Math.ceil(totalItems.length / itemPerPage);

  const [pageNumber, setPageNumber] = useState(0);

  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(true);
  const [selectedPage, setSelectedPage] = useState(0);

  const handleJumpToPage = (jumpPageNumber) => {
    if (jumpPageNumber >= 0 && jumpPageNumber < totalPages) {
      setPageNumber(jumpPageNumber);
    }
  };
  const startIdx = pageNumber * itemPerPage;
  const endIdx = Math.min(startIdx + itemPerPage, totalPageNeeded);

  const visiblePageNumbers = Array.from(
    { length: endIdx - startIdx },
    (_, index) => startIdx + index
  );

  useEffect(() => {
    setSelectedPage(pageNumber * itemPerPage);
    setPagination({ ...pagination, page: pageNumber * itemPerPage });
    setDisablePrev(pageNumber === 0);
    setDisableNext(pageNumber === totalPages - 1);
  }, [pageNumber, totalPageNeeded]);

  const handleNextPage = () => {
    if (pageNumber < totalPages - 1) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    }
  };
  const paginationOptions = [
    { value: 10, label: 10 },
    { value: 20, label: 20 },
    { value: 30, label: 30 },
  ];

  const handleClick = (e) => {
    const newPage = parseInt(e.target.value);
    setSelectedPage(newPage);
    setPagination({ ...pagination, page: newPage });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "end",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "16px", width: "200px" }} variant="p">
            Items per page
          </Typography>
          <Select
            id="demo-simple-select"
            value={pagination.pageSize}
            onChange={handleClick}
            labelId="demo-simple-select-label"
            sx={{ width: "100px", border: "1px solid #b9b9b9" }}
            name="limit"
          >
            {paginationOptions.map((p) => (
              <MenuItem key={p.value} value={p.value}>
                {p.label}
              </MenuItem>
            ))}
          </Select>
        </Stack>
        <Box sx={{ display: "flex" }}>
          <Button
            disabled={disablePrev}
            sx={{ minWidth: "30px" }}
            onClick={handlePrevPage}
            variant="none"
          >
            <i className="ri-arrow-left-s-line"></i>
          </Button>
          <Box>
            {visiblePageNumbers.map((pageNumberToShow) => (
              <Button
                onClick={() => handleJumpToPage(pageNumberToShow)}
                key={pageNumberToShow}
                name="page"
                variant="small"
                sx={{
                  minWidth: "40px",
                  fontSize: "16px",
                  padding: "10px",
                  color:
                    selectedPage === pageNumberToShow ? "white" : "#62728F",
                  backgroundColor:
                    selectedPage === pageNumberToShow
                      ? "#2E58FF"
                      : "transparent",
                  "&:focus": {
                    color: "white",
                    backgroundColor: "#2E58FF",
                  },
                }}
              >
                {pageNumberToShow + 1}
              </Button>
            ))}
          </Box>
          <Button
            sx={{ minWidth: "40px" }}
            disabled={disableNext}
            variant="none"
            onClick={handleNextPage}
          >
            <i className="ri-arrow-right-s-line"></i>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PaginationTable;
