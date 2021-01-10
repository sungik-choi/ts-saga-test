import { call, delay } from 'redux-saga/effects';
import { addTodoListSaga } from "./TodoSaga"

import TodoAPI from '../redux/api/TodoAPI';
import AT from '../redux/ActionTypes/TodoActionType';

test("addTodoListSaga 테스트", () => {
  const action = { type: AT.REQUEST_ADD_TODO_LIST, payload: "ABC" };
  const iterator = addTodoListSaga(action);
  expect(iterator.next().value).toEqual(delay(2000));
  expect(iterator.next().value).toEqual(call(TodoAPI.addTodo, action.payload));
});