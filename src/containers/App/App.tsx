import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/reducers/index";
import TodoActions from "../../redux/actions/TodoActions";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector((state: RootState) => state.todo.isFetching);

  useEffect(() => {
    dispatch(TodoActions.getTodoList());
    console.log("test");
  }, [dispatch]);

  return (
    <div className="App">
      {isFetching && <div>loading...</div>}
      <TodoList />
      <TodoForm />
    </div>
  );
}

export default App;
