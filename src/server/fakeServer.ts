import { v4 as uuidv4 } from 'uuid';

class Server {
  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  request(command: string, body: string) { 
    switch (command) {
      case "ADD":
        const newTodo = { uuid: uuidv4(), contents: body, done: false };
        return this.delay(2000).then(() => newTodo);
      default: 
        return new Promise((_, reject) => {
          setTimeout(() => reject(new Error("에러")), 2000);
        })
    }
  }
}

export default new Server();