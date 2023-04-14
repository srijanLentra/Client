import { Injectable } from '@angular/core';
import { Quote } from './model/quotesForm';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuotesFormService {
  private baseUrl = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {}

  addUser(quote: Quote): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/applicant/apply`, quote);
  }

  getUser(id:number): Observable<Quote> {
    return this.httpClient.get<Quote>(`${this.baseUrl}/applicant/${id}`);
  }

  getAllUsers(): Observable<Quote[]> {
    return this.httpClient.get<Quote[]>(`${this.baseUrl}/admin/users`);
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseUrl}/admin/users/${id}`);
  }

  updateUser(id: number, user: Quote) {
    return this.httpClient.put(`${this.baseUrl}/applicant/update/${id}`, user);
  }
}
