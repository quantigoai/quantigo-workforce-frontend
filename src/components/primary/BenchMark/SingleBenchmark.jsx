/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/BenchMark/SingleBenchmark.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Wednesday, December 14th 2022, 2:41:55 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
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
import React, { useState } from "react";
import { useSelector } from "react-redux";
import editIcon from "../../../assets/images/fi_edit-2.png";
import { useForm } from "react-hook-form";
import { useNavigate, useOutletContext } from "react-router-dom";
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

const SingleBenchmark = () => {
  const [handleTest, imageData, setImageData] = useOutletContext();
  const { benchMark } = useSelector((state) => state.benchMark);
  const [edit, serEdit] = useState("noeditable");
  const { register, handleSubmit } = useForm();
  const [newData, setNewData] = useState({});
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  const paperstyle = {
    padding: "0px 0px",
    width: 1200,
    height: "100%",
    margin: "10px auto",
  };

  const handleInputChange = (x, e, a) => {
    if (x === "value") {
      const data = {
        ...imageData,
      };
      data.value = e;
      setImageData(data);
    } else {
      const data = {
        ...imageData,
      };
      data.averageCount = e;
      setImageData(data);
    }
  };
  const handelEdit = () => {
    serEdit("editAble");
  };
  const paperstylelList = {
    width: "80vw",
  };

  return (
    <>
      {benchMark && Object.keys(benchMark).length > 0 && (
        <Paper elevation={0} style={paperstylelList}>
          <Grid container>
            <Grid
              container
              xs={10}
              sx={{ paddingLeft: "4%", paddingTop: "2%" }}>
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
                            key={row.title}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
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
      )}
    </>

    //Old show bench mark
    // <>
    //   {benchMark && Object.keys(benchMark).length > 0 ? (
    //     <>
    //       {/* {edit === "editAble" ? (
    //         <>
    //           <Grid
    //             container
    //             xs={12}
    //             style={{ paddingLeft: "1%", paddingBottom: "5%" }}
    //           >
    //             <TextField
    //               fullWidth
    //               name="Name"
    //               label="Name"
    //               defaultValue={benchMark.name}
    //               {...register("name")}
    //             ></TextField>
    //           </Grid>
    //         </>
    //       ) : ( */}
    //         <Grid
    //           container
    //           xs={12}
    //           style={{ paddingLeft: "1%", justifyContent: "center" }}
    //         >
    //           <Typography variant="h4">{benchMark.name}</Typography>
    //         </Grid>
    //       {/* )} */}

    //       {edit === "editAble" ? (
    //         <>
    //           <Grid
    //             container
    //             xs={12}
    //             style={{ paddingLeft: "1%", paddingBottom: "5%" }}
    //           >
    //             <TextField
    //               fullWidth
    //               name="description"
    //               label="Description"
    //               defaultValue={benchMark.description}
    //               {...register("description")}
    //             ></TextField>
    //           </Grid>
    //         </>
    //       ) : (
    //         <Grid
    //           container
    //           xs={12}
    //           style={{
    //             paddingLeft: "1%",
    //             paddingBottom: "5%",
    //             justifyContent: "center",
    //           }}
    //         >
    //           <Typography variant="h6">{benchMark.description}</Typography>
    //         </Grid>
    //       )}

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
    //                   }}
    //                 >
    //                   <TableCell align="left">{row.title}</TableCell>
    //                   {edit === "editAble" ? (
    //                     <TableCell align="left">
    //                       <TextField
    //                         InputProps={{
    //                           inputProps: { min: 0 },
    //                         }}
    //                         onKeyPress={(event) => {
    //                           if (event?.key === "-" || event?.key === "+") {
    //                             event.preventDefault();
    //                           }
    //                         }}
    //                         name="number"
    //                         type={"number"}
    //                         label="Second"
    //                         onChange={(e) =>
    //                           handleTest("class", "value", row, e.target.value)
    //                         }
    //                         defaultValue={row.value}
    //                       ></TextField>
    //                     </TableCell>
    //                   ) : (
    //                     <TableCell align="left">{row.value}</TableCell>
    //                   )}
    //                   {edit === "editAble" ? (
    //                     <TableCell align="left">
    //                       <TextField
    //                         InputProps={{
    //                           inputProps: { min: 0 },
    //                         }}
    //                         onKeyPress={(event) => {
    //                           if (event?.key === "-" || event?.key === "+") {
    //                             event.preventDefault();
    //                           }
    //                         }}
    //                         name="number"
    //                         type={"number"}
    //                         label="Count"
    //                         onChange={(e) =>
    //                           handleTest(
    //                             "class",
    //                             "averageCount",
    //                             row,
    //                             e.target.value
    //                           )
    //                         }
    //                         defaultValue={row.averageCount}
    //                       ></TextField>
    //                     </TableCell>
    //                   ) : (
    //                     <TableCell align="left">{row.averageCount}</TableCell>
    //                   )}
    //                 </TableRow>
    //               ))}
    //             </TableBody>
    //           </Table>
    //         </TableContainer>
    //       </Grid>
    //       <Grid xs={6}>
    //         <Typography variant="h4">Tag</Typography>
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
    //               {benchMark.tagsBenchMark.map((row) => (
    //                 <TableRow
    //                   key={row.title}
    //                   sx={{
    //                     "&:last-child td, &:last-child th": {
    //                       border: 0,
    //                     },
    //                   }}
    //                 >
    //                   <TableCell align="left">{row.name}</TableCell>
    //                   {edit === "editAble" ? (
    //                     <TableCell align="left">
    //                       <TextField
    //                         name="number"
    //                         InputProps={{
    //                           inputProps: { min: 0 },
    //                         }}
    //                         onKeyPress={(event) => {
    //                           if (event?.key === "-" || event?.key === "+") {
    //                             event.preventDefault();
    //                           }
    //                         }}
    //                         type={"number"}
    //                         defaultValue={row.value}
    //                         onChange={(e) =>
    //                           handleTest("tag", "value", row, e.target.value)
    //                         }
    //                       ></TextField>
    //                     </TableCell>
    //                   ) : (
    //                     <TableCell align="left">{row.value}</TableCell>
    //                   )}
    //                   {edit === "editAble" ? (
    //                     <TableCell align="left">
    //                       <TextField
    //                         name="number"
    //                         InputProps={{
    //                           inputProps: { min: 0 },
    //                         }}
    //                         onKeyPress={(event) => {
    //                           if (event?.key === "-" || event?.key === "+") {
    //                             event.preventDefault();
    //                           }
    //                         }}
    //                         type={"number"}
    //                         defaultValue={row.averageCount}
    //                         onChange={(e) =>
    //                           handleTest(
    //                             "tag",
    //                             "averageCount",
    //                             row,
    //                             e.target.value
    //                           )
    //                         }
    //                       ></TextField>
    //                     </TableCell>
    //                   ) : (
    //                     <TableCell align="left">{row.averageCount}</TableCell>
    //                   )}
    //                 </TableRow>
    //               ))}
    //             </TableBody>
    //           </Table>
    //         </TableContainer>
    //       </Grid>

    //       <Grid
    //         container
    //         xs={4}
    //         style={{ padding: "3%", justifyContent: "center" }}
    //       >
    //         <Typography variant="h4">Image</Typography>
    //       </Grid>

    //       <Grid container xs={4} style={{ padding: "3%" }}>
    //         {edit === "editAble" ? (
    //           <TextField
    //             onChange={(e) =>
    //               handleInputChange(
    //                 "value",
    //                 e.target.value,
    //                 benchMark.imageBenchMark.value
    //               )
    //             }
    //             // onChange={handleInputChange}
    //             defaultValue={benchMark.imageBenchMark.value}
    //             label="Second"
    //           ></TextField>
    //         ) : (
    //           <Typography variant="h6">
    //             Time (Second) : {benchMark.imageBenchMark.value}
    //           </Typography>
    //         )}
    //       </Grid>
    //       <Grid container xs={4} style={{ padding: "3%" }}>
    //         {edit === "editAble" ? (
    //           <TextField
    //             onChange={(e) =>
    //               handleInputChange(
    //                 "averageCount",
    //                 e.target.value,
    //                 benchMark.imageBenchMark.averageCount
    //               )
    //             }
    //             // onChange={handleInputChange}
    //             defaultValue={benchMark.imageBenchMark.averageCount}
    //             label="Count (Avg)"
    //           ></TextField>
    //         ) : (
    //           <Typography variant="h6">
    //             Count (Avg) : {benchMark.imageBenchMark.averageCount}
    //           </Typography>
    //         )}
    //       </Grid>

    //       {edit === "editAble" ? (
    //         <Grid xs={12}>
    //           <Button variant="contained" type="submit">
    //             {" "}
    //             modification BenchMark{" "}
    //           </Button>
    //         </Grid>
    //       ) : (
    //         <>
    //           <Grid xs={12}>
    //             {/*<Button onClick={() => handelEdit()}>*/}
    //             <Button onClick={() => navigate("/benchmark/update")}>
    //               {" "}
    //               Update BenchMark
    //             </Button>
    //           </Grid>
    //         </>
    //       )}
    //     </>
    //   ) : (
    //     <></>
    //   )}
    // </>
  );
};

export default SingleBenchmark;
