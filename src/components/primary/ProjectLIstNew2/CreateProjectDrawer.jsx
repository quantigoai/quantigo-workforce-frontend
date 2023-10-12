import React from 'react';
import {Box, Button, Drawer, Grid, styled, Typography} from '@mui/material';
import u_multiply from "../../../assets/images/u_multiply.png";
import ProjectForm from './ProjectForm';

const ButtonStyle = styled(Button)({
    // backgroundColor: "#2D58FF",
    // color: "#FFFFFF",
    textTransform:"none",
    "&:hover": {
      backgroundColor: "#FF9A45",
      color: "#1D1D1D",
    },
  });
const CreateProjectDrawer = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
          role="presentation"
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
        >
         <Box sx={{ paddingTop: "2%", paddingLeft: "4%",background:"#F2F6FC" }}>
        <Grid container sx={{paddingBottom:"1%",display:"flex" , alignItems:"center"}}>
          <Grid item xs={10}>
            <Typography variant="h6" sx={{ color: "#3C4D6B",fontSize:"16px" }}>
            Create Project
            </Typography>
          </Grid>
          <Grid item xs={2} sx={{ justifyContent: "right" }}>
            <Button onClick={toggleDrawer(anchor, false)}>
              <img style={{width:"20px"}} alt="cross" src={u_multiply} />
            </Button>
          </Grid>
        </Grid>
      </Box>
        <ProjectForm toggleDrawer={toggleDrawer} anchor={anchor}></ProjectForm>

      
        </Box>
      );

    return (
        <div>
      <Box>
        {["right"].map((anchor,id) => (
          <React.Fragment key={id}>
            <ButtonStyle
              variant="contained"
              onClick={toggleDrawer(anchor, true)}
            >
              Create Project
            </ButtonStyle>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
            //   onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Box>
    </div>
    );
};

export default CreateProjectDrawer;