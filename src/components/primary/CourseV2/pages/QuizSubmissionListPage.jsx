import { Box, styled, TableCell, tableCellClasses, TableRow } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllSubmissionOfQuizById } from "../../../../features/slice/quizSlice";
import fieldBuilder from "../../../shared/CustomTable/fieldBuilder";
import { fieldsListQuiz } from "../../ProjectLIstNew2/FIlterOptions";
import { HeaderBox, TablePaper } from "../../ProjectLIstNew2/ProjectLIstIndex2";
import LoadingComponent from "../../../shared/Loading/LoadingComponent";
import TableWrapper from "../../ProjectLIstNew2/ExpTable/TableWrapper";
import PaginationTable from "../../ProjectLIstNew2/PaginationTable";
import QuizHeader from "../components/Quiz/QuizSubmission/QuizHeader";
import QuizHeading from "../components/Quiz/QuizSubmission/QuizHeading";

const QuizSubmissionListPage = () => {
  const params = useParams();
  const { quizId: id } = params;

  const { course, courseChapters } = useSelector((state) => state.course);

  const filterChapter = courseChapters.filter((chapter) => chapter?.quiz?.id === id);

  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [allAnswerSubmission, setAllAnswerSubmission] = useState([]);
  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [quizMeta, setQuizMeta] = useState({});
  const [submission, setSubmission] = useState();
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });

  const [ascDesc, setAscDesc] = useState({});
  const searchRef = React.useRef(null);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      currentPage: 0,
    }));
    setSearch(e.target.value);
  };
  const handleAscDesc = (field) => {
    setAscDesc((prev) => {
      const updatedData = { ...prev };
      if (prev?.hasOwnProperty(field)) {
        if (prev[field] === "asc") {
          return {
            ...prev,
            [field]: "desc",
          };
        } else {
          delete updatedData[field];
          return updatedData;
        }
      }
      return {
        ...prev,
        [field]: "asc",
      };
    });
  };
  const clearSearch = () => {
    setSearch("");
    searchRef.current.value = "";
  };
  const handleClick = (params) => {
    console.log("🚀 ~ handleClick ~ params:", params);
    navigate(`/course-new/get-user-submission/${params.id}`);
  };
  const handleDelete = () => {};
  useLayoutEffect(() => {
    dispatch(
      getAllSubmissionOfQuizById({
        pagination,
        id,
        search,
        ascDescOption: ascDesc,
      })
    ).then((action) => {
      setMyColumn(fieldBuilder(fieldsListQuiz, handleClick, handleDelete));
      setIsDataLoading(false);
      setAllAnswerSubmission(action.payload.data.allAnswerSubmission);
      setSubmission(action.payload.data);
      setQuizMeta(action.payload.data.meta);
    });
  }, [pagination, search, ascDesc]);

  return (
    <>
      <Box className='content'>
        {/* TODO Filter functionality need to be checked for last page  */}
        <HeaderBox sx={{ backgroundColor: "" }}>
          <QuizHeader
            handleSearch={handleSearch}
            setSearch={setSearch}
            search={search}
            searchRef={searchRef}
            clearSearch={clearSearch}
          />
          <QuizHeading course={course} filterChapter={filterChapter} />
        </HeaderBox>

        <Box className='contentBody'>
          <TablePaper sx={{ backgroundColor: "" }}>
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
                pagination={pagination}
                setPagination={setPagination}
                handleId={handleAscDesc}
                filteredCol={ascDesc}
                // handleProjectDetailsOpen={handleProjectDetailsOpen}
                // isChildDataLoading={isChildDataLoading}
                // setIsChildDataLoading={setIsChildDataLoading}
                setMyRows={setMyRows}
              />
            )}

            <PaginationTable
              pagination={pagination}
              setPagination={setPagination}
              quizMeta={quizMeta}
              submission={submission}
              // setFilterValue={setFilterValue}
              setFilteredCol={setAscDesc}
            />
          </TablePaper>
        </Box>
      </Box>
    </>
  );
};

export default QuizSubmissionListPage;
