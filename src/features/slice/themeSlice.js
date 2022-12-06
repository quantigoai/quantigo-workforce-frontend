import {createSlice} from "@reduxjs/toolkit";

const initialTheme = {
  theme: "light",
  isLightTheme: true,
  isLoading: false,
  error: null,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialTheme,
  reducers: {
    setTheme: (state, action) => {
      state.isLightTheme = action.payload;
      localStorage.setItem("isLightTheme", action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setFromPreviousTheme: (state, action) => {
      localStorage.getItem("isLightTheme") === "true"
        ? (state.isLightTheme = true)
        : (state.isLightTheme = false);
    },
  },
});
export const { setTheme, setLoading, setError, setFromPreviousTheme } =
  themeSlice.actions;
export default themeSlice.reducer;
