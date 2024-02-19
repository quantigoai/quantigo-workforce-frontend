import { Box, Button, Grid, IconButton, InputBase, Paper, Typography } from '@mui/material';
import CommonHeader from '../../../shared/CustomComponenet/CommonHeader/CommonHeader';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
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
        <Box sx={{ width: '30%', padding: '8px 16px' }}>
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
            <Typography sx={{ opacity: '0.7' }} variant="wpf_p3_regular" color={'neutral.750'}>
              {courseCount === 1 ? courseCount + ' Result' : courseCount + ' Results'} found
            </Typography>
          </Grid>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 20px',
          }}
        >
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
            // onClick={handleIsFilter}
            sx={{
              px: '5px 0px',
              //   backgroundColor: "primary.B008",
              mx: 2,
              borderRadius: '8px',
            }}
            aria-label="menu"
          >
            <FilterListIcon sx={{ color: 'primary.main' }} />
          </IconButton>

          {/* <ExportUserList /> */}
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
        </Box>
      </Box>
    </>
  );
};

export default CourseHeader;
