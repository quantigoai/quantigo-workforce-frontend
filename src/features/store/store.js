/*
 * File           : store.js
 * Project        : wmpv2
 * Created Date   : Tu 13 Dec 2022 01:22:38
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
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { rootPersistConfig, rootReducers } from "../slice/rootReducers";

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: import.meta.env.VITE_APP_NODE_ENV !== "production" ? true : false,
});

const persistor = persistStore(store);

export { persistor, store };
