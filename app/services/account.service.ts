import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenModel } from '../models/token.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}
  login(userName: string, password: string): Observable<TokenModel> {
    let body = {
      userName: userName,
      password: password,
    };
    return this.httpClient.post<TokenModel>(
      'http://localhost:5222/api/accounts',
      body
    );
  }
}
