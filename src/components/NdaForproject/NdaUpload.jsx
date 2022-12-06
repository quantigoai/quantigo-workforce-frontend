import {Button, Grid, Paper, Typography} from '@mui/material'
import React from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Ndafile from "../../assets/ndifile/NDA - Independant Contractor.docx_2.pdf";
import DownloadIcon from "@mui/icons-material/Download";
import {DropzoneArea} from 'material-ui-dropzone';
import Avatar from '@mui/material/Avatar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const NdaUpload = () => {
    const paperstyle = { padding: '0px 0px', width: 600, height: 400, borderRadius: 10, margin: "10px auto" }
    const teamicondiv = { paddingLeft: "5%", paddingTop: "2%" }
    const teamicondiv1 = { paddingLeft: "43%", paddingTop: "2%" }
    return (
        <>
            <div style={{ background: '#F5F7F9', width: 1450 }}>
                <Grid container style={teamicondiv}>
                    <Grid xs={1} style={{ paddingLeft: "5%" }}>
                        <Avatar sx={{ bgcolor: "#D3ECFA" }}>
                            <UploadFileIcon style={{ color: "#1974D2" }} />
                        </Avatar>
                    </Grid>
                    <Grid xs={2}>
                        <Typography variant='h5' style={{ color: "#1974D2" }} >Upload NDA</Typography>
                    </Grid>


                </Grid>
                <Grid container style={teamicondiv}>
                    <Grid xs={6}>
                        <div style={{ padding: "0px", paddingLeft: "0%" }}>
                            <Paper elevation={2} style={paperstyle} >

                                <Grid container style={{ paddingTop: "10%", paddingLeft: "25%" }}>
                                    <Typography variant='h4'>Download NDA Form.</Typography>
                                </Grid >
                                <Grid container style={{ paddingTop: "5%", paddingLeft: "45%" }}>
                                    <a href={Ndafile} download="Nda_File.pdf">
                                        {" "}
                                        <DownloadIcon fontSize='large' />{" "}
                                    </a>
                                </Grid>

                            </Paper>
                        </div>
                    </Grid>
                    <Grid xs={6}>
                        <div style={{ padding: "0px", paddingLeft: "0%" }}>
                            <Paper elevation={2} style={paperstyle} >
                                <Grid container style={{ paddingTop: "5%", paddingLeft: "30%", color: "#1974D2", paddingBottom: "5%" }}>
                                    <Typography variant='h5'>Upload NDA with signature</Typography>

                                </Grid>
                                <Grid container style={{ paddingLeft: "5%", paddingRight: "5%" }}>
                                    <DropzoneArea onChange={(files) => console.log('Files:', files)}
                                    />
                                </Grid>


                            </Paper>
                        </div>
                    </Grid>

                </Grid>
                <Grid container style={teamicondiv1}>
                    <Grid style={{ paddingLeft: "0%", paddingBottom: "10%" }} xs={2}>
                        <Button variant="contained">Submit NDA </Button>
                    </Grid>
                    <Grid style={{ paddingLeft: "1%", paddingBottom: "10%" }} xs={1}>
                        <Button variant="contained" color='error'> Discard<DeleteForeverIcon /></Button>
                    </Grid>


                </Grid>


            </div>
        </>
    )
}

export default NdaUpload