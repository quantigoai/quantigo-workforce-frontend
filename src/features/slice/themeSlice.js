/*
 * File           : themeSlice.js
 * Project        : wmpv2
 * Created Date   : Tu 13 Dec 2022 01:38:16
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
import {createSlice} from '@reduxjs/toolkit';

const initialTheme = {
  theme: 'light',
  isLightTheme: true,
  isLoading: false,
  error: null,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialTheme,
  reducers: {
    // setInitialTheme:
    setTheme: (state, action) => {
      state.isLightTheme = action.payload;
      localStorage.setItem('isLightTheme', action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFromPreviousTheme: (state, action) => {
      if (localStorage.getItem('isLightTheme') === null) {
        localStorage.setItem('isLightTheme', true);
      } else {
        localStorage.getItem('isLightTheme') === 'true'
          ? (state.isLightTheme = true)
          : (state.isLightTheme = false);
      }
    },
  },
});
export const { setTheme, setError, setFromPreviousTheme } = themeSlice.actions;
export default themeSlice.reducer;
