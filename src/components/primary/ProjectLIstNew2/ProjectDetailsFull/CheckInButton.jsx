import {LoadingButton} from "@mui/lab";
import React from "react";
import {useSelector} from "react-redux";

const CheckInButton = ({ handleCheckInButton, isDisable }) => {
  const { isLightTheme } = useSelector((state) => state.theme);
  const { isLoading } = useSelector((state) => state.projectDrawer);
  return (
    <LoadingButton
      loading={isLoading}
      disabled={isDisable}
      onClick={handleCheckInButton}
      sx={{
        border: "1px solid rgba(54, 179, 126, 0.12)",
        background: "rgba(54, 179, 126, 0.12)",
        borderRadius: "6px",
        fontSize: "14px",
        textTransform: "none",
        color: "#36B37E",
        fontWeight: "bold",
        "&:disabled": {
          color: isLightTheme ? "gray" : "gray",
        },
      }}
    >
      <i style={{ marginRight: "5px" }} className="ri-logout-box-r-line"></i>
      Check-in
    </LoadingButton>
  );
};

export default CheckInButton;
