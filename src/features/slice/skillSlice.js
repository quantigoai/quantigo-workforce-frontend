/*
 * File           : skillSlice.js
 * Project        : wmpv2
 * Created Date   : Fr 13 Jan 2023 02:31:59
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Fri Jan 13 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { realToken } from "../../helper/lib";

const url = import.meta.env.VITE_APP_SERVER_URL;

const initialState = {
  isLoading: false,
  skill: {},
  skills: [],
  error: "null",
  isCreated: false,
};

export const getAllSkills = createAsyncThunk("skills/getall", async (data) => {
  return axios.get(`${url}/skills`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// get A skill

export const getASkill = createAsyncThunk("get/A/skill", async (id) => {
  return axios.get(`${url}/skills/${id}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// create skill
export const createASkill = createAsyncThunk("create/A/skill", async (data) => {
  try{

    return axios.post(`${url}/skills`, data, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch(error) {
    throw new Error(error.response.data);
  }
});

//validate skill
//  skills/checkskillname
export const validateSkill = createAsyncThunk("check/A/skill", async (data) => {
  try {
    const response = await axios.post(`${url}/skills/checkskillname`, data, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
    return response;
  } catch (error) {
    throw new Error(error.response.data);
  }
});

// update A Skill
export const updateASkill = createAsyncThunk("update/A/skill", async (finalData) => {
  const { data, id } = finalData;
  return axios.patch(`${url}/skills/${id}`, data, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});
// delete A skill
export const deleteASkill = createAsyncThunk("delete/A/skill", async (id) => {
  return axios.delete(`${url}/skills/${id}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});
const skillSlice = createSlice({
  name: "team",
  initialState: initialState,
  reducers: {
    updateSkillData: () => initialState,
    resetSkills: (state) => {
      state.skills = [];
    },
    resetSkillSlice: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllSkills.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSkills.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.skills = action.payload.data.data;
      })
      .addCase(getAllSkills.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getASkill.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getASkill.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.skills = action.payload.data.data;
      })
      .addCase(getASkill.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createASkill.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createASkill.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.skills = state.skills.map((skill) => {
          if (skill._id !== action.payload.data._id) {
            return skill;
          } else {
            return action.payload.data;
          }
        });
      })
      .addCase(createASkill.rejected, (state,action) => {
        state.isLoading = false;
        state.error = action.error.data;
      })

      .addCase(validateSkill.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(validateSkill.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(validateSkill.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.data;
      })

      .addCase(updateASkill.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateASkill.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.skills = state.skills.map((skill) => {
          if (skill._id !== action.payload.data._id) {
            return skill;
          } else {
            return action.payload.data;
          }
        });
      })
      .addCase(updateASkill.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteASkill.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteASkill.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteASkill.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { resetSkillSlice, resetSkills, updateSkillData } = skillSlice.actions;
export default skillSlice.reducer;
