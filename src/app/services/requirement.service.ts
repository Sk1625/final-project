      import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirement } from '../Model/requirement.model';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  constructor(private http : HttpClient) { }

  headers = new HttpHeaders({'Content-Type': 'application/json' });
  options = { headers: this.headers };

  baseUrl:string="http://localhost:8086/api/requirement";

   //Add Requirements
   public addRequirement(req : Requirement) : Observable<any>{
     return this.http.post<any>(this.baseUrl + '/addRequirement', req);
   }

   //Get Requirements By Id
   public getRequirementById(reqId : number) : Observable<any>{
      return this.http.get<any>(this.baseUrl + '/getRequirement/' + reqId);
   }

   //Get All Requirements
   public getAllRequirements() : Observable<any>{
     return this.http.get<any>(this.baseUrl + '/allrequirements');
   }

   //Get Requirements by category and Resource Type
   public getReqsByCatRes(category :string , resType : string) : Observable<any>{
    return this.http.get<any>(this.baseUrl + '/allrequirements/' + category + '/' + resType);
   }

   //Delete Requirement
   public deleteRequirement(reqId : number) : Observable<any>{
     return this.http.delete<any>(this.baseUrl + '/deleteRequirements/' + reqId);
   }

}
