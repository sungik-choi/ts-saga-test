import AT from "../ActionTypes/TodoActionType";

function getTodoList() {
  return {
    type: AT.REQUEST_TODO_LIST,
  }
}

function addTodo(contents: string) {
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