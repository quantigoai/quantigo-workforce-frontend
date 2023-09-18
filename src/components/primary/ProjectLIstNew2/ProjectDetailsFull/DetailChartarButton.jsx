import { Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import axios from "axios";
import { realToken } from "../../../../helper/lib";
// import json2csv from "json2csv";
const url = import.meta.env.VITE_APP_SERVER_URL;

const DetailChartarButton = () => {
  const { projectDrawer, usersWorkHistoryCount } = useSelector((state) => state.projectDrawer);
  const csvLink = useRef();
  const [jsonData, setJsonData] = useState([]);

  // Function to fetch JSON data from the endpoint
  const fetchData = async () => {
    try {
      return await axios
        .get(
          `${url}/project-drawer/work-history/${projectDrawer._id}?limit=${usersWorkHistoryCount}&sortBy=userQaiID:desc`,
          {
            headers: {
              Authorization: `Bearer ${realToken()}`,
            },
          }
        )
        .then((res) => {
          setJsonData(res.data.projectDrawer.checkedInUsersHistory);
          return  jsonData.length ? true :  false;
        });

      // setJsonData(response.data.projectDrawer.checkedInUsersHistory);
      // await csvLink.current.link.click();

      // setJsonData(response.data.projectDrawer.checkedInUsersHistory);
      // setTimeout(() => {
      // });
    } catch (error) {
      console.error("Error fetching data:", error);
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
        onClick={() => {
          fetchData(); // Fetch JSON data when button is clicked
        }}>
        <i className="ri-download-2-line"></i>
        <Typography variant="body" sx={{ ml: 1, textTransform: "none" }}>
          Download Charter
        </Typography>
      </Button>
      {/* <CSVLink data={jsonData} filename={"usersWorkHistoryList.csv"} ref={csvLink} target="_blank" /> */}
      <CSVLink
        asyncOnClick={true}
        onClick={async (event, done) => {
          console.log("🚀 ~ file: DetailChartarButton.jsx:60 ~ DetailChartarButton ~ jsonData:", jsonData);
          console.log("You click the link");
          await fetchData();
          console.log("🚀 ~ file: DetailChartarButton.jsx:60 ~ DetailChartarButton ~ jsonData:", jsonData);
          done(); // 👍🏻 You are stopping the handling of component
        }}
        data={jsonData}>
        Download me
      </CSVLink>
      ;
    </>
  );
};

export default DetailChartarButton;
