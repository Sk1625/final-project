import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../Model/offer.model';


@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = { headers: this.headers };

  baseUrl: string = "http://localhost:8086/api/offer";

  //Get Offer By Id
  public getOfferById(offId: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/' + offId);
  }

  //Get All Offers
  public getAllOffers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/allOffers');
  }

  //Get Offers by category and Resource Type
  public getOffsByCatRes(category: string, resType: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + '/alloffers/' + category + '/' + resType);
  }

  //Add Offers
  public addOffer(off: Offer): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/addOffer', off);
  }

  //Delete Offer
  public deleteOffer(offId: number): Observable<any[]> {
    return this.http.delete<any[]>(this.baseUrl + '/deleteOffer/' + offId);
  }


}
