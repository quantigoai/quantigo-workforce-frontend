/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/shared/CustomTable/CustomButton.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Wednesday, August 9th 2023, 11:35:51 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import MainModal from './MainModal';

const CustomButton = ({
  params,
  handleClick,
  handleDelete,
  handleProjectDetailsOpen,
  role,
  pathname,
  handleReject,
  handleOpenNDA,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isEdit, setIsEdit] = React.useState(true);
  const { isDocumentsSubmitted, isNDAApproved, isNDASigned, isVerified } =
    params;

  const checkButtonDisable = () => {
    if (isNDASigned === false) {
      return true;
    } else if (
      isNDAApproved === 'submitted' &&
      isDocumentsSubmitted === 'submitted'
    ) {
      return false;
    }
    return true;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {(
        // role === 'admin' ||
        role === 'project_delivery_lead' ||
        role === 'project_manager') &&
        pathname === '/allprojects' && (
          <>
            <Button
              sx={{ color: '#2E58FF', paddingX: '5px', minWidth: '16px' }}
              onClick={() => {
                setIsEdit(true);
                handleClick(params);
              }}
            >
              <i className="ri-edit-line"></i>
            </Button>
            <Button
              sx={{ color: '#F04438', paddingX: '5px', minWidth: '16px' }}
              onClick={() => {
                setIsEdit(false);
              }}
            >
              <i onClick={handleOpen} className="ri-delete-bin-6-line"></i>
            </Button>
          </>
        )}
      {role === 'recruitment_manager' || role === 'admin' ? (
        <>
          {params.isVerified ? (
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="wpf_p4_regular" color="neutral.700">
                Verified
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                disabled={checkButtonDisable()}
                onClick={() => handleOpenNDA(params)}
                sx={{ padding: '0px', minWidth: '30px', fontSize: '16px' }}
              >
                <i
                  style={{ color: params.isVerified ? '#12B76A' : '' }}
                  className="ri-checkbox-circle-fill"
                ></i>
              </Button>

              <Button
                disabled={checkButtonDisable()}
                onClick={() => handleReject(params)}
                sx={{
                  padding: '0px',
                  minWidth: '25px',
                  fontSize: '16px',
                  filter: checkButtonDisable()
                    ? 'grayscale(100%) opacity(50%)'
                    : '',
                }}
              >
                <i
                  style={{ color: '#F04438' }}
                  className="ri-close-circle-fill"
                ></i>
              </Button>
            </Box>
          )}

          <Button
            onClick={() => handleProjectDetailsOpen(params)}
            sx={{
              textAlign: 'right',
              color: '#2E58FF',
              paddingX: '5px',
              minWidth: '16px',
              textTransform: 'none',
            }}
          >
            <i className="ri-eye-line"></i>
          </Button>
        </>
      ) : (
        <Button
          onClick={() => handleProjectDetailsOpen(params)}
          sx={{
            color: '#2E58FF',
            paddingX: '5px',
            minWidth: '16px',
            textTransform: 'none',
          }}
        >
          <i className="ri-eye-line"></i>
        </Button>
      )}

      <MainModal
        open={open}
        handleClose={handleClose}
        handleDelete={handleDelete}
        params={params}
        isEdit={isEdit}
      />
    </Box>
  );
};

export default CustomButton;
