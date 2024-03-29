/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Job/RejectModal/RejectModal.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 29th 2022, 12:43:06 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {
  Box,
  Button,
  Grid,
  Modal,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { LoadingButtonStyle } from '../../Auth/Login/Login';
import ProjectModalHeader from '../../ProjectLIstNew2/ProjectModalHeader';

export const MyTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    border: '2px solid #E6ECF5 !important',
    borderRadius: '8px',
  },
  '& .MuiInputBase-root': { height: '78%', fontSize: '14px' },
}));
export const MySelect = styled(TextField)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    border: '2px solid #E6ECF5 !important',
    borderRadius: '8px',
    height: '100%',
  },
  '& .MuiInputBase-root': { height: '100%', fontSize: '14px' },
  '@media (max-width: 1439px)': {
    '& .MuiInputBase-root': { height: '100%', fontSize: '12px' },
  },
  '@media (mix-width: 1920px)': {
    '& .MuiInputBase-root': { height: '100%', fontSize: '16px' },
  },
}));
const style = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '8px',
  p: 0,
  input: {
    color: 'black',
    height: '20px',
    borderRadius: '8px',
  },
  select: {
    height: '20px',
  },
};

const NdaRejectModal = ({
  openModal,
  handleClose,
  onSubmit,
  handleRejectCause,
  rejectionCause,
}) => {
  const { register, handleSubmit } = useForm();
  const { isLoading } = useSelector((state) => state.user);
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            height: { lg: '50%', xl: '50%', xxl: '38%' },
            width: { lg: '40%', xl: '35%' },
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Box>
                <ProjectModalHeader
                  handleCreateProjectClose={handleClose}
                  modalTitle={'Confirm Rejection'}
                />
              </Box>

              <Box>
                <Box style={{ padding: '3%' }}>
                  <Typography
                    variant="wpf_p4_medium"
                    sx={{
                      mb: 0,
                    }}
                  >
                    Status
                  </Typography>

                  <MySelect
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    variant="outlined"
                    fullWidth
                    disabled
                    defaultValue={'Rejected'}
                    // placeholder="Select"
                    // sx={{ height: '50%' }}
                  ></MySelect>
                  <Typography
                    variant="wpf_p4_medium"
                    sx={{
                      mb: 1,
                      paddingBottom: '0%',
                    }}
                  >
                    Rejection Cause <span style={{ color: 'red' }}>*</span>
                  </Typography>
                  <MyTextField
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={5}
                    InputProps={{ disableUnderline: true }}
                    onChange={(e) => handleRejectCause(e)}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  borderTop: '1px solid #F2F6FC',
                  backgroundColor: 'neutral.N000',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0 2%',

                  bottom: '0px',
                  borderRadius: '0 0 8px 8px',
                }}
              >
                <Grid container sx={{ padding: '2%' }}>
                  <Grid item xs={6}>
                    <Button
                      sx={{
                        width: '120px',
                        textTransform: 'none',
                        backgroundColor: '#F4F7FE',
                        color: '#62728F',
                        borderRadius: '8px',
                        '&:hover': {
                          backgroundColor: '#ddd',
                          color: '#62728F',
                        },
                      }}
                      onClick={() => handleClose()}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Grid container sx={{ justifyContent: 'right' }}>
                      <LoadingButtonStyle
                        loading={isLoading}
                        disabled={rejectionCause === ''}
                        type="submit"
                        sx={{
                          width: '128px',
                          textTransform: 'none',
                          backgroundColor: '#2E58FF',
                          color: '#FFFFFF',
                          borderRadius: '8px',
                          '&.Mui-disabled': {
                            background: '#B6C9F0',
                            color: '#FFFFFF',
                          },
                          '&:hover': {
                            backgroundColor: '#476CFF',
                            color: '#FFFFFF',
                          },
                        }}
                        // onClick={() => handleChange()}
                      >
                        Save Changes
                      </LoadingButtonStyle>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default NdaRejectModal;
