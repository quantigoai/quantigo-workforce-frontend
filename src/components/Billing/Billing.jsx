import {Avatar, Button, Grid, Paper, Typography} from '@mui/material'
import React from 'react'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import Alluserslist from '../AllUsers/Alluserslist';

const Billing = () => {
    const teamicondiv = { paddingLeft: "5%", paddingTop: "1%" }
    const paperstyle = { padding: '0px 0px', width: 800, height: 800, borderRadius: 10, margin: "10px auto" }
    const headergrid = { paddingTop: " 10px 0px", borderRadius: 10, backgroundColor: "#5F71F1", height: 100 }
    return (
        <>
            <div style={{ background: '#F5F7F9',width: 1450 }}>
                <Grid container style={teamicondiv}>
                    <Grid xs={1}>
                    <Avatar sx={{ bgcolor: "#D3ECFA" }}>
                        <RequestQuoteIcon style={{ color: "#1974D2" }} />
                        </Avatar>
                    </Grid>
                    <Grid xs={1}>
                        <Typography variant='h5' style={{ color: "#1974D2" }} >Billing</Typography>
                    </Grid>
                    <Grid xs={7}></Grid>
                    <Grid xs={3}>
                        <Button variant="contained">Update Billing </Button>
                    </Grid>
                </Grid>
                <div style={{ paddingLeft: "0%" }}>
                    <Paper elevation={5} style={paperstyle} >
                        <div style={headergrid}>
                            <Grid container>
                                <Grid container >
                                    <Typography style={{ paddingTop: "40px", paddingLeft: "40px", color: "#FFFFFF" }} variant='h5'>INVOICE</Typography>

                                </Grid>
                                <Grid container >
                                    <Typography style={{ paddingLeft: "40px", color: "#FFFFFF" }} variant='h7'>YOUR PLAN: Annotation</Typography>
                                </Grid>

                            </Grid>

                        </div>
                        <div>
                            <Alluserslist />
                        </div>
                        <div>
                            <Grid container>
                                <Button variant="contained">
                                    Done
                                </Button>
                            </Grid>
                        </div>

                    </Paper>
                </div>
            </div>
        </>
    )
}

export default Billing