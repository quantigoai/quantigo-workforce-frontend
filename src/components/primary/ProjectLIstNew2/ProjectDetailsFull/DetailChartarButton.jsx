import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CSVDownload } from "react-csv";
import { useSelector } from "react-redux";
import { calculateTimeDifference } from "../../../../helper/dateConverter";
import { realToken } from "../../../../helper/lib";

const url = import.meta.env.VITE_APP_SERVER_URL;

const DetailChartarButton = ({ role }) => {
  const { projectDrawer, usersWorkHistoryCount } = useSelector((state) => state.projectDrawer);
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
    try {
      const response = await axios.get(
        `${url}/project-drawer/work-history/${projectDrawer._id}?limit=${usersWorkHistoryCount}&sortBy=userQaiID:desc`,
        {
          headers: {
            Authorization: `Bearer ${realToken()}`,
          },
        }
      );

      const data = response.data.projectDrawer.checkedInUsersHistory;

      if (data.length) {
        data.map((f) =>
          f.workingTimeInMs
            ? (f.workingTimeInMs = calculateTimeDifference(f.workingTimeInMs))
            : (f.workingTimeInMs = "Currently Working")
        );
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
      {role === "account_manager" ? (
        <></>
      ) : (
        <>
          <Button
            sx={{
              backgroundColor: "#2E58FF",
              color: "#FFF",
              fontSize: "12px",
              fontWeight: "500",
              borderRadius: "6px",
              height: "30px",
                // width: "151px",
                width: { lg: "140px", xl: "152px", xxl: "172px" },
              "&:hover": { backgroundColor: "#244EF5", color: "#FFF" },
              mr: 2,
            }}
            // variant="contained"
            onClick={fetchData}>
            <i className="ri-download-2-line"></i>
            <Typography  sx={{ ml: 1, textTransform: "none" ,fontSize: { lg: "11px", xl: "12px", xxl: "16px" }}}>
              Download Charter
            </Typography>
          </Button>
        </>
      )}

      {initiateDownload && <CSVDownload data={jsonData} headers={csvHeader} target="_blank" />}
    </>
  );
};

export default DetailChartarButton;
