import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requirement } from 'src/app/Model/requirement.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { RequirementService } from 'src/app/services/requirement.service';

@Component({
  selector: 'app-employee-requirement',
  templateUrl: './employee-requirement.component.html',
  styleUrls: ['./employee-requirement.component.css']
})
export class EmployeeRequirementComponent implements OnInit {

  requirements : Requirement[];
  eId: any = null;
  message : string;

  constructor(private empService : EmployeeService,private reqService:RequirementService,private route:Router) {
    this.eId = localStorage.getItem("currentEmpId");
   }

  ngOnInit(): void {
    this.getReqByEmployeeId();
  }

  getReqByEmployeeId(){
    this.empService.getAllReqById(this.eId).subscribe(data => {
      this.requirements = data;
    },
    (error) =>{
      console.error("No Requirements available for the Id " + this.eId);
      this.message = "No Requirements available";
    });
  }
  delRequirement(id : number){
    this.reqService.deleteRequirement(id).subscribe(data => {
      console.log(data);
      this.getReqByEmployeeId();
    })
  }

  editRequirement(id:number){
    this.route.navigate(['requpdate',id]);
  }
}
