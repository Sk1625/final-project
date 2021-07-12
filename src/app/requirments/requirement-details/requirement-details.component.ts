import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Requirement } from 'src/app/Model/requirement.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { RequirementService } from 'src/app/services/requirement.service';

@Component({
  selector: 'app-requirement-details',
  templateUrl: './requirement-details.component.html',
  styleUrls: ['./requirement-details.component.css']
})
export class RequirementDetailsComponent implements OnInit {
 
  req : Requirement = new Requirement();
  reqId : number;
  message : string;
  // employee : Employee = new Employee();
  // empId : any;

  constructor(private reqService:RequirementService,private empService:EmployeeService,private activatedRoute:ActivatedRoute) { 
    // this.reqId = localStorage.getItem("currentreqId");
  //  this.empId = localStorage.getItem("currentEmpId");
  this.activatedRoute.params.subscribe((params) => {
    this.reqId = params['id'];
  });
  }

  ngOnInit(): void {
    this.getReqById();
  }

  getReqById(){
    this.reqService.getRequirementById(this.reqId).subscribe( data =>{
      this.req= data;
      // this.getEmployeeById();
      // this.offer.employee = this.employee;
      // this.employee = this.offer.employee;
      // alert(JSON.stringify(this.offer));
    },
    (error) => {
      console.error("No Requirement Found");
      this.message = "No Requirement Found";
    })
  }

  // public getEmployeeById(){
  //   this.empService.getEmployeeById(this.empId).subscribe((data) => {
  //     this.employee = data;
  //   });
  // }
}
