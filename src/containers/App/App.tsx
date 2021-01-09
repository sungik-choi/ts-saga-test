import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../redux/reducers/index';
import TodoActions from '../../redux/actions/TodoActions';

function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector((state: RootState) => state.todo.isFetching);
  const todos = useSelector((state: RootState) => state.todo.todos);

  const changeTodoDone = (uuid: string) => {};

  useEffect(() => {
    dispatch(TodoActions.getTodoList());
  }, [dispatch])

  return (
    <div className="App">
      {isFetching && <div>loading...</div>}
      <ul>
        {[...todos].map(([uuid, { contents, done }]) => {
          return <li key={uuid}>
            <input type="checkbox" checked={done} onChange={() => changeTodoDone(uuid)} />{contents}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
