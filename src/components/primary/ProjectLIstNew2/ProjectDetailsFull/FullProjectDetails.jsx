import { Box } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUsersWorkHistoryById } from "../../../../features/slice/projectDrawerSlice";
import dataBuilder from "../../../shared/CustomTable/dataBuilder";
import fieldBuilder from "../../../shared/CustomTable/fieldBuilder";
import { singleDetailsFields } from "../FIlterOptions";
import useAllFunc from "../Hooks/useAllFunc";
import Project2DetailsModal from "../Project2Details/Project2DetailsModal";
import ProjectTable2 from "../ProjectTable2";
import ProjectDetailsHeader from "./ProjectDetailsHeader";

const FullProjectDetails = () => {
  const { projectDrawer, usersWorkHistory, usersWorkHistoryCount } = useSelector((state) => state.projectDrawer);
  const [value, setValue] = React.useState(projectDrawer.project_status);
  const [detailCol, setDetailCol] = useState([]);
  const [detailRow, setDetailRow] = useState([]);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });

  useEffect(() => {
    setIsLoading(false);
  }, [projectDrawer]);

  useEffect(() => {
    setIsLoading(false);
    if (!isLoading) {
      setDetailCol(fieldBuilder(singleDetailsFields));
      setDetailRow(dataBuilder(usersWorkHistory));
    }
  }, [isLoading, usersWorkHistory]);

  const handleClick = (e) => {};
  const handleDelete = (e) => {};
  const {
    handleCreateProjectClose,
    createProjectOpen,
    detailsProjectOpen,
    handleProjectCreateOpen,
    handleProjectDetailsOpen,
    handleDetailsProjectClose,
    setCreateProjectOpen,
    handleClearFilter,
    filterValue,
    handleCount,
    handleId,
    filteredCol,
    handleIsFilter,
    isFilter,
  } = useAllFunc(detailCol);

  const handleDetailButton = () => {
    navigate("/detailsInfo");
  };
  const dispatch = useDispatch();

  const handleChangePagination = useCallback(() => {
    dispatch(
      getUsersWorkHistoryById({
        pagination,
        ascDescOption: filteredCol,
        id: projectDrawer._id,
      })
    );
    //   .then((res) => {
    //   if (res.error) {
    //     alert.show(res.error.message, { type: "error" });
    //   }
    // });
  }, [dispatch, pagination, filterValue, filteredCol]);

  return (
    <Box className="projectBox">
      <Box sx={{ backgroundColor: "#F2F6FC", width: "100%" }}>
        {!isLoading && (
          <ProjectDetailsHeader
            handleProjectDetailsOpen={handleProjectDetailsOpen}
            value={value}
            setValue={setValue}
            handleChange={handleChange}
            projectDrawer={projectDrawer}
            handleDetailButton={handleDetailButton}
          />
        )}
      </Box>
      {detailsProjectOpen && (
        <Box>
          <Project2DetailsModal
            detailsProjectOpen={detailsProjectOpen}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
            handleDetailsProjectClose={handleDetailsProjectClose}
          />
        </Box>
      )}
      <Box
        sx={{
          width: "100%",
          mt: "10px",
          height: "100%",
        }}
      >
        <ProjectTable2
          myColumn={detailCol}
          myRows={detailRow}
          handleCount={handleCount}
          pagination={pagination}
          setPagination={setPagination}
          handleChangePagination={handleChangePagination}
          totalItems={usersWorkHistoryCount}
          handleId={handleId}
          filteredCol={filteredCol}
          handleProjectDetailsOpen={handleProjectDetailsOpen}
        />
      </Box>
    </Box>
  );
};

export default FullProjectDetails;
