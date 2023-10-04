import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { changeRole, deleteOrActivateUser } from "../../../../features/slice/userSlice";
import ProjectModalHeader from "../../ProjectLIstNew2/ProjectModalHeader";
import DetailsTab from "./DetailsTab";
import styled from "./testDrawer";

export default function UserDetailsNewIndex({ user, open, handleProjectDetailsOpen, handleClose }) {
  const [roleValue, setRole] = React.useState("");
  const [actionStatus, setActionStatus] = React.useState("");
  const [disabledButton, setDisabledButton] = React.useState(false);
  const { isLoading } = useSelector((state) => state.user);
  const { isLightTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const alert = useAlert();
  const { buttonStyle, BoxStyle } = styled(isLightTheme);
  const handleSetStatus = (e) => {
    setActionStatus(e.target.value);
    setDisabledButton(true);
  };
  const handleSetRole = (e) => {
    setRole(e.target.value);
    setDisabledButton(true);
  };
  const handleChange = () => {
    const data = {
      role: roleValue,
    };
    const finalData = {
      id: user._id,
      data,
    };
    const finalStatusData = {
      id: user._id,
      action: actionStatus,
    };

    roleValue &&
      dispatch(changeRole(finalData)).then((action) => {
        if (action.payload?.status === 200) {
          alert.show("Role Change Successfully", { type: "success" });
        } else {
          alert.show("Role can not Change", { type: "error" });
        }
      });

    actionStatus &&
      dispatch(deleteOrActivateUser(finalData)).then((action) => {
        if (action.payload?.status === 200) {
          if (actionStatus === "delete") {
            window.location.reload(false);
            alert.show(
              "User Delete Successfully",

              { type: "success" }
            );
          } else {
            alert.show(
              "Status change Successfully",

              { type: "success" }
            );
          }
        } else {
          alert.show("Status can not Change", { type: "error" });
        }
      });
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...BoxStyle,
            height: { xl: "80%", lg: "90%" },
            // height: "80%",
            width: { xl: "40%", lg: "50%" },
          }}
        >
          <Box sx={{ flex: "0 0 5%" }}>
            <ProjectModalHeader handleCreateProjectClose={handleClose} modalTitle={"Details"} />
          </Box>

          <Box
            sx={{
              flex: "1",
              overflowY: "auto",
              padding: "3%",
              height: "60%",
              // backgroundColor: "blue",
              "&::-webkit-scrollbar": {
                width: "0",
              },
            }}
          >
            <DetailsTab user={user} handleSetRole={handleSetRole} handleSetStatus={handleSetStatus} />
          </Box>
          <Box
            sx={{
              flex: "0 0 64px",
              borderTop: "2px solid #F2F6FC",
              backgroundColor: "#FFFFFF",
              // backgroundColor: "yellow",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 2%",

              bottom: "0px",
              borderRadius: "8px",
            }}
          >
            <Grid container sx={{ padding: "2%" }}>
              <Grid item xs={6}>
                <Button sx={buttonStyle} onClick={() => handleClose()}>
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Grid container sx={{ justifyContent: "right" }}>
                  <Button
                    disabled={isLoading || !disabledButton}
                    sx={{
                      width: "128px",
                      textTransform: "none",
                      backgroundColor: "#2E58FF",
                      color: "#FFFFFF",

                      borderRadius: "8px",
                      "&.Mui-disabled": {
                        // background: "#eaeaea",
                        color: "#FFFFFF",
                      },
                      "&:hover": {
                        backgroundColor: "#2E58FF",
                        color: "#FFFFFF",
                        // border: "1px solid #2E58FF",
                      },
                    }}
                    onClick={() => handleChange()}
                  >
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
