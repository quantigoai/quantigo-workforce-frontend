import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import fieldBuilder from "../../../shared/CustomTable/fieldBuilder";
import { adminFields } from "./TableField";
import dataBuilder from "../../../shared/CustomTable/dataBuilder";

const AllUsers = () => {
  const [myColumn, setMyColumn] = useState([]);
  const [myRows, setMyRows] = useState([]);
  const { users } = useSelector((state) => state.users);

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

  return <Box></Box>;
};

export default AllUsers;
