import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../redux/reducers/index";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const changeTodoDone = (uuid: string) => {};

  return (
    <ul>
      {[...todos].map(([uuid, { contents, done }]) => {
        return (
          <li key={uuid}>
            <input
              type="checkbox"
              checked={done}
              onChange={() => changeTodoDone(uuid)}
            />
            {contents}
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
