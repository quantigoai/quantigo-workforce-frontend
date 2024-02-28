import {
  Alert,
  Box,
  Button,
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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllSubmissionOfQuizById, getSubmittedQuiz } from "../../../../../features/slice/quizSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: "#FAFCFF",
    color: "#5A6B89",
    padding: "8px",
    // height: "0px",
  },
  [`&.${tableCellClasses.body}`]: {
    // fontSize: 14,
    // backgroundColor: "#EFF9F5",
    padding: "8px",
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // "&:nth-of-type(odd)": {
  //   backgroundColor: "#FFFFFF",
  // },
  // "&:nth-of-type(even)": {
  //   backgroundColor: "#FFFFFF",
  // },
  "@media(max - width: 1439px)": {
    fontSize: "12px",
  },
  "@media(min - width: 1920px)": {
    fontSize: "16px",
  },
  // hide last border
}));

const QuizSubmissionListIndex = () => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [allAnswerSubmission, setAllAnswerSubmission] = useState([]);
  console.log("🚀 ~ QuizSubmissionListIndex ~ allAnswerSubmission:", allAnswerSubmission);
  console.log("🚀 ~ QuizSubmissionListIndex ~ id:", id);
  useEffect(() => {
    dispatch(getAllSubmissionOfQuizById(id)).then((action) => {
      console.log(action.payload.data);
      setAllAnswerSubmission(action.payload.data.allAnswerSubmission);
    });
  }, []);

  const handleReviewQuiz = (id) => {
    console.log("🚀 ~ handleReviewQuiz ~ id:", id);
    navigate(`/test-quiz-review/${id}`);
  };
  return (
    <>
      <Box>
        <Box sx={{ paddingTop: "2%", paddingBottom: "2%" }}>
          <Typography variant='wpf_p3_medium_2'>List of Quiz Review</Typography>
        </Box>
        <Box>
          <TableContainer id='table-2'>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell>Annotator Name</StyledTableCell>
                  <StyledTableCell align='left'>submissionStatus</StyledTableCell>
                  <StyledTableCell align='left'>correctAnswer</StyledTableCell>
                  <StyledTableCell align='left'>pendingAnswer</StyledTableCell>
                  <StyledTableCell align='left'>wrongAnswer</StyledTableCell>
                  <StyledTableCell align='left'>action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allAnswerSubmission &&
                  allAnswerSubmission.map((item) => (
                    <StyledTableRow
                      //   key={i}
                      sx={{
                        height: "34px",
                      }}
                    >
                      <StyledTableCell
                        component='th'
                        scope='row'
                        sx={{
                          //   backgroundColor: row.paymentStatus === "Paid" ? "#EFF9F5" : "",
                          minWidth: "300px",
                        }}
                      >
                        <Typography variant='wpf_p4_medium'>{item.user.name}</Typography>
                      </StyledTableCell>
                      <StyledTableCell
                        component='th'
                        scope='row'
                        sx={{
                          //   backgroundColor: row.paymentStatus === "Paid" ? "#EFF9F5" : "",
                          minWidth: "300px",
                        }}
                      >
                        <Typography variant='wpf_p4_medium'>{item.submissionStatus}</Typography>
                      </StyledTableCell>{" "}
                      <StyledTableCell
                        component='th'
                        scope='row'
                        sx={{
                          //   backgroundColor: row.paymentStatus === "Paid" ? "#EFF9F5" : "",
                          minWidth: "300px",
                        }}
                      >
                        <Typography variant='wpf_p4_medium'>{item.correctAnswer}</Typography>
                      </StyledTableCell>
                      <StyledTableCell
                        component='th'
                        scope='row'
                        sx={{
                          //   backgroundColor: row.paymentStatus === "Paid" ? "#EFF9F5" : "",
                          minWidth: "300px",
                        }}
                      >
                        <Typography variant='wpf_p4_medium'>{item.pendingAnswer}</Typography>
                      </StyledTableCell>
                      <StyledTableCell
                        component='th'
                        scope='row'
                        sx={{
                          //   backgroundColor: row.paymentStatus === "Paid" ? "#EFF9F5" : "",
                          minWidth: "300px",
                        }}
                      >
                        <Typography variant='wpf_p4_medium'>{item.wrongAnswer}</Typography>
                      </StyledTableCell>
                      <StyledTableCell
                        component='th'
                        scope='row'
                        sx={{
                          //   backgroundColor: row.paymentStatus === "Paid" ? "#EFF9F5" : "",
                          minWidth: "300px",
                        }}
                      >
                        <Button onClick={() => handleReviewQuiz(item._id)}>Review </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default QuizSubmissionListIndex;
