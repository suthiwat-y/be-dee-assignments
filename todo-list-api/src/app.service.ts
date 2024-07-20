import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import TodoItem from './todo-item';

const initialTodoList: TodoItem[] = [
  new TodoItem({ id: 'lyucz5xz7ayr4qkln', name: 'Buy BTC', isDone: false }),
  new TodoItem({
    id: 'lyucz5xzdfl2up23u',
    name: 'Weight training',
    isDone: false,
  }),
  new TodoItem({
    id: 'lyucz5xzynrf7j0aa',
    name: 'Leetcode daily challenge',
    isDone: false,
  }),
];

@Injectable()
export class AppService {
  private todoList: TodoItem[] = initialTodoList;

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  appendTodo(item: TodoItem): TodoItem[] {
    const newList = [...this.todoList, item];

    this.todoList = newList;

    return newList;
  }

  toggleDone(id: string): TodoItem[] {
    try {
    } catch (error) {}
    const newList = [...this.todoList];
    const index = newList.findIndex((item) => item.id == id);

    if (index == -1) {
      throw new HttpException(
        'Error toggling done to a todo item: item not found with id=' + id,
        HttpStatus.BAD_REQUEST,
      );
    }

    newList[index].isDone = !newList[index].isDone;

    this.todoList = newList;

    return newList;
  }

  deleteTodo(id: string): TodoItem[] {
    const newList = [...this.todoList];
    const index = newList.findIndex((item) => item.id == id);

    if (index == -1) {
      throw new HttpException(
        'Error deleting a todo item: item not found with id=' + id,
        HttpStatus.BAD_REQUEST,
      );
    }

    newList.splice(index, 1);

    this.todoList = newList;

    return newList;
  }
}
