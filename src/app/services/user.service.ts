import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'http://localhost:8086/api/user';
  // errorMessage = "";

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = { headers: this.headers };

  constructor(private http: HttpClient) {}
  
  //Add User
  public addUser(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/addUser', user);
  }

  //LoginUser
  public loginUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/login', user);
  }

  //  getUser
  public getUser(userId: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/byId/' + userId);
  }

  // update user
  public updateUser(user:User): Observable<any>{
    return this.http.put<any>(this.baseUrl + "/editUser/",user);
  }
}
