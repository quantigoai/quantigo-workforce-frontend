/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/BenchMark/BenchmarkDetails.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 14th 2022, 2:41:29 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import React from "react";
import editIcon from "../../../assets/images/fi_edit-2.png";
import {
    Box,
    Button,
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
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import PropTypes from "prop-types";

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
const BenchmarkDetails = () => {
  const { benchMark } = useSelector((state) => state.benchMark);
  // const [handelEdit] = useOutletContext();
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperstylelList = {
    width: "80vw",
  };
 
  return (
    <>
      <Paper elevation={0} style={paperstylelList}>
        <Grid container>
          <Grid container xs={10} sx={{ paddingLeft: "4%", paddingTop: "2%" }}>
            <Grid xs={12}>
              <Typography variant="h5" sx={{ color: "#090080" }}>
                {/* {benchMark.name} */}
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography variant="caption" sx={{ color: "#969CAF" }}>
                {/* {benchMark.description} */}
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
            }}>
            <Button
              onClick={() => navigate("/benchmark/update")}
              sx={{
                border: "1px solid #2D58FF",
                color: "#2D58FF",
                borderRadius: "2px",
                backgroundColor: "#FFFFFF",
                width: "105px",
              }}>
              <img src={editIcon} /> EDIT
            </Button>
          </Grid>
        </Grid>

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
                          key={row.t}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}>
                          <TableCell align="left">{i + 1}</TableCell>

                          <TableCell align="left">{row.title}</TableCell>
                          <TableCell align="left">{row.value}</TableCell>
                          <TableCell align="left">{row.averageCount}</TableCell>
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
                          key={row.title}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}>
                          <TableCell align="left">{i + 1}</TableCell>
                          <TableCell align="left">{row.name}</TableCell>
                          <TableCell align="left">{row.value}</TableCell>
                          <TableCell align="left">{row.averageCount}</TableCell>
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
                        <TableCell align="left">Time (Second)</TableCell>
                        <TableCell align="left">Count (Avg)</TableCell>
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
                        <TableCell align="left">
                          {benchMark.imageBenchMark.averageCount}
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

    // <>
    //   {benchMark && Object.keys(benchMark).length > 0 ? (
    //     <>
    //       <Grid
    //         container
    //         xs={12}
    //         style={{ paddingLeft: "1%", justifyContent: "center" }}>
    //         <Typography variant="h4">{benchMark.name}</Typography>
    //       </Grid>
    //       <Grid
    //         container
    //         xs={12}
    //         style={{
    //           paddingLeft: "1%",
    //           paddingBottom: "5%",
    //           justifyContent: "center",
    //         }}>
    //         <Typography variant="h6">{benchMark.description}</Typography>
    //       </Grid>

    //       <Grid xs={6}>
    //         <Typography variant="h4">Class</Typography>
    //         <TableContainer component={Paper}>
    //           <Table sx={{ Width: "20%" }} aria-label="simple table">
    //             <TableHead>
    //               <TableRow>
    //                 <TableCell>Title</TableCell>
    //                 <TableCell align="left">Time (Second)</TableCell>
    //                 <TableCell align="left">Count (Avg)</TableCell>
    //               </TableRow>
    //             </TableHead>
    //             <TableBody>
    //               {benchMark.classesBenchMark.map((row) => (
    //                 <TableRow
    //                   key={row.title}
    //                   sx={{
    //                     "&:last-child td, &:last-child th": {
    //                       border: 0,
    //                     },
    //                   }}>
    //                   <TableCell align="left">{row.title}</TableCell>

    //                   <TableCell align="left">{row.value}</TableCell>

    //                   <TableCell align="left">{row.averageCount}</TableCell>
    //                 </TableRow>
    //               ))}
    //             </TableBody>
    //           </Table>
    //         </TableContainer>
    //       </Grid>

    //       <Grid xs={6}>
    //         <Typography variant="h4">Tag </Typography>
    //         <TableContainer component={Paper}>
    //           <Table sx={{ Width: "20%" }} aria-label="simple table">
    //             <TableHead>
    //               <TableRow>
    //                 <TableCell>Title</TableCell>
    //                 <TableCell align="left">Time (Second)</TableCell>
    //                 <TableCell align="left">Counnt (Avg)</TableCell>
    //               </TableRow>
    //             </TableHead>
    //             <TableBody>
    //               {benchMark.tagsBenchMark.map((row) => (
    //                 <TableRow
    //                   key={row.title}
    //                   sx={{
    //                     "&:last-child td, &:last-child th": {
    //                       border: 0,
    //                     },
    //                   }}>
    //                   <TableCell align="left">{row.name}</TableCell>
    //                   <TableCell align="left">{row.value}</TableCell>
    //                   <TableCell align="left">{row.averageCount}</TableCell>
    //                 </TableRow>
    //               ))}
    //             </TableBody>
    //           </Table>
    //         </TableContainer>
    //       </Grid>

    //       <Grid
    //         container
    //         xs={4}
    //         style={{ padding: "3%", justifyContent: "center" }}>
    //         <Typography variant="h4">Image</Typography>
    //       </Grid>

    //       <Grid container xs={4} style={{ padding: "3%" }}>
    //         <Typography variant="h6">
    //           Time (Second) : {benchMark.imageBenchMark.value}
    //         </Typography>
    //       </Grid>

    //       <Grid container xs={4} style={{ padding: "3%" }}>
    //         <Typography variant="h6">
    //           Count (Avg) : {benchMark.imageBenchMark.averageCount}
    //         </Typography>
    //       </Grid>

    //       <Grid xs={12}>
    //         <Button onClick={() => navigate("/benchmark/update")}>
    //           {" "}
    //           Update BenchMark
    //         </Button>
    //       </Grid>
    //     </>
    //   ) : (
    //     <></>
    //   )}
    // </>
  );
};

export default BenchmarkDetails;
