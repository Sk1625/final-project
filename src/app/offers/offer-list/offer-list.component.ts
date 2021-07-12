import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Offer } from 'src/app/Model/offer.model';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  offers : Offer[];
  message : string;
  offerId : FormGroup | any;
  offerByCat : FormGroup | any;
  category : string;
  resource : string;
  ofId : number ;

  constructor(private offService : OfferService,private fb: FormBuilder,private route: Router) { }

  ngOnInit(): void {
    this.offService.getAllOffers().subscribe(data => {
      this.offers = data;
    },
    (error) =>{
      console.error("No Offers Available");
      this.message = "No Offers Available";
    });
    

    this.offerByCat = this.fb.group({
      offercat : new FormControl(''),
      offerres : new FormControl('')
    })
}

  offCat(){
    this.category = this.offerByCat.value.offercat;
    localStorage.setItem('currentoffcat', <any>this.category);
    this.resource = this.offerByCat.value.offerres;
    localStorage.setItem('currentoffres', <any>this.resource);
    this.route.navigate(['offerbycat']);
  }
  viewOffer(id:number){
    this.route.navigate(['offerbyid',id]);
  }

   addProposal(id : number){
    this.route.navigate(['propoffinput',id]);
  }
}
