import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../services/task';
import { TaskListService } from '../../services/task-list.service';

@Component({
  selector: 'app-task-registration-modal',
  standalone: true,
  imports: [
    FormsModule,
    NgIf 
  ],
  templateUrl: './task-registration-modal.component.html',
  styleUrl: './task-registration-modal.component.css'
})
export class TaskRegistrationModalComponent {
  isOpen = false;
  editingTask: Task | null = null;

  constructor(private taskService: TaskListService) { }

  @Output() saveTask = new EventEmitter<Task>();

  task = {
    title: '',
    prevision: '',
    isChecked: false
  };

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  onSubmit() {
    if (this.editingTask) {
      const updatedTask = { ...this.editingTask, ...this.task };
      this.taskService.updateTask(updatedTask).subscribe(() => {
        this.saveTask.emit({ ...updatedTask, isEdit: true });
        this.editingTask = null;
        this.close();
      });
    } else {
      if(this.task.title && this.task.prevision) {
        this.saveTask.emit({ ...this.task, isEdit: false });
        this.close();
      }
    }
  }

  openForEdit(task: Task) {
    this.editingTask = { ...task };
    this.task.title = task.title;
    this.task.prevision = task.prevision;
    this.isOpen = true;
  };
}
