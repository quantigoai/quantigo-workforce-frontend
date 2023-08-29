import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProjectDrawerById,
  setCurrentProjectDrawer,
} from "../../../../features/slice/projectDrawerSlice";
import { useAlert } from "react-alert";

const useAllFunc = () => {
  const dispatch = useDispatch();
  const { projectDrawers, projectDrawer, total, error } = useSelector(
    (state) => state.projectDrawer
  );
  const alert = useAlert();
  const [filterValue, setFilterValue] = useState({});
  const [createProjectOpen, setCreateProjectOpen] = React.useState(false);
  const [detailsProjectOpen, setDetailsProjectOpen] = React.useState(false);

  const handleProjectCreateOpen = () => setCreateProjectOpen(true);
  const handleProjectDetailsOpen = () => setDetailsProjectOpen(true);
  const handleDetailsProjectClose = () => {
    setDetailsProjectOpen(false);
  };

  const handleCreateProjectClose = () => {
    setCreateProjectOpen(false);
  };

  const handleChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const filteredData = { ...filterValue };
    filteredData[field] = value;
    setFilterValue(filteredData);
    // dispatch(getAllProjectDrawers({ filteredData, pagination }));
  };
  const defaultState = {
    pdr: "",
    project_platform: "",
    project_type: "",
    project_status: "",
  };
  const handleClearFilter = () => {
    setFilterValue(defaultState);
  };
  return {
    handleCreateProjectClose,
    createProjectOpen,
    detailsProjectOpen,
    handleProjectCreateOpen,
    handleProjectDetailsOpen,
    handleDetailsProjectClose,
    setCreateProjectOpen,
    setDetailsProjectOpen,
    handleChange,
    handleClearFilter,
    filterValue,
  };
};

export default useAllFunc;
