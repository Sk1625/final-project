import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee.model';
import { Offer } from 'src/app/Model/offer.model';
import { Proposal } from 'src/app/Model/proposal.model';
import { Requirement } from 'src/app/Model/requirement.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { OfferService } from 'src/app/services/offer.service';
import { ProposalService } from 'src/app/services/proposal.service';
import { RequirementService } from 'src/app/services/requirement.service';

@Component({
  selector: 'app-prop-input-req',
  templateUrl: './prop-input-req.component.html',
  styleUrls: ['./prop-input-req.component.css']
})
export class PropInputReqComponent implements OnInit {

  sendProposal: FormGroup | any;
  prop = new Proposal();
  emp = new Employee();
  message='';
  reqId : number;
  eId : any = null;
  requirement = new Requirement();

  constructor(private route:Router,private fb:FormBuilder,private empService : EmployeeService,private reqService : RequirementService ,private propService:ProposalService,private activatedRoute:ActivatedRoute){
      this.activatedRoute.params.subscribe((params) => {
      this.reqId = params['id'];
    }); 
    this.eId = localStorage.getItem("currentEmpId");
   }
  
  ngOnInit(): void {
    this.reqService.getRequirementById(this.reqId).subscribe(data =>{
      this.requirement = data;
      this.sendProposal = this.fb.group({
        propId :new FormControl('',Validators.required),
        empId : new FormControl(this.eId),
        reqId:new FormControl(this.reqId),
        resId : new FormControl(this.requirement.resId),
        proposal :new FormControl('',Validators.required),
        amount:new FormControl('',Validators.required),
        proposalDate:new FormControl('',Validators.required),
        acceptedOn:new FormControl('',Validators.required),
        accepted:new FormControl('',Validators.required)
      });
    },
    (error) => {
      console.error("Requirement Not Found");
    });

  }
  
  addProposal(){
    console.log(this.sendProposal.value);
    this.prop = this.sendProposal.value;
    this.prop.requirement = new Requirement();
    this.prop.requirement = this.requirement;
    this.prop.emp = new Employee();
    this.prop.emp = this.emp;
    this.prop.emp.empId = this.sendProposal.value.empId;
    this.prop.requirement.reqId = this.sendProposal.value.reqId;
    this.prop.requirement.resId = this.sendProposal.value.resId;
   
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
