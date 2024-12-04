import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

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
  tarefas = [
    { titulo: 'FINALIZAR ATIVIDADE 1', previsao: '23/11/2024' },
    { titulo: 'FINALIZAR ATIVIDADE 1', previsao: '23/11/2024' },
    { titulo: 'FINALIZAR ATIVIDADE 1', previsao: '23/11/2024' },
    { titulo: 'FINALIZAR ATIVIDADE 1', previsao: '23/11/2024' },
    { titulo: 'FINALIZAR ATIVIDADE 1', previsao: '23/11/2024' },
    { titulo: 'FINALIZAR ATIVIDADE 1', previsao: '23/11/2024' },
  ]

  addTask() {
    this.tarefas.push({ titulo: 'FINALIZAR ATIVIDADE 1', previsao: '23/11/2024' });
  }

  removeTask(index: number) {
    this.tarefas.splice(index, 1);
  }
}
