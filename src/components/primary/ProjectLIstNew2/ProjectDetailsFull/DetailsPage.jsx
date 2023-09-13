import { Alert, Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import BoxItem from "../Project2Details/BoxItem";
import DetailsItem from "../Project2Details/DetailsItem";
import SingleItem from "../Project2Details/SingleItem";
import ProjectModalHeader from "../ProjectModalHeader";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { checkInProjectDrawerById, checkOutProjectDrawerById } from "../../../../features/slice/projectDrawerSlice";
import { clearUserWorkingProject, readMyProfile, updateUserWorkingProject } from "../../../../features/slice/userSlice";

const style = {
  width: "100%",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  p: 0,
  input: {
    color: "black",
    height: "20px",
    borderRadius: "8px",
  },
  select: {
    height: "20px",
  },
};
const DetailsPage = () => {
  const [isDisable, setIsDisable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const alert = useAlert();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  const { currentlyCheckedInProject } = useSelector((state) => state.user.user);

  useEffect(() => {
    setIsLoading(false);
  }, [projectDrawer]);

  useEffect(() => {
    setIsLoading(false);
    if (isLoading) {
      if (currentlyCheckedInProject === id || currentlyCheckedInProject !== null) {
        setIsDisable(true);
      } else if (currentlyCheckedInProject === null) {
        setIsDisable(false);
      }
    }
  }, [isLoading, currentlyCheckedInProject]);

  const handleCheckInButton = () => {
    const data = { id: id };
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
    dispatch(checkOutProjectDrawerById(data)).then((action) => {
      if (action.payload?.status === 200) {
        dispatch(clearUserWorkingProject());
        alert.show(action.payload.data.message, { type: "success" });
        setIsDisable(false);
      } else if (action.error) {
        alert.show(action.error.message, { type: "error" });
        setIsDisable(true);
      } else {
        // dispatch(clearUserWorkingProject());
        alert.show(action.error.message, { type: "error" });
        setIsDisable(true);
      }
    });
  };
  return (
    <Box sx={style}>
      <ProjectModalHeader handleCheckInButton={handleCheckInButton} isDisable={isDisable} handleCheckOutButton={handleCheckOutButton} isPageDetail={"true"} modalTitle={"Project Details"} />
      <Alert
        sx={{
          borderRadius: "8px",
          width: "50%",
          border: "1px solid #F0D8A8",
          background: "#FFF8EB",
          mt: 2,
          color: "#FFAB00",
          fontSize: "12px",
          fontWeight: "500",
          ml: 3,
        }}
        variant="filled"
        severity="info"
      >
        You need to have these skills to work on this project. Complete these courses to get the required skills and come back
      </Alert>
      <Box sx={{ padding: "1%" }}>
        <Stack
          sx={{
            border: "1px solid #E6ECF5",
            //   padding: "16px",
            borderRadius: "8px",
            //   background: "#FAFCFF",
          }}
        >
          <DetailsItem Item1Title={"Project Name"} Item1={"Car Annotation"} Item2Title={"Batch"} Item2={3} />
          <DetailsItem Item1Title={"Alias"} Item1={"Qai_Bone"} Item2Title={"Project Type"} Item2={"Video"} />

          <DetailsItem Item1Title={"PDR"} Item1={2} Item2Title={"Completed Course"} Item2={"No Course"} />
          <DetailsItem Item1Title={"Benchmark"} Item1={"10 sec/object, 5 sec/tag"} Item2Title={"Estimated end Time"} Item2={"No Course"} />
          <SingleItem ItemTitle={"Status"} Item={"Pending"} />
          <SingleItem ItemTitle={"Skills"} Item={"bsjkdfsaf"} />
          {/* document Item List */}
          <BoxItem />
        </Stack>
      </Box>
    </Box>
  );
};

export default DetailsPage;
