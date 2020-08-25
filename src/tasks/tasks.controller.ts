import { Controller, Get, Post, Body, Query, Param, Delete, Patch, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private  tasksService: TasksService) {}

    // @Get()
    // getTasks(@Query(ValidationPipe) tasksFilterDto: GetTasksFilterDto): Task[] {
    //     const isFilter = Object.keys(tasksFilterDto).length > 0;
    //     if (isFilter) return this.tasksService.getTasksWithFilters(tasksFilterDto);
    //     else return this.tasksService.getAllTasks();
    // }

    @Get('/:id')
    async getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return await this.tasksService.getTaskById(id);
    }

    // @Delete('/:id')
    // deleteTask(@Param('id') id: string): void {
    //     this.tasksService.deleteTask(id);
    // }

    // @Patch('/:id/status')
    // updateTask(
    //     @Param('id') id: string, 
    //     @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    // ): Task {
    //     return this.tasksService.updateTask(id, status);
    // }

    // @Post()
    // @UsePipes(ValidationPipe)
    // createTask(@Body() createTaskDto: CreateTaskDto): Task {
    //     return this.tasksService.createTask(createTaskDto);
    // }
}
