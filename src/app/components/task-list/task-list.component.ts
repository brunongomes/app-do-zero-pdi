import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TaskListService } from '../../services/task-list.service';
import { Task } from '../../services/task';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    NgFor,
    NgClass,
    NgIf,
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  displayedColumns: string[] = ['isChecked', 'id', 'title', 'prevision', 'delete'];
  tasks: Task[] = [];
  dataSource: Task[] = [];
  
  constructor(private taskService: TaskListService) { }
  
  ngOnInit():void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data
      this.dataSource = data;
    });
  }

  addTask() {
    const newTask: Task = {
      title: 'FINALIZAR ATIVIDADE 1',
      prevision: '23/11/2024',
      isChecked: false
    };
    this.taskService.addTask(newTask).subscribe(() => {
      this.updateTasks();
    });
  }

  removeTask(taskId: number) {
    if (taskId !== undefined) {
      this.taskService.removeTask(taskId).subscribe(() => {
        this.updateTasks();
      });
    }
  }

  private updateTasks(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
      this.dataSource = [...this.tasks];
    });
  }

  onCheckboxChange(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.isChecked = !task.isChecked;
      this.taskService.updateTask(task).subscribe();
    }
  }
}
