import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  empId: any =null;

  constructor() { 
    this.empId = localStorage.getItem("currentEmpId");
  }

  ngOnInit(): void {
  }

}
