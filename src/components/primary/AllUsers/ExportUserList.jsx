import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CSVDownload } from "react-csv";
import { useSelector } from "react-redux";
import { realToken } from "../../../helper/lib";

const url = import.meta.env.VITE_APP_SERVER_URL;

const ExportUserList = () => {
  const { totalUsers } = useSelector((state) => state.user.users);
  const [jsonData, setJsonData] = useState([]);
  const csvHeader = [
    { label: "Name", key: "name" },
    { label: "Quantigo ID", key: "qaiUserName" },
    { label: "Email", key: "email" },
    { label: "Role", key: "role" },
    { label: "Gender", key: "gender" },
    { label: "Contact No", key: "contactNo" },
    { label: "DOB", key: "dob" },
    { label: "Billing Account No", key: "billingAccountNo" },
    { label: "Blood Group", key: "bloodGroup" },
    { label: "Occupation", key: "occupation" },
    { label: "Permanent Address", key: "permanentAddress" },
    { label: "Present Address", key: "presentAddress" },
    { label: "Is Verified", key: "isVerified" },
    { label: "Document Type", key: "documentsType" },
    { label: "NDA Signed", key: "isNDASigned" },
    { label: "Active Last 15 days", key: "active" },
    { label: "Is Blocked", key: "isBlocked" },
    { label: "Points", key: "points" },
    { label: "Job Limit", key: "jobLimit" },
    { label: "Email Verified", key: "isEmailVerified" },
    { label: "Job Limit Left", key: "jobLimitLeft" },
    { label: "Working Hours", key: "totalWorkingHours" },
    { label: "Payment Rate", key: "paymentRate" },
    { label: "Skills", key: "skills" },
    { label: "HUB", key: "hub" },
    { label: "Qai_id", key: "qaiId" },
    { label: "Created At", key: "createdAt" },
    { label: "Last Update profile", key: "updatedAt" },
    { label: "Profile image", key: "image" },
    { label: "Total Due Amount", key: "totalDueAmount" },
    { label: "Total Paid Amount", key: "totalPaidAmount" },
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
      const response = await axios.get(`${url}/users`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });

      const data = response.data.users;

      if (data.length) {
        await data.map((f) => (f.dob = new Date(f.dob).toLocaleDateString("en-US")));
        await data.map((f) => (f.createdAt = new Date(f.createdAt).toLocaleDateString("en-US")));
        await data.map((f) => (f.updatedAt = new Date(f.updatedAt).toLocaleDateString("en-US")));
        data.forEach((user) => {
          user.skills = user.skills.map((skill) => skill.name);
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
      <Button
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
        onClick={fetchData}
      >
        Export
      </Button>
      {initiateDownload && <CSVDownload data={jsonData} headers={csvHeader} target="_blank" />}
    </>
  );
};

export default ExportUserList;
