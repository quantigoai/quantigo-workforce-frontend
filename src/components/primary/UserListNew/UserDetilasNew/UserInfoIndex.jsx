import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DetailsItemThree from "./DetailsItemThree";
import SingleItem from "../../ProjectLIstNew2/Project2Details/SingleItem";
import NdaDocumentSection from "./NdaDocumentSection";
import ChangeInfoIndex from "./ChangeInfoIndex";

const UserInfoIndex = ({ user }) => {
  return (
    <>
      <Box sx={{}}>
        <Stack
          sx={{
            border: "1px solid #E6ECF5",
            //   padding: "16px",
            borderRadius: "8px",
            //   background: "#FAFCFF",
          }}>
          <DetailsItemThree
            Item1Title={"Name"}
            Item1={user.name}
            Item2Title={"Id"}
            Item2={user.qaiUserName}
            Item3Title={"Role"}
            Item3={user.role}
          />
          <DetailsItemThree
            Item1Title={"Email"}
            Item1={user.email}
            Item2Title={"Annotation Status"}
            Item2={"Active"}
            Item3Title={"Rating"}
            Item3={5}
          />
          <DetailsItemThree
            Item1Title={"Date Of Birth"}
            Item1={user.dob}
            Item2Title={"Phone"}
            Item2={user.phone}
            Item3Title={"Completed Course"}
            Item3={"No Course Completed"}
          />
          <SingleItem ItemTitle={"Address"} Item={user.presentAddress} />
          <SingleItem ItemTitle={"Skills"} Item={"bsjkdfsaf"} />
          <NdaDocumentSection user={user} />
        </Stack>
      </Box>

      <Box>
        <ChangeInfoIndex />
      </Box>
    </>
  );
};

export default UserInfoIndex;
