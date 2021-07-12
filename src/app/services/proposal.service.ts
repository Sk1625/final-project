import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proposal } from '../Model/proposal.model';

@Injectable({
  providedIn: 'root',
})
export class ProposalService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = { headers: this.headers };
  baseUrl: string = 'http://localhost:8086/api/proposal';

  //Adding Proposal
  public addProposal(prop: Proposal): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/addProposal', prop);
  }

  // getting all proposals
  public getAllProposals(): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/allProposals');
  }

  //Get Proposals By Id
  public getProposalById(propId: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/' + propId);
  }

}
