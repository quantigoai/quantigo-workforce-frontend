import { Box, Stack } from "@mui/material";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";
import SingleItem from "../../ProjectLIstNew2/Project2Details/SingleItem";
import ChangeInfoIndex from "./ChangeInfoIndex";
import DetailsItemThree from "./DetailsItemThree";
import NdaDocumentSection from "./NdaDocumentSection";
import SkillFieldForUserDetails from "./SkillFieldForUserDetails";
import ImageShowInModal from "./ImageShowInModal";
import { useDispatch } from "react-redux";
import { getUserEducationInfo } from "../../../../features/slice/userSlice";
import LoadingComponent from "../../../shared/Loading/LoadingComponent";

const EducationInfoDetails = ({
  user,
  role,
  handleSetRole,
  handleSetStatus,
  skillSet,
  handleChangeSkills,
  setIsEditSkill,
  isEditSkill,
}) => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const DOB = user.dob ? moment.utc(user.dob).format("MMM Do, YYYY") : "Not Available";
  const dateObj = new Date(user.lastJobTakenAt);
  const today = new Date();
  const diffInMs = Math.abs(today - dateObj);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  useEffect(() => {
    dispatch(getUserEducationInfo(user._id)).then((action) => {
      setData(action.payload.data);
      setIsDataLoading(false);
    });
  }, [user]);
  return (
    <>
      <Box sx={{}}>
        <Stack
          sx={{
            border: "1px solid #E6ECF5",
            borderRadius: "8px",
          }}
        >
          {isDataLoading ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50vh",
                }}
              >
                <LoadingComponent />
              </Box>
            </>
          ) : (
            <>
              <DetailsItemThree
                Item1Title={"Highest level of degree"}
                Item1={data.highestLevelOfDegree}
                Item2Title={"Field of Study"}
                Item2={data.fieldOfStudy}
                isBlocked={user.isBlocked}
                Item3Title={"Year of completion"}
                Item3={data.completedYear}
              />

              <SingleItem ItemTitle={"Institution Name"} Item={data.instituteName} />
              {/* <SingleItem ItemTitle={"Skills"} Item={user.skills} /> */}
              <ImageShowInModal images={data.certificateImages.map((i) => i.url)} level={"Certificate Images"} />
            </>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default EducationInfoDetails;
