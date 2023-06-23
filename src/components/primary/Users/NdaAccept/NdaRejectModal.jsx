/*
 * Filename: /home/tanzim/WorkStation/wmpv2/src/components/primary/Job/RejectModal/RejectModal.jsx
 * Path: /home/tanzim/WorkStation/wmpv2
 * Created Date: Thursday, December 29th 2022, 12:43:06 am
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2022 Tanzim Ahmed
 */
import {Box, Button, Grid, Modal, Paper, TextField, Typography,} from "@mui/material";
import React from "react";
import {useForm} from "react-hook-form";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    //    paddingLeft :"20%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 10,
    p: 1,
  };
  
  const paperstyle = { padding: "10px 20px", width: 1300, margin: "5px auto" };
  const NdaRejectModal = ({ openModal, handleClose, onSubmit }) => {
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
            <Grid>
              <Paper elevation={5} style={paperstyle} sx={{}}>
                <Grid
                  container
                  style={{
                    paddingTop: "3%",
                    paddingLeft: "40%",
                  }}
                >
                  <Typography variant="h4">
                  Rejection Cause
                  </Typography>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container style={{ padding: "2%" }}>
                    
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
                      <TextField
                        fullWidth
                        name="Rejection Cause"
                        label="Rejection Cause"
                        {...register("rejectionCause", {
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
                      <Button variant="contained" type="submit">
                        Reject NDA
                      </Button>
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
  
  export default NdaRejectModal;
  