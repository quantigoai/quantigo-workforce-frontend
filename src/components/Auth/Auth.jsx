import {Button, Grid, Paper, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import NotificationToaster from "../NotificationToaster/NotificationToaster";
import {useNavigate} from "react-router-dom";
import {login, signup, socialLogin} from "../../features/slice/userSlice";
import InputLabel from "@mui/material/InputLabel";

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {FacebookAuthProvider, GoogleAuthProvider, signInWithPopup,} from "firebase/auth";
import {authentication} from "./firebase-config";
import googleicon from "../../assets/images/icons8-google-144.png";
// 307041136686-he9hrtcgn5qiido12ihr0b8ik3b6cir7.apps.googleusercontent.com
const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSignup, setIsSignup] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");
  const [fbLogin, setFbLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");
  const [checked, setChecked] = useState(false);
  const [checkedNew, setCheckedNew] = useState(false);
  const [hublist, setHub] = useState("home");
  const handleClick = () => {
    setChecked(!checked)
  
  }
  const handleClicknewuser = () => {
    setCheckedNew(!checkedNew)
    

  }
  const handelforgetpassword = () => {
    navigate("/forgetpassword");
  };
  const handlehubselect = (e) => {
    setHub(e.target.value);
   
  }
  //Timeout function is used to close the notification toaster after some time and redirect to the home page.
  //If you think this may be a bad practice, you can remove this function and directly redirect to the home page.
  //And mange the toaster state in a central place using redux or context API.
  const onSubmit = (data) => {
 
    const filterdData = isSignup
      ? { ...data }
      : {
        email: data.email,
        password: data.password,
      };
    isSignup
      ? dispatch(signup(filterdData)).then((action) => {
        if (action.payload?.status === 200 ||201) {
          setMessage("User created successfully");
          setVariant("success");
          setOpen(true);

          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setMessage("User already exists");
          setVariant("error");
          setOpen(true);
        }
      })
      : dispatch(login(filterdData)).then((action) => {
        if (action.payload?.status === 200) {
          setMessage("Login Successful");
          setVariant("success");
          setOpen(true);
          
          if (action.payload.data.user.role === "admin" || action.payload.data.user.role === "trainer") {
            setTimeout(() => {
              navigate("/admindashboard");
            }, 2000);
          }else if(action.payload.data.user.role === "delivery_manager"){
            setTimeout(() => {
              navigate("/delivarydashboard");
            }, 2000);
          }
          else if(action.payload.data.user.role === "project_lead"){
            setTimeout(() => {
              navigate("/projectdashboard");
            }, 2000);
          } 
          else if(action.payload.data.user.role === "reviewer"){
            setTimeout(() => {
              navigate("/reviwerdashboard");
            }, 2000);
          }
          else {
            setTimeout(() => {
              navigate("/annotatordashboard");
            }, 2000);
          }
        } else {
          setMessage("Login Failed");
          setVariant("error");
          setOpen(true);
        }
      });
  };
  const responseFacebook = (response) => {
    
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setFbLogin(true);
    } else {
      setFbLogin(false);
    }
  };
  // const onSuccess = async(res) => {
 
  //   const accessToken =res.access_token
  
  //   const result = await fetch(`https://graph.facebook.com/me?fields=id,name,email.type()&access_token=${accessToken}`)
  //   const profile = await result.json()
  

  // };
 

  const signInWithFacebook = () => {
    const provider1 = new FacebookAuthProvider();
    signInWithPopup(authentication, provider1)
      .then((res) => {
       
        const name = res._tokenResponse.fullName;
        const email = res._tokenResponse.email;
        const facebookUser = {
          name,
          email,
        };

        dispatch(socialLogin(facebookUser)).then((action) => {
          if (action.payload?.status === 200) {
            setMessage("Login Successful");
            setVariant("success");
            setOpen(true);
           
            setTimeout(() => {
              navigate("/dashboard");
            }, 10);
          } else {
            setMessage("Login Failed");
            setVariant("error");
            setOpen(true);
          }
        });
      })
      .catch((err) => {
        
      });
  };
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((res) => {
      
        const name = res.user.displayName;
        const email = res.user.email;

        const googleuser = {
          name,
          email,
        };
    
        dispatch(socialLogin(googleuser)).then((action) => {
          if (action.payload?.status === 200) {
            setMessage("Login Successful");
            setVariant("success");
            setOpen(true);
            setTimeout(() => {
              navigate("/annotatordashboard");
            }, 10);
          } else {
            setMessage("Login Failed");
            setVariant("error");
            setOpen(true);
          }
        });
      })
      .catch((err) => {
   
      });
  };
  const paperstyle = { padding: "30px 50px", width: 600, margin: "20px auto" };
  return (
    <>
      <div elevation={20} style={{ padding: "10px" }}>
        <Paper elevation={10} style={paperstyle} sx={{ padding: "20%" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              spacing={3}
              //direction={"column"}
              justify={"center"}
              alignItems={"center"}>
              <Typography
                variant="h3"
                padding={2}
                textAlign="center"
                color="blue"
                justify={"center"}>
                {isSignup ? "Signup" : "Login"}
              </Typography>
              {isSignup && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Name"
                    {...register("name", { required: true })}></TextField>
                </Grid>
              )}

              <Grid item xs={12}>
                <TextField
                type="email"
                  fullWidth
                  name="email"
                  label="Email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })}></TextField>
              </Grid>
              {/* <error>
                {errors.email?.type === "required" && "Email is required"}
                {errors.email?.type === "pattern" &&
                  "Entered email is in wrong format"}
              </error> */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type={"password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    
                  })}></TextField>
              </Grid>
              {/* <error>
                {errors.password?.type === "minLength" &&
                  "Enter password is more than 6 characters"}
                {errors.password?.type === "maxLength" &&
                  "Enter password is less than 20 characters"}
              </error> */}
              {isSignup && (
                <>
                  <Grid container item>
                    <Grid item xs={12}>
                      <label>
                        <input
                          // ref={register({ required: "This is required" })}
                          name="example_1"
                          onClick={handleClick}

                          checked={checked}
                          type="checkbox"
                        />
                        NEW USER
                      </label>
                    </Grid>
                    <Grid item xs={6}>
                      {/* <label>
                        <input
                          // ref={register({ required: "This is required" })}
                          name="example_1"
                          value={true}
                          onClick={handleClicknewuser}
                          type="checkbox"
                        />
                        New user
                      </label> */}
                      {/* <label> Hub : </label>
                      <select>
                        <option value="dhaka">Dhaka</option>
                        <option value="chuadanga">Chuadanga</option>
                        <option value="other">other</option>
                      </select> */}
                    </Grid>
                  </Grid>
                  {checked === false ?
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        
                        name="occupation"
                        label="Quantigoai Id"
                        // {...register("quantigoaiId", {
                        //   required: true,
                        // })}
                        ></TextField>
                    </Grid> :
                    <Grid item xs={12}>

                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">HUB</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          
                          label="HUB"
                          // onChange={handleChange}
                          // {...register("hub", { required: true })}
                          onClick={handlehubselect}
                        >
                          <MenuItem value={'male'}>Dhaka</MenuItem>
                          <MenuItem value={'chuagange'}>Chuadanga</MenuItem>
                          <MenuItem value={'other'}>Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  }



                  <Grid item xs={12} >
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={age}
                        label="Gender"
                        // onChange={handleChange}
                        {...register("gender", { required: true })}
                      >
                        <MenuItem value={'male'}>Male</MenuItem>
                        <MenuItem value={'female'}>Female</MenuItem>
                        <MenuItem value={'other'}>Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>



                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="occupation"
                      label="Occupation"
                      {...register("occupation", {
                        required: true,
                      })}></TextField>
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography>----------------OR----------------</Typography>
              </Grid>

              {/* <Grid item xs={12}>
                                    <div id="googleSignIn">
                                    <FacebookLogin
                                        appId="591118936062346"
                                        autoLoad={false}
                                        fields="name,email,picture"
                                        scope="public_profile,user_friends"
                                        callback={responseFacebook}
                                        icon="fa-facebook" />
                                    </div>
                                </Grid> */}
              <Grid item xs={6}>
                {/* <OAuth2Login
                                      buttonText="Login with facebook"
                                      authorizationUrl="https://www.facebook.com/dialog/oauth"
                                      responseType="token"
                                      clientId="774406847201003"
                                      redirectUri="http://localhost:3000/"
                                      onSuccess={onSuccess}
                                      onFailure={onFailure}/> */}
                {/* <div>
                                    <img   src={facebookicon} alt="logo" style={{cursor: "pointer" , width: "70px", height: "70px"}} onClick={signInWithFacebook} />
                                    
                                    </div> */}
              </Grid>
              <Grid item xs={12}>
                <div>
                  <img
                    src={googleicon}
                    alt="logo"
                    style={{ cursor: "pointer", width: "70px", height: "70px" }}
                    onClick={signInWithGoogle}
                  />
                </div>
              </Grid>

              {/* <Grid container justify={"center"} alignItems={"center"} item xs={12}>
                                <GoogleOAuthProvider clientId="307041136686-he9hrtcgn5qiido12ihr0b8ik3b6cir7.apps.googleusercontent.com">
                                <GoogleLogin
                                          
                                          onSuccess={credentialResponse => {
                                          
                                            var decoded = jwt_decode(credentialResponse.credential);
                                  
                                          }}
                                          onError={() => {
                                         
                                          }}
                                        />
                                </GoogleOAuthProvider>
                                </Grid> */}

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  onClick={() => setIsSignup(!isSignup)}
                  sx={{ borderRadius: 1, marginTop: 3 }}>
                  {isSignup ? "Login" : "Signup"}
                </Button>
              </Grid>
              <Grid item xs={12}>
                {isSignup ? (
                  ""
                ) : (
                  <Button onClick={handelforgetpassword}>
                    {" "}
                    Forget Password
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
      {/*This is for showing the notification Toaster*/}
      <NotificationToaster
        message={message}
        severity={variant}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};
export default Auth;
