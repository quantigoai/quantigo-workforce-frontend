import DownloadIcon from "@mui/icons-material/Download";
import {Button, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import React, {useState} from "react";
import Ndafile from "../../assets/ndifile/NDA - Independant Contractor.docx_2.pdf";
import NotificationToaster from "../NotificationToaster/NotificationToaster";

export const Ndapdf = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  //const [file, setFile] = useState()
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState("success");
  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }
    
  };

  // function handleChange(event) {
  //   setFile(event.target.files[0])

  // }
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleupload = () => {


    //    setMessage("NDA received and Admin check NDA ,Then send email for confirmation or activation project ");
    //    setOpen(true);
  };
  const paperdiv1style = {
    padding: "10px 20px",
    width: 1250,
    height: 150,
    margin: "5px auto",
  };
  const paperstyle = {
    padding: "10px 20px",
    width: 1300,
    height: 300,
    margin: "5px auto",
  };
  const card3style = {
    padding: "3px 3px",
    width: 600,
    height: 250,
    margin: "10px auto",
  };
  const card4style = {
    padding: "3px 3px",
    width: 600,
    height: 250,
    margin: "10px auto",
  };
  const h1style = {
    textAlign: "center",
    padding: "12px 2px",
    margin: "10px auto",
    color: "blue",
  };
  const buttonstyle = {
    color: "white",
    backgroundColor: "blue",
    margin: "0px auto",
  };
  const h5style = { margin: "50px 50px" };
  const astyle = { margin: "50px 50px", paddingleft: "5px" };
  const formsubmit = { margin: "50px 70px" };
  const downloadbutton = { fontSize: "large" };
  return (
    <div>
      <div style={paperdiv1style}>
        <Box
          sx={{
            height: 150,
            width: 1200,
            display: "flex",
            padding: 2,
            borderRadius: 2,
            bgcolor: (theme) =>
              theme.palette.mode === "light" ? "grey.200" : "grey.900",
            overflow: "hidden",
          }}
        >
          <h2 style={h1style}>NON-DISCLOSURE AND CONFIDENTIALITY AGREEMENT</h2>
        </Box>
        <br />
      </div>
      <div style={paperstyle}>
        <Grid
          container
          spacing={0}
          sx={{ position: "relative", bottom: "2px", paddingTop: "30px" }}
        >
          <Grid item xs={6}>
            <Box
              sx={{
                height: 240,
                width: 580,
                display: "flex",
                padding: 2,
                borderRadius: 2,
                bgcolor: (theme) =>
                  theme.palette.mode === "light" ? "grey.200" : "grey.900",
                overflow: "hidden",
              }}
            >
              <h5 style={h5style}>Download NDA Form.</h5>
              <br />

              <a style={astyle} href={Ndafile} download="Nda_File.pdf">
                {" "}
                <DownloadIcon />{" "}
              </a>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                height: 240,
                width: 600,
                display: "flex",
                padding: 2,
                borderRadius: 2,
                bgcolor: (theme) =>
                  theme.palette.mode === "light" ? "grey.200" : "grey.900",
                overflow: "hidden",
              }}
            >
              {/* <h6 style={h5style}>Upload  NDA with Signature</h6>
                    <input style={inputstyle} type="file" onChange={handleChange}/>
                    {file==="" ? <Button style={buttonstyle} disabled variant="primary">Upload</Button> :
                    <Button style={buttonstyle}  variant="primary">Upload</Button>} */}

              <form onSubmit={onSubmit}>
                <div style={formsubmit}>
                  <label>Upload NDA with signature </label>
                  <input
                    type="file"
                    onChange={onInputChange}
                    className="form-control"
                    multiple
                  />
                </div>
                {files ? (
                  <Button style={buttonstyle} onClick={handleupload}>
                    upload
                  </Button>
                ) : (
                  <Button style={buttonstyle}>upload</Button>
                )}
              </form>
            </Box>
          </Grid>
        </Grid>
      </div>
      <NotificationToaster
        message={message}
        severity={variant}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};
