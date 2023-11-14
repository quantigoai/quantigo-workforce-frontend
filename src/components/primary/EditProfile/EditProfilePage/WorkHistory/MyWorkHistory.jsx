import {
  Alert,
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import starIcon from '../../../../../assets/images/StarIcon.svg';
import { getMyProjectWorkHistoryById } from '../../../../../features/slice/projectDrawerSlice';
import LoadingComponent from '../../../../shared/Loading/LoadingComponent';
import './index.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: "#FAFCFF",
    color: '#5A6B89',
    padding: '8px',
    // height: "0px",
  },
  [`&.${tableCellClasses.body}`]: {
    // fontSize: 14,
    // backgroundColor: "#EFF9F5",
    padding: '8px',
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: "#FFFFFF",
  // },
  // "&:nth-of-type(even)": {
  //   backgroundColor: "#FFFFFF",
  // },
  // hide last border
}));

const MyWorkHistory = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const { userProjectWorkHistory, isLoading } = useSelector(
    (state) => state.projectDrawer,
  );

  useEffect(() => {
    dispatch(getMyProjectWorkHistoryById(user._id));
  }, []);
  return (
    <Box>
      <Box sx={{ paddingTop: '2%', paddingBottom: '2%' }}>
        <Typography variant="wpf_p3_medium_2">List of Projects</Typography>
      </Box>
      <Box sx={{}}>
        <Stack
          sx={{
            // border: "1px solid #E6ECF5",
            borderRadius: '8px',
          }}
        >
          {isLoading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: { lg: '500px', xl: '620px', xxl: '680px' },
              }}
            >
              <LoadingComponent height={'100%'} />
            </Box>
          ) : (
            <>
              {userProjectWorkHistory?.usersCompletedProjects?.length ? (
                <TableContainer id="table-2">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell align="left">Hours</StyledTableCell>
                        <StyledTableCell align="left">Amount</StyledTableCell>
                        <StyledTableCell align="left">Payment</StyledTableCell>
                        <StyledTableCell align="left">Bonus</StyledTableCell>
                        <StyledTableCell align="left">
                          Penalty Rate
                        </StyledTableCell>
                        <StyledTableCell align="left">Rating</StyledTableCell>
                        <StyledTableCell align="left">
                          Payment Status
                        </StyledTableCell>
                        <StyledTableCell align="left">Details</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {userProjectWorkHistory &&
                        userProjectWorkHistory?.usersCompletedProjects?.map(
                          (row, i) => (
                            <StyledTableRow
                              key={i}
                              sx={{
                                height: '34px',
                              }}
                            >
                              <StyledTableCell
                                component="th"
                                scope="row"
                                // width={({ lg: "500px" }, { xl: "300px" }, { xxl: "600px" })}
                                sx={{
                                  backgroundColor:
                                    row.paymentStatus === 'Paid'
                                      ? '#EFF9F5'
                                      : '',
                                  // width: { lg: "600px", xl: "600px", xxl: "600px" },
                                  // width: "300px",
                                  minWidth: '300px',
                                  // minWidth: {
                                  //   lg: "300px",
                                  //   xl: "300px",
                                  //   xxl: "300px",
                                  // },
                                }}
                              >
                                <Typography variant="wpf_p4_medium">
                                  {row.projectDrawerName}
                                </Typography>
                              </StyledTableCell>
                              <StyledTableCell
                                align="left"
                                sx={{
                                  backgroundColor:
                                    row.paymentStatus === 'Paid'
                                      ? '#EFF9F5'
                                      : '',
                                }}
                              >
                                <Typography variant="wpf_p4_medium">
                                  {row.totalWorkingHours}
                                </Typography>
                              </StyledTableCell>
                              <StyledTableCell
                                align="left"
                                sx={{
                                  backgroundColor:
                                    row.paymentStatus === 'Paid'
                                      ? '#EFF9F5'
                                      : '',
                                }}
                              >
                                <Typography variant="wpf_p4_medium">
                                  &#2547;{row.totalBill.toLocaleString('em-us')}
                                </Typography>
                              </StyledTableCell>
                              <StyledTableCell
                                align="left"
                                sx={{
                                  backgroundColor:
                                    row.paymentStatus === 'Paid'
                                      ? '#EFF9F5'
                                      : '',
                                }}
                              >
                                <Typography variant="wpf_p4_medium">
                                  &#2547;
                                  {row.paymentRate.toLocaleString('em-us')}
                                </Typography>
                              </StyledTableCell>
                              <StyledTableCell
                                align="left"
                                sx={{
                                  backgroundColor:
                                    row.paymentStatus === 'Paid'
                                      ? '#EFF9F5'
                                      : '',
                                }}
                              >
                                <Typography variant="wpf_p4_medium">
                                  {row.bonus.toLocaleString('em-us')}%
                                </Typography>
                              </StyledTableCell>
                              <StyledTableCell
                                align="left"
                                sx={{
                                  backgroundColor:
                                    row.paymentStatus === 'Paid'
                                      ? '#EFF9F5'
                                      : '',
                                }}
                              >
                                <Typography variant="wpf_p4_medium">
                                  {row.penalty.toLocaleString('em-us')}%
                                </Typography>
                              </StyledTableCell>
                              <StyledTableCell
                                align="left"
                                sx={{
                                  backgroundColor:
                                    row.paymentStatus === 'Paid'
                                      ? '#EFF9F5'
                                      : '',
                                }}
                              >
                                <Typography variant="wpf_p4_medium">
                                  <img src={starIcon} /> {5} Star
                                </Typography>
                              </StyledTableCell>
                              <StyledTableCell
                                align="left"
                                sx={{
                                  backgroundColor:
                                    row.paymentStatus === 'Paid'
                                      ? '#EFF9F5'
                                      : '',
                                }}
                              >
                                <Typography
                                  variant="wpf_p4_medium"
                                  sx={{
                                    color:
                                      row.paymentStatus === 'Paid'
                                        ? '#36B37E'
                                        : '',
                                  }}
                                >
                                  {row.paymentStatus}
                                </Typography>
                              </StyledTableCell>
                              <StyledTableCell
                                className="tbody-last"
                                align="left"
                              >
                                <Typography variant="wpf_p4_medium">
                                  <Button
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
                                </Typography>
                              </StyledTableCell>
                            </StyledTableRow>
                          ),
                        )}
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : (
                <Alert severity="error">
                  No project work history data found!
                </Alert>
              )}
            </>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default MyWorkHistory;
