import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Proposal } from 'src/app/Model/proposal.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProposalService } from 'src/app/services/proposal.service';

@Component({
  selector: 'app-employee-props',
  templateUrl: './employee-props.component.html',
  styleUrls: ['./employee-props.component.css']
})
export class EmployeePropsComponent implements OnInit {
  proposals:Proposal[];
  message:string;
  proposalId:FormGroup | any;
  eId: any = null;

  constructor(private propService:ProposalService, private fb:FormBuilder, private route:Router,private empService: EmployeeService) {
    this.eId = localStorage.getItem("currentEmpId");
   }

  ngOnInit(): void {
    this.getProposalsById();
  }

  getProposalsById(){
    this.empService.getAllPropById(this.eId).subscribe(data =>{
      this.proposals = data;
    },
    (error)=> {
      console.error("Proposals Not Found");
      this.message = "Proposals Not Found";
    })
  }

  viewProposal(id:number){
    this.route.navigate(['/propbyid',id])
  }
  
}
