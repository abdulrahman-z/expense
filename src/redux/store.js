import { createStore } from "redux";
import MainReducer from "./main-reducer";

const store = createStore(MainReducer);

export default store;
