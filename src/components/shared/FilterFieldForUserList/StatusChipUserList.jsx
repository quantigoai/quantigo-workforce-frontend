import {Chip, Grid} from "@mui/material";
import React from "react";

let jobStatus = [
  {
    label: "Active Annotator",
    value: "active",
  },
  {
    label: "Inactive Annotator",
    value: "inactive",
  },
];
const StatusChipUserList = ({
  statusType,
  setStatusType,
  isClicked,
  setIsClicked,
}) => {
  const [updatedStatus, setUpdatedStatus] = React.useState(jobStatus);

  const handleClick = (e) => {
    if (isClicked === e) {
      setIsClicked("");
      setStatusType("");
    } else if (e === statusType) {
      setIsClicked("");
      setStatusType("");
    } else {
      setIsClicked(e);
      setStatusType(e);
    }
  };

  const style = (e) => {
    if (isClicked === "" && statusType === e) {
      return {
        backgroundColor: "#2D58FF",
        color: "#FFFFF",
        width: "100%",
      };
    } else if (e === isClicked) {
      return {
        backgroundColor: "#2D58FF",
        color: "#FFFFFF",
        width: "100%",
      };
    } else {
      return {
        backgroundColor: "#fff",
        color: "#000",
        width: "100%",
      };
    }
  };
  return (
    <>
      <Grid container>
        {updatedStatus.map((status) => (
          <Grid key={status.value} item xs={5} sx={{ p: 1 }}>
            <Chip
              variant="outlined"
              sx={style(status.value)}
              label={status.label}
              value={statusType}
              onClick={() => handleClick(status.value)}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default StatusChipUserList;
