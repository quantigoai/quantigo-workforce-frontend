import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { realToken } from "../../../../helper/lib";
import { CSVDownload } from "react-csv";
const url = import.meta.env.VITE_APP_SERVER_URL;

const DownloadEffectiveHours = () => {
  const { projectDrawer } = useSelector((state) => state.projectDrawer);
  const [jsonData, setJsonData] = useState([]);
  const csvHeader = [
    { label: "Quantigo ID", key: "user.qaiUserName" },
    { label: "Total Bill", key: "totalBill" },
    { label: "Penalty", key: "penalty" },
    { label: "Bonus", key: "bonus" },
    { label: "Payment Rate", key: "paymentRate" },
    { label: "Due Amount", key: "dueAmount" },
    { label: "Paid Amount", key: "paidAmount" },
  ];

  const [initiateDownload, setInitiateDownload] = useState(false);

  useEffect(() => {
    if (jsonData?.length) {
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
      const response = await axios.get(`${url}/project-history/get-history/${projectDrawer._id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });

      const data = response.data.projectHistory.projectDrawerUsers;

      setJsonData(data);
      // if (data.length) {
      //   data.map((f) =>
      //     f.skills
      //       ? (f.workingTimeInMs = calculateTimeDifference(f.workingTimeInMs))
      //       : (f.workingTimeInMs = "Currently Working")
      //   );
      //   setJsonData(data);
      //   return true;
      // } else {
      //   return false;
      // }
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  return (
    <>
      <Button
        sx={{
          backgroundColor: "#2E58FF",
          color: "#FFF",
          fontSize: "12px",
          fontWeight: "500",
          borderRadius: "6px",
          height: "30px",
          width: "200px",
          "&:hover": { backgroundColor: "#244EF5", color: "#FFF" },
          mr: 2,
        }}
        // variant="contained"
        onClick={fetchData}
      >
        <i className="ri-download-2-line"></i>
        <Typography variant="body" sx={{ ml: 1, textTransform: "none" }}>
          Download Effective Hour
        </Typography>
      </Button>
      {initiateDownload && <CSVDownload data={jsonData} headers={csvHeader} target="_blank" />}
    </>
  );
};

export default DownloadEffectiveHours;
