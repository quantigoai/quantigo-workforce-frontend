/*
 * File           : jobSlice.js
 * Project        : wmpv2
 * Created Date   : We 14 Dec 2022 12:09:50
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Wed Dec 14 2022
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { realToken } from "../../helper/lib";

const url = import.meta.env.VITE_APP_SERVER_URL;

const initialState = {
  isLoading: false,
  projectDrawers: [],
  projectDrawer: {},
  total: 0,
  error: null,
};

export const getAllProjectDrawers = createAsyncThunk(
  "/project-drawer/",
  async (data) => {
 
    try {
      const { pagination,filteredData,ascDescOption } = data;
   
      let query = `limit=${pagination.pageSize}&skip=${
        pagination.currentPage * pagination.pageSize
      }`;
      
      const filterOptions = Object.keys(filteredData);
      filterOptions.map((f)=> query += `&${f}=${filteredData[f]}`)

      
       const ascDescOptions=Object.keys(ascDescOption)
        ascDescOptions.map((ad)=>query+=`&sortBy=${ad}:${ascDescOption[ad]}`)


      return await axios.get(`${url}/project-drawer?${query}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const createProjectDrawer = createAsyncThunk(
  "/project-drawer/create",
  async (data) => {
    try {
      return await axios.post(`${url}/project-drawer`, data, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const updateProjectDrawerById = createAsyncThunk(
  "/project-drawer/update",
  async (data) => {
    try {
      return await axios.patch(`${url}/project-drawer/${data.id}`, data.data, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const deleteProjectDrawerById = createAsyncThunk(
  "/project-drawer/delete",
  async (id) => {
    try {
      return await axios.delete(`${url}/project-drawer/${id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const checkInProjectDrawerById = createAsyncThunk(
  "/project-drawer/check-in",
  async (data) => {
    try {
      return await axios.patch(`${url}/project-drawer/check-in/${data.id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const checkOutProjectDrawerById = createAsyncThunk(
  "/project-drawer/check-out",
  async (data) => {
    try {
      return await axios.patch(`${url}/project-drawer/check-out/${data.id}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const addSkillsToCheckInUser = createAsyncThunk(
  "/project-drawer/add-skills",
  async (data) => {
    try {
      return await axios.patch(
        `${url}/project-drawer/assign-skills/${data.id}`,
        data.data,
        {
          headers: {
            Authorization: `Bearer ${realToken()}`,
          },
        }
      );
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const removeSkillsToCheckInUser = createAsyncThunk(
  "/project-drawer/remove-skills",
  async (data) => {
    try {
      return await axios.patch(
        `${url}/project-drawer/remove-skills/${data.id}`,
        data.data,
        {
          headers: {
            Authorization: `Bearer ${realToken()}`,
          },
        }
      );
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const projectDrawerSlice = createSlice({
  name: "projectDrawer",
  initialState: initialState,
  reducers: {
    resetProjectDrawer: (state) => {
      state.projectDrawers = [];
    },
    setCurrentProjectDrawer: (state, action) => {
      state.projectDrawer = state.projectDrawers.find(
        (p) => p._id === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjectDrawers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProjectDrawers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projectDrawers = action.payload.data.projectDrawers;
         
        if(action.payload.data?.filteredTotalCount=== 0){
          state.total =  action.payload.data.filteredTotalCount
        } 
        else if(action.payload.data?.filteredTotalCount){
          state.total = action.payload.data.filteredTotalCount
        } 
        else{
          state.total =  action.payload.data.count;
        }
        state.error = null;
      })
      .addCase(getAllProjectDrawers.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(createProjectDrawer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProjectDrawer.fulfilled, (state, action) => {
        state.error = null;
        state.projectDrawers = [
          ...state.projectDrawers,
          action.payload.data.projectDrawer,
        ];
        state.isLoading = false;
      })
      .addCase(createProjectDrawer.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(updateProjectDrawerById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProjectDrawerById.fulfilled, (state, action) => {
        state.error = null;
        state.projectDrawers = [
          ...state.projectDrawers.map((drawer) =>
            drawer._id.toString() ===
            action.payload.data.projectDrawer._id.toString()
              ? action.payload.data.projectDrawer
              : drawer
          ),
        ];
        state.isLoading = false;
      })
      .addCase(updateProjectDrawerById.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(deleteProjectDrawerById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProjectDrawerById.fulfilled, (state, action) => {
        state.error = null;
        state.projectDrawers = [
          ...state.projectDrawers.filter(
            (drawer) => drawer._id !== action.payload.data.projectDrawer._id
          ),
        ];
        state.total = action.payload.data.count.total;
        state.isLoading = false;
      })
      .addCase(deleteProjectDrawerById.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(checkInProjectDrawerById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkInProjectDrawerById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.projectDrawer = action.payload.data.projectDrawer;
      })
      .addCase(checkInProjectDrawerById.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(checkOutProjectDrawerById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkOutProjectDrawerById.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.projectDrawer = {};
      })
      .addCase(checkOutProjectDrawerById.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(addSkillsToCheckInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addSkillsToCheckInUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addSkillsToCheckInUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(removeSkillsToCheckInUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeSkillsToCheckInUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeSkillsToCheckInUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});
export const { resetProjectDrawer, setCurrentProjectDrawer } =
  projectDrawerSlice.actions;
export default projectDrawerSlice.reducer;
