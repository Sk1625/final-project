import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Requirement } from 'src/app/Model/requirement.model';
import { RequirementService } from 'src/app/services/requirement.service';

@Component({
  selector: 'app-requirement-list',
  templateUrl: './requirement-list.component.html',
  styleUrls: ['./requirement-list.component.css'],
})
export class RequirementListComponent implements OnInit {
  requirements: Requirement[];
  reqId: number;
  isFulfilled: boolean = false;
  fulFilledOn: Date;
  category: string;
  resource: string;
  message: string;
  reId:number;
  reqByCat:FormGroup;
  reqIds: FormGroup;

  constructor(
    private reService: RequirementService,
    private fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.reService.getAllRequirements().subscribe(
      (data) => {
        this.requirements = data;
      },
      (error) => {
        console.log('No Requirements Available');
        this.message = 'No Requirements Available';
      });

    //   this.reqIds = this.fb.group({
    //     reqId: new FormControl('')
    // });
      this.reqByCat = this.fb.group({
        reqcat : new FormControl(''),
        reqres : new FormControl('')
      })
  }
  
    // reqSort(){
    //     this.reId = this.reqIds.value.reqId;
    //     localStorage.setItem('currentreqId', <any>this.reId);
    //     this.route.navigate(['reqbyid']);
    // }
    viewReq(id:number){
      this.route.navigate(['reqbyid',id]);
    }
    reqCatSort(){
      this.category = this.reqByCat.value.reqcat;
      localStorage.setItem('currentreqcat', <any>this.category);
      this.resource = this.reqByCat.value.reqres;
      localStorage.setItem('currentreqres', <any>this.resource);
      this.route.navigate(['reqbycat']);
    }

    addProposal(id : number){
      this.route.navigate(['propreqinput',id]);
    }
  }
