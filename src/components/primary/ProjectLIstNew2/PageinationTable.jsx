import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const PageinationTable = () => {
  const totalItems = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const itemPerPage = 3;
  const totalPages = Math.ceil(totalItems.length / itemPerPage);

  const [pageNumber, setPageNumber] = useState([]);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const pageNumberMain = [...Array(totalPages / 2).keys()];
    setPageNumber(pageNumberMain);
  }, []);
  const startPage = totalPages / 2;

  const handleNextPage = () => {
    const pageNumberMain = [...Array(totalPages - startPage).keys()].map(
      (i) => i + startPage
    );
    setPageNumber(pageNumberMain);
    setDisable(true);
  };

  const handlePrevPage = () => {
    const pageNumberMain = [...Array(totalPages / 2).keys()];
    setPageNumber(pageNumberMain);
    setDisable(false);
  };

  return (
    <>
      <Button sx={{ minWidth: "40px" }} onClick={handlePrevPage} variant="none">
        {" "}
        <i className="ri-arrow-left-s-line"></i>
      </Button>
      <Box>
        {pageNumber.map((page) => (
          <>
            <Button
              variant="small"
              sx={{
                minWidth: "40px",
                fontSize: "16px",
                padding: "10px",

                color: "#62728F",

                "&:active": {
                  boxShadow: "red",
                  backgroundColor: "red",
                },
                "&:focus": {
                  color: "white",
                  backgroundColor: "#2E58FF",
                },
              }}
              key={page}
            >
              {page + 1}
            </Button>
          </>
        ))}
      </Box>
      <Button
        sx={{ minWidth: "40px" }}
        disabled={disable}
        variant="none"
        onClick={handleNextPage}
      >
        {" "}
        <i className="ri-arrow-right-s-line"></i>
      </Button>
    </>
  );
};

export default PageinationTable;
