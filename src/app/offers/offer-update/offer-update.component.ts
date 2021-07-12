import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee.model';
import { Offer } from 'src/app/Model/offer.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-update',
  templateUrl: './offer-update.component.html',
  styleUrls: ['./offer-update.component.css']
})
export class OfferUpdateComponent implements OnInit {
  offerEdit : FormGroup | any;
  offerId : number;
  emp = new Employee();
  offer = new Offer();
  eId : any = null;

  constructor(private activatedRoute: ActivatedRoute,private route : Router, private offService : OfferService,private empService :EmployeeService,private fb : FormBuilder) 
  {this.activatedRoute.params.subscribe((params) => {
    this.offerId = params['id'];
  }); 
  this.eId = localStorage.getItem("currentEmpId");

}

  ngOnInit(): void {
    this.offService.getOfferById(this.offerId).subscribe(data => {
      this.offer = data;
      this.offerEdit = this.fb.group({
        offerId: new FormControl(this.offer.offerId),
        availableUpto: new FormControl(this.offer.availableUpto,Validators.required),
        available: new FormControl(this.offer.available,Validators.required),
        resId: new FormControl(this.offer.resId),
        title : new FormControl(this.offer.title,Validators.required),
        description: new FormControl(this.offer.description,Validators.required),
        category: new FormControl(this.offer.category,Validators.required),
        resDate: new FormControl(this.offer.resDate,Validators.required),
        resType : new FormControl(this.offer.resType,Validators.required),
        price: new FormControl(this.offer.price,Validators.required),
      });
    },
    (error) => {
      console.error("No Offer Found");
    });

    this.empService.getEmployeeById(this.eId).subscribe((data:Employee) =>{
      this.emp = data;
    });

  }

  editOffer(){
    console.log(this.offerEdit.value);
    this.offer = this.offerEdit.value;
    this.offer.emp = new Employee();
     this.offer.emp = this.emp;
    this.empService.editOffer(this.offer).subscribe(data=>{
      console.log("Offer Edited Succesfully");
      this.route.navigate(['empoffer']);
    },
    (error) => {
      console.error("Offer not Updated");
    });
   }

 

}
