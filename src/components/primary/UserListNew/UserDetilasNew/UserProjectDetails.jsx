import {
  Box,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import starIcon from '../../../../assets/images/StarIcon.svg';
import { realToken } from '../../../../helper/lib';
import LoadingComponent from '../../../shared/Loading/LoadingComponent';

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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const projectList = [
  {
    name: 'Document 01',
    endName: ' 23 May 2022',
    hours: '15 hrs',
    Rating: '5',
    status: 'Working',
    _id: 1,
  },
  {
    name: 'Document 02',
    endName: ' 23 May 2022',
    hours: '15 hrs',
    Rating: '5',
    status: 'Completed',
    _id: 2,
  },
  {
    name: 'Document 03',
    endName: ' 23 May 2022',
    hours: '15 hrs',
    Rating: '5',
    status: 'Completed',
    _id: 3,
  },
];
const annotationList = [
  {
    name: 'Document 01',

    hours: '15 hrs',
    _id: 1,
  },
  {
    name: 'Document 01',

    hours: '15 hrs',
    _id: 2,
  },
  {
    name: 'Document 01',

    hours: '15 hrs',
    _id: 3,
  },
  {
    name: 'Document 01',

    hours: '15 hrs',
    _id: 4,
  },
  {
    name: 'Document 01',

    hours: '15 hrs',
    _id: 5,
  },
  {
    name: 'Document 01',

    hours: '15 hrs',
    _id: 6,
  },
  {
    name: 'Document 01',

    hours: '15 hrs',
    _id: 6,
  },
  {
    name: 'Document 01',

    hours: '15 hrs',
    _id: 6,
  },
];
const UserProjectDetails = ({ id }) => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [data, setData] = useState([]);
  const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

  useEffect(() => {
    axios
      .get(`${serverUrl}/work-history/${id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      })
      .then((res) => {
        setData(res.data.workHistory);
        setIsDataLoading(false);
      });
  }, [id]);

  return (
    <>
      <Box sx={{ paddingTop: '2%', paddingBottom: '2%' }}>
        <Typography variant="wpf_p3_medium_2">List of Projects</Typography>
      </Box>
      <Box>
        <Stack
          sx={{
            border: '1px solid #E6ECF5',
            borderRadius: '8px',
          }}
        >
          {isDataLoading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
              }}
            >
              <LoadingComponent />
            </Box>
          ) : (
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="left">Hours</StyledTableCell>
                    <StyledTableCell align="left">Amount</StyledTableCell>
                    <StyledTableCell align="left">Rating</StyledTableCell>
                    <StyledTableCell align="left">
                      Payment Status
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data &&
                    data?.usersCompletedProjects?.map((row, i) => (
                      <StyledTableRow
                        key={i}
                        sx={{
                          height: '34px',
                        }}
                      >
                        <StyledTableCell
                          component="th"
                          scope="row"
                          sx={{
                            backgroundColor:
                              row.paymentStatus === 'Paid' ? '#EFF9F5' : '',
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
                              row.paymentStatus === 'Paid' ? '#EFF9F5' : '',
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
                              row.paymentStatus === 'Paid' ? '#EFF9F5' : '',
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
                              row.paymentStatus === 'Paid' ? '#EFF9F5' : '',
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
                              row.paymentStatus === 'Paid' ? '#EFF9F5' : '',
                          }}
                        >
                          <Typography
                            variant="wpf_p4_medium"
                            sx={{
                              color:
                                row.paymentStatus === 'Paid' ? '#36B37E' : '',
                            }}
                          >
                            {row.paymentStatus}
                          </Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Stack>
      </Box>
      {/* <Box sx={{ paddingTop: "2%", paddingBottom: "2%" }}>
        <Grid container>
          <Typography variant="wpf_p3_medium_2">List of Annotation</Typography>
        </Grid>
        <Box sx={{ paddingLeft: "1%", paddingTop: "2%", paddingBottom: "2%" }}>
          <Grid
            container
            spacing={0.5}
            sx={{
              // backgroundColor: "blue",
              border: "1px solid #E6ECF5",

              borderRadius: "8px",
            }}
          >
            {annotationList.map((item) => (
              <Grid
                key={item._id}
                item
                xs={4}
                // gap={1}
                sx={{ borderBottom: "1px solid #E6ECF5", borderRight: "1px solid #E6ECF5" }}
              >
                <Grid container sx={{ padding: "1%" }}>
                  <Grid item xs={7}>
                    <Typography variant="wpf_p4_medium" sx={{ color: "#5A6B89" }}>
                      {item.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography variant="wpf_p4_medium" sx={{ color: "#091E42" }}>
                      : {item.hours}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box> */}
    </>
  );
};

export default UserProjectDetails;
