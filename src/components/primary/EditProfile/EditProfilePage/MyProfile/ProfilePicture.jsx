import { Avatar, Box, Button, Chip, Grid, Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import editIcon from '../../../../../assets/images/EditIcon.svg';
import EditIconProfile from '../../../../../assets/images/Group.svg';
import { capitalizeFirstLetter } from '../../../../../helper/capitalizeFirstWord';
import CourseProgress from '../../../Course/CourseProgress/CourseProgress';
import ProfileProgress from './ProfileProgress';

const ProfilePicture = ({
  user,
  editAble,
  handleEditProfile,
  coverImage,
  handleImage,
  coverImageFile,
  profileImageChange,
}) => {
  const image = user.image;
  const maxSize = 1024 * 1024;
  return (
    <>
      <Stack
        sx={{
          // border: "1px solid #E6ECF5",
          // padding: "16px",
          borderRadius: '12px',
          backgroundColor: user.active ? 'neutral.N400' : '#F5E1E3',
          // backgroundColor:"blue",
          height: '90%',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <Grid container sx={{ padding: '1%', backgroundColor: '' }}>
          <Grid item xs={9}>
            <Grid container>
              {/* <Grid item xs={1.5} lg={2} sx={{}}> */}
              <Box sx={{ position: 'relative', paddingRight: '2%' }}>
                <Avatar
                  alt="Profile Picture"
                  src={!coverImage ? image : coverImage}
                  sx={{
                    height: { xxl: '85px', xl: '72px', lg: '72px' },
                    width: { xxl: '85px', xl: '72px', lg: '72px' },
                    // width: "100px",
                    // height: "100px",
                    filter: editAble && profileImageChange && 'brightness(65%)',
                    backgroundBlendMode: 'luminosity',
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: { xxl: '85px', xl: '72px', lg: '72px' },
                    width: { xxl: '85px', xl: '72px', lg: '72px' },
                    // width: "100px",
                    // height: "100px",
                  }}
                >
                  {editAble && profileImageChange && (
                    <>
                      <input
                        style={{ display: 'none' }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                        accept="image/png,  image/jpeg, image/jpg"
                        onChange={handleImage}
                        // onchange="handleImageChange"
                      />
                      <label htmlFor="upload-photo">
                        <IconButton
                          sx={{
                            border:
                              coverImageFile?.size > maxSize
                                ? '1px solid #ff1744'
                                : coverImageFile?.size < maxSize
                                ? '1px solid #00e676'
                                : '',
                            height: '100%',
                            width: '100%',
                            opacity: editAble && profileImageChange && 1,
                            zIndex: 2,
                          }}
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <img src={EditIconProfile} />
                          {/* <PhotoCameraIcon /> */}
                        </IconButton>
                      </label>
                    </>
                  )}
                </Box>
              </Box>
              {/* </Grid> */}
              <Grid item xs={7} sx={{ paddingTop: '2%' }}>
                <Grid container>
                  <Grid container>
                    <Box sx={{ paddingRight: '2%' }}>
                      <Typography
                        variant="wpf_p1_semiBold"
                        sx={{ color: 'neutral.750' }}
                      >
                        {user.firstName} {user.lastName}{' '}
                      </Typography>
                    </Box>
                    <Box sx={{ paddingRight: '2%' }}>
                      <Chip
                        sx={{
                          color: 'neutral.N000',
                          backgroundColor: 'primary.B200',
                          height: '20px',
                          // width: "75px",
                          borderRadius: '32px',
                        }}
                        // label="QAI_DK3454"
                        label={
                          <Typography variant="wpf_p5_medium">
                            {capitalizeFirstLetter(user.qaiUserName || '')}{' '}
                          </Typography>
                        }
                        // label={capitalizeFirstLetter(user.qaiUserName || "")}
                      />
                    </Box>
                    {!user.active && (
                      <Box>
                        <Chip
                          sx={{
                            color: 'neutral.N000',
                            backgroundColor: 'error.R001',
                            height: '20px',
                            fontSize: '10px',
                          }}
                          label="Account Deactivated"
                          // label={capitalizeFirstLetter(user.qaiUserName || "")}
                        />
                      </Box>
                    )}
                  </Grid>

                  <Grid container>
                    <Typography
                      variant="wpf_p4_regular"
                      sx={{ color: 'neutral.700' }}
                    >
                      {user.role === 'level_1_annotator'
                        ? 'Level 1 Annotator'
                        : user.role === 'level_2_annotator'
                        ? 'Level 2 Annotator'
                        : user.role === 'level_0_annotator'
                        ? 'Level 0 Annotator'
                        : user.role === 'level_3_annotator'
                        ? 'Level 3 Annotator'
                        : user.role === 'project_delivery_lead'
                        ? 'Project Delivery Lead'
                        : user.role === 'delivery_lead'
                        ? 'Delivery Lead'
                        : user.role === 'project_coordinator'
                        ? 'Project Coordinator'
                        : user.role === 'project_manager'
                        ? 'Project Manager'
                        : user.role === 'recruitment_manager'
                        ? 'Recruitment Manager'
                        : user.role === 'account_manager'
                        ? 'Account Manager'
                        : capitalizeFirstLetter(user.role)}
                    </Typography>
                  </Grid>
                  <Grid>
                    <ProfileProgress
                      percentage={user.profileCompletePercentage}
                    />
                    {/* <CourseProgress /> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{
              justifyContent: 'center',
              backgroundColor: '',
              paddingRight: '1%',
            }}
          >
            <Grid container sx={{ justifyContent: 'right', paddingTop: '10%' }}>
              {!editAble && (
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: '32px',
                    textTransform: 'none',
                    height: '34px',
                    width: '131px',
                  }}
                  onClick={() => handleEditProfile()}
                  disableRipple
                >
                  <Box sx={{ paddingRight: '10%' }}>
                    <Typography
                      sx={{ fontSize: { xl: '14px', xxl: '14px', lg: '10px' } }}
                    >
                      {' '}
                      Edit Profile
                    </Typography>
                  </Box>{' '}
                  <img src={editIcon} />{' '}
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default ProfilePicture;
