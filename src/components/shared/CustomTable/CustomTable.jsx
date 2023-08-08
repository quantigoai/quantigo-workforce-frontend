/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/CustomTable/CustomTable.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Saturday, August 5th 2023, 10:56:40 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import "./index.css";
const ODD_OPACITY = 0.2;
const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    "&:hover, &.Mui-hovered": {
      // backgroundColor: alpha("#3C4D6B", ODD_OPACITY),
      // backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      // "@media (hover: none)": {
      //   backgroundColor: "transparent",
      // },
    },
    "&.Mui-selected": {
      // backgroundColor: alpha(
      //   theme.palette.primary.main,
      //   ODD_OPACITY + theme.palette.action.selectedOpacity
      // ),
      "&:hover, &.Mui-hovered": {
        // backgroundColor: alpha(
        //   theme.palette.primary.main,
        //   ODD_OPACITY +
        //     theme.palette.action.selectedOpacity +
        //     theme.palette.action.hoverOpacity
        // ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          // backgroundColor: alpha(
          //   theme.palette.primary.main,
          //   ODD_OPACITY + theme.palette.action.selectedOpacity
          // ),
        },
      },
    },
  },
}));

const CustomTable = ({ myColumn, myRows }) => {
  return (
    <>
      <Box style={{ height: "100%", width: "100%" }}>
        <StripedDataGrid
          showColumnVerticalBorder
          showCellVerticalBorder
          sx={{
            textAlign: "center",
            "& .MuiDataGrid-cell": {
              color: "#3C4D6B",
            },
            "& .MuiDataGrid-cell:hover": {
              // color: "primary.main",
            },
          }}
          rows={myRows}
          columns={myColumn}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          getRowClassName={
            (params) => {
              return (params.indexRelativeToCurrentPage = "even");
            }
            // params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
          pageSizeOptions={[5, 10, 20, 50]}
        />
      </Box>
    </>
  );
};

export default CustomTable;
