import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { TaskListService } from '../../services/task-list.service';
import { Task } from '../../services/task';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { TaskRegistrationModalComponent } from '../task-registration-modal/task-registration-modal.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    TaskRegistrationModalComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  displayedColumns: string[] = ['isChecked', 'id', 'title', 'prevision', 'edit', 'delete'];
  tasks: Task[] = [];
  dataSource: Task[] = [];

  @ViewChild('taskModal') taskModal!: TaskRegistrationModalComponent;
  
  constructor(private taskService: TaskListService) { }
  
  ngOnInit():void {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data
      this.dataSource = data;
    });
  }

  addTask(task: Task) {
    const newTask: Task = {
      title: task.title.toUpperCase(),
      prevision: task.prevision,
      isChecked: task.isChecked
    };
    if (!task.isEdit) {
      this.taskService.addTask(newTask).subscribe(() => {
        this.updateTaskList();
      });
    } else {
      newTask.id = task.id;
      this.taskService.updateTask(newTask).subscribe(() => {
        this.updateTaskList();
      });
    }
  }

  removeTask(taskId: number) {
    if (taskId !== undefined) {
      this.taskService.removeTask(taskId).subscribe(() => {
        this.updateTaskList();
      });
    }
  }

  editTask(task: Task) {
    this.taskModal.openForEdit(task)
  }
  
  private updateTaskList(): void {
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
