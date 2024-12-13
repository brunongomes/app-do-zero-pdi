import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../services/task';

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
    if(this.task.title && this.task.prevision) {
      this.saveTask.emit(this.task);
      this.close();
    }
  }
}
