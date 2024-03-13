import { useRef, useState } from 'react';

/*
 * File           : useCourse.js
 * Project        : wmpfrontv2
 * Created Date   : We 13 Mar 2024 11:45:49
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Wed Mar 13 2024
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
const useCourse = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const searchRef = useRef(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({});
  const [isActiveEnrolled, setIsActiveEnrolled] = useState(false);
  const [isActiveArchived, setIsActiveArchived] = useState(false);

  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });
  const [isCourseLoading, setIsCourseLoading] = useState(true);

  return {
    isDataLoading,
    setIsDataLoading,
    search,
    setSearch,
    pagination,
    setPagination,
    searchRef,
    filter,
    setFilter,
    isCourseLoading,
    setIsCourseLoading,
    isActiveEnrolled,
    setIsActiveEnrolled,
    isActiveArchived,
    setIsActiveArchived,
  };
};

export default useCourse;
