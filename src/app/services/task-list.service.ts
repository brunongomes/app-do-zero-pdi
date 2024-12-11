import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  private readonly API = 'http://localhost:7001/tasks';
  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API, task);
  }

  removeTask(index: number): Observable<Task> {
    return this.http.delete<Task>(`${this.API}/${index}`);
  }
}
