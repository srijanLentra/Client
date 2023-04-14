import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminLogin } from '../model/adminLogin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminloginService {
  adminlogin!: AdminLogin[];
  private baseUrl = 'http://localhost:8080/login/admin';
  constructor(private httpClient: HttpClient) {}


  getAll(): Observable<AdminLogin[]> {
    return this.httpClient.get<AdminLogin[]>(`${this.baseUrl}`);
  }
}
