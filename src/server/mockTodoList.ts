import { v4 as uuidv4 } from 'uuid';

import { Todos } from '../redux/reducers/TodoReducer';

const LIST_LENGTH = 10;

const uuidList = Array(LIST_LENGTH).fill(null).map(() => uuidv4());

const mockTodoList: Todos = new Map();

uuidList.forEach((uuid, i) => {
  mockTodoList.set(uuid, {
    uuid,
    contents: `할 일 ${i + 1}번째 입니다.`,
    done: false,
  })
})

export default mockTodoList;