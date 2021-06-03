import { combineReducers } from "redux";
import todoListReducer from "./todoListReducer";

const reducers = combineReducers({ todoListReducer });
export default reducers;
