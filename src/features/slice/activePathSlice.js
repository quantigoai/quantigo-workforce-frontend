/*
 * File           : activePathSlice.js
 * Project        : wmpv2
 * Created Date   : Fr 03 Mar 2023 01:49:12
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Fri Mar 03 2023
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  activePath: "",
  activeChapterIndex: 0,
  activeCourseId: "",
  error: "null",
};

export const activePathSlice = createSlice({
  name: "activePath",
  initialState,
  reducers: {
    setActivePath: (state, action) => {
      state.activePath = action.payload;
    },
    setActiveChapterIndex: (state, action) => {
      state.activeChapterIndex = action.payload;
    },
    setActiveCourseId: (state, action) => {
      state.activeCourseId = action.payload;
    },
  },
});

export const { setActivePath, setActiveChapterIndex, setActiveCourseId } =
  activePathSlice.actions;
export default activePathSlice.reducer;
