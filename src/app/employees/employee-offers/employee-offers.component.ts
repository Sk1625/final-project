      import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/Model/offer.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-employee-offers',
  templateUrl: './employee-offers.component.html',
  styleUrls: ['./employee-offers.component.css']
})
export class EmployeeOffersComponent implements OnInit {

  offers : Offer[];
  eId: any = null;
  message : string;

  constructor(private empService : EmployeeService, private offService : OfferService,private route:Router) {
    this.eId = localStorage.getItem("currentEmpId");
   }

  ngOnInit(): void {
    this.getOfferByEmployeeId();
  }

  getOfferByEmployeeId(){
    this.empService.getAllOffersById(this.eId).subscribe(data => {
      this.offers = data;
    },
    (error) =>{
      console.error("No Offers available for the Id " + this.eId);
      this.message = "No Offers available";
    });
  }

  delOffer(id : number){
    this.offService.deleteOffer(id).subscribe(data => {
      console.log(data);
      this.getOfferByEmployeeId();
    })
  }

  editOffer(id:number){
    this.route.navigate(['offerupdate',id]);
  }

}