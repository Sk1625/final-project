import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee.model';
import { Requirement } from 'src/app/Model/requirement.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { RequirementService } from 'src/app/services/requirement.service';

@Component({
  selector: 'app-requirement-update',
  templateUrl: './requirement-update.component.html',
  styleUrls: ['./requirement-update.component.css'],
})
export class RequirementUpdateComponent implements OnInit {
  reqEdit: FormGroup | any;
  reqId: number;
  emp = new Employee();
  requirement = new Requirement();
  eId: any = null;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private reqService: RequirementService,
    private empService: EmployeeService
  ) {

    this.activatedRoute.params.subscribe((params) => {
      this.reqId = params['id'];
    }); 
    this.eId = localStorage.getItem("currentEmpId");
  }

  ngOnInit(): void {
    this.reqService.getRequirementById(this.reqId).subscribe(data =>{
      this.requirement=data;
      this.reqEdit=this.fb.group({
            reqId:new FormControl(this.requirement.reqId),
            fulfilled:new FormControl(this.requirement.fulfilled,Validators.required),
            fulfilledOn :new FormControl(this.requirement.fulfilledOn,Validators.required),
            resId: new FormControl(this.requirement.resId),
            title : new FormControl(this.requirement.title,Validators.required),
            description: new FormControl(this.requirement.description,Validators.required),
            category: new FormControl(this.requirement.category,Validators.required),
            resDate: new FormControl(this.requirement.resDate,Validators.required),
            resType : new FormControl(this.requirement.resType,Validators.required),
            price: new FormControl(this.requirement.price,Validators.required)
      });
    },
    (error)=>{
      console.log("No requirements Available")
    });

    this.empService.getEmployeeById(this.eId).subscribe((data:Employee)=>{
      this.emp = data;
    });
  }
  editRequirement(){
    console.log(this.reqEdit.value);
    this.requirement = this.reqEdit.value;
    this.requirement.emp = new Employee();

    this.requirement.emp= this.emp;
    this.empService.editReq(this.requirement).subscribe( data =>{
      console.log("requirement edited Successfully");
      this.route.navigate(['empreq']);
    },
    (error) => {
      console.error("Requirement not Updated");
    });
  }

}