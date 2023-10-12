/*
 * File           : useAllUsers.js
 * Project        : wmpfrontv2
 * Created Date   : Tu 03 Oct 2023 12:50:39
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Tue Oct 03 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

/* eslint-disable no-prototype-builtins */

import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getAllSkills} from "../features/slice/skillSlice";

const useAllUsers = (setAddSkills, setAddRoles, setPrevSkills, setPrevRoles, clearSearch) => {
    const [filterValue, setFilterValue] = useState({});
    const dispatch = useDispatch();
    const [downLoadExportOpen, setDownloadExportOpen] = React.useState(false);
    const [detailsUserOpen, setDetailsUserOpen] = React.useState(false);

    const [filteredCol, setFilteredCol] = useState({});
    const [isFilter, setIsFilter] = useState(false);

    const handleDownloadExport = () => {
        setDownloadExportOpen(true), dispatch(getAllSkills());
    };
    const handleUserDetailsOpen = () => {
        setDetailsUserOpen(true);
    };

    const handleUserDetailsClose = () => {
        setDetailsUserOpen(false);
    };

    const handleChange = (event, skillsId = [], addRoles = [], isSkillsSame = true, isRolesSame = true) => {
        if (!isSkillsSame) {
            const field = "skills";
            const value = skillsId;
            const filteredData = {...filterValue};
            filteredData[field] = value;
            setFilterValue(filteredData);
        } else if (!isRolesSame) {
            const field = "role";
            const value = addRoles;
            const filteredData = {...filterValue};
            filteredData[field] = value;
            setFilterValue(filteredData);
        } else {
            const field = event.target.name;
            const value = event.target.value;
            const filteredData = {...filterValue};
            filteredData[field] = value;
            setFilterValue(filteredData);
        }
    };

    const defaultState = {
        // role: "",
        // hub: "",
    };

    const handleClearFilter = () => {
        setFilterValue(defaultState);
        setFilteredCol({});
        setAddSkills([]);
        setAddRoles([]);
        setPrevSkills([]);
        setPrevRoles([]);
        clearSearch();
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
        downLoadExportOpen,
        detailsUserOpen,
        handleDownloadExport,
        handleUserDetailsOpen,
        handleUserDetailsClose,
        setDownloadExportOpen,
        setDetailsUserOpen,
        handleChange,
        handleClearFilter,
        filterValue,
        handleId,
        filteredCol,
        isFilter,
        handleIsFilter,
    };
};

export default useAllUsers;
