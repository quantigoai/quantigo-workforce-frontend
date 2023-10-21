import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

import { Box } from "@mui/material";
import LoadingComponent from "../../../shared/Loading/LoadingComponent";
import FirstTableColumn from "./TableBody/FirstTableColumn";
import LastTableColumn from "./TableBody/LastTableCoulmn";
import MiddleTableColumn from "./TableBody/MiddleTableColumn";
import StickyDocViewTableColumn from "./TableBody/StickyDocViewTableColumn";
import StickyDocViewTableHead from "./TableHeader/StickyDocViewTableHead";
import StickyFirstTableHead from "./TableHeader/StickyFirstTableHead";
import StickyLastTableHead from "./TableHeader/StickyLastTableHead";
import StickyMiddleHead from "./TableHeader/StickyMiddleHead";
import "./index.css";

export default function WPFTable({
  handleDetailsPage,
  myColumn,
  myRows,
  handleDelete,
  handleClick,
  handleId,
  filteredCol,
  handleProjectDetailsOpen,
  role,
  currentlyCheckedInProject,
  stickyFirstColumn,
  stickyLastColumn,
  columns,
  isChildDataLoading,
  handleReject,
  handleOpenNDA,
}) {
  return (
    myColumn.length > 0 && (
      <>
        <TableContainer
          className="tableContainer"
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead className="tableHeader">
              <TableRow>
                {stickyFirstColumn.map((column) => (
                  <StickyFirstTableHead key={column.id} column={column} handleId={handleId} filteredCol={filteredCol} />
                ))}
                {columns.map((column) => (
                  <StickyMiddleHead key={column.id} column={column} handleId={handleId} filteredCol={filteredCol} />
                ))}

                {role === "recruitment_manager" && <StickyDocViewTableHead column={{ width: "40px" }} />}

                {stickyLastColumn.map((column) => (
                  <StickyLastTableHead key={column.id} column={column} />
                ))}
              </TableRow>
            </TableHead>

            {isChildDataLoading ? (
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                }}
              >
                <LoadingComponent height="100%" />
              </Box>
            ) : (
              <TableBody className="tableBody">
                {myRows.map((row) => (
                  <TableRow
                    key={row.id}
                    // hover
                  >
                    {stickyFirstColumn.map((column) => (
                      <FirstTableColumn
                        key={column.id}
                        row={row}
                        column={column}
                        handleDetailsPage={handleDetailsPage}
                        currentlyCheckedInProject={currentlyCheckedInProject}
                      />
                    ))}

                    {columns.map((column) => (
                      <MiddleTableColumn key={column.id} row={row} column={column} />
                    ))}

                    {role === "recruitment_manager" && <StickyDocViewTableColumn column={row} />}

                    {stickyLastColumn.map((column) => (
                      <LastTableColumn
                        key={column.id}
                        role={role}
                        handleProjectDetailsOpen={handleProjectDetailsOpen}
                        row={row}
                        handleClick={handleClick}
                        handleDelete={handleDelete}
                        handleReject={handleReject}
                        handleOpenNDA={handleOpenNDA}
                      />
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </>
    )
  );
}
