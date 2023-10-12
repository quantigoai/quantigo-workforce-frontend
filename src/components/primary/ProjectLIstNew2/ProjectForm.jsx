import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    styled,
    TextField,
    Typography
} from '@mui/material';
import React from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SkillFieldProject from './SkillFieldProject';

const CustomDownArrow = styled(KeyboardArrowDownIcon)({
    color: "#667085",
    marginRight: "10px",
  });
const ProjectForm = ({toggleDrawer,anchor}) => {
    const [platform, setPlatform] = React.useState('');
    const [skill, setSkill] = React.useState('');
    
    const handleChange = (event) => {
        setPlatform(event.target.value);
      };
     const handleChangeSkill=(event)=>{
        setSkill(event.target.value);

     }
    return (
        <Box sx={{ paddingLeft: "4%", paddingTop: "2%", paddingRight: "1%" }}>
        <Grid container>
          
        <Grid item xs={12} sx={{ paddingRight: "1%",mt:"10px" }}>
            <Typography sx={{fontWeight:"500",mb:"10px",fontSize:"14px"}} variant='h6' >Platform</Typography>
              <FormControl 
                variant="filled"
                fullWidth
                sx={{
                  backgroundColor: "#F8F8F8",
                  borderRadius: "8px",
                  // width: "238.5px",
                  height: "60px",
                  background:"#E6ECF5",
                  fontSize:"14px"
                }}
              >
                 <InputLabel id="demo-simple-select-filled-label">
                  Select
                </InputLabel>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  defaultValue={platform}
                  IconComponent={() => <CustomDownArrow />}
                  onChange={(e) => handleChange(e)}
                >
                  <MenuItem value={"supervisely"}>Supervisely</MenuItem>
                  <MenuItem value={"encord"}>Encord Server</MenuItem>
                  <MenuItem value={"superb_ai"}>Superb Ai</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          <Grid  item xs={12}  >
          <Typography sx={{fontWeight:"500",mt:"10px",fontSize:"14px",mb:"10px"}} variant='h6' >Project Name</Typography>
           
             <TextField sx={{borderRadius:"10px",height:"40px"}} fullWidth id="outlined-basic" label="" variant="outlined" />
           
            
          </Grid>

          <Grid  item xs={12} >
          <Typography sx={{fontWeight:"500",mt:"25px",fontSize:"14px",mb:"10px",}} variant='h6' >Batch</Typography>
           
             <TextField sx={{borderRadius:"10px",height:"40px"}} fullWidth id="outlined-basic" label="" variant="outlined" />
           
            
          </Grid>
          <Grid  item xs={12} >
          <Typography sx={{fontWeight:"500",mt:"20px",fontSize:"14px",mb:"10px"}} variant='h6' >Alias</Typography>
           
             <TextField fullWidth id="outlined-basic" label="" variant="outlined" />
           
            
          </Grid>

          <Grid  item xs={12} >
          <Typography sx={{fontWeight:"500",mt:"15px",fontSize:"14px",mb:"10px"}} variant='h6' >PDR</Typography>
           
             <TextField fullWidth id="outlined-basic" label="" variant="outlined" />
           
            
          </Grid>
           {/* <SkillField/> */}
           <SkillFieldProject/>
            <Grid  item xs={12} >
          <Typography sx={{fontWeight:"500",mt:"15px",fontSize:"14px",mb:"10px"}} variant='h6' >Benchmark</Typography>
           
             <TextField fullWidth id="outlined-basic" label="" variant="outlined" />
           
            
          </Grid>
          <Grid  item xs={12} >
          <Typography sx={{fontWeight:"500",mt:"15px",fontSize:"14px",mb:"10px"}} variant='h6' >Guideline and Edge-case Document</Typography>
           
             <TextField fullWidth id="outlined-basic" label="" variant="outlined" />
           
            
          </Grid>
       
        </Grid>
        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px"}}>
       <Button onClick={toggleDrawer(anchor, false)} sx={{textTransform:"none",paddingX:"30px", paddingY:"5px",fontSize:"16px"}} variant='filled' size="large">Cancel</Button>
       <Button sx={{textTransform:"none",paddingX:"30px", paddingY:"5px",fontSize:"16px",background:"#2E58FF"}} variant='contained' size="large">Save</Button>
       </Box>
       
      </Box>
    );
};

export default ProjectForm;