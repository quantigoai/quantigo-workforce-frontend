/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/AllUsers/AllUsersTable.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Thursday, September 28th 2023, 2:47:26 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import dataBuilder from "../../shared/CustomTable/dataBuilder";
import fieldBuilder from "../../shared/CustomTable/fieldBuilder";
import TableWrapper from "../ProjectLIstNew2/ExpTable/TableWrapper";
import { fields } from "./tableFiels";

const AllUsersTable = ({
  handleClick,
  handleDelete,
  myColumn,
  setMyColumn,
  myRows,
  setMyRows,
  handleDetailsPage,
  pagination,
  setPagination,
  handleChangePagination,
  total,
  handleId,
  filteredCol,
  handleProjectDetailsOpen,
}) => {
  const { users } = useSelector((state) => state.user.users);
  const user = useSelector((state) => state.user);
  const { role } = user.user;

  useEffect(() => {
    setMyColumn(fieldBuilder(fields, handleClick, handleDelete));
    setMyRows(dataBuilder(users));
  }, [users]);

  return (
    <>
      <TableWrapper
        role={role}
        handleDetailsPage={handleDetailsPage}
        handleClick={handleClick}
        handleDelete={handleDelete}
        myColumn={myColumn}
        myRows={myRows}
        pagination={pagination}
        setPagination={setPagination}
        handleChangePagination={handleChangePagination}
        totalItems={total}
        handleId={handleId}
        filteredCol={filteredCol}
        handleProjectDetailsOpen={handleProjectDetailsOpen}
      />
    </>
  );
};

export default AllUsersTable;