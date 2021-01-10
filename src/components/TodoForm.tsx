import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";

import { RootState } from "../redux/reducers/index";
import TodoActions from "../redux/actions/TodoActions";

function TodoForm() {
  const dispatch = useDispatch();
  const isFetching = useSelector((state: RootState) => state.todo.isFetching);

  const formik = useFormik({
    initialValues: {
      contents: "",
    },
    onSubmit: (values) => {
      const { contents } = values;
      dispatch(TodoActions.addTodo(contents));
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="contents">할 일 추가</label>
      <input
        type="text"
        id="contents"
        name="contents"
        onChange={formik.handleChange}
        value={formik.values.contents}
      />
      <button type="submit" disabled={isFetching}>
        추가
      </button>
    </form>
  );
}

export default TodoForm;
