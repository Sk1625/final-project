import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee.model';
import { User } from 'src/app/Model/user.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrls: ['./employee-input.component.css'],
})
export class EmployeeInputComponent implements OnInit {
  empRegister: FormGroup | any;
  emp = new Employee();
  message = '';
  userObj = new User();
  uId = 0;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private empService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.uId = params['id'];
    });
  }

  ngOnInit(): void {
    this.getUser();
    this.empRegister = this.fb.group({
      empId: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
      ]),
      empName: new FormControl('', Validators.required),
      deptName: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      userId: new FormControl(this.uId, Validators.required),
    });
  }

  getUser() {
    this.userService.getUser(this.uId).subscribe((data) => {
      this.userObj = data;
    });
  }

  registerEmp() {
    console.log(this.empRegister.value);
    this.emp = this.empRegister.value;
    this.userObj.employee = this.emp;

    this.empService.addEmployee(this.emp).subscribe(
      (data) => {
        console.log('Employee Registered Succesfully');
        this.updateUser();
        this.route.navigate(['login']);
      },
      (error) => {
        console.error('Employee not Registered');
        this.message = 'Employee Id already exists';
      }
    );
  }
  updateUser() {
    this.userService.updateUser(this.userObj).subscribe((data) => {
      alert('employee added successfully');
    });
  }
}
