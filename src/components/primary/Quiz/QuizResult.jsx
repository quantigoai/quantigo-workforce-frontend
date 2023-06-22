/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Quiz/QuizResult.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, January 4th 2023, 12:38:03 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */
import {Box, Grid, Paper, TableContainer, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import {useSelector} from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const QuizResult = () => {
  const { result } = useSelector((state) => state.quiz.result);
 
  return (
     <>
      {Object.keys(result).length ? (
        <Box sx={{ display: "flex", margin: "auto", justifyContent: "center" }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h4">Quiz Result</Typography>
            </Grid>

            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell>Course Name</StyledTableCell>
                      <StyledTableCell>Quiz No</StyledTableCell>
                      <StyledTableCell>Submitted By</StyledTableCell>
                      {/* <TableCell>Correct Answer</TableCell>
                  <TableCell>Your Answer</TableCell> */}
                      <StyledTableCell>Score</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {/* {result.map((item, index) => ( */}
                    <StyledTableRow>
                      <StyledTableCell>{result.course.name}</StyledTableCell>
                      <StyledTableCell>1</StyledTableCell>
                      <StyledTableCell>{result.user.name}</StyledTableCell>
                      <StyledTableCell>{result.score}</StyledTableCell>
                    </StyledTableRow>
                    {/* ))} */}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <>No Data found</>
      )}
    </>
  );
};

export default QuizResult;
