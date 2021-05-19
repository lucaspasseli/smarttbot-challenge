import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import papersReducer from "./modules/papers/reducer";

const reducers = combineReducers({ papers: papersReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
