import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee : Employee = new Employee();
  eId: any =null;

  constructor(private empService:EmployeeService, private route : Router) { 
    this.eId = localStorage.getItem("currentEmpId");
    
    console.log(this.eId);
  }
  
  ngOnInit() : void {
    this.getEmployeeById();
  }


  public getEmployeeById(){
    this.empService.getEmployeeById(this.eId).subscribe((data) => {
      this.employee = data;
    });
  }

  updateEmployee(){
    this.route.navigate(['empupdate']);
  }

}
