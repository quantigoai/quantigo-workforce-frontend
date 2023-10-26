/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Job/RejectModal/RejectModal.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 29th 2022, 12:43:06 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import { Box, Button, Grid, Modal, styled, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

import { useSelector } from "react-redux";
import ProjectModalHeader from "../ProjectModalHeader";

export const MyTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { height: "78%", fontSize: "14px" },
}));
export const MySelect = styled(TextField)(() => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "2px solid #E6ECF5 !important",
    borderRadius: "8px",
  },
  "& .MuiInputBase-root": { height: "100%", fontSize: "14px" },
}));
const style = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "8px",
  p: 0,
  input: {
    color: "black",
    height: "20px",
    borderRadius: "8px",
  },
  select: {
    height: "20px",
  },
};

const HoursRejectModal = ({ openModal, handleClose, }) => {
  const { register, handleSubmit } = useForm();
  const { isLoading } = useSelector((state) => state.user);
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={{
            ...style,
            height: { xl: "40%", lg: "%" },
            width: { xl: "35%", lg: "40%" },
          }}>
          <Box sx={{ flex: "0 0 5%" }}>
            <ProjectModalHeader handleCreateProjectClose={handleClose} modalTitle={"Hours Rejection"} />
          </Box>

          <Box
            sx={{
              flex: "1",
              overflowY: "auto",
              padding: "2%",
            }}>
            <Grid container style={{ padding: "1%" }}>
              <Grid container sx={{ paddingBottom: "1%" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "500",
                    mb: 0,
                    // color: isLightTheme ? "#091E42" : "#FFFFFF",
                    // paddingBottom:"1%"
                  }}>
                  Status
                </Typography>

                <MySelect
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  variant="outlined"
                  fullWidth
                  disabled
                  defaultValue={"Rejected"}
                  // placeholder="Select"
                  sx={{ height: "50%" }}></MySelect>
              </Grid>
              <Grid container style={{}}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    fontWeight: "500",
                    mb: 1,
                    // color: isLightTheme ? "#091E42" : "#FFFFFF",
                    paddingBottom: "0%",
                  }}>
                  Rejection Cause
                </Typography>
                <MyTextField
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={5}
                  InputProps={{ disableUnderline: true }}
                  // {...register("rejectionCause", {
                  //   required: true,
                  // })}
                //   onChange={(e) => handleRejectCause(e)}
                />
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              flex: "0 0 64px",
              borderTop: "1px solid #F2F6FC",
              backgroundColor: "neutral.N000",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 2%",

              bottom: "0px",
              borderRadius: "8px",
            }}>
            <Grid container sx={{ padding: "2%" }}>
              <Grid item xs={6}>
                <Button
                  sx={{
                    width: "120px",
                    textTransform: "none",
                    backgroundColor: "#F4F7FE",
                    color: "#62728F",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#F4F7FE",
                      color: "#62728F",
                      border: "1px solid #F4F7FE",
                    },
                  }}
                  onClick={() => handleClose()}>
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Grid container sx={{ justifyContent: "right" }}>
                  <Button
                    disabled={rejectionCause === ""}
                    // type="submit"
                    sx={{
                      width: "128px",
                      textTransform: "none",
                      backgroundColor: "#2E58FF",
                      color: "#FFFFFF",

                      borderRadius: "8px",
                      "&.Mui-disabled": {
                        background: "#B6C9F0",
                        color: "#FFFFFF",
                      },
                      "&:hover": {
                        backgroundColor: "#2E58FF",
                        color: "#FFFFFF",
                        // border: "1px solid #2E58FF",
                      },
                    }}
                    // onClick={() => handleChange()}
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
};

export default HoursRejectModal;
