import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CSVDownload } from "react-csv";
import { useSelector } from "react-redux";
import { realToken } from "../../../helper/lib";
import { LoadingButtonStyle } from "../Auth/Login/Login";

const url = import.meta.env.VITE_APP_SERVER_URL;

const ExportUserList = () => {
  const { totalUsers } = useSelector((state) => state.user.users);
  const [jsonData, setJsonData] = useState([]);
  const csvHeader = [
    { label: "Name", key: "name" },
    { label: "Quantigo ID", key: "qaiUserName" },
    { label: "Email", key: "email" },
    { label: "Contact No", key: "contactNo" },
    { label: "Billing Account No", key: "billingAccountNo" },
    { label: "HUB", key: "hub" },
    { label: "Role", key: "role" },
    { label: "Gender", key: "gender" },
    { label: "Father's Name", key: "fathersName" },
    { label: "Mother's Name", key: "mothersName" },
    { label: "Marital Status", key: "maritalStatus" },
    { label: "Religion", key: "religion" },
    { label: "DOB", key: "dob" },
    { label: "Blood Group", key: "bloodGroup" },
    { label: "Occupation", key: "occupation" },
    { label: "Permanent Address", key: "permanentAddressString" },
    { label: "Present Address", key: "presentAddressString" },
    { label: "Skills", key: "skills" },
    { label: "Created At", key: "createdAt" },
    { label: "Profile image", key: "image" },
    { label: "Is Verified", key: "isVerified" },
    { label: "NDA Signed", key: "isNDASigned" },
    { label: "NDA", key: "signImage" },
    { label: "Active Last 15 days", key: "active" },
    { label: "Is Blocked", key: "isBlocked" },
    { label: "Points", key: "points" },
    { label: "Job Limit", key: "jobLimit" },
    { label: "Email Verified", key: "isEmailVerified" },
    { label: "Job Limit Left", key: "jobLimitLeft" },
    { label: "Working Hours", key: "totalWorkingHours" },
    { label: "Payment Rate", key: "paymentRate" },
    { label: "Total Due Amount", key: "totalDueAmount" },
    { label: "Document Type", key: "documentsType" },
    { label: "Document No", key: "documentNo" },
    { label: "Documents Image", key: "documentsImage" },
    { label: "Extra Document Type", key: "extraDocumentType" },
    { label: "Extra Document Name", key: "extraDocumentName" },
    { label: "Extra Document No", key: "extraDocumentNo" },
    { label: "Extra Document Images", key: "extraDocumentImages" },
    { label: "Highest Level Of Degree", key: "highestLevelOfDegree" },
    { label: "Field Of Study", key: "fieldOfStudy" },
    { label: "Institute Name", key: "instituteName" },
    { label: "Completed Year", key: "completedYear" },
    { label: "Certificate Images", key: "certificateImages" },
    { label: "Emergency Contact Person Name", key: "emergencyContactPersonName" },
    { label: "Emergency Contact Person Relation", key: "emergencyContactPersonRelationShip" },
    { label: "Emergency Contact Person Contact No", key: "emergencyContactPersonContactNo" },
    { label: "Emergency Contact Address", key: "emergencyContactAddress" },
    { label: "Resume", key: "resume" },
    { label: "Standard Photo", key: "standardPhoto" },
  ];

  const [initiateDownload, setInitiateDownload] = useState(false);

  useEffect(() => {
    if (jsonData.length) {
      setInitiateDownload(true);
    }
  }, [jsonData]);

  useEffect(() => {
    if (initiateDownload) {
      setInitiateDownload(false);
    }
  }, [initiateDownload]);

  const fetchData = async () => {
    try {
      // const response = await axios.get(`${url}/users`, {
      const response = await axios.get(`${url}/users/export-all-users`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
      const data = response.data;

      if (data.length) {
        await data.map((f) => (f.dob = new Date(f.dob).toLocaleDateString("en-US")));
        await data.map((f) => (f.createdAt = new Date(f.createdAt).toLocaleDateString("en-US")));
        await data.map((f) => (f.updatedAt = new Date(f.updatedAt).toLocaleDateString("en-US")));
        await data.map((f) => (f.resume = f.resume.url));
        await data.map((f) => (f.standardPhoto = f.standardPhoto.url));

        data.forEach((user) => {
          user.skills = user.skills.map((skill) => skill.name);
        });
        data.forEach((user) => {
          // user.extraDocumentImages = user.extraDocumentImages.map((item) => `${item.url}\n`);
          user.extraDocumentImages = user.extraDocumentImages.map((item) => item.url);
        });
        data.forEach((user) => {
          user.certificateImages = user.certificateImages.map((item) => item.url);
        });
        data.forEach((user) => {
          user.documentsImage = user.documentsImage.map((item) => item);
        });
        setJsonData(data);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching data:");
      throw error;
    }
  };
  return (
    <>
      <LoadingButtonStyle
        sx={{
          textTransform: "none",
          borderRadius: "8px",
          backgroundColor: "#2E58FF",
          color: "white",
          height: {
            lg: "30px",
            xl: "40px",
            xxl: "40px",
          },
          "&:hover": {
            background: "#244EF5",
          },
          width: {
            lg: "75px",
            xl: "90px",
            xxl: "90px",
          },

          fontSize: { xl: "14px", xxl: "16px", lg: "12px" },
          lineHeight: "20px",
          padding: "16px 10px",
        }}
        loading={initiateDownload}
        onClick={fetchData}
      >
        Export
      </LoadingButtonStyle>
      {initiateDownload && <CSVDownload data={jsonData} headers={csvHeader} target="_blank" />}
    </>
  );
};

export default ExportUserList;
