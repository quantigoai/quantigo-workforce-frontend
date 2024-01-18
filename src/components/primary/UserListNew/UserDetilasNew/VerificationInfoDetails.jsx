import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../../../helper/capitalizeFirstWord";
import DetailsItemThree from "./DetailsItemThree";
import NdaDocumentSection from "./NdaDocumentSection";
import { useDispatch, useSelector } from "react-redux";
import { getUserVerificationInfo } from "../../../../features/slice/userSlice";
import LoadingComponent from "../../../shared/Loading/LoadingComponent";
import ImageShowInModal from "./ImageShowInModal";
import DetailsItem from "../../ProjectLIstNew2/Project2Details/DetailsItem";
import ArrowIcon from "../../../../assets/images/dashboardIcon/ArrowIcon.svg";

const styleBtn = {
  width: "100%",
  textTransform: "none",
  backgroundColor: "primary.B008",
  color: "#2E58FF",
  borderRadius: "8px",
  border: "1px solid #F4F7FE",
  "&:hover": {
    backgroundColor: "primary.B008",
    color: "#2E58FF",
    border: "1px solid #2E58FF",
  },
};
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
  const dispatch = useDispatch();
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [data, setData] = useState([]);
  const { isLightTheme } = useSelector((state) => state.theme);
  const DOB = user.dob ? moment.utc(user.dob).format("MMM Do, YYYY") : "Not Available";
  const dateObj = new Date(user.lastJobTakenAt);
  const today = new Date();
  const diffInMs = Math.abs(today - dateObj);
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  useEffect(() => {
    dispatch(getUserVerificationInfo(user._id)).then((action) => {
      setData(action.payload.data);
      setIsDataLoading(false);
    });
  }, [user]);

  const handleClick = (signNda) => {
    window.open(signNda);
  };
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
              <Box>
                <DetailsItem
                  Item1Title={"Document Type"}
                  Item1={capitalizeFirstLetter(data.documentsType || "N/A")}
                  isLightTheme={isLightTheme}
                  Item2Title={`${capitalizeFirstLetter(data.documentsType || "Document")} Number`}
                  Item2={data.documentNo}
                />
                <DetailsItemThree
                  Item1Title={"Type"}
                  Item1={capitalizeFirstLetter(data.extraDocumentType || "N/A")}
                  Item2Title={`${capitalizeFirstLetter(data.extraDocumentType || "Extra Document")} Number`}
                  Item2={data.extraDocumentNo || "N/A"}
                  isBlocked={user.isBlocked}
                  Item3Title={`Name As ${capitalizeFirstLetter(data.extraDocumentType || "Extra Document")}`}
                  Item3={user.extraDocumentName || "N/A"}
                />

                <NdaDocumentSection user={user} />
                <Grid container sx={{ padding: "2%" }}>
                  <Grid item xs={4} sx={{ paddingRight: "1%" }}>
                    <ImageShowInModal
                      images={data?.standardPhoto?.url ? [data?.standardPhoto?.url] : []}
                      level={"Standard Photo"}
                    />
                  </Grid>
                  <Grid item xs={4} sx={{ paddingRight: "1%" }}>
                    <ImageShowInModal
                      images={data.extraDocumentImages.map((i) => i.url)}
                      level={`${capitalizeFirstLetter(data.extraDocumentType || "Ext Document ")}Images`}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Button sx={styleBtn} disabled={!data?.resume?.url} onClick={() => handleClick(data?.resume?.url)}>
                      <Typography
                        variant="wpf_p3_medium"
                        color={!data?.resume?.url ? "primary.B200" : ""}
                        sx={{
                          paddingRight: "4%",
                          filter: !data?.resume?.url ? "grayscale(100%) opacity(50%)" : "",
                        }}
                      >
                        Resume
                      </Typography>
                      <img
                        style={{
                          filter: !data?.resume?.url ? "grayscale(100%) opacity(50%)" : "",
                        }}
                        src={ArrowIcon}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default VerificationInfoDetails;
