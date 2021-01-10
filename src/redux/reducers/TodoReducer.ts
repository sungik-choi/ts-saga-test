import AT from '../ActionTypes/TodoActionType';
import Todo from '../../models/Todo';

export interface Todos extends Map<string, Todo> {}

interface TodoReducerState {
  isFetching: boolean,
  errorMessage: string,
  todos: Todos,
}

const initialState: TodoReducerState = {
  isFetching: false,
  errorMessage: "",
  todos: new Map(),
};

const reducer = (state = initialState, action: any): TodoReducerState => {
  switch (action.type) {
    case AT.REQUEST_TODO_LIST: 
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
      }
    case AT.REQUEST_TODO_LIST_SUCCESS: 
      return {
        ...state,
        isFetching: false,
        errorMessage: "",
        todos: new Map(action.payload),
      }
    case AT.REQUEST_ADD_TODO_LIST: 
      return {
        ...state,
        isFetching: true,
        errorMessage: "",
      }
    case AT.REQUEST_ADD_TODO_LIST_SUCCESS:
      const newTodos = new Map([...state.todos]).set(action.payload.uuid, action.payload);
      return {
        ...state,
        isFetching: false,
        errorMessage: "",
        todos: newTodos,
      }
    default: return state;
  }
}

export default reducer;