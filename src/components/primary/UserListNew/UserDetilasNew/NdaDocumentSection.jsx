import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import ArrowIcon from '../../../../assets/images/dashboardIcon/ArrowIcon.svg';
import ViewIcon from '../../../../assets/images/dashboardIcon/ViewIcon.svg';
import NidDetails from '../../Users/NidDetals/NidDetails';

const styleBtn = {
  width: '100%',
  textTransform: 'none',
  backgroundColor: 'primary.B008',
  color: '#2E58FF',
  borderRadius: '8px',
  border: '1px solid #F4F7FE',
  '&:hover': {
    backgroundColor: 'primary.B008',
    color: '#2E58FF',
    border: '1px solid #2E58FF',
  },
};
const NdaDocumentSection = ({ user, data }) => {
  console.log('🚀 ~ NdaDocumentSection ~ data:', data);
  const [openModal, setOpenModal] = React.useState(false);
  const [documentsImage, setDocumentsImage] = useState(data?.documentsImage);
  const [documentsType, setDocumentsType] = useState(data?.documentsType);
  const [documentsNo, setDocumentsNo] = useState(data?.documentNo);
  const [userName, setUserName] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_APP_SERVER_URL;
  const handleClick = (signNda) => {
    window.open(signNda);
  };
  const handleDetailNid = (documentImage, documentNo, documentType, name) => {
    setOpenModal(true);

    setDocumentsNo(documentNo);
    setDocumentsType(documentType);
    setUserName(name);
    const id = user._id;
    // axios
    //   .get(`${BACKEND_URL}/users/get-user-documents/${id}`, {
    //     headers: {
    //       Authorization: `Bearer ${realToken()}`,
    //     },
    //   })
    //   .then((res) => {
    //     setDocumentsImage(res.data.documentsImage);
    //     console.log(res.data.documentsImage);
    //   });
  };
  const handleClose = () => setOpenModal(false);
  const isDisabled = !data?.documentsImage.length;
  return (
    <>
      <Grid container sx={{ padding: '2%' }}>
        <Grid item xs={6} sx={{ paddingRight: '2%' }}>
          <Button
            sx={styleBtn}
            disabled={!data?.documentsImage.length}
            onClick={() =>
              handleDetailNid(
                data?.documentsImage,
                data?.documentNo,
                data?.documentsType,
                data?.name,
              )
            }
          >
            <Typography
              variant="wpf_p3_medium"
              color={data?.documentNo ? 'primary.B200' : ''}
              sx={{
                paddingRight: '4%',
                filter: isDisabled ? 'grayscale(100%) opacity(50%)' : '',
              }}
            >
              Document
            </Typography>
            <img
              style={{
                filter: isDisabled ? 'grayscale(100%) opacity(50%)' : '',
              }}
              src={ViewIcon}
            />
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={styleBtn}
            disabled={!data?.signImage}
            onClick={() => handleClick(data?.signImage)}
          >
            <Typography
              variant="wpf_p3_medium"
              color={data?.signImage ? 'primary.B200' : ''}
              sx={{
                paddingRight: '4%',
                filter: !data?.signImage ? 'grayscale(100%) opacity(50%)' : '',
              }}
            >
              NDA
            </Typography>
            <img
              style={{
                filter: !data?.signImage ? 'grayscale(100%) opacity(50%)' : '',
              }}
              src={ArrowIcon}
            />
          </Button>
        </Grid>
      </Grid>
      <NidDetails
        userId={user._id}
        openModal={openModal}
        handleClose={handleClose}
        documentImage={documentsImage}
        documentsNo={documentsNo}
        documentsType={documentsType}
        userName={userName}
      />
    </>
  );
};

export default NdaDocumentSection;
