import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from '../redux/reducers/index';
import TodoSaga from '../sagas/TodoSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger),
  )
);

sagaMiddleware.run(TodoSaga);

export default store;