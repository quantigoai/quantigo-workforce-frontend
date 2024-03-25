/*
 * File           : CourseHomepage.jsx
 * Project        : wmpfrontv2
 * Created Date   : Fr 22 Mar 2024 12:53:51
 * Description    : <<description>>
 *
 * -----------------------------------------------------
 * Author         : Tanzim Ahmed
 * Email          : tanzimahmed077@gmail.com
 * -----------------------------------------------------
 * Last Modified  : Fri Mar 22 2024
 * Modified By    : Tanzim Ahmed
 * -----------------------------------------------------
 * Copyright (c) 2024 Tanzim Ahmed
 * -----------------------------------------------------
 */
import { Box, Button, Grid, Typography } from '@mui/material';
import { default as React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getACourseByID, getAllChapterFromACourse } from '../../../../features/slice/courseSlice';
import LoadingComponent from '../../../shared/Loading/LoadingComponent';
import ChapterListShowIndex from '../components/CourseHomepage/ChapterListShowIndex';
import CourseHomePageCertificate from '../components/CourseHomepage/CourseHomePageCertificate';
import CourseHomePageHeader from '../components/CourseHomepage/CourseHomePageHeader';
import CourseInfoIndex from '../components/CourseHomepage/CourseInfoIndex';

const CourseHomepage = () => {
  const { isLoading, course } = useSelector((state) => state.course);
  const params = useParams();
  const { courseId: id } = params;

  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getACourseByID(id));
    dispatch(getAllChapterFromACourse(id));
  }, [id]);
  const handleCreateChapter = () => {
    navigate(`/course-new/create-chapter/${course._id}`);
  };

  return (
    <>
      {isLoading ? (
        <>
          <LoadingComponent />
        </>
      ) : (
        <>
          <Box
            sx={{
              height: '100%',
              overflowY: 'auto',
              '&::-webkit-scrollbar': {
                width: '0',
              },
            }}
          >
            <Box>
              <CourseHomePageHeader course={course} />
            </Box>

            <Box sx={{ backgroundColor: 'neutral.N000', paddingTop: '5px', padding: '10px' }}>
              <Grid container>
                <Grid item xs={9} sx={{ padding: '1%' }}>
                  {/* TODO separate component */}
                  <Grid container>
                    <Box
                      sx={{
                        width:
                          user.role === 'admin' || user.role === 'trainer'
                            ? { xxl: '80%', xl: '80%', lg: '70%' }
                            : '100%',
                      }}
                    >
                      <Typography variant='wpf_h5_Bold'>All Chapters</Typography>
                      <br />
                      <Typography variant='wpf_p3_regular'>
                        Prepare for a new career in the high-growth field of project management, no experience or degree
                        required. Get professional training designed by Google and get on the fastrack to a
                        competitively paid job.
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width:
                          user.role === 'admin' || user.role === 'trainer'
                            ? { xxl: '20%', xl: '20%', lg: '30%' }
                            : '0%',
                        justifyContent: 'end',
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      {(user.role === 'admin' || user.role === 'trainer') && (
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
                          variant='contained'
                          onClick={() => handleCreateChapter()}
                        >
                          <i style={{ fontSize: '17px', marginRight: '6px' }} className='ri-add-fill'></i> Create
                          Chapter
                        </Button>
                      )}
                    </Box>
                  </Grid>
                </Grid>

                <Grid item xs={3} sx={{ padding: '1%' }}>
                  <Box>
                    <Typography variant='wpf_h5_Bold'>Course Info</Typography>
                    <br />
                    <Typography variant='wpf_p3_regular'>
                      Gain insight into a topic and learn the fundamentals
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              <Grid container>
                <Grid item xs={9} sx={{ padding: '1%' }}>
                  <ChapterListShowIndex />
                </Grid>
                <Grid item xs={3} sx={{ padding: '1%' }}>
                  <CourseInfoIndex />
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ paddingTop: '5px', padding: '10px' }}>
              <CourseHomePageCertificate />
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default CourseHomepage;
