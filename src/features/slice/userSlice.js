/*
 * File           : userSlice.js
 * Project        : wmpv2
 * Created Date   : Tu 13 Dec 2022 01:23:49
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Tue Dec 13 2022
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import CryptoJS from "crypto-js";
import Cookies from "js-cookie";
import { realToken } from "../../helper/lib";

// const CryptoJS =

const url = import.meta.env.VITE_APP_SERVER_URL;
const jwtSecret = import.meta.env.VITE_APP_JWT_SECRET;

const initialState = {
  isLoading: false,
  user: {},
  users: {},
  targetedUser: {},
  error: "null",
  isCreated: false,
  isLoggedIn: false,
};

export const login = createAsyncThunk("user/login", async (data) => {
  try {
    return await axios.post(`${url}/users/login`, data);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//social login
export const socialLogin = createAsyncThunk("users/sociallogin", async (data) => {
  return await axios.post(`${url}/users/sociallogin`, data);
});

export const signup = createAsyncThunk("user/users", async (data) => {
  try {
    const response = await axios.post(`${url}/users`, data);
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
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

export const alreadyLogin = createAsyncThunk("user/alreadyLogin", async (id) => {
  return axios.get(`${url}/users/${id}`);
});

// read My Profile
export const readMyProfile = createAsyncThunk("read/myProfile", async () => {
  return axios.get(`${url}/users/my-profile`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

export const myProfileEdit = createAsyncThunk("user/myProfileEdit", async (finalData) => {
  const { id, dataAll } = finalData;
  return axios.patch(`${url}/users/my-profile/${id}`, dataAll, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// upload My Image

export const uploadMyImage = createAsyncThunk("upload/my/image", async (finalImageData) => {
  const { formData, id } = finalImageData;
  return axios.patch(`${url}/users/my-image/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
    content: {
      "Content-Type": "multipart/form-data",
    },
  });
});

export const removeMyImage = createAsyncThunk("remove/my/image", async (id) => {
  return axios.delete(`${url}/users/my-image/${id}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

//Update My Documents
export const updateMyDocuments = createAsyncThunk("users/my-documents", async (finalData) => {
  const { id, formData } = finalData;
  return axios.patch(`${url}/users/my-documents/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// export const verifyUser = createAsyncThunk("user/verifyUser", async () => {
//     return axios.get(`${url}/users`, {
//         headers: {
//             "Authorization": `Bearer ${realToken()}`,
//         }
//     });
// });

// export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
//   return axios.get(`${url}/users`, {
//     headers: {
//       Authorization: `Bearer ${realToken()}`,
//     },
//   });
// });

// filter User

export const getAllUsers = createAsyncThunk("user/getAllUser", async (data) => {
  const { search, pagination, filteredData, ascDescOption, role, hub, active, limit, skip, skills } = data || {};

  const todayDate = new Date().toISOString().slice(0, 10);
  let query;
  if (pagination) {
    query = `limit=${pagination.pageSize}&skip=${pagination.currentPage * pagination.pageSize}`;
  } else {
    query = `sortBy=createdAt:asc`;
  }

  if (filteredData) {
    const { skills, role, ...rest } = filteredData;
    if (skills) {
      for (let x in skills) {
        query += `&skills=${skills[x]}`;
      }
    }
    if (role) {
      for (let x in role) {
        query += `&role=${role[x]}`;
      }
    }
    const filterOptions = Object.keys(rest);
    filterOptions.map((f) => (query += `&${f}=${filteredData[f]}`));
  }
  if (ascDescOption) {
    const ascDescOptions = Object.keys(ascDescOption);
    ascDescOptions.map((ad) => (query += `&sortBy=${ad}:${ascDescOption[ad]}`));
  }
  if (search) {
    query += `&search=${search}`;
  }
  // if (limit) {
  //   if (limit === -1) {
  //     query += ``;
  //   } else {
  //     query += `&limit=${limit}`;
  //   }
  // } else {
  //   query += `&limit=10`;
  // }
  // if (skip) {
  //   query += `&skip=${skip}`;
  // } else {
  //   query += `&skip=0`;
  // }

  // if (role) {
  //   for (let x in role) {
  //     query += `&role=${role[x]}`;
  //   }
  // }
  // if (hub) {
  //   query += `&hub=${hub}`;
  // }
  // if (active) {
  //   if (active === "active") {
  //     query += `&activeAnnotator=${todayDate}`;
  //   } else {
  //     query += `&activeAnnotator=empty`;
  //   }
  // }
  // if (skills) {
  //   for (let x in skills) {
  //     query += `&skills=${skills[x]}`;
  //   }
  // }
  return axios.get(`${url}/users?${query}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

//forget password
export const forgetPasswordSlice = createAsyncThunk("users/forget-password", async (data) => {
  return axios.post(`${url}/users/forgot-password`, data);
});
//set new password
export const setNewPassword = createAsyncThunk("users/reset-password/:id/:token", async (resetdata) => {
  const { id, token, data } = resetdata;

  return axios.post(`${url}/users/reset-password/${id}/${token}`, data);
});

// qui database
export const getAUserQuiId = createAsyncThunk("qaiusers/:id", async (id) => {
  return axios.get(`${url}/qaiusers/${id}`);
});

export const generateQuiId = createAsyncThunk("qaiusers/hubs/:hub", async (hub) => {
  return axios.get(`${url}/qaiusers/hubs/${hub}`);
});

//  create Qai User

export const createQaiUser = createAsyncThunk("qaiusers/createqaiuser", async (data) => {
  try {
    return axios.post(`${url}/qaiusers/createqaiuser`, data);
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const createAgUser = createAsyncThunk("agusers/createaguser", async (data) => {
  return axios.post(`${url}/agusers/createaguser`, data);
});

// NDA Signing upload

export const signingNda = createAsyncThunk("user/myNda/userID", async (data) => {
  const { id, signImage } = data;

  return axios.patch(`${url}/users/my-nda/${id}`, signImage, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
    content: {
      "Content-Type": "multipart/form-data",
    },
  });
});

// update a user by id
export const updateAUserById = createAsyncThunk("updateA/user/Id", async (data) => {
  const { id, varifiedData } = data;
  return axios.patch(`${url}/users/${id}`, varifiedData, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

export const getAUserById = createAsyncThunk("getUser/user/Id", async (id) => {
  return axios.get(`${url}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// Change user Role
export const changeRole = createAsyncThunk("change/role", async (finalData) => {
  const { id, data } = finalData;
  return axios.patch(`${url}/users/change-role/${id}`, data, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// user Action

export const deleteOrActivateUser = createAsyncThunk("user/id/action", async (finalData) => {
  const { id, action } = finalData;
  return axios.delete(`${url}/users/${id}/${action}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// Unblock Job For user

export const UnblockJobsForUser = createAsyncThunk("user/Jov/Unblock/id/action", async (data) => {
  const { id, updatedJobLimit } = data;
  return axios.post(`${url}/users/unblockjob/${id}`, updatedJobLimit, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// user Activate deactivate account

export const activateDeactivateUser = createAsyncThunk("user/id/activate/deactivate", async (finalData) => {
  const { id, action } = finalData;
  return axios.delete(`${url}/users/${id}/${action}`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});
// email verification check
export const emailVerificationCheck = createAsyncThunk("/users/verificationcheck", async () => {
  return axios.post(`${url}/users/verificationcheck`);
});

// verified email Link
export const emailVerificationLink = createAsyncThunk("/users/verify-email/:id/:token", async (resetdata) => {
  try {
    const { id, token } = resetdata;
    return await axios.post(`${url}/users/verify-email/${id}/${token}`, {});
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

// resend email

export const resendEmailVarification = createAsyncThunk("resend/email/verification", async () => {
  return axios.get(`${url}/users/resendverificationemail`, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

// change Password
export const changePassword = createAsyncThunk("change/password", async (data) => {
  return axios.post(`${url}/users/change-password`, data, {
    headers: {
      Authorization: `Bearer ${realToken()}`,
    },
  });
});

export const checkUserByUserName = createAsyncThunk("check/user/userName", async (qaiUserName) => {
  try {
    return await axios.get(`${url}/qaiusers/checkuser/${qaiUserName}`);
  } catch (err) {
    throw new Error(err.response.data.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    updateLoggedInUserManually: (state, action) => {
      state.user = action.payload;
    },
    setTargetedUser: (state, action) => {
      state.targetedUser = action.payload;
    },

    updateSingleUserManually: (state, action) => {
      const { user } = action.payload;
      state.targetedUser = user;
      state.users.users = state.users.users.map((item) => {
        if (item._id === user._id) {
          return user;
        }
        return item;
      });
    },
    updateUserField: (state, action) => {
      state.user[action.payload.field] = action.payload.value;
    },
    updateUserEnrollCourse: (state, action) => {
      state.user.enrolledCourses.push(action.payload);
    },
    updateUserCompletedCourse: (state, action) => {
      state.user.completedCourses = action.payload.completedCourses;
      state.user.enrolledCourses = action.payload.enrolledCourses;
      // state.user.completedCourses.push(action.payload);
    },
    updateUserWorkingProject: (state, action) => {
      state.user.currentlyCheckedInProject = action.payload;
      // state.user.completedCourses.push(action.payload);
    },
    clearUserWorkingProject: (state, action) => {
      state.user.currentlyCheckedInProject = null;
      // state.user.completedCourses.push(action.payload);
    },
    resetUserSlice: () => {
      return initialState;
    },
  },
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
      .addCase(readMyProfile.pending, (state) => {
        state.isLoading = true;
        state.isLoggedIn = false;
      })
      .addCase(readMyProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.data;
      })
      .addCase(readMyProfile.rejected, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = "Login failed";
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.error = null;
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
        const token = action.payload.data.token;
        var encryptedToken = CryptoJS.AES.encrypt(JSON.stringify(token), jwtSecret).toString();
        Cookies.set("token", encryptedToken, { expires: 10 });
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = {};
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state) => {
        state.error = null;
        state.user = {};
        state.isCreated = true;
        state.isLoading = false;
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.error.message;
        state.user = {};
        state.isCreated = false;
        state.isLoading = false;
      })

      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        Cookies.remove("token");
        state.error = null;
        state.user = {};
        state.users = {};
        state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
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
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(uploadMyImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadMyImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data;
        state.isLoggedIn = true;
      })
      .addCase(uploadMyImage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeMyImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeMyImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.data;
      })
      .addCase(removeMyImage.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
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
        state.isLoading = false;
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
        state.isLoading = false;
      })
      .addCase(forgetPasswordSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgetPasswordSlice.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(forgetPasswordSlice.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(setNewPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setNewPassword.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(setNewPassword.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
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
        var encryptedToken = CryptoJS.AES.encrypt(JSON.stringify(token), jwtSecret).toString();
        Cookies.set("token", encryptedToken, { expires: 10 });
      })
      .addCase(socialLogin.rejected, (state, action) => {
        state.user = {};
        state.error = action.error.message;
        state.isLoggedIn = false;
        state.isLoading = false;
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
        state.isLoading = false;
      })
      .addCase(generateQuiId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(generateQuiId.fulfilled, (state) => {
        state.error = null;
        state.isLoading = false;
      })
      .addCase(generateQuiId.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(resendEmailVarification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resendEmailVarification.fulfilled, (state) => {
        state.error = null;
        state.isLoading = false;
      })
      .addCase(resendEmailVarification.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(checkUserByUserName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkUserByUserName.fulfilled, (state) => {
        state.error = null;
        state.isLoading = false;
      })
      .addCase(checkUserByUserName.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(createQaiUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQaiUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createQaiUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(createAgUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAgUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createAgUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(signingNda.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signingNda.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
        state.error = null;
      })
      .addCase(signingNda.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateAUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAUserById.fulfilled, (state, action) => {
        state.targetedUser = action.payload.data;
        state.users.users = state.users.users.map((user) => {
          if (user._id === action.payload.data._id) {
            return action.payload.data;
          }
          return user;
        });
        state.error = null;
        state.isLoading = false;
      })
      .addCase(updateAUserById.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(changeRole.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(changeRole.fulfilled, (state, action) => {
        state.targetedUser = action.payload.data;
        state.users.users = state.users.users.map((user) => {
          if (user._id === action.payload.data._id) {
            return action.payload.data;
          }
          return user;
        });
        state.error = null;
        // state.isLoading = false;
      })
      .addCase(changeRole.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteOrActivateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteOrActivateUser.fulfilled, (state, action) => {
        state.targetedUser = action.payload.data;
        state.users.users = state.users.users.map((user) => {
          if (user._id === action.payload.data._id) {
            return action.payload.data;
          }
          return user;
        });
        state.error = null;
        state.isLoading = false;
      })
      .addCase(deleteOrActivateUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(activateDeactivateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(activateDeactivateUser.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(activateDeactivateUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(UnblockJobsForUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(UnblockJobsForUser.fulfilled, (state, action) => {
        state.targetedUser = action.payload.data;
        state.users.users = state.users.users.map((user) => {
          if (user._id === action.payload.data.user._id) {
            return action.payload.data.user;
          }
          return user;
        });
        state.error = null;
        state.isLoading = false;
      })
      .addCase(UnblockJobsForUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(emailVerificationCheck.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(emailVerificationCheck.fulfilled, (state) => {
        state.error = null;
        state.isLoading = false;
      })
      .addCase(emailVerificationCheck.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(emailVerificationLink.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(emailVerificationLink.fulfilled, (state, action) => {
        console.log("🚀 ~ file: userSlice.js:767 ~ .addCase ~ action:", action);
        state.error = null;
        state.user.isEmailVerified = action.payload.data.user.isEmailVerified;
        state.isLoading = false;
      })
      .addCase(emailVerificationLink.rejected, (state, action) => {
        console.log("🚀 ~ file: userSlice.js:772 ~ .addCase ~ action:", action);
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.error = null;
        state.isLoading = false;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});
export const {
  clearUserWorkingProject,
  updateUserWorkingProject,
  setTargetedUser,
  resetUserSlice,
  updateLoggedInUserManually,
  updateSingleUserManually,
  updateUserEnrollCourse,
  updateUserCompletedCourse,
  updateUserField,
} = userSlice.actions;
export default userSlice.reducer;
