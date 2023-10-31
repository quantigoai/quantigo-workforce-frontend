/* eslint-disable no-prototype-builtins */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllSkills } from "../../../../features/slice/skillSlice";

const useAllFunc = () => {
  const [search, setSearch] = useState("");
  const [filterValue, setFilterValue] = useState({});
  const dispatch = useDispatch();
  const [createProjectOpen, setCreateProjectOpen] = React.useState(false);
  const [detailsProjectOpen, setDetailsProjectOpen] = React.useState(false);
  const [annotatorPlatform, setAnnotatorPlatform] = useState("");
  const [checked, setChecked] = useState(false);

  const [filteredCol, setFilteredCol] = useState({});
  const [isFilter, setIsFilter] = useState(false);

  const handleProjectCreateOpen = () => {
    setCreateProjectOpen(true), dispatch(getAllSkills());
  };
  const handleProjectDetailsOpen = () => {
    setDetailsProjectOpen(true);
  };

  const handleDetailsProjectClose = () => {
    setDetailsProjectOpen(false);
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

  const handleClearFilter = () => {
    setFilterValue(defaultState);
    setFilteredCol({});
    setChecked(false);
    setAnnotatorPlatform("");
  };

  const handleId = (field) => {
    setFilteredCol((prev) => {
      if (prev.hasOwnProperty(field)) {
        if (prev[field] === "asc") {
          return {
            ...prev,
            [field]: "desc",
          };
        } else {
          delete prev[field];
          return {
            ...prev,
          };
        }
      }
      return {
        ...prev,
        [field]: "asc",
      };
    });
  };

  const handleIsFilter = () => {
    setIsFilter(!isFilter);
  };

  return {
    createProjectOpen,
    annotatorPlatform,
    checked,
    setChecked,
    setAnnotatorPlatform,
    detailsProjectOpen,
    handleProjectCreateOpen,
    handleProjectDetailsOpen,
    handleDetailsProjectClose,
    setCreateProjectOpen,
    setDetailsProjectOpen,
    handleChange,
    handleClearFilter,
    filterValue,
    handleId,
    filteredCol,
    handleIsFilter,
    isFilter,
    search,
    setSearch,
  };
};

export default useAllFunc;
