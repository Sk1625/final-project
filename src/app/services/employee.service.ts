import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http/';
import { Employee } from '../Model/employee.model';
import { Observable } from 'rxjs';
import { Offer } from '../Model/offer.model';
import { Requirement } from '../Model/requirement.model';
import { Proposal } from '../Model/proposal.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = { headers: this.headers };

  constructor(private http: HttpClient) {}

  baseUrl: string = 'http://localhost:8086/api/employee';

  //Get Employee
  public getEmployeeById(empId: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/' + empId);
  }

  //Get AllOffers By Id
  public getAllOffersById(empId: number): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/allOffers/' + empId);
  }

  //Get AllRequirements By Id
  public getAllReqById(empId: number): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/allRequirements/' + empId);
  }

  //Get AllPropsals By Id
  public getAllPropById(empId: number): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/allProposals/' + empId);
  }

  //Add Employee
  public addEmployee(emp: Employee): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/addEmployee', emp);
  }

  //Update Employee
  public editEmployee(emp: Employee): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/editEmployee', emp);
  }

  //Update Offer
  public editOffer(offer: Offer): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/updateOffer', offer);
  }

  //Update Requirement
  public editReq(req: Requirement): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/updateRequirement', req);
  }
  
}
