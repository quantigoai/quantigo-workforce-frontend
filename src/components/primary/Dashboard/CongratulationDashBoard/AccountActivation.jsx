import {Box} from '@mui/material';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setActivePath} from '../../../../features/slice/activePathSlice';
import DashboardDocument from '../DashBoardForDocument/DashboardDocument';
import {useNavigate} from 'react-router-dom';

const AccountActivation = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.isVerified) {
      navigate('/');
    } else {
      dispatch(setActivePath('Verification'));
    }
  }, []);

  return (
    <>
      <Box sx={{ padding: '1%' }}>
        <DashboardDocument />
      </Box>
    </>
  );
};

export default AccountActivation;
