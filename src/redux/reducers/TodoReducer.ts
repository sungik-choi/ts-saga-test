import AT from '../ActionTypes/TodoActionType';
import Todo from '../../models/Todo';

interface TodoState {
  isFetching: boolean,
  errorMessage: string,
  todos: Todo[] | null,
}

const initialState: TodoState = {
  isFetching: false,
  errorMessage: "",
  todos: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AT.REQUEST_ADD_TODO_LIST: 
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
      }
    case AT.REQUEST_ADD_TODO_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: "",
      }
    default: return state;
  }
}

export default reducer;