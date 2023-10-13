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
  const { benchMark } = useSelector((state) => state.benchMark);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyleList = {
    width: "100%",
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
            <Box sx={{ width: "100%", paddingTop: "1%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="fullWidth"
                  indicatorColor="primary"
                  textColor="primary"
                  sx={{
                    width: "100%",
                    display: "flex",
                  }}>
                  <Tab label="Class" {...a11yProps(0)} />
                  <Tab label="Tag" {...a11yProps(1)} />
                  <Tab label="Image" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <TableContainer>
                  <Table sx={{ border: "1px solid #DADCDF" }}>
                    <TableHead sx={{ background: "#F8F8F8", height: "70px" }}>
                      <TableRow>
                        <TableCell
                          align="left"
                          sx={{ color: "#969CAF", fontSize: "20px" }}>
                          SL No.
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}>
                          Title
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}>
                          Time (Second)
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}>
                          Count (Avg)
                        </TableCell>
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

                          <TableCell align="center">{row.title}</TableCell>
                          <TableCell align="center">{row.value}</TableCell>
                          <TableCell align="center">
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
                  <Table sx={{ border: "1px solid #DADCDF" }}>
                    <TableHead sx={{ background: "#F8F8F8", height: "70px" }}>
                      <TableRow>
                        <TableCell
                          align="left"
                          sx={{ color: "#969CAF", fontSize: "20px" }}>
                          SL No.
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}>
                          Title
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}>
                          Time (Second)
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}>
                          Count (Avg)
                        </TableCell>
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
                          <TableCell align="center">{row.name}</TableCell>
                          <TableCell align="center">{row.value}</TableCell>
                          <TableCell align="center">
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
                  <Table sx={{ border: "1px solid #DADCDF" }}>
                    <TableHead sx={{ background: "#F8F8F8", height: "70px" }}>
                      <TableRow>
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}>
                          SL No.
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ color: "#969CAF", fontSize: "20px" }}>
                          Observation Time
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}>
                        <TableCell align="center">1</TableCell>
                        <TableCell align="center">
                          {benchMark.imageBenchMark.value}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>
            </Box>
          </Paper>
        </>
      )}
    </>
  );
};

export default SingleBenchmarkNew;
