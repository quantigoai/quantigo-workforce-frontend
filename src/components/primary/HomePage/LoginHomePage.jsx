import { Box, keyframes, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { tokenCheck } from '../../../App';
import { alreadyLogin } from '../../../features/slice/userSlice';
import Login from '../Auth/Login/Login';
import CommonDesign from './CommonDesign';
import HeaderNav from './HeaderNav';
import './bd.css';

const colorbg = keyframes`
        "0%": {
          "backgroundPosition": "0 50%",
        },
        // "50%": {
        //   "backgroundPosition": "100% 50%",
        // },
        "100%": {
          "backgroundPosition": "0 50%",
        },
`;

const Keyframes = styled('div')({
  height: '100vh',
  // width: "100%",
  //   animation: "${colorbg} 7s ease infinite",
  //   background:
  //     "linear-gradient(90deg, #090080, #2D58FF,#FF9A45, #090080,#2D58FF)",
  //     @keyframes color: {
  //     "0%": {
  //       "backgroundPosition": "0 50%",
  //     },
  //     "50%": {
  //       "backgroundPosition": "100% 50%",
  //     },
  //     "100%": {
  //       "backgroundPosition": "0 50%",
  //     },
  //   },
});

const LoginHomePage = () => {
  const [isTokenLoading, setIsTokenLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    setIsTokenLoading(true);
    if (tokenCheck()) {
      dispatch(alreadyLogin(tokenCheck()))
        .then((res) => {
          setIsTokenLoading(false);
        })
        .catch((err) => {
          setIsTokenLoading(false);
        });
    }
    setIsTokenLoading(false);
  }, [dispatch]);
  // const navigate = useNavigate();

  return (
    <>
      {/* <Keyframes> */}
      {/* {!isTokenLoading && */}
      <Box className="container">
        <Box sx={{ height: '8%' }}>
          <HeaderNav />
        </Box>
        <Box sx={{ height: '92%' }}>
          <CommonDesign>
            <Login />
          </CommonDesign>
        </Box>
      </Box>
      {/* } */}
      {/* </Keyframes> */}
    </>
  );
};

export default LoginHomePage;
