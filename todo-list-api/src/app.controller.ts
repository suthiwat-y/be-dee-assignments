import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import TodoItem from './todo-item';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getTodoList(): TodoItem[] {
    return this.appService.getTodoList();
  }

  @Post('')
  appendTodo(@Body() item: { name: string; isDone?: boolean }): TodoItem[] {
    return this.appService.appendTodo(
      new TodoItem({ name: item.name, isDone: item.isDone ?? false }),
    );
  }

  @Put(':id')
  toggleDone(@Param() { id }: { id: string }): TodoItem[] {
    return this.appService.toggleDone(id);
  }

  @Delete(':id')
  deleteTodo(@Param() { id }: { id: string }): TodoItem[] {
    return this.appService.deleteTodo(id);
  }
}
