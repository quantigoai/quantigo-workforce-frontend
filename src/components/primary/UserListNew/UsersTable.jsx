/*
 * Filename: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend/src/components/primary/UserListNew/UsersTable.jsx
 * Path: /home/tanzim/OfficeWorkstation/quantigo-workforce-frontend
 * Created Date: Friday, July 7th 2023, 12:05:52 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2023 Tanzim Ahmed
 */

import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { useRef } from "react";
import { capitalizeFirstLetter } from "../../../helper/capitalizeFirstWord";
import NdaAccept from "../Users/NdaAccept/NdaAccept";
import UserActiveStatueCheck from "../Users/UserActiveCheck/UserActiveStatueCheck";
import UserDetailsIndex from "../Users/UserDetais/UserDetailsIndex";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#5C5CFF",
    color: theme.palette.common.white,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const UsersTable = (props) => {
  const { role, rowsPerPage, page, users } = props;
  const tableRef = useRef(null);

  return (
    <>
      <Table sx={{ border: "1px solid #DADCDF" }} ref={tableRef}>
        <TableHead sx={{ background: "#F8F8F8", height: "80px" }}>
          <TableRow>
            <TableCell align="left" sx={{ color: "#969CAF", fontSize: "16px" }}>
              No
            </TableCell>
            <TableCell sx={{ color: "#969CAF", fontSize: "16px" }}>
              QAI ID
            </TableCell>
            <TableCell sx={{ color: "#969CAF", fontSize: "16px" }}>
              Name
            </TableCell>
            <TableCell align="left" sx={{ color: "#969CAF", fontSize: "16px" }}>
              Email
            </TableCell>
            <TableCell align="left" sx={{ color: "#969CAF", fontSize: "16px" }}>
              Role
            </TableCell>
            <TableCell align="left" sx={{ color: "#969CAF", fontSize: "16px" }}>
              Status
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: "#969CAF",
                fontSize: "16px",
                paddingLeft: "2%",
              }}
            >
              Completed Job
            </TableCell>

            {role === "delivery_manager" ? (
              <></>
            ) : role === "recruitment_manager" ||
              role === "admin" ||
              role === "trainer" ? (
              <>
                <TableCell
                  align="left"
                  sx={{
                    color: "#969CAF",
                    fontSize: "16px",
                    paddingLeft: "4%",
                  }}
                >
                  Action
                </TableCell>
              </>
            ) : (
              <TableCell
                align="center"
                sx={{ color: "#969CAF", fontSize: "16px" }}
              >
                Verified
              </TableCell>
            )}
            {role === "recruitment_manager" || role === "delivery_manager" ? (
              <TableCell
                align="left"
                sx={{ color: "#969CAF", fontSize: "16px" }}
              >
                Details
              </TableCell>
            ) : (
              <></>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((user, i) => (
              <TableRow key={i}>
                <StyledTableCell align="left">
                  {page * rowsPerPage + i + 1}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {user.qaiUserName || "N/A"}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell align="left">{user.email}</StyledTableCell>

                <StyledTableCell align="left">
                  {user.role === "level_1_annotator"
                    ? "Level 1 Annotator"
                    : user.role === "level_2_annotator"
                    ? "Level 2 Annotator"
                    : user.role === "level_0_annotator"
                    ? "Level 0 Annotator"
                    : user.role === "level_3_annotator"
                    ? "Level 3 Annotator"
                    : user.role === "delivery_manager"
                    ? "Project Delivery Lead"
                    : user.role === "project_lead"
                    ? "Delivery Lead"
                    : user.role === "project_coordinator"
                    ? "Project Coordinator"
                    : user.role === "project_manager"
                    ? "Project Manager"
                    : user.role === "recruitment_manager"
                    ? "Recruitment Manager"
                    : capitalizeFirstLetter(user?.role)}
                </StyledTableCell>
                {/* {role === "delivery_manager" ? <></> : */}
                <StyledTableCell align="left">
                  {/* {user.phone ? user.phone : "N/A"} */}
                  <UserActiveStatueCheck user={user} />
                  {/* <UserStatusField userStatus={user.active} /> */}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {user.completedJobs?.length === 0
                    ? "N/A"
                    : user.completedJobs?.length}
                </StyledTableCell>
                {role === "delivery_manager" ? (
                  <></>
                ) : role === "recruitment_manager" ? (
                  <>
                    {user.isVerified ? (
                      <>
                        <StyledTableCell align="center">
                          <Typography>Verified</Typography>
                        </StyledTableCell>
                      </>
                    ) : user.isNDAApproved === "rejected" ||
                      user.isDocumentsSubmitted === "rejected" ? (
                      <>
                        <StyledTableCell align="center">
                          <Typography>Rejected</Typography>
                        </StyledTableCell>
                      </>
                    ) : (
                      <>
                        {" "}
                        <StyledTableCell align="center">
                          <NdaAccept
                            signNda={user.signImage}
                            userId={user._id}
                            isNDASigned={user.isNDASigned}
                            signImage={user.signImage}
                          />
                        </StyledTableCell>
                      </>
                    )}
                  </>
                ) : (
                  <StyledTableCell align="center">
                    <UserDetailsIndex user={user} />
                    {/* {user.verified ? "Verified" : "Unverified"}{" "} */}
                  </StyledTableCell>
                )}
                {role === "recruitment_manager" ||
                role === "delivery_manager" ? (
                  <StyledTableCell align="left">
                    <UserDetailsIndex user={user} />
                  </StyledTableCell>
                ) : (
                  <></>
                )}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UsersTable;
