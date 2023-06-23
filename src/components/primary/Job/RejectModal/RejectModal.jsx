/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Job/RejectModal/RejectModal.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 29th 2022, 12:43:06 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Modal,
    Paper,
    Select,
    styled,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";

const ButtonStyle = styled(Button)({
  // backgroundColor: "#2D58FF",
  // borderRadius: "2px",
  cursor: "pointer",
  width: "416px",
  // height: "40px",
  backgroundColor: "#2D58FF",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FF9A45",
    color: "#1D1D1D",
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //    paddingLeft :"20%",
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 0,
  // p: 1,
};

const paperstyle = { width: 1000 };

const RejectModal = ({ openModal, handleClose, RejectName, onSubmit }) => {
  const { isLoading } = useSelector((state) => state.job);
  const { register, handleSubmit } = useForm();
  return (
    <>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Paper elevation={5} style={paperstyle} sx={{}}>
              <Grid
                container
                sx={{ justifyContent: "center", paddingTop: "5%" }}
              >
                <Typography variant="h4">
                  {RejectName}
                  {/* ({job._id}) */}
                </Typography>
              </Grid>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container style={{ padding: "2%" }}>
                  <Grid
                    container
                    xs={12}
                    sx={{
                      paddingLeft: "10%",
                      paddingRight: "10%",
                      paddingBottom: "5%",
                      justifyContent: "center",
                    }}
                  >
                    <FormControl
                      variant="filled"
                      fullWidth
                      sx={{ backgroundColor: "#FFFFFF" }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Review Status
                      </InputLabel>
                      <Select
                        fullWidth
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        {...register("reviewStatus", {
                          required: true,
                        })}
                      >
                        <MenuItem value={"rejected"}>Rejected</MenuItem>
                        <MenuItem value={"accepted"}>Accepted</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid
                    container
                    xs={12}
                    sx={{
                      paddingLeft: "10%",
                      paddingRight: "10%",
                      paddingBottom: "5%",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      fullWidth
                      sx={{ backgroundColor: "#FFFFFF" }}
                      variant="filled"
                      name="Comment"
                      label="Comment"
                      {...register("reviewNote", {
                        required: false,
                      })}
                    ></TextField>
                  </Grid>

                  <Grid
                    container
                    xs={12}
                    style={{
                      paddingLeft: "10%",
                      paddingRight: "10%",
                      paddingBottom: "5%",
                      justifyContent: "center",
                    }}
                  >
                    <ButtonStyle
                      disabled={isLoading}
                      variant="contained"
                      type="submit"
                    >
                      Update
                    </ButtonStyle>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default RejectModal;
