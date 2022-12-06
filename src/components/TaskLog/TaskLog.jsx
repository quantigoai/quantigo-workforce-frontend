import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export const TaskLog = () => {


const paperdiv1style ={padding:'10px 20px', width :1250,height : 150, margin:"5px auto"}
const paperstyle ={padding:'10px 20px', width :1300,height : 300, margin:"5px auto"}
    
  return (
   <>
    
    <div style={paperdiv1style}>
      <Row className="justify-content-md-center">
        <Card style={{ width: '100rem' ,overflow: 'hidden',}} className="text-center" >
        <Card.Header as="h5">Task Log</Card.Header>
        <Card.Body>
        <Card.Title>Your Task Log</Card.Title>
        <Card.Text>
        The task log is a summary of all the work you’ve done and how much you can expect to get paid for it.
        </Card.Text>
        {/* <Button onClick={handletask} variant="primary">Start Tasking</Button> */}
      </Card.Body>
        </Card>
        </Row>
      </div>
    
    <div>
        <spam>This is everything you’ve ever done on the platform</spam>
    </div>
    <div style={paperstyle}>
    <Grid  container spacing={2} sx={{position : "relative", bottom : "2px", "paddingTop" : "40px" }}>
    <Grid xs={4}>
    
    <Box
      sx={{
        height: 200,
        width: 400,
        display: 'flex',
        padding: 2,
        borderRadius: 2,
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? 'grey.200' : 'grey.900',
        overflow: 'hidden',
      }}
      
      
    > 
    <Typography variant="h7" component="div">
            5
           <br/>
           Calculated tasks
           <br/>
           0 pending
        </Typography>
  

    </Box>
    </Grid>
    <Grid xs={4}>
    <Box
      sx={{
        height: 200,
        width: 400,
        display: 'flex',
        padding: 2,
        borderRadius: 2,
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? 'grey.200' : 'grey.900',
        overflow: 'hidden',
      }}
      
      
    >  
       <Typography variant="h7" component="div">
       $0.05
           <br/>
           Earnings
           <br/>
           Up through Aug 30
        </Typography>
        
    </Box>
    </Grid>
    <Grid xs={4}>
    <Box
      sx={{
        height: 200,
        width: 400,
        display: 'flex',
        padding: 2,
        borderRadius: 2,
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? 'grey.200' : 'grey.900',
        overflow: 'hidden',
      }}
      
      
    >
        
        
        <Typography variant="h7" component="div">
        2
           <br/>
           Days I’ve tasked on
           
        </Typography>
    </Box>
    </Grid>
    </Grid>
    </div>
    <div style={paperdiv1style}>

    
    <Box
      sx={{
        height: 200,
        width: 1200,
        display: 'flex',
        padding: 2,
        borderRadius: 2,
        bgcolor: (theme) =>
          theme.palette.mode === 'light' ? 'grey.300' : 'grey.900',
        overflow: 'hidden',
      }}
      
      
    >

    </Box>
    <br/>
    </div>
   </>
  )
}

