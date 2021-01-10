import { delay, call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import TodoAPI from '../redux/api/TodoAPI';
import AT from '../redux/ActionTypes/TodoActionType';

export function* getTodoListSaga() {
  try {
    yield delay(2000);
    const todoList = yield call(TodoAPI.getTodoList);
    yield put({ type: AT.REQUEST_TODO_LIST_SUCCESS, payload: todoList });
  } catch (e) {
    yield put({ type: AT.REQUEST_TODO_LIST_ERROR });
  }
};

export function* addTodoListSaga(action: any) {
  try {
    yield delay(2000);
    const todo = yield call(TodoAPI.addTodo, action.payload);
    yield put({ type: AT.REQUEST_ADD_TODO_LIST_SUCCESS, payload: todo });
  } catch (e) {
    yield put({ type: AT.REQUEST_ADD_TODO_LIST_ERROR });
  }
};

function* TodoSaga() {
  yield takeEvery(AT.REQUEST_TODO_LIST, getTodoListSaga);
  yield takeLatest(AT.REQUEST_ADD_TODO_LIST, addTodoListSaga);
}

export default TodoSaga;