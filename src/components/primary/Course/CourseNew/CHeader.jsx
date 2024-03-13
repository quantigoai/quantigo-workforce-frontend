/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/Course/CourseNew/CHeader.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Wednesday, March 13th 2024, 11:23:30 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

const CHeader = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/courses2/allCourse')}>All</button>
      <button onClick={() => navigate('/courses2/myCourse')}>My </button>
      <button onClick={() => navigate('/courses2/archiveCourse')}>
        Archived
      </button>
      <input type="text" name="search" />
    </div>
  );
};

export default CHeader;
