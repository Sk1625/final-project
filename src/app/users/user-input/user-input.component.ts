import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  registration : FormGroup | any;
  user = new User(); 
  message = "";

  constructor(private route : Router, private fb : FormBuilder, private userService : UserService) { }

  ngOnInit(): void {
    this.registration = this.fb.group( {
      'userId' : new FormControl('',[Validators.required,Validators.maxLength(6)]),
      'password' : new FormControl('',[Validators.required,Validators.maxLength(10)]),
      'emailId' : new FormControl('', Validators.email)
    })
  }

  //   addUser(){
  //     console.log(this.registration.value);
  //     this.user = this.registration.value;
  //     this.userService.addUser(this.user).subscribe((data) => {
  //       alert('Registration is successful');
  //       this.route.navigate(['empInput']);
  //   })
  // }

  addUser(){
    console.log(this.registration.value);
    this.user = this.registration.value;
    this.userService.addUser(this.user).subscribe(
      (data) => {
        console.log("Registration successful");
        this.route.navigate(['empInput',this.user.userId]);
      },
      (error) => {
        console.error("UserId already Exists");
        this.message = "UserId Already Exists";
      })
}
}