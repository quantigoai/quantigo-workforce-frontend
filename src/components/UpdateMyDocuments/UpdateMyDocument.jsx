import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import {Avatar, Button, Grid, Paper, TextField, Typography,} from "@mui/material";
import {DropzoneArea} from "material-ui-dropzone";
import React, {useState} from "react";

const UpdateMyDocument = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const paperstyle = {
    padding: "0px 0px",
    width: 1000,
    height: 450,
    borderRadius: 10,
    margin: "10px auto",
  };
  const teamicondiv = { paddingLeft: "5%", paddingTop: "2%" };
  return (
    <>
      <div style={{ background: "#F5F7F9", width: 1450 }}>
        <Grid container style={teamicondiv}>
          <Grid xs={1} style={{ paddingLeft: "5%" }}>
            <Avatar sx={{ bgcolor: "#D3ECFA" }}>
              <UploadFileIcon style={{ color: "#1974D2" }} />
            </Avatar>
          </Grid>
          <Grid xs={3}>
            <Typography variant="h5" style={{ color: "#1974D2" }}>
              Update your Documents
            </Typography>
          </Grid>
        </Grid>
        <Grid container style={teamicondiv}>
          <Grid xs={12}>
            <div style={{ padding: "0px", paddingLeft: "0%" }}>
              <Paper elevation={2} style={paperstyle}>
                <form>
                  <Grid
                    container
                    spacing={2}
                    direction={"column"}
                    justify={"center"}
                    alignItems={"center"}
                  >
                    <Grid item xs={6}>
                      <Typography
                        variant="h4"
                        padding={2}
                        textAlign="center"
                        color="blue"
                      >
                        Update Documents
                      </Typography>
                      {/* <select fullWidth>
              <option value="female">NID</option>
              <option value="male">PASSPORT</option>
              
            </select> */}
                      {/* <Typography variant="h6" padding={2} textAlign="center">
              NID 
            </Typography> */}
                      <TextField
                        fullWidth
                        name="nidnumber"
                        label="NID Number"
                      ></TextField>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" textAlign="left">
                        NID IMAGE
                      </Typography>
                      {/* <input
                type="file"
                name="myImage"
                onChange={(event) => {
                  
                  
                    setSelectedImage(event.target.files[0]);
                }}
                />  
                
            {selectedImage && (
                <div>
                  <img
                    alt="not fount"
                    width={"100px"}
                    src={URL.createObjectURL(selectedImage)}
                  />
                  <br />
                  <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
              )}
                <br /> */}
                    </Grid>
                    <Grid
                      container
                      style={{ paddingLeft: "5%", paddingRight: "5%" }}
                    >
                      <DropzoneArea
                        onChange={(files) => console.log("Files:", files)}
                      />
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </div>
          </Grid>
        </Grid>
        <Grid container style={teamicondiv}>
          <Grid style={{ paddingLeft: "0%", paddingBottom: "10%" }} xs={2}>
            <Button variant="contained">Submit Documents</Button>
          </Grid>
          <Grid style={{ paddingLeft: "1%", paddingBottom: "10%" }} xs={1}>
            <Button variant="contained" color="error">
              {" "}
              Discard
              <DeleteForeverIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default UpdateMyDocument;
