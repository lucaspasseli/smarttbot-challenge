import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import papersReducer from "./modules/overview/reducer";

const reducers = combineReducers({ overview: papersReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
