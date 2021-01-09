import fakeServer from "../../server/fakeServer";

export function getTodoList() {
  return fakeServer.get("/todolist");
}

export function addTodo(contents: string) {
  return fakeServer.post("/todo", contents);
}

export function deleteTodo(id: string) {
  return fakeServer.delete("/todo", id);
}

export function completeTodo(id: string) {
  return fakeServer.patch("/todo", id);
}

const TodoAPI = {
  getTodoList, 
  addTodo,
  deleteTodo,
  completeTodo,
}

export default TodoAPI;