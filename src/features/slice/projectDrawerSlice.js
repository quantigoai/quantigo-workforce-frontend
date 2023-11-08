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
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { rangeDateFormatter } from '../../helper/dateConverter';
import { realToken } from '../../helper/lib';

const url = import.meta.env.VITE_APP_SERVER_URL;

const initialState = {
  isLoading: false,
  projectDrawers: [],
  projectDrawer: {},
  total: 0,
  usersWorkHistory: [],
  usersWorkHistoryCount: 0,
  myWorkHistoryCount: 0,
  error: null,
};

export const rejectHistoryAPIRequest = async (data) => {
  const { id, rejectionCause } = data;
  try {
    return axios.patch(
      `${url}/project-history/reject-history/${id}`,
      { rejectionCause },
      {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      },
    );
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const approveProjectHistoryAPIRequest = async (id) => {
  try {
    return axios.patch(`${url}/project-history/approved-history/${id}`, id, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const approveProjectPaymentAPLRequest = async (id) => {
  try {
    return axios.patch(`${url}/project-history/approved-payment/${id}`, id, {
      headers: {
        Authorization: `Bearer ${realToken()}`,
      },
    });
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getAllProjectDrawers = createAsyncThunk(
  '/project-drawer/',
  async (data) => {
    try {
      const { search, pagination, filteredData, ascDescOption } = data;

      let query = `limit=${pagination.pageSize}&skip=${
        pagination.currentPage * pagination.pageSize
      }`;

      const filterOptions = Object.keys(filteredData);
      filterOptions.map((f) => (query += `&${f}=${filteredData[f]}`));

      const ascDescOptions = Object.keys(ascDescOption);
      ascDescOptions.map(
        (ad) => (query += `&sortBy=${ad}:${ascDescOption[ad]}`),
      );
      if (search) {
        query += `&search=${search}`;
      }
      return await axios.get(`${url}/project-drawer?${query}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

export const createProjectDrawer = createAsyncThunk(
  '/project-drawer/create',
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
  },
);

export const updateProjectDrawerById = createAsyncThunk(
  '/project-drawer/update',
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
  },
);
export const getProjectDrawerById = createAsyncThunk(
  '/project-drawer/projectDrawer/id',
  async (data) => {
    try {
      return await axios.get(`${url}/project-drawer/${data}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

export const deleteProjectDrawerById = createAsyncThunk(
  '/project-drawer/delete',
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
  },
);

export const checkInProjectDrawerById = createAsyncThunk(
  '/project-drawer/check-in',
  async (data) => {
    try {
      return await axios.patch(
        `${url}/project-drawer/check-in/${data.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${realToken()}`,
          },
        },
      );
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

export const checkOutProjectDrawerById = createAsyncThunk(
  '/project-drawer/check-out',
  async (data) => {
    try {
      return await axios.patch(
        `${url}/project-drawer/check-out/${data.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${realToken()}`,
          },
        },
      );
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

export const addSkillsToCheckInUser = createAsyncThunk(
  '/project-drawer/add-skills',
  async (data) => {
    try {
      return await axios.patch(
        `${url}/project-drawer/assign-skills/${data.id}`,
        data.data,
        {
          headers: {
            Authorization: `Bearer ${realToken()}`,
          },
        },
      );
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

export const removeSkillsToCheckInUser = createAsyncThunk(
  '/project-drawer/remove-skills',
  async (data) => {
    try {
      return await axios.patch(
        `${url}/project-drawer/remove-skills/${data.id}`,
        {
          headers: {
            Authorization: `Bearer ${realToken()}`,
          },
        },
      );
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

export const getUsersWorkHistoryById = createAsyncThunk(
  '/project-drawer/details/getDetails',
  async (data) => {
    try {
      const { pagination, range, filteredData, ascDescOption, id } = data;
      let query = `limit=${pagination.pageSize}&skip=${
        pagination.currentPage * pagination.pageSize
      }`;

      const ascDescOptions = Object.keys(ascDescOption);
      if (ascDescOptions.length === 0) {
        query += `&sortBy=checkedInDate:desc&sortBy=checkedInTime:desc`;
      }
      ascDescOptions.map(
        (ad) => (query += `&sortBy=${ad}:${ascDescOption[ad]}`),
      );
      if (range) {
        const startDate = rangeDateFormatter(range[0].startDate);
        const endDate = rangeDateFormatter(range[0].endDate);
        query += `&startDate=${startDate}&endDate=${endDate}`;
      }
      return await axios.get(
        `${url}/project-drawer/work-history/${id}?${query}`,
        {
          headers: {
            Authorization: `Bearer ${realToken()}`,
          },
        },
      );
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

export const getMyWorkHistoryById = createAsyncThunk(
  '/project-drawer/details/get-my-work-history',
  async (data) => {
    try {
      const { pagination, filteredData, ascDescOption, id } = data;
      let query = `limit=${pagination.pageSize}&skip=${
        pagination.currentPage * pagination.pageSize
      }`;

      const ascDescOptions = Object.keys(ascDescOption);
      if (ascDescOptions.length === 0) {
        query += `&sortBy=checkedInDate:desc&sortBy=checkedInTime:desc`;
      }
      ascDescOptions.map(
        (ad) => (query += `&sortBy=${ad}:${ascDescOption[ad]}`),
      );

      return await axios.get(
        `${url}/project-drawer/my-work-history/${id}?${query}`,
        {
          headers: {
            Authorization: `Bearer ${realToken()}`,
          },
        },
      );
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

export const uploadEffectiveHours = createAsyncThunk(
  'project-drawer/upload-hours',
  async (data) => {
    const { id, hoursData } = data;

    return await axios.patch(
      `${url}/project-drawer/upload-hours/${id}`,
      hoursData,
      {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
        content: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
  },
);

export const approveProjectHistory = createAsyncThunk(
  '/project-history/approved-history',
  async (id) => {
    return await approveProjectHistoryAPIRequest(id);
    // try {
    //   return await axios.patch(`${url}/project-history/approved-history/${id}`, id, {
    //     headers: {
    //       Authorization: `Bearer ${realToken()}`,
    //     },
    //   });
    // } catch (error) {
    //   throw new Error(error.response.data.message);
    // }
  },
);
export const rejectProjectHistory = createAsyncThunk(
  '/project-history/reject-history',
  async (data) => {
    return await rejectHistoryAPIRequest(data);
  },
);
export const approveProjectPayment = createAsyncThunk(
  'project-history/approved-payment',
  async (id) => {
    return await approveProjectPaymentAPLRequest(id);

    // try {
    //   return await axios.patch(`${url}/project-history/approved-payment/${id}`, id, {
    //     headers: {
    //       Authorization: `Bearer ${realToken()}`,
    //     },
    //   });
    // } catch (error) {
    //   throw new Error(error.response.data.message);
    // }
  },
);
export const getMyAvailableProjects = createAsyncThunk(
  '/project-drawer/myAvailAbleProjects',
  async (data) => {
    const {
      search,
      pagination,
      annotatorPlatform,
      filteredData,
      ascDescOption,
    } = data;
    let query = `limit=${pagination.pageSize}&skip=${
      pagination.currentPage * pagination.pageSize
    }`;
    if (annotatorPlatform) {
      query += `&project_platform=${annotatorPlatform}`;
    }

    const filterOptions = Object.keys(filteredData);
    filterOptions.map((f) => (query += `&${f}=${filteredData[f]}`));

    const ascDescOptions = Object.keys(ascDescOption);
    ascDescOptions.map((ad) => (query += `&sortBy=${ad}:${ascDescOption[ad]}`));
    if (search) {
      query += `&search=${search}`;
    }
    try {
      return axios.get(`${url}/project-drawer/my-available-project?${query}`, {
        headers: {
          Authorization: `Bearer ${realToken()}`,
        },
      });
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);
const projectDrawerSlice = createSlice({
  name: 'projectDrawer',
  initialState: initialState,
  reducers: {
    resetProjectDrawer: (state) => {
      state.projectDrawers = [];
    },
    setCurrentProjectDrawer: (state, action) => {
      state.projectDrawer = state.projectDrawers.find(
        (p) => p._id === action.payload,
      );
    },
    updateProjectDrawerManually: (state, action) => {
      state.projectDrawer = action.payload;
      state.projectDrawers = state.projectDrawers.flatMap((drawer) => {
        if (drawer._id === action.payload._id) {
          return action.payload;
        }
        return drawer;
      });
    },

    updateProjectDrawerByNotification: (state, action) => {
      if (state.projectDrawer._id === action.payload._id) {
        state.projectDrawer = action.payload;
      }
      state.projectDrawers = state.projectDrawers.flatMap((drawer) => {
        if (drawer._id === action.payload._id) {
          return action.payload;
        }
        return drawer;
      });
    },

    resetProjectDrawerSlice: () => {
      return initialState;
    },
    clearProjectDrawerData: (state) => {
      state.total = 0;
      state.usersWorkHistory = [];
      state.usersWorkHistoryCount = 0;
      state.myWorkHistoryCount = 0;
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

        if (action.payload.data?.filteredTotalCount === 0) {
          state.total = action.payload.data.filteredTotalCount;
        } else if (action.payload.data?.filteredTotalCount) {
          state.total = action.payload.data.filteredTotalCount;
        } else {
          state.total = action.payload.data.count;
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
        if (state.projectDrawers.length > 10) state.projectDrawers.pop();
        state.projectDrawers.unshift(action.payload.data.projectDrawer);

        // state.projectDrawers = [...state.projectDrawers, action.payload.data.projectDrawer];
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
              : drawer,
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
            (drawer) => drawer._id !== action.payload.data.projectDrawer._id,
          ),
        ];
        // state.total = action.payload.data.count.total;
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
        state.usersWorkHistory = [
          action.payload.data.projectDrawer.checkedInUsersHistory[0],
          ...state.usersWorkHistory,
        ];
        state.myWorkHistoryCount = state.myWorkHistoryCount + 1;
      })
      .addCase(checkInProjectDrawerById.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(checkOutProjectDrawerById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkOutProjectDrawerById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.usersWorkHistory = state.usersWorkHistory.map((history) => {
          if (
            history._id ===
            action.payload.data.projectDrawer.checkedInUsersHistory[0]._id
          ) {
            return action.payload.data.projectDrawer.checkedInUsersHistory[0];
          }
          return history;
        });
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
      })
      .addCase(getProjectDrawerById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProjectDrawerById.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getProjectDrawerById.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(getUsersWorkHistoryById.pending, (state) => {
        state.isLoading = true;
        state.usersWorkHistory = [];
        state.usersWorkHistoryCount = 0;
      })
      .addCase(getUsersWorkHistoryById.fulfilled, (state, action) => {
        state.usersWorkHistoryCount =
          action.payload.data.projectDrawer.totalCount;
        state.usersWorkHistory =
          action.payload.data.projectDrawer.checkedInUsersHistory;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getUsersWorkHistoryById.rejected, (state, action) => {
        state.error = action.error.message;
        state.usersWorkHistoryCount = 0;
        state.usersWorkHistory = [];
        state.isLoading = false;
      })
      .addCase(getMyWorkHistoryById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyWorkHistoryById.fulfilled, (state, action) => {
        state.usersWorkHistoryCount =
          action.payload.data.projectDrawer.totalCount;
        state.usersWorkHistory =
          action.payload.data.projectDrawer.checkedInUsersHistory;

        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMyWorkHistoryById.rejected, (state, action) => {
        state.error = action.error.message;
        state.usersWorkHistoryCount = 0;
        state.usersWorkHistory = [];
        state.isLoading = false;
      })
      .addCase(uploadEffectiveHours.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadEffectiveHours.fulfilled, (state, action) => {
        state.projectDrawer = action.payload.data.projectDrawer;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(uploadEffectiveHours.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(approveProjectHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(approveProjectHistory.fulfilled, (state, action) => {
        state.projectDrawer = action.payload.data.projectDrawer;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(approveProjectHistory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(rejectProjectHistory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(rejectProjectHistory.fulfilled, (state, action) => {
        state.projectDrawer = action.payload.data.projectDrawer;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(rejectProjectHistory.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(approveProjectPayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(approveProjectPayment.fulfilled, (state, action) => {
        state.projectDrawer = action.payload.data.projectDrawer;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(approveProjectPayment.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getMyAvailableProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyAvailableProjects.fulfilled, (state, action) => {
        state.projectDrawers = action.payload.data.projectDrawers;
        state.total = action.payload.data.total;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMyAvailableProjects.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const {
  updateProjectDrawerManually,
  clearProjectDrawerData,
  resetProjectDrawerSlice,
  resetProjectDrawer,
  setCurrentProjectDrawer,
  updateProjectDrawerByNotification,
} = projectDrawerSlice.actions;
export default projectDrawerSlice.reducer;
