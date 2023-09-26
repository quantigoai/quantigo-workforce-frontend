import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const paginationOptions = [
  { value: 10, label: 10 },
  { value: 30, label: 30 },
  { value: 50, label: 50 },
];

/**
 * Pagination component for managing table pagination.
 * @param {object} props - Component props
 * @param {number} totalItems - Total number of items available from the data source.
 * @param {object} pagination - Pagination state.
 * @param {function} setPagination - A setState to update the pagination state.
 * @param {function} handleChangePagination - A callback function invoked when pagination changes.
 * @returns {JSX.Element} - Pagination component for the table.
 */
const PaginationTable = ({ totalItems, pagination, setPagination, handleChangePagination }) => {
  const itemsPerPage = pagination.pageSize;
  const { myWorkHistoryCount, usersWorkHistoryCount } = useSelector((state) => state.projectDrawer);
  useEffect(() => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: 0,
    }));
  }, [itemsPerPage]);

  const handlePrevPage = useCallback(() => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: prevPagination.currentPage - 1,
    }));
  }, []);

  const handleNextPage = useCallback(() => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: prevPagination.currentPage + 1,
    }));
  }, []);

  const handleJumpToPage = useCallback((pageNumber) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: pageNumber,
    }));
  }, []);

  useEffect(() => {
    handleChangePagination();
  }, [handleChangePagination, pagination]);

  const totalPages = Math.ceil(totalItems / pagination.pageSize);
  const visiblePageCount = 5;
  const firstVisiblePage = Math.max(0, pagination.currentPage - Math.floor(visiblePageCount / 2));
  const lastVisiblePage = Math.min(totalPages - 1, firstVisiblePage + visiblePageCount - 1);
  const visiblePageNumbers = Array.from(
    { length: lastVisiblePage - firstVisiblePage + 1 },
    (_, index) => firstVisiblePage + index
  );

  const disablePrev = pagination.currentPage === 0;
  const disableNext = pagination.currentPage >= totalPages - 1;
  const location = useLocation();
  const { pathname } = location;
  const { isLightTheme } = useSelector((state) => state.theme);

  return pathname === "/allprojects" || myWorkHistoryCount > 0 || usersWorkHistoryCount > 0 ? (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        paddingX: "16px",
        paddingY: "10px",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Box
        gap={0}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Typography sx={{ fontSize: "14px", width: "120px", color: isLightTheme ? "#62728F" : "#fff" }} variant="p">
          Items per page
        </Typography>
        <Select
          sx={{
            width: "70px",
            height: "30px",
            border: "1px solid #b9b9b9",
            "& .MuiSelect-select": {
              fontSize: "14px",
              color: isLightTheme ? "#62728F" : "#fff",
            },
          }}
          id="demo-simple-select"
          value={pagination.pageSize}
          onChange={(e) => {
            const newSize = parseInt(e.target.value);
            setPagination((prevPagination) => ({
              ...prevPagination,
              pageSize: newSize,
              currentPage: 0, // Reset to the first page when changing pageSize
            }));
          }}
          labelId="demo-simple-select-label"
          // sx={{ width: "100px", height: "40px", border: "1px solid #b9b9b9" }}
          name="limit"
        >
          {/* Your paginationOptions.map() here */}
          {paginationOptions.map((p) => (
            <MenuItem key={p.value} value={p.value}>
              {p.label}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex" }}>
        <Button disabled={disablePrev} sx={{ minWidth: "30px" }} onClick={handlePrevPage} variant="none">
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
                fontSize: "14px",
                padding: "6px 2px",
                color: pagination.currentPage === pageNumberToShow ? "white" : "#62728F",
                backgroundColor: pagination.currentPage === pageNumberToShow ? "#2E58FF" : "transparent",
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
        <Button sx={{ minWidth: "40px" }} disabled={disableNext} variant="none" onClick={handleNextPage}>
          <i className="ri-arrow-right-s-line"></i>
        </Button>
      </Box>
    </Box>
  ) : (
    <></>
  );
};

export default PaginationTable;
