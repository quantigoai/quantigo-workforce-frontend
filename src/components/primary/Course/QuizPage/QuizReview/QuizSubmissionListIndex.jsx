import { Box, styled, TableCell, tableCellClasses, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllSubmissionOfQuizById } from '../../../../../features/slice/quizSlice';
import fieldBuilder from '../../../../shared/CustomTable/fieldBuilder';
import LoadingComponent from '../../../../shared/Loading/LoadingComponent';
import TableWrapper from '../../../ProjectLIstNew2/ExpTable/TableWrapper';
import { fieldsListQuiz } from '../../../ProjectLIstNew2/FIlterOptions';
import { HeaderBox, TablePaper } from '../../../ProjectLIstNew2/ProjectLIstIndex2';
import QuizHeader from './QuizHeader';

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
  const handleClick = () => {
    console.log('🚀 ~ handleReviewQuiz ~ id:', id);
    navigate(`/test-quiz-review/${id}`);
  };
  const handleDelete = () => {};
  useEffect(() => {
    dispatch(getAllSubmissionOfQuizById(id)).then((action) => {
      console.log(action.payload.data);
      setMyColumn(fieldBuilder(fieldsListQuiz, handleClick, handleDelete));
      setIsDataLoading(false);
      setAllAnswerSubmission(action.payload.data.allAnswerSubmission);
    });
  }, []);
  console.log('🚀 ~ QuizSubmissionListIndex ~ allAnswerSubmission:', allAnswerSubmission);

  return (
    <>
      <Box className="content">
        {/* TODO Filter functionality need to be checked for last page  */}
        <HeaderBox sx={{ backgroundColor: '' }}>
          <QuizHeader />
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
