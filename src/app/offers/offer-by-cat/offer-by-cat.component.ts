import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/Model/offer.model';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-by-cat',
  templateUrl: './offer-by-cat.component.html',
  styleUrls: ['./offer-by-cat.component.css']
})
export class OfferByCatComponent implements OnInit {

  offers : Offer[];
  category : any;
  resource : any;
  message : string;

  constructor(private offService:OfferService,private route:Router) {
    this.category = localStorage.getItem("currentoffcat");
    this.resource = localStorage.getItem("currentoffres");
   }

  ngOnInit(): void {
    this.getOfferByCat();
  }

  getOfferByCat(){
    this.offService.getOffsByCatRes(this.category,this.resource).subscribe(data =>{
      this.offers = data;
    },
    (error) =>{
      console.error("No Offers Available");
      this.message = "No Offers Found";
    })
  };

}
