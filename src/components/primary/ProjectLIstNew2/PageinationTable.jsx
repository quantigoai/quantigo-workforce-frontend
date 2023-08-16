import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const PageinationTable = () => {
  const totalItems = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const itemPerPage = 3;
  const totalPages = Math.ceil(totalItems.length / itemPerPage);

  const [pageNumber, setPageNumber] = useState([]);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    const pageNumberMain = [...Array(totalPages / 2).keys()];
    setPageNumber(pageNumberMain);
    setDisablePrev(true);
  }, []);
  const startPage = totalPages / 2;

  const handleNextPage = () => {
    const pageNumberMain = [...Array(totalPages - startPage).keys()].map(
      (i) => i + startPage
    );
    setPageNumber(pageNumberMain);
    setDisableNext(true);
    setDisablePrev(false);
  };

  const handlePrevPage = () => {
    const pageNumberMain = [...Array(totalPages / 2).keys()];
    setPageNumber(pageNumberMain);
    setDisablePrev(true);
    setDisableNext(false);
  };

  return (
    <>
      <Button
        disabled={disablePrev}
        sx={{ minWidth: "30px" }}
        onClick={handlePrevPage}
        variant="none"
      >
        {" "}
        <i className="ri-arrow-left-s-line"></i>
      </Button>
      <Box>
        {pageNumber.map((page, id) => (
          <>
            <Button
              key={id}
              variant="small"
              onClick={() => setSelectedPage(page)}
              sx={{
                minWidth: "40px",
                fontSize: "16px",
                padding: "10px",

                color: selectedPage === page ? "white" : "#62728F",
                backgroundColor:
                  selectedPage === page ? "#2E58FF" : "transparent",

                "&:focus": {
                  color: "white",
                  backgroundColor: "#2E58FF",
                },
              }}
            >
              {page + 1}
            </Button>
          </>
        ))}
      </Box>
      <Button
        sx={{ minWidth: "40px" }}
        disabled={disableNext}
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
