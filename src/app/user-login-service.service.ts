import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from './model/userLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserLoginServiceService {
  userlogin!:UserLogin[];
  private baseUrl = 'http://localhost:8080/login/user';
  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<UserLogin[]> {
    return this.httpClient.get<UserLogin[]>(`${this.baseUrl}`);
  }

  addUser(user:UserLogin){
    return this.httpClient.post(`${this.baseUrl}`,user);
  }
}
