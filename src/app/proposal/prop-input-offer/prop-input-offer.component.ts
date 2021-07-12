import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee.model';
import { Offer } from 'src/app/Model/offer.model';
import { Proposal } from 'src/app/Model/proposal.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { OfferService } from 'src/app/services/offer.service';
import { ProposalService } from 'src/app/services/proposal.service';

@Component({
  selector: 'app-prop-input-offer',
  templateUrl: './prop-input-offer.component.html',
  styleUrls: ['./prop-input-offer.component.css']
})
export class PropInputOfferComponent implements OnInit {
  sendProposal: FormGroup | any;
  prop = new Proposal();
  emp = new Employee();
  message='';
  offerId : number;
  eId : any = null;
  offer = new Offer();

  constructor(private route:Router,private fb:FormBuilder,private empService : EmployeeService,private offService : OfferService ,private propService:ProposalService,private activatedRoute:ActivatedRoute){
      this.activatedRoute.params.subscribe((params) => {
      this.offerId = params['id'];
    }); 
    this.eId = localStorage.getItem("currentEmpId");
   }
  
  ngOnInit(): void { 
    this.offService.getOfferById(this.offerId).subscribe(data =>{
      this.offer = data;
      this.sendProposal = this.fb.group({
        propId :new FormControl('',Validators.required),
        empId : new FormControl(this.eId),
        offerId:new FormControl(this.offer.offerId),
        resId : new FormControl(this.offer.resId),
        proposal :new FormControl('',Validators.required),
        amount:new FormControl('',Validators.required),
        proposalDate:new FormControl('',Validators.required),
        acceptedOn:new FormControl('',Validators.required),
        accepted:new FormControl('',Validators.required)
      });
    },
    (error) => {
      console.error("Offer Not Found");
    });

  }
  
  addProposal(){
    console.log(this.sendProposal.value);
    this.prop = this.sendProposal.value;
    this.prop.offer = new Offer();
    this.prop.offer = this.offer;
    this.prop.emp = new Employee();
    this.prop.emp = this.emp;
    this.prop.emp.empId = this.sendProposal.value.empId;
    this.prop.offer.offerId = this.sendProposal.value.offerId;
    this.prop.offer.resId = this.sendProposal.value.resId;
   
     this.propService.addProposal(this.prop).subscribe((data) =>{
       console.log('Proposal Added');
       this.route.navigate(['home']);
     },
     (error) => {
       console.error('Proposal not added');
       this.message='Proposal Not Added';
     });
  }

}
