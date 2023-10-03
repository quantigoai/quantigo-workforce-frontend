import { Button, Grid, Typography, styled } from "@mui/material";
import ArrowIcon from "../../../../assets/images/dashboardIcon/ArrowIcon.svg";
import ViewIcon from "../../../../assets/images/dashboardIcon/ViewIcon.svg";
import React, { useState } from "react";
import NidDetails from "../../Users/NidDetals/NidDetails";
import axios from "axios";
import { realToken } from "../../../../helper/lib";
const ButtonStyle = styled(Button)({
  width: "100%",
  textTransform: "none",
  backgroundColor: "#F4F7FE",
  color: "#2E58FF",
  borderRadius: "8px",
  border: "1px solid #F4F7FE",
  "&:hover": {
    backgroundColor: "#F4F7FE",
    color: "#2E58FF",
    border: "1px solid #2E58FF",
  },
});
const NdaDocumentSection = ({ user }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [documentsImage, setDocumentsImage] = useState([]);
  const [documentsType, setDocumentsType] = useState("");
  const [documentsNo, setDocumentsNo] = useState();
  const [userName, setUserName] = useState([]);
  const BACKEND_URL = import.meta.env.VITE_APP_SERVER_URL;
  const handleClick = (signNda) => {
    window.open(signNda);
  };
  const handleDetailNid = (documentImage, documentNo, documentType, name) => {
    setOpenModal(true);

    setDocumentsNo(documentNo);
    setDocumentsType(documentType);
    setUserName(name);
    const id = user._id;
    axios
      .get(`${BACKEND_URL}/users/get-user-documents/${id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      })
      .then((res) => {
        setDocumentsImage(res.data.documentsImage);
      });
  };
  const handleClose = () => setOpenModal(false);
  return (
    <>
      <Grid container sx={{ padding: "2%" }}>
        <Grid item xs={6} sx={{ paddingRight: "2%" }}>
          <ButtonStyle
            disabled={!user.documentNo}
            onClick={() => handleDetailNid(user.documentsImage, user.documentNo, user.documentsType, user.name)}
          >
            <Typography variant="wpf_p3_medium" color={"primary.B200"} sx={{ paddingRight: "4%" }}>
              {" "}
              Document{" "}
            </Typography>
            <img src={ViewIcon} />
          </ButtonStyle>
        </Grid>
        <Grid item xs={6}>
          <ButtonStyle disabled={!user.signImage} onClick={() => handleClick(user.signImage)}>
            <Typography variant="wpf_p3_medium" color={"primary.B200"} sx={{ paddingRight: "4%" }}>
              {" "}
              NDA
            </Typography>
            <img src={ArrowIcon} />
          </ButtonStyle>
        </Grid>
      </Grid>
      <NidDetails
        userId={user._id}
        openModal={openModal}
        handleClose={handleClose}
        documentImage={documentsImage}
        documentsNo={documentsNo}
        documentsType={documentsType}
        userName={userName}
      />
    </>
  );
};

export default NdaDocumentSection;
