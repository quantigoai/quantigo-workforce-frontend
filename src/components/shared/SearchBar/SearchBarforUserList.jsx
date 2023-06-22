import SearchIcon from "@mui/icons-material/Search";
import {IconButton, Paper, Popover, styled} from "@mui/material";
import * as React from "react";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MiniModelUser from "../FilterFieldForUserList/MiniModelUser";

const CustomFilterIcon = styled(FilterAltIcon)({
  color: "rgba(45, 88, 255, 1)",
  marginRight: "10px",
});

const SearchBarforUserList = ({
  placeholder,
  handleChange,
  setValue,
  setRoleFilter,
  handleFilterUser,
  handleResetUser,
  setHubFilter,
  handleChangeSkills,
  skillSet,
  hubFilter,
  roleFilter,
  isClicked,
  setIsClicked,
  statusType,
  setStatusType,
  handleCloseFilter,
  handleClickFilter,
  anchorE2,
}) => {
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorE2);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}>
        <IconButton
          disabled
          type="button"
          sx={{ p: "10px" }}
          aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
          onChange={handleChange}
          inputProps={{ "aria-label": placeholder }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          sx={{ p: "10px" }}
          aria-label="menu"
          onClick={handleClickFilter}>
          <CustomFilterIcon />
        </IconButton>
      </Paper>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorE2}
        onClose={handleCloseFilter}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}>
        <MiniModelUser
          handleClick={handleClickFilter}
          handleClose={handleCloseFilter}
          handleChange={handleChange}
          setValue={setValue}
          setRoleFilter={setRoleFilter}
          handleFilterUser={handleFilterUser}
          handleResetUser={handleResetUser}
          setHubFilter={setHubFilter}
          handleChangeSkills={handleChangeSkills}
          skillSet={skillSet}
          hubFilter={hubFilter}
          roleFilter={roleFilter}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          statusType={statusType}
          setStatusType={setStatusType}
        />
      </Popover>
    </>
  );
};

export default SearchBarforUserList;
