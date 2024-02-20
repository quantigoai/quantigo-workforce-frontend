import ClearIcon from '@mui/icons-material/Clear';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Grid, IconButton, InputBase, Paper, Popover, Typography } from '@mui/material';
import CommonHeader from '../../../shared/CustomComponenet/CommonHeader/CommonHeader';
import MIniModalCourseFilter from './MIniModalCourseFilter';
const CourseHeader = ({
  handleOpen,
  open,
  setOpen,
  courseCount,
  search,
  searchRef,
  clearSearch,
  setSearch,
  handleSearch,
  openModal,
  id,
  handleCloseFilter,
  filter,
  handleChange,
  handleClickFilter,
  handleResetFilter,
  handleFilterCourse,
  anchorE2,
  level,
  role,
}) => {
  return (
    <>
      <Box
        className="headerBox"
        sx={{
          height: '100%',
          backgroundColor: 'neutral.N000',
        }}
      >
        <Box sx={{ width: { xxl: '30%', xl: '30%', lg: '20%' }, padding: '8px 16px' }}>
          <Grid
            container
            sx={{
              display: 'flex',
              alignContent: 'center',
              alignItems: 'center',
              paddingX: '10px',
            }}
          >
            <CommonHeader title="List of Courses" customButton="Create User" />
            {courseCount > 0 && (
              <Typography sx={{ opacity: '0.7', height: '13px' }} variant="wpf_p3_regular" color={'neutral.750'}>
                {courseCount === 1 ? courseCount + ' Result' : courseCount + ' Results'} found
              </Typography>
            )}
          </Grid>
        </Box>

        <Box
          sx={{
            width: { xxl: '80%', xl: '80%', lg: '90%' },
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '12px 20px',
            gap: '7px',
          }}
        >
          {role === 'level_0_annotator' ||
          role === 'level_1_annotator' ||
          role === 'level_2_annotator' ||
          role === 'level_3_annotator' ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <Button
                sx={{
                  textTransform: 'none',
                  borderRadius: '8px',

                  backgroundColor: 'neutral.N000',
                  color: 'grey.550',

                  '&:hover': {
                    backgroundColor: 'neutral.N000',
                    color: 'grey.550',
                  },
                }}
                variant="contained"
              >
                All Courses (32)
              </Button>
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
              >
                My Courses (32)
              </Button>
              <Button
                sx={{
                  textTransform: 'none',
                  borderRadius: '8px',

                  backgroundColor: 'neutral.N000',
                  color: 'grey.550',
                  paddingLeft: '8px',

                  '&:hover': {
                    background: '#244EF5',
                  },
                }}
                variant="contained"
              >
                Archived Courses (03)
              </Button>
            </Box>
          ) : (
            <></>
          )}
          <Paper
            // component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '240px',
              backgroundColor: 'primary.B008',
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
              inputRef={searchRef}
              sx={{
                ml: 0,
                flex: 1,
                fontFamily: 'Inter',
                fontSize: { xl: '14px', xxl: '16px', lg: '12px' },
              }}
              placeholder="Search"
              onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                  handleSearch(ev);
                  ev.preventDefault();
                }
              }}
            />
            {search && (
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
                  onClick={clearSearch}
                />
              </Button>
            )}
          </Paper>

          <IconButton
            onClick={handleClickFilter}
            sx={{
              // backgroundColor: openModal ? '#344054' : '#fff',
              px: '5px 0px',
              //   backgroundColor: "primary.B008",
              mx: 2,
              borderRadius: '8px',
            }}
            aria-label="menu"
          >
            {openModal ? (
              <FilterListOffIcon sx={{ color: 'primary.main' }} />
            ) : (
              <FilterListIcon sx={{ color: 'primary.main' }} />
            )}
          </IconButton>
          <Popover
            id={id}
            open={openModal}
            anchorEl={anchorE2}
            onClose={handleCloseFilter}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <MIniModalCourseFilter
              handleResetFilter={handleResetFilter}
              handleFilterCourse={handleFilterCourse}
              handleCloseFilter={handleCloseFilter}
              handleChange={handleChange}
              filter={filter}
              level={level}
            />
          </Popover>

          {/* <ExportUserList /> */}
          {role === 'admin' && (
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
              onClick={handleOpen}
            >
              <i style={{ fontSize: '17px', marginRight: '6px' }} className="ri-add-fill"></i> Create Course
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default CourseHeader;
