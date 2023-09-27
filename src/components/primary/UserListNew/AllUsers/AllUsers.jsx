import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import fieldBuilder from "../../../shared/CustomTable/fieldBuilder";
import { adminFields } from "./TableField";
import dataBuilder from "../../../shared/CustomTable/dataBuilder";
import "../../ProjectLIstNew2/index.css";
import TableComponent from "../../ProjectLIstNew2/TableComponent";
const AllUsers = () => {
  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);
  const { users } = useSelector((state) => state.user.users);
  const { role } = useSelector((state) => state.user.user);

  const handleClick = () => {
    console.log("clicked");
  };
  const handleDelete = () => {
    console.log("delete");
  };
  useEffect(() => {
    setMyColumn(fieldBuilder(adminFields, handleClick, handleDelete));
    setMyRows(dataBuilder(users));
  }, [users]);

  return (
    <Box className="projectBox">
      <Box className="tableContent">
        <Box className="mainTableBox">
          <TableComponent role={role} filteredCol={myColumn} myRows={myRows} myColumn={myColumn} />
        </Box>
      </Box>
    </Box>
  );
};

export default AllUsers;
