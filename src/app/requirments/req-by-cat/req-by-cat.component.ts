import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requirement } from 'src/app/Model/requirement.model';
import { RequirementService } from 'src/app/services/requirement.service';

@Component({
  selector: 'app-req-by-cat',
  templateUrl: './req-by-cat.component.html',
  styleUrls: ['./req-by-cat.component.css']
})
export class ReqByCatComponent implements OnInit {
  requirements : Requirement[];
  category : any;
  resource : any;
  message : string;

  constructor(private reqService:RequirementService,private route:Router) {
    this.category = localStorage.getItem("currentreqcat");
    this.resource = localStorage.getItem("currentreqres");
   }

  ngOnInit(): void {
    this.getreqByCat();
  }

  getreqByCat(){
    this.reqService.getReqsByCatRes(this.category,this.resource).subscribe(data =>{
      this.requirements = data;
    },
    (error) =>{
      console.error("No Requirements Available");
      this.message = "No Requirements Found";
    })
  };

}
