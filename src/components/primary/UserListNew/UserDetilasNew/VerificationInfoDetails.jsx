import { Box, Stack } from "@mui/material";
import moment from "moment/moment";
import React from "react";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";
import SingleItem from "../../ProjectLIstNew2/Project2Details/SingleItem";
import ChangeInfoIndex from "./ChangeInfoIndex";
import DetailsItemThree from "./DetailsItemThree";
import NdaDocumentSection from "./NdaDocumentSection";
import SkillFieldForUserDetails from "./SkillFieldForUserDetails";

const VerificationInfoDetails = ({
  user,
  role,
  handleSetRole,
  handleSetStatus,
  skillSet,
  handleChangeSkills,
  setIsEditSkill,
  isEditSkill,
}) => {
  const DOB = user.dob ? moment.utc(user.dob).format("MMM Do, YYYY") : "Not Available";
  const dateObj = new Date(user.lastJobTakenAt);
  const today = new Date();
  const diffInMs = Math.abs(today - dateObj);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return (
    <>
      <Box sx={{}}>
        <Stack
          sx={{
            border: "1px solid #E6ECF5",
            borderRadius: "8px",
          }}
        >
          <DetailsItemThree
            Item1Title={"Verification Type"}
            Item1={user.name}
            Item2Title={"Number"}
            Item2={user.qaiUserName}
            isBlocked={user.isBlocked}
            Item3Title={"Name As NID"}
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
          <NdaDocumentSection user={user} />
        </Stack>
      </Box>
    </>
  );
};

export default VerificationInfoDetails;
