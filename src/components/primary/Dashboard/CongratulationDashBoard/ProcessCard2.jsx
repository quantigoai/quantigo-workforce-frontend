import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import confirmIcon from "../../../../assets/images/confirmprocess.svg";

export const defaultIndex = (user) => {
  if (user.isEmailVerified) {
    return 2;
  }
  if (user.isEmailVerified && user.isVerified) {
    return 2;
  }
  return 1;
};
const showCompleteIcon = (Id, user) => {
  if (Id === 1) {
    return true;
  }
  if (Id === 2 && user.isEmailVerified) {
    return true;
  }
  if (Id === 3 && user.isVerified) {
    return true;
  }
  return false;
};
const showContinueButton = (Id, user) => {
  if (Id === 1) {
    return false;
  }
  if (Id === 2 && !user.isEmailVerified) {
    return true;
  }
  if (Id === 3 && user.isEmailVerified && !user.isVerified) {
    return true;
  }
  return false;
};

const ProcessCard2 = ({ item }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: '140px',
        border: item.active ? '2px solid #EFF9F5' : '2px solid #EAECF0',
        backgroundColor: showCompleteIcon(item._id, user)
          ? 'green.801'
          : 'neutral.N000',
        borderRadius: '12px',
        alignItems: 'center',
        paddingLeft: '7%',
      }}
    >
      {showCompleteIcon(item._id, user) ? (
        <Box
          sx={{
            display: 'flex',
            height: '30%',
            justifyContent: 'flex-end',
            paddingRight: '2%',
          }}
        >
          <img style={{ width: '20px' }} src={confirmIcon} />
        </Box>
      ) : (
        <Box
          sx={{ display: 'flex', height: '0%', justifyContent: 'flex-end' }}
        ></Box>
      )}

      <Box
        sx={{
          display: 'flex',
          alignItems: !showCompleteIcon(item._id, user) && 'center',
          width: '100%',
          height: showCompleteIcon(item._id, user) ? '70%' : '100%',
        }}
      >
        <Box>
          <img src={item.image} alt="" />
        </Box>
        <Box sx={{ paddingLeft: '20px' }}>
          <Grid container>
            <Typography
              variant="wpf_p2_semiBold"
              sx={{ color: 'neutral.N300' }}
            >
              {item.header} <i className="ri-arrow-right-up-line"></i>
            </Typography>
          </Grid>
          <Grid container sx={{ paddingRight: '3%' }}>
            {' '}
            <Typography variant="wpf_p4_regular" sx={{ color: 'neutral.N300' }}>
              {item.describe}
            </Typography>
          </Grid>
          <Grid container>
            {!showCompleteIcon(item._id, user) &&
              showContinueButton(item._id, user) && (
                <Link>
                  <Box
                    onClick={() => {
                      navigate(item.navigationLink);
                    }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      paddingTop: '2%',
                    }}
                  >
                    <Typography
                      variant="wpf_p3_semiBold"
                      sx={{ pr: '0', color: 'primary.B200', cursor: 'pointer' }}
                    >
                      Continue
                    </Typography>
                    <KeyboardArrowRightIcon
                      sx={{
                        paddingTop: '2%',
                        pl: 0,
                        ml: 0,
                        color: 'neutral.N300',
                        height: { lg: '16px', xl: '18px', xxl: '23px' },
                        width: { lg: '16px', xl: '18px', xxl: '23px' },
                      }}
                    />
                  </Box>
                </Link>
              )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProcessCard2;
