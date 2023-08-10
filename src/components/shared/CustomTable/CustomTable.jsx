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

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    "&:hover, &.Mui-hovered": {},
    "&.Mui-selected": {
      "&:hover, &.Mui-hovered": {
        "@media (hover: none)": {},
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
          showCellVerticalBorder={false}
          hideFooterSelectedRowCount
          getCellClassName={(params) => {
            if (params.field === "project_skills") {
              return "skills-cell";
            }
            return "";
          }}
          sx={{
            textAlign: "center",
            "& .MuiDataGrid-cell": {
              color: "#3C4D6B",
            },
          }}
          rows={myRows}
          columns={myColumn}
          rowCount={120}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          getRowClassName={(params) => {
            return (params.indexRelativeToCurrentPage = "even");
          }}
          pageSizeOptions={[5, 10, 20, 50]}
        />
      </Box>
    </>
  );
};

export default CustomTable;
