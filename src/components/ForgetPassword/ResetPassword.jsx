import React, {useState} from 'react'
import {Button, Grid, Paper, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setNewPassword} from '../../features/slice/userSlice';
import NotificationToaster from "../NotificationToaster/NotificationToaster";

export const ResetPassword = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [variant, setVariant] = useState("success");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    const {id , token} = params;
    

    const onSubmit =(data)=>{
      
        const resetdata = {
            id, 
            token, 
            data
        }
        dispatch(setNewPassword(resetdata))
        setMessage("Password successfully changed");
        setVariant("success");
        setOpen(true);
        setTimeout(() => {
            navigate("/auth");
          }, 2000)
    }




    const paperstyle ={padding:'40px 90px', width :500, height : 400,margin:"20px auto"}
  return (
    <div>
        <Paper elevation={10} style={paperstyle} sx={{ padding: "20%" }}>
           <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4}>
            <Grid item xs={12}>
               <h1>Enter Your NEW Password</h1>
            </Grid>
            
            <Grid item xs={12}>
                
            <TextField
                fullWidth
                name="password"
                label="Password"
                type={"password"}
                {...register("password", {required: true})
                  }                
                  ></TextField>

            </Grid>
            <Grid item xs={12}>
                <Button>Save </Button>
            </Grid>
        </Grid>
            </form>
            
        </Paper>
        <NotificationToaster
                    message={message}
                    severity={variant}
                    open={open}
                    setOpen={setOpen}
                />
    </div>
  )
}
