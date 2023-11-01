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
import ProjectDetailsHeader from "./ProjectDetailsHeader";

import { addDays } from "date-fns";
import useToaster from "../../../../customHooks/useToaster";
import PaginationTable from "../PaginationTable";
import { HeaderBox, TablePaper } from "../ProjectLIstIndex2";
import CheckOutModal from "./CheckOutModal";
const TableWrapper = React.lazy(() => import("../ExpTable/TableWrapper"));

const FullProjectDetails = () => {
  const { id } = useParams();
  const { currentlyCheckedInProject } = useSelector((state) => state.user.user);
  const { isLoading, projectDrawer, usersWorkHistory, usersWorkHistoryCount } = useSelector(
    (state) => state.projectDrawer
  );
  const { role } = useSelector((state) => state.user.user);

  const [value, setValue] = React.useState(projectDrawer.project_status);
  const [detailCol, setDetailCol] = useState([]);
  const [detailRow, setDetailRow] = useState([]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [skillAlert, setSkillAlert] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isChildDataLoading, setIsChildDataLoading] = useState(false);

  const toast = useToaster();
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
        if (id === currentlyCheckedInProject) {
          setCheckOutDisable(false);
        } else {
          setCheckOutDisable(true);
        }
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
        toast.trigger(action.payload.data.message, "success");
        setIsDisable(true);
      } else {
        toast.trigger(action.error.message, "error");
        setIsDisable(false);
        setSkillAlert(true); // TODO Remove this line
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
        toast.trigger(action.payload.data.message, "success");
        setIsDisable(false);
        setCheckOutDisable(false);
        setOpen(false);
      } else if (action.error) {
        toast.trigger(action.error.message, "error");

        setCheckOutDisable(false);
        setOpen(false);
      } else {
        toast.trigger(action.error.message, "error");

        setCheckOutDisable(false);
        setOpen(false);
      }
    });
  };
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
      isRangeSelected: false,
    },
  ]);

  useEffect(() => {
    if (role) {
      if (role === "admin" || role === "account_manager") {
        dispatch(
          getUsersWorkHistoryById({
            pagination,
            ascDescOption: filteredCol,
            id: projectDrawer._id,
          })
        ).then(() => {
          setIsDataLoading(false);
        });
      }
    }
  }, [id]);

  // TODO Need to solve this issue
  const handleChangePagination = useCallback(() => {
    setIsChildDataLoading(true);
    if (role === "admin" || role === "account_manager") {
      if (range[0].startDate.getTime() !== range[0].endDate.getTime()) {
        dispatch(
          getUsersWorkHistoryById({
            pagination,
            ascDescOption: filteredCol,
            id: projectDrawer._id,
            range,
          })
        ).then(() => {
          setIsChildDataLoading(false);
        });
      } else {
        dispatch(
          getUsersWorkHistoryById({
            pagination,
            ascDescOption: filteredCol,
            id: projectDrawer._id,
          })
        ).then(() => {
          setIsChildDataLoading(false);
        });
      }
    } else {
      dispatch(
        getMyWorkHistoryById({
          pagination,
          ascDescOption: filteredCol,
          id: projectDrawer._id,
        })
      ).then(() => {
        setIsChildDataLoading(false);
      });
    }
  }, [role, range, pagination, filteredCol, projectDrawer._id]);

  return (
    <Box className="content">
      <HeaderBox>
        {/* {!isLoadingDetails && detailRow.length > 0 && ( */}
        {!isLoading && (
          <ProjectDetailsHeader
            usersWorkHistoryCount={usersWorkHistoryCount}
            range={range}
            setRange={setRange}
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
      </HeaderBox>

      <Box className="contentBody">
        <TablePaper>
          <TableWrapper
            role={role}
            myColumn={detailCol}
            myRows={detailRow}
            pagination={pagination}
            setPagination={setPagination}
            handleChangePagination={handleChangePagination}
            totalItems={usersWorkHistoryCount}
            handleId={handleId}
            skillAlert={skillAlert}
            filteredCol={filteredCol}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
            isChildDataLoading={isChildDataLoading}
            data={usersWorkHistory}
            setIsChildDataLoading={setIsChildDataLoading}
          />

          <PaginationTable
            pagination={pagination}
            setPagination={setPagination}
            handleChangePagination={handleChangePagination}
            totalItems={usersWorkHistoryCount}
          />
        </TablePaper>
      </Box>

      <Box>
        <CheckOutModal
          projectDrawer={projectDrawer}
          handleCheckOutButton={handleCheckOutButton}
          open={open}
          handleClose={handleClose}
        />
      </Box>
      {detailsProjectOpen && (
        <Box>
          <Project2DetailsModal
            projectDrawer={projectDrawer}
            detailsProjectOpen={detailsProjectOpen}
            handleProjectDetailsOpen={handleProjectDetailsOpen}
            handleDetailsProjectClose={handleDetailsProjectClose}
          />
        </Box>
      )}
    </Box>
  );
};

export default FullProjectDetails;
