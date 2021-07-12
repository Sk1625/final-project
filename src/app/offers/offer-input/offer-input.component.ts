import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee.model';
import { Offer } from 'src/app/Model/offer.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-input',
  templateUrl: './offer-input.component.html',
  styleUrls: ['./offer-input.component.css']
})
export class OfferInputComponent implements OnInit {
  offerRegister : FormGroup | any;
  eId : any = null;
  emp = new Employee();
  offer = new Offer();
  message : string;

  constructor(private fb:FormBuilder,private route:Router,private empService:EmployeeService,private offService:OfferService) {
    this.eId = localStorage.getItem("currentEmpId");
   }

  ngOnInit(): void {
      this.offerRegister = this.fb.group({
      offerId: new FormControl('',Validators.required),
      availableUpto: new FormControl('',Validators.required),
      available: new FormControl('',Validators.required),
      resId: new FormControl('', Validators.required),
      title : new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      category: new FormControl('',Validators.required),
      resType : new FormControl('',Validators.required),
      resDate: new FormControl('',Validators.required),
      price: new FormControl('',Validators.required),
    });
    this.empService.getEmployeeById(this.eId).subscribe((data:Employee) =>{
      this.emp = data;
    });
  }

   registerOffer(){
     console.log(this.offerRegister.value); 
     this.offer = this.offerRegister.value;
     this.offer.emp = new Employee();
      this.offer.emp = this.emp;
      this.offService.addOffer(this.offer).subscribe(data=>{
     console.log("Offer Added Succesfully");
     this.route.navigate(['alloffers']);
   },
   (error) => {
     console.error("Offer not Added");
     this.message = "Offer Not Added Due to exisitng Offer ID or Resource ID"
   });
  }

  }