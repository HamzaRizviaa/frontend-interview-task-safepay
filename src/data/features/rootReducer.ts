import { combineReducers } from "@reduxjs/toolkit";
import studentSlice from "./students/studentSlice";

const rootReducer = combineReducers({
  studentSlice,
});

export default rootReducer;
