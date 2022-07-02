import { combineReducers } from "redux";
import { listData } from "./reducers";

const MainReducer = combineReducers({ data: listData });

export default MainReducer;
