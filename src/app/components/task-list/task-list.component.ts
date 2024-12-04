import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TaskServiceService } from '../../services/task-service.service';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskServiceService) { }

  ngOnInit():void {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  addTask(): void {
    const newTask: Task = {
      title: 'NOVA ATIVIDADE',
      prevision: '23/11/2024'
    };
    this.taskService.addTask(newTask);
    this.updateTasks();
  }

  removeTask(index: number): void {
    this.taskService.removeTask(index);
    this.updateTasks();
  }

  private updateTasks(): void {
    this.taskService.getTasks().subscribe((data) => (this.tasks = data));
  }
}
