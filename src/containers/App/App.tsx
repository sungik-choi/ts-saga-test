import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
 import { useFormik } from 'formik';

import { RootState } from '../../redux/reducers/index';
import TodoActions from '../../redux/actions/TodoActions';

function App() {
  const dispatch = useDispatch();
  const isFetching = useSelector((state: RootState) => state.todo.isFetching);
  const todos = useSelector((state: RootState) => state.todo.todos);

  useEffect(() => {
    dispatch(TodoActions.getTodoList());
  }, [dispatch])

  const formik = useFormik({
    initialValues: {
      contents: '',
    },
    onSubmit: values => {
      const { contents } = values;
      dispatch(TodoActions.addTodo(contents));
      formik.resetForm();
    }
  })

  const changeTodoDone = (uuid: string) => {};

  return (
    <div className="App">
      {isFetching && <div>loading...</div>}
      <ul>
        {[...todos].map(([uuid, { contents, done }]) => {
          return <li key={uuid}>
            <input type="checkbox" checked={done} onChange={() => changeTodoDone(uuid)} />{contents}</li>
        })}
      </ul>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="contents">할 일 추가</label>
        <input type="text" id="contents" name="contents" onChange={formik.handleChange} value={formik.values.contents} />
        <button type="submit" disabled={formik.isSubmitting}>추가</button>
      </form>
    </div>
  );
}

export default App;
