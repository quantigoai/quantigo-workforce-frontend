import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

import LoadingComponent from "../../../shared/Loading/LoadingComponent";
import FirstTableColumn from "./TableBody/FirstTableColumn";
import LastTableColumn from "./TableBody/LastTableCoulmn";
import MiddleTableColumn from "./TableBody/MiddleTableColumn";
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
}) {
  return (
    myColumn.length > 0 && (
      <>
        <TableContainer className="tableContainer" sx={{ height: "100%" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className="tableHeader">
              <TableRow>
                {stickyFirstColumn.map((column) => (
                  <StickyFirstTableHead key={column.id} column={column} handleId={handleId} filteredCol={filteredCol} />
                ))}
                {columns.map((column) => (
                  <StickyMiddleHead key={column.id} column={column} handleId={handleId} filteredCol={filteredCol} />
                ))}
                {stickyLastColumn.map((column) => (
                  <StickyLastTableHead key={column.id} column={column} />
                ))}
              </TableRow>
            </TableHead>

            {isChildDataLoading ? (
              <LoadingComponent height="100%" />
            ) : (
              <TableBody className="tableBody">
                {myRows.map((row) => {
                  return (
                    <TableRow
                      hover
                      // role="checkbox"
                      // tabIndex={-1}
                      key={row.id}
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

                      {stickyLastColumn.map((column) => (
                        <LastTableColumn
                          key={column.id}
                          role={role}
                          handleProjectDetailsOpen={handleProjectDetailsOpen}
                          row={row}
                          handleClick={handleClick}
                          handleDelete={handleDelete}
                        />
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </>
    )
  );
}
