import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const paginationOptions = [
  { value: 10, label: 10 },
  { value: 30, label: 30 },
  { value: 50, label: 50 },
  { value: 100, label: 100 },
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
  const { users } = useSelector((state) => state.user.users);
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

  const approvedPaths = ["/allprojects", "/all-users"];

  const approvedData = [myWorkHistoryCount, usersWorkHistoryCount, users?.length];

  return approvedPaths.includes(pathname) || approvedData.some((s) => s > 0) ? (
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
        <Typography
          variant="wpf_p4_regular"
          sx={{
            width: "120px",
            color: "neutral.N300",
          }}
        >
          Items per page
        </Typography>
        <Select
          sx={{
            width: "80px",
            height: "30px",
            border: "1px solid #b9b9b9",
            "& .MuiSelect-select": {
              fontSize: "wpf_p4_regular",
              padding: "0px 0px 0px 10px",
              color: "neutral.N300",
            },
            "& .MuiSvgIcon-root": {
              color: "neutral.N300",
            },
          }}
          id="demo-simple-select"
          value={pagination.pageSize}
          onChange={(e) => {
            const newSize = parseInt(e.target.value);
            setPagination((prevPagination) => ({
              ...prevPagination,
              pageSize: newSize,
              currentPage: 0,
            }));
          }}
          labelId="demo-simple-select-label"
          name="limit"
        >
          {paginationOptions.map((p) => (
            <MenuItem key={p.value} value={p.value}>
              {p.label}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex" }}>
        <Button
          disabled={disablePrev}
          sx={{
            minWidth: "30px",
            height: "30px",
            fontSize: "14px",
            padding: "6px 2px",
            color: disablePrev ? "neutral.N650" : "neutral.N300",
          }}
          onClick={handlePrevPage}
          variant="none"
        >
          <KeyboardArrowLeftIcon />
        </Button>
        <Box>
          {visiblePageNumbers.map((pageNumberToShow) => (
            <Button
              onClick={() => handleJumpToPage(pageNumberToShow)}
              key={pageNumberToShow}
              name="page"
              variant="small"
              sx={{
                minWidth: "30px",
                height: "30px",
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
        <Button
          sx={{
            minWidth: "30px",
            height: "30px",
            fontSize: "14px",
            padding: "6px 2px",
            color: disableNext ? "neutral.N650" : "neutral.N300",
          }}
          disabled={disableNext}
          variant="none"
          onClick={handleNextPage}
        >
          <KeyboardArrowRightIcon />
        </Button>
      </Box>
    </Box>
  ) : (
    <></>
  );
};

export default PaginationTable;
