import {Button, Grid, Paper, TextField, Typography} from "@mui/material";
import Menu from '@mui/material/Menu';
import {alpha, styled} from '@mui/material/styles';
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Nid from '../Nid/Nid';

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

export default function UpdateMyDocuments() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [userProfile, setUserProfile] = useState("");
    const [updaProfile,setUpdateprofile] =useState("");
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [description, setDescription] = useState(true);
    const [reviews, setReviews] = useState(false);
    const descriptionHandler = () => {
        setDescription(true);
        setReviews(false);
    };
    const reviewsHandler = () => {
        setDescription(false);
        setReviews(true);
    };
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    
    setAnchorEl(null);

    return(
        <Nid/>
    )
  };
    
const onSubmitProfile=(e)=>{
    e.preventDefault();
    
}

const paperstyle ={ width :800,height : 450, margin:"0px auto"}
  return (
    <div style={{padding: "0px"}}>
        {/* <Box onSubmit={onSubmitProfile}>
            <h2>Update {user.name} Documents</h2>
            <h3> Picture </h3>
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
                <br />
                <input
                type="file"
                name="myImage"
                onChange={(event) => {
                 
                    setSelectedImage(event.target.files[0]);
                }}
                />
        </Box>
        <br/>
        <Box>
        <span>Enter Passport Number: </span>
            <input type="text"></input>
        </Box>
        <br/>
        <Box>
        <span>Enter NID NUMBER: </span>
            <input type="number"></input>
        </Box>
        
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                //endIcon={<KeyboardArrowDownIcon />}
            >
                Options
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple icon={<Nid/>}>
               
                NID
                
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                passport
                </MenuItem>
                
            </StyledMenu>
        </div> */}
         <div >
      <Paper elevation={10} style={paperstyle} sx={{ padding: "0%"}}>
        <form >
          <Grid
            container
            spacing={2}
            direction={"column"}
            justify={"center"}
            alignItems={"center"}
          >
            
            <Grid item xs={6}>
            <Typography variant="h4" padding={2} textAlign="center" color="blue">
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
            <input
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
                <br />
                
               
               </Grid>  
            <Grid item xs={12}>
              <Button variant="contained" type="submit">
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
    </div>
  )
}
