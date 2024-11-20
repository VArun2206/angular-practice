import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../environments/environment';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = signal<any | null>(null);

  login_URL = environment.login_URL;

  constructor(private http: HttpClient) {
    this.user.set(this.getUserFromLocalStorage());
  }

  // getAllUsers() {
  //   let url = `${this.login_URL}`;
  //   return this.http.get(url);
  // }

  // getAllUsers(): Observable<any[]> {
  //   let url = `${this.login_URL}`;
  //   return this.http.get<any[]>(url);
  // }

  getAllUsers() {
    let url = `${this.login_URL}`;
    const res =  this.http.get(url);
    return firstValueFrom(res)
  }


  getUserFromLocalStorage() {
    let res = localStorage.getItem('user');
    if (res) {
      let user = JSON.parse(res);
      return user;
    } else {
      return null;
    }
  }
}
