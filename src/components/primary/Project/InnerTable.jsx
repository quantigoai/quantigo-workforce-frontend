/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Project/InnerTable.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Friday, May 12th 2023, 12:38:50 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import DownloadIcon from "@mui/icons-material/Download";
import {
  Box,
  Button,
  Collapse,
  Grid,
  IconButton,
  Skeleton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import HubField from "./HubField";
import PriorityField from "./PriorityField";
import StatusField from "./StatusField";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CSVLink } from "react-csv";
import DatasetProgressIndex from "./DatasetProgressIndex";
import { useSelector } from "react-redux";

const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  // color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});

const InnerTable = ({
  project,
  handleClickExtend,
  dataInCSV,
  csvLink,
  handleDownloadExport,
  datasets,
  projectId,
  handleStatusProject,
  handleSave,
  handleChangeHubs,
  priority,
  handleChangePriority,
  hubLists,
  MenuProps,
  open,
}) => {
  const { isLoading } = useSelector((state) => state.dataset);
  const skeletonCount = 2;
  const skeletonArray = Array.from(
    { length: skeletonCount },
    (_, index) => index + 1
  );

  return (
    <>
      <>
        <TableRow
          sx={{
            "&:last-child td, &:last-child th": {
              border: 0,
            },
          }}
        >
          <TableCell align="left">
            {project.type === "videos" || project.type === "images" ? (
              <>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => handleClickExtend(project.id)}
                >
                  {projectId === project.id && open ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </IconButton>
              </>
            ) : (
              <></>
            )}
          </TableCell>
          <TableCell align="left" component="th" scope="row" width="80px">
            {project.name}
          </TableCell>
          <TableCell align="center">
            {capitalizeFirstLetter(project.type)}
          </TableCell>
          <TableCell align="center">{project.id}</TableCell>
          <TableCell align="center">
            <PriorityField
              project={project}
              priority={priority}
              handleChangePriority={handleChangePriority}
            />
          </TableCell>
          <TableCell align="center">
            <HubField
              handleChangeHubs={handleChangeHubs}
              MenuProps={MenuProps}
              hubLists={project.activeHub || hubLists}
            />
          </TableCell>
          <TableCell align="center">
            <StatusField
              project={project}
              handleStatusProject={handleStatusProject}
            />
          </TableCell>
          <TableCell align="center">
            <ButtonStyle variant="outlined" onClick={() => handleSave(project)}>
              Save
            </ButtonStyle>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            style={{
              paddingBottom: 0,
              paddingTop: 0,
              paddingLeft: "5%",
            }}
            colSpan={10}
          >
            <Collapse
              in={projectId === project.id && open ? true : false}
              timeout="auto"
            >
              <Box sx={{ margin: 1 }}>
                {/* {datasets.length === 0 || isLoading ? ( */}
                {isLoading ? (
                  <>
                    <Grid container sx={{ paddingTop: "0%" }}>
                      {" "}
                      <Box sx={{ width: "100%" }}>
                        {skeletonArray.map((item) => (
                          <>
                            {" "}
                            <Skeleton height={20} />
                            <Skeleton animation="wave" height={20} />
                            <Skeleton animation={false} height={20} />
                          </>
                        ))}
                      </Box>
                    </Grid>
                  </>
                ) : !datasets.length ? (
                  <>No dataset found</>
                ) : (
                  <>
                    {" "}
                    <Table size="small" aria-label="purchases">
                      <TableHead
                        sx={{
                          background: "#F8F8F8",
                          height: "60px",
                        }}
                      >
                        <TableRow>
                          <TableCell align="left">Dataset Name </TableCell>
                          <TableCell align="left">Dataset ID</TableCell>
                          <TableCell align="center">Progress</TableCell>
                          {project.type === "videos" ? (
                            <>
                              {" "}
                              <TableCell align="center">
                                Mapping Sheet
                              </TableCell>
                            </>
                          ) : (
                            <></>
                          )}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {datasets.length !== 0 &&
                          datasets.map((dataset) => (
                            <TableRow key={dataset._id}>
                              <TableCell
                                component="th"
                                align="left"
                                scope="row"
                              >
                                {dataset.name}
                              </TableCell>
                              <TableCell align="left">{dataset.id}</TableCell>
                              <TableCell align="left">
                                <DatasetProgressIndex dataset={dataset} />
                                {/* <LinearProgress
                                  value={50}
                                  variant="determinate"
                                  sx={{
                                    // height: "20px",
                                    borderRadius: "5px",
                                  }}
                                /> */}
                              </TableCell>
                              {project.type === "videos" ? (
                                <>
                                  {" "}
                                  <TableCell align="center">
                                    {dataset.isJobPublished ? (
                                      <>
                                        <ButtonStyle
                                          variant="outlined"
                                          onClick={() =>
                                            handleDownloadExport(dataset)
                                          }
                                        >
                                          <DownloadIcon />
                                          Export
                                        </ButtonStyle>
                                        <CSVLink
                                          data={dataInCSV}
                                          filename={`${project.name}_${project.id}__${dataset.name}_${dataset.id}.csv`}
                                          ref={csvLink}
                                          target="_blank"
                                        />
                                      </>
                                    ) : (
                                      <>
                                        <ButtonStyle
                                          variant="outlined"
                                          disabled
                                        >
                                          <DownloadIcon />
                                          Export
                                        </ButtonStyle>
                                      </>
                                    )}
                                  </TableCell>
                                </>
                              ) : (
                                <></>
                              )}
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </>
                )}
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    </>
  );
};

export default InnerTable;
