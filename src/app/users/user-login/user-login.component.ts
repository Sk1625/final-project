import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  user = new User();
  message = '';

  constructor(private route: Router, private userService: UserService) {}

  loginUser() {
    this.userService.loginUser(this.user).subscribe(
      (data: User) => {
        console.log('Response noted');
        localStorage.setItem('currentUid', <any>data.userId);
        if (data.employee != null) {
          localStorage.setItem('currentEmpId', <any>data.employee.empId);
          this.route.navigate(['home']);
        } else {
          this.route.navigate(['empInput', data.userId]);
        }
      },
      (error) => {
        console.error('Invalid Credentials');
        this.message = 'Bad Credentials, re-enter your credentials';
      }
    );
  }

  ngOnInit(): void {}
}
