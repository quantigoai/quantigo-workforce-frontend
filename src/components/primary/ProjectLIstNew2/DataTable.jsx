/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/DataTable.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Thursday, August 3rd 2023, 11:29:04 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "remixicon/fonts/remixicon.css";
import { getAllProjectDrawers } from "../../../features/slice/projectDrawerSlice";

const ODD_OPACITY = 0.2;
const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    "&:hover, &.Mui-hovered": {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&.Mui-selected": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity
      ),
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}));

const customHeader = (params) => {
  switch (params) {
    case "project_id":
      return "PROJECT ID";
    case "project_drawer_name":
      return "PROJECT NAME";
    case "project_alias":
      return "ALIAS";
    case "project_batch":
      return "BATCH";
    case "project_status":
      return "STATUS";
    case "project_skills":
      return "SKILL";
    case "pdr":
      return "PDR";
    default:
      return params;
  }
};
const MyButton = () => {
  return (
    <Button variant="outlined">
      <i className="ri-edit-line"></i>
    </Button>
  );
};
const generatedColumns = (columns) => {
  const filterColumns = columns.filter(
    (c) =>
      c !== "_id" &&
      c !== "__v" &&
      c !== "project_id" &&
      c !== "createdAt" &&
      c !== "updatedAt" &&
      c !== "estimated_end_date" &&
      c !== "checkedInUsers" &&
      c !== "checkedOutUsers" &&
      c !== "restrictedUsers" &&
      c !== "working_hours" &&
      c !== "project_description"
  );

  const x = filterColumns.map((c) => {
    // '_id', 'project_id', 'project_drawer_name', 'project_batch', 'project_description', 'project_alias', 'pdr', 'guideline',
    // 'project_status', 'estimated_end_date', 'checkedInUsers', 'checkedOutUsers', 'restrictedUsers', 'project_skills', 'working_hours',
    // 'createdAt', 'updatedAt', '__v'
    return {
      field: c,
      headerName: customHeader(c),
      width: 160,
    };
  });
  x.push({
    field: "Actions",
    headerName: "ACTIONS",
    width: 160,
    renderCell: (params) => {
      return <MyButton />;
    },
    editable: false,
  });
  return x;
};

export default function DataTable() {
  
  const [myColumns, setMyColumns] = useState([]);
 
  const [myRows, setMyRows] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProjectDrawers());
  }, []);

  const { projectDrawers } = useSelector((state) => state.projectDrawer);

  useEffect(() => {
    const pdColumns = Object.keys(projectDrawers[0]);
  
    setMyColumns(generatedColumns(pdColumns));
    setMyRows(
      projectDrawers.map((pd) => ({
        ...pd,
        id: pd._id,
      }))
    );
  }, [projectDrawers]);

  //sorted col according to design
  const [sortedColumns, setSortedColumns] = useState([]);
  
  useEffect(() => {
    let columns = [
      myColumns[0],
      myColumns[1],
      myColumns[3],
      myColumns[2],
      myColumns[7],
      myColumns[6],
      myColumns[4],
      myColumns[5],
    ];
    setSortedColumns(columns);
  }, []);



  return (
    <div style={{ height: "100%", width: "100%" }}>
      <StripedDataGrid
        sx={{
          textAlign: "center",
          borderColor: "primary.light",
          "& .MuiDataGrid-cell": {
            color: "#3C4D6B",
          },
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        rows={myRows}
        columns={myColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        pageSizeOptions={[5, 10, 20, 50, 100]}
        // checkboxSelection
      />
    </div>
  );
}
