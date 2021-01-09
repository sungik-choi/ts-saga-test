import AT from "../ActionTypes/TodoActionType";

export interface AddTodoPayload {
  contents: string
}

function getTodoList() {
  return {
    type: AT.REQUEST_TODO_LIST,
  }
}

function addTodo(contents: AddTodoPayload) {
  return {
    type: AT.REQUEST_ADD_TODO_LIST,
    payload: contents,
  }
}

const actions = {
  getTodoList,
  addTodo,
}

export default actions;