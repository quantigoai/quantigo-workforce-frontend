/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/BenchMarkNew/SingleBenchmarkNew.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Monday, March 27th 2023, 12:43:41 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import {
    Box,
    Grid,
    Paper,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import {useSelector} from "react-redux";
import {useNavigate, useOutletContext} from "react-router-dom";
import CommonHeader from "../shared/CustomComponenet/CommonHeader/CommonHeader";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SingleBenchmarkNew = () => {
  const [
    handleDetails,
    handleChangeServer,
    handleChangeCategory,
    handleChangeTeam,
    handleChangeWorkspace,
    handleChangeProject,
  ] = useOutletContext();

  const { benchMark } = useSelector((state) => state.benchMark);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const paperStyleList = {
    width: "80vw",
  };

  return (
    <>
      <Grid container sx={{ paddingBottom: "2%" }}>
        <CommonHeader
          title={benchMark.name}
          description={benchMark.description}
          customButton="Update Benchmark"
        />
      </Grid>
      {benchMark && Object.keys(benchMark).length > 0 && (
        <>
          <Paper elevation={0} style={paperStyleList}>
            {/* <Grid container>
            <Grid
              container
              xs={10}
              sx={{ paddingLeft: "4%", paddingTop: "2%" }}
            >
              <Grid xs={12}>
                <Typography variant="h5" sx={{ color: "#090080" }}>
                  {benchMark?.name}
                </Typography>
              </Grid>
              <Grid xs={12}>
                <Typography variant="caption" sx={{ color: "#969CAF" }}>
                  {benchMark?.description}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              xs={2}
              sx={{
                justifyContent: "right",
                paddingRight: "4%",
                paddingTop: "2%",
              }}
            >
              <Button
                onClick={() => navigate("/benchmark/update")}
                sx={{
                  border: "1px solid #2D58FF",
                  color: "#2D58FF",
                  borderRadius: "2px",
                  backgroundColor: "#FFFFFF",
                  width: "105px",
                }}
              >
                <img src={editIcon} /> EDIT
              </Button>
            </Grid>
          </Grid> */}

            {/* class ,Tag and image annotation   */}

            <Grid
              container
              sx={{ paddingLeft: "4%", paddingRight: "4%", paddingTop: "2%" }}>
              <Grid xs={12}>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example">
                      <Tab label="Class" {...a11yProps(0)} />
                      <Tab label="Tag" {...a11yProps(1)} />
                      <Tab label="Image" {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <TableContainer>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>SL No.</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Time (Second)</TableCell>
                            <TableCell align="left">Count (Avg)</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {benchMark?.classesBenchMark.map((row, i) => (
                            <TableRow
                              key={row.title}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}>
                              <TableCell align="left">{i + 1}</TableCell>

                              <TableCell align="left">{row.title}</TableCell>
                              <TableCell align="left">{row.value}</TableCell>
                              <TableCell align="left">
                                {row.averageCount}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <TableContainer>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>SL No.</TableCell>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Time (Second)</TableCell>
                            <TableCell align="left">Count (Avg)</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {benchMark?.tagsBenchMark.map((row, i) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}>
                              <TableCell align="left">{i + 1}</TableCell>
                              <TableCell align="left">{row.name}</TableCell>
                              <TableCell align="left">{row.value}</TableCell>
                              <TableCell align="left">
                                {row.averageCount}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <TableContainer>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>SL No.</TableCell>
                            <TableCell align="left">Observation Time</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}>
                            <TableCell align="left">1</TableCell>
                            <TableCell align="left">
                              {benchMark.imageBenchMark.value}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TabPanel>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </>
      )}
    </>
  );
};

export default SingleBenchmarkNew;
