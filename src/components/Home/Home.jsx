import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import ReactPlayer from 'react-player';
import {Paper} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
     //backgroundImage: `url(${img1})`,
    // backgroundColor : "#0D20AA",
    height: "500px",
    
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  h1 : {
    color : "#007bff",
    padding :"10x",
    marginLeft :"60px"
  },
  plarge  :{
    color: "#007bff",
    marginLeft :"50px"
},
buttonsale :{
  marginLeft :"50px"
},
reactplayer :{
  // position: "relative",
  // top: "5px",
  // left: "20px",
  // padding :"50px",
  borderRadius: "10"
}
  
}));

const paperstyle ={ width :1000,height : 350, margin:"50px 50px", borderRadius: 10, border: "7px solid blue"}

const Home = () => {
  const classes = useStyles(); 
    return (
      <div>
        <div>
        <Box className={classes.hero}>
        <Paper elevation={20} style={paperstyle} sx={{ padding: "0%" }}>
        <ReactPlayer url='https://youtu.be/6Sy2hZzq9OY' width='100%'
          height='100%' controls={true} light={true} />
        </Paper>
          <h1 className={classes.h1}>Earn money working from comfort of your home</h1>
         </Box>
         {/* <h1 className={classes.h1}>Earn money working from comfort of your home</h1>
         <p className={classes.plarge }>We’ll teach you everything you need to know! Learn how to do tasks from our online courses or join our FREE Bootcamp program to get hands-on training by certified team members</p> */}
         
        </div> 
        <br/>
        <div>
        
          
        </div>  
      </div>
    );
};

export default Home;