import { LoadingButton } from '@mui/lab';
import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CSVDownload } from 'react-csv';
import { useSelector } from 'react-redux';
import useToaster from '../../../../customHooks/useToaster';
import { realToken } from '../../../../helper/lib';
const url = import.meta.env.VITE_APP_SERVER_URL;

const DownloadEffectiveHours = () => {
  const { projectDrawer, isLoading } = useSelector(
    (state) => state.projectDrawer,
  );
  const [jsonData, setJsonData] = useState([]);
  const csvHeader = [
    { label: 'Quantigo ID', key: 'user.qaiUserName' },
    { label: 'Total Bill', key: 'totalBill' },
    { label: 'Penalty', key: 'penalty' },
    { label: 'Bonus', key: 'bonus' },
    { label: 'Payment Rate', key: 'paymentRate' },
    { label: 'Due Amount', key: 'dueAmount' },
    { label: 'Paid Amount', key: 'paidAmount' },
    { label: 'Total Working Hours Amount', key: 'totalWorkingHours' },
  ];

  const [initiateDownload, setInitiateDownload] = useState(false);

  useEffect(() => {
    if (jsonData?.length) {
      setInitiateDownload(true);
    }
  }, [jsonData]);

  useEffect(() => {
    if (initiateDownload) {
      setInitiateDownload(false);
    }
  }, [initiateDownload]);
  const toast = useToaster();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${url}/project-history/get-history/${projectDrawer._id}`,
        {
          headers: {
            Authorization: `Bearer ${realToken()}`,
          },
        },
      );
      const data = response.data.projectHistory.projectDrawerUsers;
      setJsonData(data);
    } catch (error) {
      toast.trigger(error.response.data.message, 'error');
    }
  };

  return (
    <>
      <LoadingButton
        loading={isLoading}
        sx={{
          backgroundColor: '#2E58FF',
          color: '#FFF',
          borderRadius: '6px',
          height: '30px',
          width: { lg: '170px', xl: '200px', xxl: '220px' },
          '&:hover': { backgroundColor: '#244EF5', color: '#FFF' },
          '&.Mui-disabled': {
            backgroundColor: '#B6C9F0',
            color: '#FFFFFF',
          },
          mr: 1,
        }}
        onClick={fetchData}
      >
        <i className="ri-download-2-line"></i>
        <Typography
          variant="wpf_h7_medium"
          sx={{ pl: 1, textTransform: 'none', color: '#FFF' }}
        >
          Download Effective Hour
        </Typography>
      </LoadingButton>
      {initiateDownload && (
        <CSVDownload data={jsonData} headers={csvHeader} target="_blank" />
      )}
    </>
  );
};

export default DownloadEffectiveHours;
