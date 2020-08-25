import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository )
        private taskRepository: TaskRepository
    ) {

    }
    // private tasks: Task[] = [];

    // getAllTasks(): Task[] {
    //     return this.tasks;
    // }
    
    // getTasksWithFilters(tasksFilterDto: GetTasksFilterDto): Task[] {
    //     const { status, search } = tasksFilterDto;

    //     let tasks = this.getAllTasks();

    //     if (status) tasks = tasks.filter(t => t.status === status);

    //     if (search) {
    //         const searchUp = search.toUpperCase();
    //         tasks = tasks.filter(t => {
    //             const isFilter = t.title.toUpperCase().indexOf(searchUp) > -1 
    //             || t.description.toLocaleUpperCase().indexOf(searchUp) > -1;
                
    //             return isFilter;
    //         });
    //     }

    //     return tasks;
    // }

    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);

        if (!found) throw new NotFoundException(`Task with id ${id} was not found `);

        return found;
    }
    
    // getTaskById(id: string): Task {
    //     const found = this.tasks.find(task => task.id === id);

    //     if (!found) throw new NotFoundException(`Task with id ${id} was not found`);
        
    //     return found;
    // }

    // deleteTask(id: string): void {
    //     const found = this.getTaskById(id);
    //     this.tasks = this.tasks.filter(task => task.id !== found.id);
    // }

    // createTask(createTaskDto: CreateTaskDto): Task {
    //     const { title, description } = createTaskDto;

    //     const task: Task = {
    //         id: uuid(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN,
    //     };

    //     this.tasks.push(task);
    //     return task;
    // }

    // updateTask(id: string, status: TaskStatus) {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task; 
    // }
}
