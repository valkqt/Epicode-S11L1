import { configureStore, combineReducers } from "@reduxjs/toolkit";
import  favReducer  from "../reducers/favourites.js";
import  jobReducer from "../reducers/jobs.js";


const mainReducer = combineReducers({
  favourites: favReducer,
  jobList: jobReducer,
});

const store = configureStore({
  reducer: mainReducer,
});

export default store;
