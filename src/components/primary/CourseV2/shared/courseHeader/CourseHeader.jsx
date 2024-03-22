import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../../../helper/capitalizeFirstWord';
import CourseEnrollNavigateButtons from '../../components/CourseEnrollNavigateButtons';
import CreateCourseButton from './CreateCourseButton';
import FilterIconButton from './FilterIconButton';
import SearchButton from './SearchButton';

const CourseHeader = () => {
  const { level } = useParams();
  const { user } = useSelector((state) => state.user);
  const adminRoles = ['admin', 'trainer'];
  const studentRoles = ['level_0_annotator', 'level_1_annotator', 'level_2_annotator', 'level_3_annotator', 'reviewer'];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: '15px',
      }}
    >
      <Box
        sx={{
          padding: '5px 10px',
          //   height: '70px',
          //   width: { xxl: '30%', xl: '40%', lg: '40%' },
        }}
      >
        <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='wpf_p1_semiBold'>{`List of ${
            level ? capitalizeFirstLetter(level) : ''
          } Courses`}</Typography>

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
        {studentRoles.includes(user.role) && <CourseEnrollNavigateButtons />}
        <SearchButton />
        <FilterIconButton />

        {adminRoles.includes(user.role) && <CreateCourseButton />}
      </Box>
    </Box>
  );
};

export default CourseHeader;
