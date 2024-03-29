import { Box, Stack } from "@mui/material";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import DetailsItemThree from "./DetailsItemThree";
import { useDispatch } from "react-redux";
import { getUserContactInfo } from "../../../../features/slice/userSlice";
import LoadingComponent from "../../../shared/Loading/LoadingComponent";
import AddressField from "./AddressField";

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
              <AddressField ItemTitle={"Present Address"} Item={data.presentAddress} />
              <AddressField ItemTitle={"Permanent Address"} Item={data.permanentAddress} />

              <DetailsItemThree
                Item1Title={"Emergency Contact Person Name"}
                Item1={data.emergencyContact?.contactPersonName ? data.emergencyContact?.contactPersonName : "N/A"}
                Item2Title={"Relation"}
                Item2={data.emergencyContact?.relationship ? data.emergencyContact?.relationship : "N/A"}
                isBlocked={user.isBlocked}
                Item3Title={"Mobile Number"}
                Item3={data.emergencyContact?.contactNumber ? data.emergencyContact?.contactNumber : "N/A"}
              />
              {/* <AddressField ItemTitle={"Permanent Address"} Item={data.permanentAddress} /> */}

              <AddressField ItemTitle={"Emergency Contact Person Address"} Item={data.emergencyContact?.address} />

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
