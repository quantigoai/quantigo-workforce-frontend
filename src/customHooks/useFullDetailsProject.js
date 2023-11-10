import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import useToaster from "./useToaster";
import {checkInProjectDrawerById, checkOutProjectDrawerById} from "../features/slice/projectDrawerSlice";
import {clearUserWorkingProject, updateUserWorkingProject} from "../features/slice/userSlice";
import {addDays} from "date-fns";

const useFullDetailsProject = () => {
  const { id } = useParams();
  const { isLoading, projectDrawer, usersWorkHistory, usersWorkHistoryCount } = useSelector(
    (state) => state.projectDrawer
  );
  const [open, setOpen] = useState(false);
  const [skillAlert, setSkillAlert] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [isChildDataLoading, setIsChildDataLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [checkOutDisable, setCheckOutDisable] = useState(true);
  const [isLoadingDetails, setIsLoadingDetails] = useState(true);
  const [detailCol, setDetailCol] = useState([]);
  const [detailRow, setDetailRow] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 0,
    pageSize: 10,
  });
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
      isRangeSelected: false,
    },
  ]);
  const [value, setValue] = React.useState(projectDrawer.project_status);
  const { currentlyCheckedInProject, skills } = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const toast = useToaster();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      if (action.error) {
        toast.trigger(action.error.message, "error");
        setCheckOutDisable(false);
        setOpen(false);
      } else if (action.payload?.status === 200) {
        dispatch(clearUserWorkingProject());
        toast.trigger(action.payload.data.message, "success");
        setIsDisable(false);
        setCheckOutDisable(true);
        setOpen(false);
        const userSkills = skills?.map((skill) => skill.id);
        const projectSkills = projectDrawer?.project_skills?.map((skill) => skill.id);
        const matched = projectSkills?.every((skill) => userSkills?.includes(skill));
        setIsAvailable(matched && projectDrawer.project_status === "in-Progress");
      }
    });
  };
  return {
    id,
    open,
    skillAlert,
    isDataLoading,
    isChildDataLoading,
    isDisable,
    isAvailable,
    checkOutDisable,
    isLoadingDetails,
    detailCol,
    detailRow,
    value,
    setOpen,
    setSkillAlert,
    setIsDataLoading,
    setIsChildDataLoading,
    setIsDisable,
    setIsAvailable,
    setCheckOutDisable,
    setIsLoadingDetails,
    setDetailCol,
    setDetailRow,
    setValue,
    pagination,
    setPagination,
    handleOpen,
    handleClose,
    handleChange,
    handleDetailButton,
    handleCheckInButton,
    handleCheckOutButton,
    range,
    setRange,
  };
};

export default useFullDetailsProject;
