import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { emailVerificationLink } from '../../../../features/slice/userSlice';
import { LoadingButtonStyle } from '../Login/Login';

const paperstyleResendEmail = {
  backgroundColor: 'neutral.N100',
  padding: '3%',
  width: '100%',
  height: '100%',
  borderRadius: '2px',
  justifyContent: 'center',
};
const ButtonStyle = styled(Button)({
  backgroundColor: '#2D58FF',
  width: '20%',
  height: '40px',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#FF9A45',
    color: '#1D1D1D',
  },
});
const EmailVerificationAfterLogin = () => {
  const params = useParams();
  const { id, token } = params;
  const dispatch = useDispatch();
  const data = { id, token };
  const [isVerified, setIsVerified] = useState(false);
  const [message, setMessage] = useState('');

  const { isLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(emailVerificationLink(data)).then((action) => {
      if (action.error) {
        setMessage(action.error.message);
      } else {
        // TODO update user
        setMessage(action.payload.data.message);
      }
    });
  }, [dispatch]);

  const navigate = useNavigate();
  return (
    <>
      <>
        {!isLoading && (
          <Box
            sx={{
              backgroundColor: 'neutral.N100',
              height: '100%',
              width: '100%',
              paddingLeft: '1%',
            }}
          >
            <Paper elevation={0} style={paperstyleResendEmail}>
              <Grid
                container
                sx={{ justifyContent: 'center', paddingTop: '7%' }}
              >
                <Typography variant="h4" sx={{ color: 'neutral.N300' }}>
                  {/* Your Account is {isVerified ? "Verified" : "Not Verified"} */}
                  {message}
                </Typography>
              </Grid>

              <Box
                sx={{
                  width: {
                    lg: '24%',
                    xl: '17%',
                    xxl: '13% ',
                  },
                  margin: 'auto',
                  mt: 3,
                }}
              >
                <LoadingButtonStyle
                  fullWidth
                  color="inherit"
                  size="large"
                  // type="submit"
                  variant="contained"
                  loading={isLoading}
                  sx={{ textTransform: 'none', borderRadius: '8px' }}
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  Back to Dashboard
                </LoadingButtonStyle>
              </Box>
            </Paper>
          </Box>
        )}
      </>
    </>
  );
};

export default EmailVerificationAfterLogin;
