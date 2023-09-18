import { Box } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  checkInProjectDrawerById,
  checkOutProjectDrawerById,
  getMyWorkHistoryById,
  getUsersWorkHistoryById,
} from "../../../../features/slice/projectDrawerSlice";
import { clearUserWorkingProject, updateUserWorkingProject } from "../../../../features/slice/userSlice";
import dataBuilder from "../../../shared/CustomTable/dataBuilder";
import fieldBuilder from "../../../shared/CustomTable/fieldBuilder";
import { singleDetailsFields } from "../FIlterOptions";
import useAllFunc from "../Hooks/useAllFunc";
import Project2DetailsModal from "../Project2Details/Project2DetailsModal";
import ProjectTable2 from "../ProjectTable2";
import ProjectDetailsHeader from "./ProjectDetailsHeader";

import { useAlert } from "react-alert";
import CheckOutModal from "./CheckOutModal";
import DetailsPage from "./DetailsPage";

const FullProjectDetails = () => {
  const { currentlyCheckedInProject } = useSelector((state) => state.user.user);
  const { isLoading, projectDrawer, usersWorkHistory, usersWorkHistoryCount } = useSelector(
    (state) => state.projectDrawer
  );
  const { role } = useSelector((state) => state.user.user);

  const [value, setValue] = React.useState(projectDrawer.project_status);
  const [detailCol, setDetailCol] = useState([]);
  const [detailRow, setDetailRow] = useState([]);
  console.log("🚀 ~ file: FullProjectDetails.jsx:34 ~ FullProjectDetails ~ detailRow:", detailRow);

  const { id } = useParams();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const alert = useAlert();
  const dispatch = useDispatch();
  const [isDisable, setIsDisable] = useState(false);
  const [checkOutDisable, setCheckOutDisable] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [isLoadingDetails, setIsLoadingDetails] = useState(true);

  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });

  console.log(usersWorkHistory);
  useEffect(() => {
    setIsLoadingDetails(false);
    if (!isLoadingDetails) {
      setDetailCol(fieldBuilder(singleDetailsFields));
      setDetailRow(dataBuilder(usersWorkHistory));

      // user  currentlyCheckedInProject field not available
      if (!currentlyCheckedInProject || currentlyCheckedInProject === null) {
        setIsDisable(false);
      }
      // user  currentlyCheckedInProject field match with id

      if (currentlyCheckedInProject) {
        setIsDisable(true);
      }
    }
  }, [usersWorkHistory, currentlyCheckedInProject, pagination, id, isLoadingDetails]);

  const { detailsProjectOpen, handleProjectDetailsOpen, handleDetailsProjectClose, handleId, filteredCol } =
    useAllFunc();

  const handleDetailButton = () => {
    navigate(`/detailsInfo/${id}`);
  };

  const handleCheckInButton = () => {
    const data = { id: id };
    if (!isLoading) {
      setIsDisable(true);
    }
    dispatch(checkInProjectDrawerById(data)).then((action) => {
      if (action.payload?.status === 200) {
        dispatch(updateUserWorkingProject(data.id));
        alert.show(action.payload.data.message, { type: "success" });
        setIsDisable(true);
      } else {
        alert.show(action.error.message, { type: "error" });
        setIsDisable(false);
      }
    });
  };
  const handleCheckOutButton = () => {
    const data = { id: id };
    if (!isLoading) {
      setCheckOutDisable(true);
    }
    dispatch(checkOutProjectDrawerById(data)).then((action) => {
      if (action.payload?.status === 200) {
        dispatch(clearUserWorkingProject());
        alert.show(action.payload.data.message, { type: "success" });
        setIsDisable(false);
        setCheckOutDisable(false);
        setOpen(false);
      } else if (action.error) {
        alert.show(action.error.message, { type: "error" });
        setIsDisable(true);
        setCheckOutDisable(false);
        setOpen(false);
      } else {
        alert.show(action.error.message, { type: "error" });
        setIsDisable(true);
        setCheckOutDisable(false);
        setOpen(false);
      }
    });
  };

  const handleChangePagination = useCallback(() => {
    if (role === "admin") {
      dispatch(
        getUsersWorkHistoryById({
          pagination,
          ascDescOption: filteredCol,
          id: projectDrawer._id,
        })
      );
    } else {
      dispatch(
        getMyWorkHistoryById({
          pagination,
          ascDescOption: filteredCol,
          id: projectDrawer._id,
        })
      );
    }
  }, [dispatch, pagination, filteredCol, projectDrawer._id]);

  return (
    <Box className="projectBox">
      <Box sx={{ backgroundColor: "#F2F6FC", width: "100%" }}>
        {!isLoadingDetails && detailRow?.length > 0 && (
          <ProjectDetailsHeader
            handleOpen={handleOpen}
            role={role}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
            value={value}
            setValue={setValue}
            handleChange={handleChange}
            projectDrawer={projectDrawer}
            isDisable={isDisable}
            checkOutDisable={checkOutDisable}
            handleDetailButton={handleDetailButton}
            handleCheckInButton={handleCheckInButton}
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
      {!isLoadingDetails && (
        <Box
          sx={{
            width: "100%",
            mt: "10px",
            height: "100%",
          }}>
          {
            <ProjectTable2
              role={role}
              myColumn={detailCol}
              myRows={detailRow}
              pagination={pagination}
              setPagination={setPagination}
              handleChangePagination={handleChangePagination}
              totalItems={usersWorkHistoryCount}
              handleId={handleId}
              filteredCol={filteredCol}
              handleProjectDetailsOpen={handleProjectDetailsOpen}
            />
          }
        </Box>
      )}
      <Box>
        <CheckOutModal handleCheckOutButton={handleCheckOutButton} open={open} handleClose={handleClose} />
      </Box>
    </Box>
  );
};

export default FullProjectDetails;
