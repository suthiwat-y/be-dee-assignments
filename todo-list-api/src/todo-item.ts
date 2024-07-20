interface TodoItemConstructorParams {
  id?: string;
  name: string;
  isDone: boolean;
}

class TodoItem {
  id: string;
  name: string;
  isDone: boolean;

  constructor({ id, name, isDone }: TodoItemConstructorParams) {
    this.id = id ?? this.generateId();
    this.name = name;
    this.isDone = isDone;
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  }
}

export default TodoItem;
