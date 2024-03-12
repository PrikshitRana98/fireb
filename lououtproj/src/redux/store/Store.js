import { createStoreHook } from "react-redux";
import { combineReducers, createStore } from "redux";
import { ThemeReducers } from "../reducers/ThemeReducer";
import { Reducers } from "../reducers/Reducers";


const totalReducer=combineReducers({Reducers,ThemeReducers})
export const myStore=createStore(totalReducer)