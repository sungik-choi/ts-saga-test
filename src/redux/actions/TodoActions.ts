import AT from "../ActionTypes/TodoActionType";

export interface TodoListPayload {
  contents: string
}

function requestTodoList(contents: TodoListPayload) {
  return {
    type: AT.REQUEST_ADD_TODO_LIST,
    payload: contents,
  }
}

const actions = {
  requestTodoList,
}

export default actions;