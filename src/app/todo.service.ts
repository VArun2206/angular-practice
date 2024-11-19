import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  api_URL = environment.api_URL;

  getToDos() {
    let url = `${this.api_URL}`;
    return this.http.get(url);
  }

  addToDos(todo: any) {
    let url = `${this.api_URL}`;
    return this.http.post(url, todo);
  }

  updateToDos(id: string, todo: any) {
    let url = `${this.api_URL}/${id}`;
    return this.http.patch(url, todo);
  }
  deleteToDos(id: string) {
    let url = `${this.api_URL}/${id}`;
    return this.http.delete(url);
  }

  getTaskById(id: string) {
    let url = `${this.api_URL}/${id}`;
    return this.http.get(url);
  }
}
