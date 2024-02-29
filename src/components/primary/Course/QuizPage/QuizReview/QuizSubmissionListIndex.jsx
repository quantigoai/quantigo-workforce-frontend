import {
  Box,
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllSubmissionOfQuizById } from '../../../../../features/slice/quizSlice';
import fieldBuilder from '../../../../shared/CustomTable/fieldBuilder';
import LoadingComponent from '../../../../shared/Loading/LoadingComponent';
import TableWrapper from '../../../ProjectLIstNew2/ExpTable/TableWrapper';
import { fieldsListQuiz } from '../../../ProjectLIstNew2/FIlterOptions';
import {
  HeaderBox,
  TablePaper,
} from '../../../ProjectLIstNew2/ProjectLIstIndex2';

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
  '@media(max - width: 1439px)': {
    fontSize: '12px',
  },
  '@media(min - width: 1920px)': {
    fontSize: '16px',
  },
  // hide last border
}));

const QuizSubmissionListIndex = () => {
  const params = useParams();
  const { id } = params;
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [allAnswerSubmission, setAllAnswerSubmission] = useState([]);
  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const handleClick = () => {};
  const handleDelete = () => {};
  useEffect(() => {
    dispatch(getAllSubmissionOfQuizById(id)).then((action) => {
      console.log(action.payload.data);
      setMyColumn(fieldBuilder(fieldsListQuiz, handleClick, handleDelete));
      setIsDataLoading(false);
      setAllAnswerSubmission(action.payload.data.allAnswerSubmission);
    });
  }, []);
  console.log(
    '🚀 ~ QuizSubmissionListIndex ~ allAnswerSubmission:',
    allAnswerSubmission,
  );

  const handleReviewQuiz = (id) => {
    console.log('🚀 ~ handleReviewQuiz ~ id:', id);
    navigate(`/test-quiz-review/${id}`);
  };

  return (
    <>
      <>
        {/* <Box sx={{ padding: '2%' }}>
        <Box sx={{ paddingTop: '%', paddingBottom: '2%' }}>
          <Typography variant="wpf_p3_medium_2">List of Quiz Review</Typography>
        </Box>
        <Box sx={{ width: '100%' }}>
          <TableContainer id="table-2">
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Annotator Name</StyledTableCell>
                  <StyledTableCell align="left">Submission Status</StyledTableCell>
                  <StyledTableCell align="left">Correct Answer</StyledTableCell>
                  <StyledTableCell align="left">Pending Answer</StyledTableCell>
                  <StyledTableCell align="left">Wrong Answer</StyledTableCell>
                  {(user.role === 'admin' || user.role === 'trainer') && (
                    <StyledTableCell align="left">Action</StyledTableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {allAnswerSubmission &&
                  allAnswerSubmission.map((item, i) => (
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
                          minWidth: '200px',
                        }}
                      >
                        <Typography variant="wpf_p4_medium">{item.user.name}</Typography>
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        sx={{
                          //   backgroundColor: row.paymentStatus === "Paid" ? "#EFF9F5" : "",
                          minWidth: '200px',
                        }}
                      >
                        <Typography variant="wpf_p4_medium">{capitalizeFirstLetter(item.submissionStatus)}</Typography>
                      </StyledTableCell>{' '}
                      <StyledTableCell
                        component="th"
                        scope="row"
                        sx={{
                          //   backgroundColor: row.paymentStatus === "Paid" ? "#EFF9F5" : "",
                          minWidth: '200px',
                        }}
                      >
                        <Typography variant="wpf_p4_medium">{item.correctAnswer}</Typography>
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        sx={{
                          //   backgroundColor: row.paymentStatus === "Paid" ? "#EFF9F5" : "",
                          minWidth: '200px',
                        }}
                      >
                        <Typography variant="wpf_p4_medium">{item.pendingAnswer}</Typography>
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        sx={{
                          //   backgroundColor: row.paymentStatus === "Paid" ? "#EFF9F5" : "",
                          minWidth: '200px',
                        }}
                      >
                        <Typography variant="wpf_p4_medium">{item.wrongAnswer}</Typography>
                      </StyledTableCell>
                      {(user.role === 'admin' || user.role === 'trainer') && (
                        <StyledTableCell
                          component="th"
                          scope="row"
                          sx={{
                            //   backgroundColor: row.paymentStatus === "Paid" ? "#EFF9F5" : "",
                            minWidth: '200px',
                          }}
                        >
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: '#2D58FF', color: '#FFFFFF' }}
                            onClick={() => handleReviewQuiz(item._id)}
                          >
                            Review{' '}
                          </Button>
                        </StyledTableCell>
                      )}
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box> */}
      </>
      <Box className="content">
        {/* TODO Filter functionality need to be checked for last page  */}
        <HeaderBox sx={{ backgroundColor: '' }}>
          {/* <ProjectHeader
            isFilter={isFilter}
            role={user.role}
            handleIsFilter={handleIsFilter}
            handleProjectCreateOpen={() => setCreateProjectOpen(true)}
            handleSearch={handleSearch}
            setSearch={setSearch}
            search={search}
            searchRef={searchRef}
            clearSearch={clearSearch}
          /> */}

          {/* <ProjectSelectFIlter
            isFilter={isFilter}
            handleChangeAnnotatorFilter={handleChangeAnnotatorFilter}
            role={user.role}
            handleChangeCheck={handleChangeCheck}
            checked={checked}
            filterPDR={filterPDR}
            platformOptions={platformOptions}
            statusOptions={statusOptions}
            projectTypeOptions={projectTypeOptions}
            handleChange={handleChange}
            handleClearFilter={handleClearFilter}
            filterValue={filterValue}
            skills={skills}
            onSubmit={onSubmit}
            annotatorPlatform={annotatorPlatform}
          /> */}
        </HeaderBox>

        <Box className="contentBody">
          <TablePaper sx={{ backgroundColor: '' }}>
            {isDataLoading ? (
              <LoadingComponent />
            ) : (
              <TableWrapper
                role={user.role}
                // handleDetailsPage={handleDetailsPage}
                handleClick={handleClick}
                handleDelete={handleDelete}
                myColumn={myColumn}
                myRows={myRows}
                allAnswerSubmission={allAnswerSubmission}
                // pagination={pagination}
                // setPagination={setPagination}
                // handleId={handleId}
                // filteredCol={filteredCol}
                // handleProjectDetailsOpen={handleProjectDetailsOpen}
                // isChildDataLoading={isChildDataLoading}
                // setIsChildDataLoading={setIsChildDataLoading}
                setMyRows={setMyRows}
              />
            )}

            {/* <PaginationTable
              pagination={pagination}
              setPagination={setPagination}
              setFilterValue={setFilterValue}
              setFilteredCol={setFilteredCol}
            /> */}
          </TablePaper>
        </Box>
      </Box>
    </>
  );
};

export default QuizSubmissionListIndex;
