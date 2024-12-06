import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  tasks = [
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024', isChecked: false },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024', isChecked: false },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024', isChecked: false },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024', isChecked: false },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024', isChecked: false },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024', isChecked: false },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024', isChecked: true },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024', isChecked: true },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024', isChecked: true },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024', isChecked: true },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024', isChecked: true },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024', isChecked: true },
    { title: 'FINALIZAR ATIVIDADE 1', prevision: '23/11/2024', isChecked: true },
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
