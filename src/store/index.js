import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import overviewReducer from "./modules/overview/reducer";
import robotsReducer from "./modules/robots/reducer";

const reducers = combineReducers({
  overview: overviewReducer,
  robots: robotsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
