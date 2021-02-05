import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import fetchTasks from "./reducers/TasksReducer";

const rootReducer = combineReducers({
  task: fetchTasks
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
