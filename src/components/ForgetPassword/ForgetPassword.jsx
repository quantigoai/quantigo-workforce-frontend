import React, {useState} from 'react'
import {Button, Grid, Paper, TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import NotificationToaster from "../NotificationToaster/NotificationToaster";
import {forgetpassword} from '../../features/slice/userSlice';


export const ForgetPassword = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [variant, setVariant] = useState("success");
    const [email,setemail] =useState("")
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmit =(data)=>{
   
        dispatch(forgetpassword(data))
        setMessage("Email send");
        setVariant("success");
        setOpen(true);

    }


    const handelemailsend =()=>{
        navigate("/resetpassword")
    }
    const paperstyle ={padding:'40px 90px', width :500, height : 300,margin:"20px auto"}
  return (
    <div>
        <Paper elevation={10} style={paperstyle} sx={{ padding: "20%" }}>
           <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4}>
            <Grid item xs={12}>
                
               <h1>Enter Your Email</h1>
            </Grid>
            
            <Grid item xs={12}>
                
                <TextField
                fullWidth                
                 name="email"
                label="Email"
                {...register("email", { required: true })}                       
                ></TextField>

            </Grid>
            <Grid item xs={12}>
                <Button type="submit">Send</Button>
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
