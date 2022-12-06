import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const url = process.env.REACT_APP_SERVER_URL;
const jwtSecret = process.env.REACT_APP_JWT_SECRET;


const initialState = {
    isLoading: false,
    team : {},
    teams:[],
    error: "null",
    isCreated: false,
  };


  // create qai user 
  export const createquiuser = createAsyncThunk("qaiusers/createqaiuser", async (data) => {
    return axios.post(`${url}/qaiusers/createqaiuser`, data);
  });
  // export const getAllTeams = createAsyncThunk("resources/teams", async (data) => {
  //   return axios.post(`${url}/resources/teams`, data);
  // });



  const qaidatabaseSlice = createSlice({
    name: "team",
    initialState: initialState,
    // extraReducers: (builder) => {
    //   builder
    //   .addCase(getAllTeams.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(getAllTeams.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;
    //     state.teams = action.payload.data;
    //   })
    //   .addCase(getAllTeams.rejected, (state) => {
    //     state.isLoading = false;
    //    ;
    //   }); 
    // },
  });
  
  export default qaidatabaseSlice.reducer;