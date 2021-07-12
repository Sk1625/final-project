import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee.model';
import { Requirement } from 'src/app/Model/requirement.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { RequirementService } from 'src/app/services/requirement.service';

@Component({
  selector: 'app-requirement-input',
  templateUrl: './requirement-input.component.html',
  styleUrls: ['./requirement-input.component.css'],
})
export class RequirementInputComponent implements OnInit {
  reqRegister: FormGroup | any;
  eId: any = null;
  emp = new Employee();
  requirement = new Requirement();
  message : string;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private empService: EmployeeService,
    private reqService: RequirementService
  ) {
    this.eId = localStorage.getItem('currentEmpId');
  }

  ngOnInit(): void {
    this.reqRegister = this.fb.group({
      reqId: new FormControl('',Validators.required),
      fulfilledOn: new FormControl('', Validators.required),
      fulfilled: new FormControl('', Validators.required),
      resId: new FormControl('',Validators.required,),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      resType: new FormControl('', Validators.required),
      resDate: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
    this.empService.getEmployeeById(this.eId).subscribe((data:Employee)=>{
      this.emp= data;
    });
  }

  registerReq() {
    console.log(this.reqRegister.value);
    this.requirement=this.reqRegister.value;
    this.requirement.emp= new Employee();
    this.requirement.emp=this.emp;

    this.reqService.addRequirement(this.requirement).subscribe(data =>{
      console.log("requirement added successfully");
      this.route.navigate(['allrequirements']);
    },
    (error)=>{
      console.log("Requirement Not Added");
      this.message = "Requirement Not added due to Existing ReqID or ResID";
    })
  }
 
}