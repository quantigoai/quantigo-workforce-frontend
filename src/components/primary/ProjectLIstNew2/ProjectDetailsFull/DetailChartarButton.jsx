import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { CSVDownload } from "react-csv";
import { useSelector } from "react-redux";
import { calculateTimeDifference } from "../../../../helper/dateConverter";
import { realToken } from "../../../../helper/lib";
// import json2csv from "json2csv";
const url = import.meta.env.VITE_APP_SERVER_URL;

const DetailChartarButton = () => {
  const { projectDrawer, usersWorkHistoryCount } = useSelector((state) => state.projectDrawer);
  const csvLink = useRef();
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
  // Function to fetch JSON data from the endpoint
  // const fetchData = async () => {
  //   try {
  //     return await axios
  //       .get(
  //         `${url}/project-drawer/work-history/${projectDrawer._id}?limit=${usersWorkHistoryCount}&sortBy=userQaiID:desc`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${realToken()}`,
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         setJsonData(res.data.projectDrawer.checkedInUsersHistory);
  //         return jsonData.length ? true : false;
  //       });

  //     // setJsonData(response.data.projectDrawer.checkedInUsersHistory);
  //     // await csvLink.current.link.click();

  //     // setJsonData(response.data.projectDrawer.checkedInUsersHistory);
  //     // setTimeout(() => {
  //     // });
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const [initiateDownload, setInitiateDownload] = useState(false);
  const [headers, setHeaders] = useState([]);

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
      <Button
        sx={{
          fontSize: "14px",
          fontWeight: "bold",
          borderRadius: "8px",
          mr: 2,
          ml: 3,
        }}
        variant="contained"
        onClick={fetchData}
      >
        <i className="ri-download-2-line"></i>
        <Typography variant="body" sx={{ ml: 1, textTransform: "none" }}>
          Download Charter
        </Typography>
      </Button>
      {initiateDownload && <CSVDownload data={jsonData} headers={csvHeader} target="_blank" />}
    </>
  );
};

export default DetailChartarButton;
