/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Course/CourseNew/NewPagination.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Wednesday, March 13th 2024, 1:22:23 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */

import Pagination from '@mui/material/Pagination';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const NewPagination = ({
  pagination,
  setPagination,
  totalCourse,
  courseMeta,
}) => {
  const navigate = useNavigate();

  const handleChange = (event, pageNumber) => {
    // const manualUrl = `?limit=${pagination.pageSize}&skip=${
    //   pageNumber * pagination.pageSize
    // }`;
    // setPagination((prevPagination) => ({
    //   ...prevPagination,
    //   currentPage: pageNumber,
    // }));
    // navigate(manualUrl);
  };

  return (
    <div>
      <Pagination
        onChange={handleChange}
        count={courseMeta.pageNumber}
        color="primary"
      />
    </div>
  );
};

export default NewPagination;
