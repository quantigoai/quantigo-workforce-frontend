/*
 * Filename: /home/tanzim/workstation/Office/quantigo-workforce-frontend/src/components/primary/ProjectLIstNew2/ProjectDetailsFull/DetailsUploadHourModal.jsx
 * Path: /home/tanzim/workstation/Office/quantigo-workforce-frontend
 * Created Date: Monday, October 23rd 2023, 3:07:06 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import { Box, Button, Grid, Modal, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Papa from 'papaparse';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import pdfSvg from '../../../../assets/images/csvIcon.png';
import deleteIcon from '../../../../assets/images/fi_trash-2.png';
// import csvFile from "../../../../assets/ndifile/Template_for_effective_hours - Sheet1.csv";
// import useToaster from "../../../../customHooks/useToaster";
import axios from 'axios';
import useToaster from '../../../../customHooks/useToaster';
import { updateProjectDrawerManually } from '../../../../features/slice/projectDrawerSlice';
import { realToken } from '../../../../helper/lib';
import ProjectModalHeader from '../ProjectModalHeader';
import CsvUploadField from './CsvUploadField';

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
const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",

  borderRadius: '2px',
  width: '100%',
  height: '40px',
  backgroundColor: '#2D58FF',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#FF9A45',
    color: '#1D1D1D',
  },
  '&:disabled': {
    backgroundColor: '#7c91df',
    color: '#FFFFFF',
  },
});

const DetailsUploadHourModal = ({ openModal, setOpen, setDataLoading }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  const [selectedFile, setSelectedFile] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [isError, setIsError] = useState(true);
  const toast = useToaster();

  const maxSize = 3 * 1024 * 1024;
  const dispatch = useDispatch();
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({});

  const handleClose = () => {
    setOpen(false);
    setCoverImageFile([]);
    setSelectedFile([]);
    setCoverImage(null);
  };

  const uploadRequest = async (data) => {
    try {
      return axios.patch(
        `${url}/project-drawer/upload-hours/${data.id}`,
        data.hoursData,
        {
          headers: {
            Authorization: `Bearer ${realToken()}`,
          },
          content: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };

  const isNumeric = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };
  const isValidQaiId = (value) => {
    const pattern = /^QAI_(DK||KH||SG||CD||MS)\d{4}$/;
    return pattern.test(value);
  };

  const handleUploadFile = (e) => {
    const file = e[0];

    if (!file || !file.name.toLowerCase().endsWith('.csv')) {
      // Handle invalid file type
      console.error('Invalid file type. Please upload a CSV file.');
      return;
    }

    // Use PapaParse to parse CSV file
    Papa.parse(file, {
      complete: (result) => {
        // Assuming CSV has headers
        const headers = result.meta.fields || [];

        // Your required headers
        // const requiredHeaders = ['userId', 'header2', 'header3'];
        const requiredHeaders = [
          'name',
          'workingHours',
          'QAI_ID',
          'paymentRate',
          'totalBill',
          'penalty',
          'bonus',
          'due',
          'paidAmount',
          'workingSkills',
        ];

        const missingHeaders = requiredHeaders.filter(
          (header) => !headers.includes(header),
        );
        const userIds = result.data.map((row) => row.QAI_ID);
        const uniqueUserIds = new Set(userIds);
        const invalidQaiId = result.data.some((row) => {
          if (row.QAI_ID) {
            return !isValidQaiId(row.QAI_ID);
          }
        });

        const invalidPaymentRate = result.data.some((row) => {
          if (row.paymentRate || row.paymentRate === '') {
            return !isNumeric(row.paymentRate);
          }
        });

        if (missingHeaders.length > 0) {
          console.log(`Missing headers: ${missingHeaders.join(', ')}`);
          setIsError(true);
          toast.trigger(`CSV headers is not in correct format.`, 'error');
        } else if (userIds.length !== uniqueUserIds.size) {
          console.log('UserIds must be unique.');
        } else if (invalidPaymentRate) {
          console.log('PaymentRate and TotalBill must be valid numbers.');
        } else if (invalidQaiId) {
          console.log('QAI_ID must follow the specified pattern.');
        } else {
          setIsError(false);
          setCoverImageFile(e[0]);
          setSelectedFile(e[0]);
          setIsSelected(true);
          const url = URL.createObjectURL(file);
          setCoverImage(url);
        }
      },
      header: true, // Assumes the first row is headers
    });
  };

  const handleImage = (e) => {
    setCoverImageFile(e[0]);
    setSelectedFile(e[0]);
    setIsSelected(true);
    const file = e[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCoverImage(url);
    }
    if (e.length === 0 || e[0].size > maxSize) {
      //   setStepper(1);
    } else {
      //   setStepper(3);
    }
  };

  const removeImage = () => {
    setIsError(true);
    setCoverImageFile([]);
    setSelectedFile([]);
    setCoverImage(null);
    // setStepper(1);
  };
  const url = import.meta.env.VITE_APP_SERVER_URL;

  useEffect(() => {
    console.log(isError);
  }, []);

  const handleSubmission = async () => {
    const formData = new FormData();
    formData.append('hoursData', selectedFile);
    const data = {
      id: projectDrawer._id,
      hoursData: formData,
    };
    handleClose();
    await toast.responsePromise(uploadRequest(data), setDataLoading, {
      initialMessage: 'Effective hours is Uploading...',
      inPending: () => {},
      afterSuccess: (data) => {
        dispatch(updateProjectDrawerManually(data.data.projectDrawer));
      },
      afterError: () => {},
    });
    // const response = await toast.promise(
    //   () => {
    //     try {
    //       return axios.patch(`${url}/project-drawer/upload-hours/${data.id}`, data.hoursData, {
    //         headers: {
    //           Authorization: `Bearer ${realToken()}`,
    //         },
    //         content: {
    //           "Content-Type": "multipart/form-data",
    //         },
    //       });
    //     } catch (error) {
    //       throw new Error(error.response.data.message);
    //     }
    //   },
    //   {
    //     pending: {
    //       render() {
    //         return "CSV is uploading...";
    //       },
    //       icon: true,
    //     },
    //     success: {
    //       render({ data }) {
    //         dispatch(updateProjectDrawerManually(data.data.projectDrawer));
    //         return `${data.data.message}`;
    //       },
    //       // other options
    //       icon: "🤙",
    //     },
    //     error: {
    //       render({ data }) {
    //         return data.response.data.message;
    //       },
    //     },
    //   }
    // );

    // .then((action) => {
    // if (action.payload?.status === 200) {
    //   toast.trigger(action.payload?.data.message, "success");
    //   // handleClose();
    // } else {
    //   toast.trigger("action.error.message", "error");
    //   // handleClose();
    // }
  };
  // const handleDownload = () => {};
  const handleDownload = () => {};

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
            height: { xl: '%', lg: '%' },
            width: { xl: '35%', lg: '40%' },
          }}
        >
          <Box sx={{ flex: '0 0 5%' }}>
            <Grid container sx={{ paddingRight: '0%' }}>
              <ProjectModalHeader
                handleCreateProjectClose={handleClose}
                modalTitle={'Upload Effective Hour'}
              />
            </Grid>
          </Box>

          <Box
            sx={{
              flex: '1',
              overflowY: 'auto',
              padding: '3%',
            }}
          >
            <Box>
              <Box
                sx={{
                  width: '100%',
                  paddingTop: '1%',
                  paddingBottom: '3%',
                  paddingLeft: '1%',
                  paddingRight: '1%',
                }}
              >
                <Grid container>
                  <a
                    href={
                      '/src/assets/ndifile/Template_for_effective_hours.csv'
                    }
                    download="Template_for_effective_hours-Sheet1.csv"
                    style={{ textDecoration: 'none', color: '#266AED' }}
                  >
                    <i className="ri-download-2-line"></i>
                    <Typography
                      variant="body"
                      sx={{ ml: 1, textTransform: 'none' }}
                    >
                      Download Reference CSV
                    </Typography>
                  </a>
                </Grid>
              </Box>
            </Box>

            <Box sx={{ paddingLeft: '1%', paddingRight: '1%' }}>
              <CsvUploadField
                handleImage={handleUploadFile}
                selectedFile={selectedFile}
              />
            </Box>

            <Box sx={{ paddingLeft: '1%', paddingRight: '1%' }}>
              <Typography
                sx={{
                  fontWeight: '500',
                  mt: '5px',
                  fontSize: '14px',
                  mb: '7px',
                }}
                variant="h6"
              >
                Attachment
              </Typography>

              <Stack
                sx={{
                  border: '1px solid #E6ECF5',
                  padding: '16px',
                  borderRadius: '8px',
                  backgroundColor: 'neutral.N600',
                  height: '75px',
                  color: 'neutral.700',
                }}
              >
                {!selectedFile?.name || selectedFile.size > maxSize ? (
                  <></>
                ) : (
                  <>
                    <Grid item xs={12} sx={{}}>
                      <Grid container sx={{ paddingRight: '2%' }}>
                        <Grid item xs={1} sx={{ paddingTop: '2%' }}>
                          <img src={pdfSvg} height={27} />
                        </Grid>
                        <Grid
                          item
                          xs={10}
                          sx={{
                            paddingTop: '2%',
                            textAlign: 'left',
                            paddingRight: '3%',
                            paddingLeft: '2%',
                          }}
                        >
                          <Typography variant="wpf_p3_medium">
                            {selectedFile?.name}
                          </Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Button onClick={removeImage}>
                            <img src={deleteIcon} />
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </>
                )}
              </Stack>
            </Box>
          </Box>

          <Box
            sx={{
              flex: '0 0 64px',
              borderTop: '2px solid #F2F6FC',
              backgroundColor: 'neutral.N000',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 2%',

              bottom: '0px',
              borderRadius: '8px',
            }}
          >
            <Grid container sx={{ padding: '2%' }}>
              <Grid item xs={6}>
                <Button
                  sx={{
                    width: '120px',
                    textTransform: 'none',
                    backgroundColor: 'primary.B008',
                    color: 'neutral.N650',
                    borderRadius: '8px',
                    '&:hover': {
                      backgroundColor: 'neutral.N600',
                      color: 'neutral.N650',
                    },
                  }}
                  onClick={() => handleClose()}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Grid container sx={{ justifyContent: 'right' }}>
                  <Button
                    type="submit"
                    // disabled={isError ||  !selectedFile?.name || selectedFile?.size > maxSize}
                    disabled={isError}
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
                        backgroundColor: '#2E58FF',
                        color: '#FFFFFF',
                        // border: "1px solid #2E58FF",
                      },
                    }}
                    onClick={handleSubmission}
                  >
                    Upload
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DetailsUploadHourModal;
