import { Box, Stack } from "@mui/material";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";
import SingleItem from "../../ProjectLIstNew2/Project2Details/SingleItem";
import ChangeInfoIndex from "./ChangeInfoIndex";
import DetailsItemThree from "./DetailsItemThree";
import NdaDocumentSection from "./NdaDocumentSection";
import SkillFieldForUserDetails from "./SkillFieldForUserDetails";
import { useDispatch } from "react-redux";
import { getUserContactInfo } from "../../../../features/slice/userSlice";
import LoadingComponent from "../../../shared/Loading/LoadingComponent";

const ContactInfoDetailsIndex = ({
  user,
  role,
  handleSetRole,
  handleSetStatus,
  skillSet,
  handleChangeSkills,
  setIsEditSkill,
  isEditSkill,
}) => {
  const dispatch = useDispatch();
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log("🚀 ~ data:", data);
  const DOB = user.dob ? moment.utc(user.dob).format("MMM Do, YYYY") : "Not Available";
  const dateObj = new Date(user.lastJobTakenAt);
  const today = new Date();
  const diffInMs = Math.abs(today - dateObj);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  useEffect(() => {
    dispatch(getUserContactInfo(user._id)).then((action) => {
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
              <SingleItem ItemTitle={"Present Address"} Item={user.presentAddress} />
              <SingleItem ItemTitle={"Permanent Address"} Item={user.presentAddress} />
              <DetailsItemThree
                Item1Title={"Emergency Contact Person"}
                Item1={data.emergencyContact.contactPersonName}
                Item2Title={"Relation"}
                Item2={user.qaiUserName}
                isBlocked={user.isBlocked}
                Item3Title={"Mobile Number"}
                Item3={
                  user.role === "level_1_annotator"
                    ? "Level 1 Annotator"
                    : user.role === "level_2_annotator"
                    ? "Level 2 Annotator"
                    : user.role === "level_0_annotator"
                    ? "Level 0 Annotator"
                    : user.role === "level_3_annotator"
                    ? "Level 3 Annotator"
                    : user.role === "project_delivery_lead"
                    ? "Project Delivery Lead"
                    : user.role === "delivery_lead"
                    ? "Delivery Lead"
                    : user.role === "project_coordinator"
                    ? "Project Coordinator"
                    : user.role === "project_manager"
                    ? "Project Manager"
                    : user.role === "recruitment_manager"
                    ? "Recruitment Manager"
                    : capitalizeFirstLetter(user?.role)
                }
              />
              <SingleItem ItemTitle={"Address"} Item={user.presentAddress} />

              {/* <SingleItem ItemTitle={"Skills"} Item={user.skills} /> */}
            </>
          )}
        </Stack>
      </Box>

      {/* <Box>
        <ChangeInfoIndex
          role={role}
          user={user}
          handleSetRole={handleSetRole}
          handleSetStatus={handleSetStatus}
        />
      </Box> */}
    </>
  );
};

export default ContactInfoDetailsIndex;
