import React, { useState } from "react";
import { getAllSkills } from "../../../../features/slice/skillSlice";
import { useDispatch } from "react-redux";

const useAllFunc = (myColumn) => {
  const [filterValue, setFilterValue] = useState({});
  const dispatch = useDispatch();
  const [createProjectOpen, setCreateProjectOpen] = React.useState(false);
  const [detailsProjectOpen, setDetailsProjectOpen] = React.useState(false);
  const [fillCount, setFillCount] = useState(0);

  const [filteredCol, setFilteredCol] = useState({});

  const handleProjectCreateOpen = () => {
    setCreateProjectOpen(true), dispatch(getAllSkills());
  };
  const handleProjectDetailsOpen = () => setDetailsProjectOpen(true);
  const [isFilter, setIsFilter] = useState(false);
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
  };
  const defaultState = {
    pdr: "",
    project_platform: "",
    project_type: "",
    project_status: "",
  };
  let newVal;
  const handleClearFilter = () => {
    setFilterValue(defaultState);
    setFilteredCol({});
    // setFillCount(0);
    newVal = "";
  };

  const handleId = (field) => {
    const filteredCol = myColumn.find((col) => col.field === field);
    const filteredHeader = filteredCol.field;
    setFilteredCol((prev) => ({
      ...prev,
      [filteredHeader]: newVal,
    }));
  };

  const handleCount = () => {
    setFillCount((prev) => prev + 1);
    if (fillCount === 0) {
      newVal = "asc";
    }
    if (fillCount === 1) {
      newVal = "desc";
    }
    if (fillCount === 2) {
      newVal = "";
      setFillCount(0);
    }
  };
  const handleIsFilter = () => {
    setIsFilter(!isFilter);
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
    handleCount,
    handleId,
    filteredCol,
    fillCount,
    handleIsFilter,
    isFilter,
  };
};

export default useAllFunc;