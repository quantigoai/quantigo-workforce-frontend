import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";
import {realToken} from "../lib/lib";

const CryptoJS = require("crypto-js");

const url = process.env.REACT_APP_SERVER_URL;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;

const initialState = {
  isLoading: false,
  user: {},
  users: [],
  error: "null",
  isCreated: false,
  isLoggedIn: false,
};

export const login = createAsyncThunk("user/login", async (data) => {
  return await axios.post(`${url}/users/login`, data);
});
//social login
export const socialLogin = createAsyncThunk("users/sociallogin", async (data) => {
  return await axios.post(`${url}/users/sociallogin`, data);
});

export const signup = createAsyncThunk("user/users", async (data) => {
  return axios.post(`${url}/users`, data);
});

export const logout = createAsyncThunk("user/logout", async () => {
  return await axios.post(
    `${url}/users/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    }
  );
});



export const alreadyLogin = createAsyncThunk(
  "user/alreadyLogin",
  async (id) => {
    return axios.get(`${url}/users/${id}`);
  }
);

export const myProfileEdit = createAsyncThunk(
  "user/myProfileEdit",
  async (data,id) => {
    
    return axios.patch(`${url}/users/my-profile/${id}`, data, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  }
);
//Update My Documents
export const updateMyDocuments = createAsyncThunk(
  "users/my-documents",
  async (data) => {
    return axios.post(`${url}/users/my-documents`, data, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  }
);

// export const verifyUser = createAsyncThunk("user/verifyUser", async () => {
//     return axios.get(`${url}/users`, {
//         headers: {
//             "Authorization": `Bearer ${realToken()}`,
//         }
//     });
// });

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  return axios.get(`${url}/users`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});
//forget password 
export const forgetpassword = createAsyncThunk("users/forget-password", async(data)=>{
  return axios.post(`${url}/users/forgot-password`,data )
});
//set new password 
export const setNewPassword = createAsyncThunk("users/reset-password/:id/:token",async(resetdata)=>{
  const {id,token,data} = resetdata
  console.log({id, token ,data});

  return axios.post(`${url}/users/reset-password/${id}/${token}`,data )
})

// qui database
export const getAUserQuiId = createAsyncThunk(
  "qaiusers/:id",
  async (id) => {
    return axios.get(`${url}/qaiusers/${id}`);
  }
);

export const generateQuiId = createAsyncThunk(
  "qaiusers/hubs/:hub",
  async (hub) => {
    return axios.get(`${url}/qaiusers/hubs/${hub}`);
  }
);

//  createqaiuser

export const createQaiUser = createAsyncThunk("qaiusers/createqaiuser", async(data)=>{
  return axios.post(`${url}/qaiusers/createqaiuser`,data )
});



const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(alreadyLogin.pending, (state) => {
        state.isLoading = true;
        state.isLoggedIn = false;
      })
      .addCase(alreadyLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.data;
      })
      .addCase(alreadyLogin.rejected, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = "Login failed";
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
        const token = action.payload.data.token;
        var encryptedToken = CryptoJS.AES.encrypt(
          JSON.stringify(token),
          jwtSecret
        ).toString();
        Cookies.set("token", encryptedToken, { expires: 10 });
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = true;
        state.user = {};
        state.error = action.error.message;
        state.isLoggedIn = false;
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = {};
        state.isCreated = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = true;
        state.user = {};
        state.isCreated = false;
        state.error = action.error.message;
      })

      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = {};
        state.users = [];
        state.isLoggedIn = false;
        Cookies.remove("token");
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = true;
        state.user = {};
        state.isCreated = false;
        state.error = action.error.message;
      })
      .addCase(myProfileEdit.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(myProfileEdit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data;
        state.isLoggedIn = true;
      })
      .addCase(myProfileEdit.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = action.payload.data;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateMyDocuments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMyDocuments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data;
        state.isLoggedIn = true;
      })
      .addCase(updateMyDocuments.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(forgetpassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgetpassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      
      })
      .addCase(forgetpassword.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(setNewPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setNewPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      
      })
      .addCase(setNewPassword.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(socialLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(socialLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
        const token = action.payload.data.token;
        var encryptedToken = CryptoJS.AES.encrypt(
          JSON.stringify(token),
          jwtSecret
        ).toString();
        Cookies.set("token", encryptedToken, { expires: 10 });
      })
      .addCase(socialLogin.rejected, (state, action) => {
        state.isLoading = true;
        state.user = {};
        state.error = action.error.message;
        state.isLoggedIn = false;
      })
      .addCase(getAUserQuiId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAUserQuiId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = action.payload.data;
      })
      .addCase(getAUserQuiId.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(generateQuiId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(generateQuiId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = action.payload.data;
      })
      .addCase(generateQuiId.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(createQaiUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQaiUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data;
        state.isLoggedIn = true;
      })
      .addCase(createQaiUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
    // .addCase(verifyUser.pending, (state) => {
    //     state.isLoading = true;
    // })
    // .addCase(verifyUser.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.user = action.payload.data;
    //     state.isLoggedIn = true;
    // })
    // .addCase(verifyUser.rejected, (state, action) => {
    //     state.error = action.error.message;
    // });
  },
});

export default userSlice.reducer;
