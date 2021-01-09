import { combineReducers } from "redux";
import todoReducer from "./TodoReducer";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;