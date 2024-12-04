import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TaskListService } from '../../services/task-list.service';
import { Task } from '../../services/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    NgFor,
    NgClass
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskListService) { }

  ngOnInit():void {
    this.taskService.getTasks().subscribe(data => this.tasks = data);
  }

  addTask(): void {
    const newTask: Task = {
      title: 'NOVA ATIVIDADE',
      prevision: '23/11/2024',
      isChecked: false
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

  onCheckboxChange(index: number) {
    this.tasks[index].isChecked = !this.tasks[index].isChecked;
  }
}
