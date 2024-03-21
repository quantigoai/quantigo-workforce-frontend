import { Box, Button, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
const CourseHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: '10px',
        // px: '15px',
        // backgroundColor: 'red',
        // borderTop: '1px solid #E6ECF5',
      }}
    >
      <Box
        sx={
          {
            //   padding: '10px 30px',
            //   height: '70px',
            //   width: { xxl: '30%', xl: '40%', lg: '40%' },
          }
        }
      >
        <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
          {/* <Typography variant="wpf_p1_semiBold">{`List of ${
        pathname === '/courses/my-course'
          ? 'My'
          : pathname === '/courses/archive-course'
          ? 'Archived'
          : level
          ? capitalizeFirstLetter(level)
          : ''
      } Courses`}
      </Typography> */}
          <Typography>List of Courses</Typography>

          {/* {courseCount > 0 && (
            <Typography sx={{ opacity: '0.7', height: '13px' }} variant="wpf_p3_regular" color={'neutral.750'}>
              {courseCount === 1 || courseCount == 0 ? courseCount + ' Result found' : courseCount + ' Results found'}
            </Typography>
          )} */}
        </Grid>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          // gap: '1px',
          // width: { xxl: '20%', xl: '20%', lg: '40%' },
        }}
      >
        {/* {role === 'level_0_annotator' ||
        role === 'level_1_annotator' ||
        role === 'level_2_annotator' ||
        role === 'level_3_annotator' ? (
          <CoursePageFilter
            search={search}
            filter={filter}
            isLevel={isLevel}
            setIsDataLoading={setIsDataLoading}
            setFeatureCourses={setFeatureCourses}
            courseCount={courseCount}
            setCourseCount={setCourseCount}
            setAllCourses={setAllCourses}
            isActiveAll={isActiveAll}
            setIsActiveAll={setIsActiveAll}
            isActiveEnrolled={isActiveEnrolled}
            setIsActiveEnrolled={setIsActiveEnrolled}
            isActiveArchived={isActiveArchived}
            setIsActiveArchived={setIsActiveArchived}
            MyCourseCount={MyCourseCount}
            ArchiveCount={ArchiveCount}
            allCount={allCount}
            setFilter={setFilter}
            setSearch={setSearch}
            searchRef={searchRef}
            pagination={pagination}
            setIsPagination={setIsPagination}
            allCourseCount={allCourseCount}
          />
        ) : (
          <></>
        )} */}
        <Box sx={{ pl: '10px' }}>
          <Paper
            sx={{
              // p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: { xxl: '240px', xl: '240px', lg: '140px' },
              backgroundColor: 'neutral.N000',
              border: '1px solid #EFF3FE',
              borderRadius: '8px',
              outline: 'none',
              boxShadow: 'none',
            }}
          >
            <IconButton disabled type="button" sx={{ p: '5px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              //   inputRef={searchRef}
              sx={{
                ml: 0,
                flex: 1,
                fontFamily: 'Inter',
                fontSize: { xl: '14px', xxl: '16px', lg: '10px' },
              }}
              placeholder="Search"
              onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                  //   handleSearch(ev);
                  ev.preventDefault();
                }
              }}
            />
            {
              // search &&
              <Button
                sx={{
                  height: '30px',
                  minWidth: '40px',
                }}
              >
                <ClearIcon
                  sx={{
                    height: {
                      lg: '20px',
                      xl: '40px',
                      xxl: '40px',
                    },
                    color: 'neutral.N300',
                    '&:hover': {
                      color: '#F04438',
                    },
                  }}
                  //   onClick={clearSearch}
                />
              </Button>
            }
          </Paper>
        </Box>

        <IconButton
          //   onClick={handleClickFilter}
          sx={{
            // backgroundColor: openModal ? '#344054' : '#fff',
            //   backgroundColor: "primary.B008",
            mx: '5px',
            borderRadius: '8px',
          }}
          aria-label="menu"
        >
          {/* {openModal ? (
            <FilterListOffIcon sx={{ color: 'primary.main' }} />
          ) : (
            <FilterListIcon sx={{ color: 'primary.main' }} />
          )} */}
          <FilterListIcon sx={{ color: 'primary.main' }} />
        </IconButton>

        {/* <ExportUserList /> */}
        {
          // role === 'admin' &&
          <Button
            sx={{
              textTransform: 'none',
              borderRadius: '8px',

              backgroundColor: '#2E58FF',
              color: 'white',

              '&:hover': {
                background: '#244EF5',
              },
            }}
            variant="contained"
            // onClick={handleOpen}
          >
            <i style={{ fontSize: '17px', marginRight: '6px' }} className="ri-add-fill"></i> Create Course
          </Button>
        }
      </Box>
    </Box>
  );
};

export default CourseHeader;