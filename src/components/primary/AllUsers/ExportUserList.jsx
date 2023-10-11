import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CSVDownload } from "react-csv";
import { useSelector } from "react-redux";
import { realToken } from "../../../helper/lib";
import axios from "axios";
const url = import.meta.env.VITE_APP_SERVER_URL;

const ExportUserList = () => {
  const { totalUsers } = useSelector((state) => state.user.users);
  console.log("🚀 ~ file: ExportUserList.jsx:10 ~ ExportUserList ~ totalUsers:", totalUsers);

  const [jsonData, setJsonData] = useState([]);
  const csvHeader = [
    { label: "Name", key: "userName" },
    { label: "Quantigo ID", key: "userQaiID" },
    { label: "Check In Date", key: "checkedInDate" },
    { label: "Check In Time", key: "checkedInTime" },
    { label: "Check Out Date", key: "checkedOutDate" },
    { label: "Check Out Time", key: "checkedOutTime" },
    { label: "Working Time", key: "workingTimeInMs" },
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
    console.log("hitt");
    try {
      const response = await axios.get(`${url}/users?limit=${totalUsers}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });

      const data = response.data.projectDrawer.checkedInUsersHistory;

      if (data.length) {
        // data.map((f) =>
        //   f.workingTimeInMs
        //     ? (f.workingTimeInMs = calculateTimeDifference(f.workingTimeInMs))
        //     : (f.workingTimeInMs = "Currently Working")
        // );
        setJsonData(data);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
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
          "&:hover": {
            background: "#244EF5",
          },
        }}
        variant="contained"
        onClick={fetchData}
        // onClick={handleProjectCreateOpen}
      >
        Export
      </Button>
      {initiateDownload && <CSVDownload data={jsonData} headers={csvHeader} target="_blank" />}
    </>
  );
};

export default ExportUserList;
