import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  tasks = [
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024' },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024' },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024' },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024' },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024' },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024' },
  ]

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }
}
