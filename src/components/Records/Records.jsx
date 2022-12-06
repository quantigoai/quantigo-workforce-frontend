import {Grid, Paper, Typography} from '@mui/material'
import React from 'react'
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import Alluserslist from '../AllUsers/Alluserslist';

const Records = () => {
    const paperstyle = { padding: '30px 0px', width: 1400, height: 750, margin: "10px auto" }
    const teamicondiv ={ paddingLeft :"15%", paddingTop:"2%"}
  return (
    <>
        <div style={{background: '#F5F7F9'}}>
             <Grid container style={teamicondiv}>
                <Grid xs={1}>
                    <RoomPreferencesIcon style={{ color: "#1974D2" }}/>
                </Grid>
                <Grid xs={1}>
                    <Typography variant='h5'style={{ color: "#1974D2" }}>Records</Typography>
                </Grid>
             </Grid>
             <Grid container>
             <div style={{ padding: "10px", paddingLeft: "15%" }}>
                    <Paper elevation={5} style={paperstyle} sx={{ padding: "2%" }}>
                        <Grid container style={{paddingLeft:'5%',paddingBottom: "3%"}}> 
                        <Typography variant='h5'style={{ color: "#1974D2" }}>Files Reviewed</Typography>
                        </Grid>
                        <Grid  style={{paddingLeft:'5%',paddingBottom: "3%"}}>
                            <Alluserslist/>
                        </Grid>
                    </Paper>
            </div>

             </Grid>
        </div>
    </>
  )
}

export default Records