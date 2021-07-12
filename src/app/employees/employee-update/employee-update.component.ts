import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee.model';
import { User } from 'src/app/Model/user.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  empUpdate: FormGroup | any;
  emp = new Employee();
  message = '';
  eId : any = null;
  user = new User();

  constructor( private route: Router,private fb: FormBuilder,private empService: EmployeeService) {
      this.eId = localStorage.getItem("currentEmpId");
     }

  ngOnInit(): void {
    this.empService.getEmployeeById(this.eId).subscribe(data => {
      this.emp = data;
      this.empUpdate = this.fb.group({
        empId: new FormControl(this.emp.empId),
        empName: new FormControl(this.emp.empName,Validators.required),
        deptName: new FormControl(this.emp.deptName, Validators.required),
        location: new FormControl(this.emp.location, Validators.required),
      });
    },
    (error) => {
      console.error("Employee Not Found");
    });
   
     
  }

  editEmployee(){
    console.log(this.empUpdate.value);
    this.emp = this.empUpdate.value;
    this.empService.editEmployee(this.emp).subscribe(data => {
      console.log("Employee Updated Succesfully");
      this.route.navigate(['empdetails'])
    },
    (error) => {
      console.error("Employee Not Updated");
    })
  }

}
