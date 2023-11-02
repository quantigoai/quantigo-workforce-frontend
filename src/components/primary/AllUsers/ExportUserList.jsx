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
    { label: "Role", key: "role" },
    { label: "Email", key: "email" },
    { label: "Gender", key: "gender" },
    { label: "phone", key: "phone" },
    { label: "DOB", key: "dob" },
    { label: "Billing Account No", key: "billingAccountNo" },
    { label: "Blood Group", key: "bloodGroup" },
    { label: "Occupation", key: "occupation" },
    { label: "Permanent Address", key: "permanentAddress" },
    { label: "Present Address", key: "presentAddress" },
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
      const response = await axios.get(`${url}/users?limit=${totalUsers}&skip=0`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });

      const data = response.data.users;

      if (data.length) {
        data.map((f) => (f.dob = new Date(f.dob).toLocaleDateString("en-US")));
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
          lineHeight: "20px",

          fontSize: { xl: "14px", xxl: "16px", lg: "12px" },
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
