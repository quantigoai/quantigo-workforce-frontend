import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

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
const PaginationTable = ({
  pagination,
  setPagination,
  setFilterValue,
  setFilteredCol,
  quizMeta,
  submission,
  courseMeta,
  totalCourse,
}) => {
  console.log('🚀 ~ pagination:', pagination);
  const {
    myWorkHistoryCount,
    usersWorkHistoryCount,
    projectMeta,
    workHistoryMeta,
  } = useSelector((state) => state.projectDrawer);

  const { id } = useParams();

  const { userFilter, projectDrawerFilter } = useSelector(
    (state) => state.tempData,
  );

  const { total } = useSelector((state) => state.projectDrawer);

  const {
    users,
    totalUsers,
    meta: userMeta,
  } = useSelector((state) => state.user.users);

  const { projectDirectory, totalDirectory, directoryMeta } = useSelector(
    (state) => state.projectDirectory,
  );

  const [meta, setMeta] = useState(projectMeta);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/allprojects') {
      setMeta(projectMeta);
    }
    if (pathname === '/all-users') {
      setMeta(userMeta);
    }
    if (pathname === `/projectDetails/${id}`) {
      setMeta(workHistoryMeta);
    }
    if (pathname === '/projectDirectory') {
      setMeta(directoryMeta);
    }
    if (pathname === `/submitted/${id}`) {
      setMeta(quizMeta);
    }
    // if (pathname === `/course`) {
    //   setMeta(courseMeta);
    // }
    if (pathname === `/courses2/myCourse`) {
      setMeta(courseMeta);
    }
    if (pathname === `/courses2/archiveCourse`) {
      setMeta(courseMeta);
    }
  }, [
    pathname,
    projectMeta,
    userMeta,
    workHistoryMeta,
    directoryMeta,
    quizMeta,
    // courseMeta,
  ]);
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const limit = params.get('limit');
  const skip = params.get('skip');

  useLayoutEffect(() => {
    if (skip && limit) {
      if (skip / limit !== pagination.currentPage) {
        setPagination((prevPagination) => ({
          ...prevPagination,
          currentPage: skip / limit,
        }));
        if (pathname === '/allprojects') {
          setFilteredCol(projectDrawerFilter.ascDescOption);
          setFilterValue(projectDrawerFilter.filteredData);
        }
      }
    } else {
      if (
        pathname === '/all-users' ||
        pathname === '/allprojects' ||
        pathname === `/projectDetails/${id}` ||
        pathname === '/projectDirectory' ||
        pathname === `/submitted/${id}`
        // ||
        // pathname === `/courses2/myCourse` ||
        // pathname === `/courses2/archiveCourse`
      ) {
        setPagination((prevPagination) => ({
          ...prevPagination,
          currentPage: 0,
        }));
      }
    }
  }, [params]);

  const handlePrevPage = useCallback(() => {
    navigate(`${meta.links.previous}`);
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: prevPagination.currentPage - 1,
    }));
  }, [meta]);

  const handleNextPage = useCallback(() => {
    navigate(`${meta.links.next}`);
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: prevPagination.currentPage + 1,
    }));
  }, [meta]);

  const handleJumpToPage = useCallback(
    (pageNumber) => {
      const manualUrl = `?limit=${pagination.pageSize}&skip=${
        pageNumber * pagination.pageSize
      }`;
      setPagination((prevPagination) => ({
        ...prevPagination,
        currentPage: pageNumber,
      }));
      navigate(manualUrl);
    },
    [meta],
  );
  const handelChangeItems = useCallback(
    (e) => {
      const newSize = parseInt(e.target.value);
      const manualUrl = `?limit=${newSize}&skip=0`;
      setPagination((prevPagination) => ({
        ...prevPagination,
        pageSize: newSize,
        currentPage: 0,
      }));
      navigate(manualUrl);
    },
    [meta],
  );

  let [totalPages, setTotalPages] = useState(0);

  useLayoutEffect(() => {
    if (pathname === '/allprojects') {
      setTotalPages(Math.ceil(total / pagination.pageSize));
    }
    if (pathname === '/all-users') {
      setTotalPages(Math.ceil(totalUsers / pagination.pageSize));
    }
    if (pathname === '/projectDirectory') {
      setTotalPages(Math.ceil(totalDirectory / pagination.pageSize));
    }
    if (pathname === `/projectDetails/${id}`) {
      setTotalPages(Math.ceil(usersWorkHistoryCount / pagination.pageSize));
    }
    if (pathname === `/submitted/${id}`) {
      setTotalPages(Math.ceil(submission?.total / pagination.pageSize));
    }
    if (
      pathname === `/courses2/myCourse` ||
      pathname === `/courses2/archiveCourse`
    ) {
      setTotalPages(Math.ceil(totalCourse / pagination.pageSize));
    }
    if (
      pathname === `/all-course/basic` ||
      pathname === `/all-course/beginner` ||
      pathname === `/all-course/intermediate` ||
      pathname === `/all-course/advanced`
    ) {
      setTotalPages(Math.ceil(totalCourse / pagination.pageSize));
    }
  }, [total, totalUsers, usersWorkHistoryCount, meta, submission, totalCourse]);
  const visiblePageCount = 5;
  const firstVisiblePage = Math.max(
    0,
    pagination.currentPage - Math.floor(visiblePageCount / 2),
  );
  const lastVisiblePage = Math.min(
    totalPages - 1,
    firstVisiblePage + visiblePageCount - 1,
  );
  const visiblePageNumbers = Array.from(
    { length: lastVisiblePage - firstVisiblePage + 1 },
    (_, index) => firstVisiblePage + index,
  );

  const disablePrev = pagination.currentPage === 0;
  const disableNext = pagination.currentPage >= totalPages - 1;

  const approvedPaths = [
    '/allprojects',
    '/all-users',
    '/projectDirectory',
    '/submitted',
    '/courses2/myCourse',
    '/courses2/archiveCourse',
  ];

  const approvedData = [
    myWorkHistoryCount,
    usersWorkHistoryCount,
    users?.length,
    projectDirectory?.length,
    submission?.total,
    totalCourse,
  ];
  return approvedPaths.includes(pathname) || approvedData.some((s) => s > 0) ? (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: { xl: '48px', xxl: '60px' },
        paddingX: '16px',
        paddingY: '12px',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
      }}
    >
      <Box
        gap={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography
            variant="wpf_p3_regular"
            sx={{
              width: '120px',
              color: 'neutral.N300',
            }}
          >
            Items per page :
          </Typography>
        </Box>

        <Select
          sx={{
            width: '70px',
            height: '24px',
            border: 'none',
            '& .MuiSelect-select': {
              padding: '5px 0px 0px 10px',
              fontSize: { xl: '14px', xxl: '16px', lg: '12px' },
              color: 'neutral.N300',
            },
            '& .MuiSvgIcon-root': {
              color: 'neutral.N300',
              pt: '2px',
            },
          }}
          id="demo-simple-select"
          value={pagination.pageSize}
          onChange={(e) => handelChangeItems(e)}
          labelId="demo-simple-select-label"
          name="limit"
        >
          {paginationOptions.map((p) => (
            <MenuItem
              key={p.value}
              value={p.value}
              sx={{ fontSize: { xl: '14px', xxl: '16px', lg: '12px' } }}
            >
              {p.label}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Buttons */}
      <Box
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box>
          <Button
            disabled={disablePrev}
            sx={{
              minWidth: '20px',
              height: { lg: '20px', xl: '24px', xxl: '24px' },
              width: { lg: '20px', xl: '24px', xxl: '24px' },
              fontSize: { xl: '14px', xxl: '16px', lg: '12px' },
              fontWeight: '500',
              padding: '7px 2px',
              color: disableNext ? 'neutral.N650' : 'neutral.N300',
            }}
            onClick={handlePrevPage}
            variant="none"
          >
            <KeyboardArrowLeftIcon
              sx={{
                height: { lg: '16px', xl: '18px', xxl: '20px' },
                width: { lg: '16px', xl: '18px', xxl: '20px' },
              }}
            />
          </Button>
        </Box>

        <Box>
          {visiblePageNumbers.map((pageNumberToShow) => (
            <Button
              onClick={() => handleJumpToPage(pageNumberToShow)}
              key={pageNumberToShow}
              name="page"
              variant="small"
              sx={{
                minWidth: '20px',
                height: { lg: '20px', xl: '24px', xxl: '24px' },
                width: { lg: '20px', xl: '24px', xxl: '24px' },
                fontSize: { xl: '14px', xxl: '16px', lg: '12px' },
                fontWeight: '500',
                padding: '6px 2px',
                color:
                  pagination.currentPage === pageNumberToShow
                    ? 'white'
                    : '#62728F',
                backgroundColor:
                  pagination.currentPage === pageNumberToShow
                    ? '#2E58FF'
                    : 'transparent',
                '&:focus': {
                  color: 'white',
                  backgroundColor: '#2E58FF',
                },
              }}
            >
              {pageNumberToShow + 1}
            </Button>
          ))}
        </Box>
        <Button
          sx={{
            minWidth: '20px',
            height: { lg: '20px', xl: '24px', xxl: '24px' },
            width: { lg: '20px', xl: '24px', xxl: '24px' },
            fontSize: { xl: '14px', xxl: '16px', lg: '12px' },
            fontWeight: '500',
            padding: '7px 2px',
            color: disableNext ? 'neutral.N650' : 'neutral.N300',
          }}
          disabled={disableNext}
          variant="none"
          onClick={handleNextPage}
        >
          <KeyboardArrowRightIcon
            sx={{
              height: { lg: '16px', xl: '18px', xxl: '20px' },
              width: { lg: '16px', xl: '18px', xxl: '20px' },
            }}
          />
        </Button>
      </Box>
    </Box>
  ) : (
    <></>
  );
};

export default PaginationTable;
