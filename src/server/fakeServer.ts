import { v4 as uuidv4 } from 'uuid';

import mockTodoList from './mockTodoList';

class Server {
  get(url: string) {
    switch (url) {
      case "/todolist":
        return Promise.resolve(mockTodoList);
      default:
        return Promise.reject(new Error("잘못된 요청입니다."));
    }
  }

  post(url: string, body: any) {
    switch(url) {
      case "/todo":
        const newTodo = {
          uuid: uuidv4(),
          contents: body,
          done: false
        }
        return Promise.resolve(newTodo);
      default:
        return Promise.reject(new Error("잘못된 요청입니다."));
    }
  }

  delete(url: string, body: any) {
    switch (url) {
      case "/todo":
        return Promise.resolve(body);
      default:
        return Promise.reject(new Error("잘못된 요청입니다."));
    }
  }

  patch(url: string, body: any) {
    switch (url) {
      case "/todo":
        return Promise.resolve(body);
      default:
        return Promise.reject(new Error("잘못된 요청입니다."));
    }
  }
}

export default new Server();