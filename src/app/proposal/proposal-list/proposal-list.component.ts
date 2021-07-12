import { Component, OnInit } from '@angular/core';
import { Proposal } from 'src/app/Model/proposal.model';
import { ProposalService } from 'src/app/services/proposal.service';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  message : string;
  proposals:Proposal[];

  constructor(private propService:ProposalService) { }

  ngOnInit(): void {
    this.propService.getAllProposals().subscribe(data=>{
      this.proposals = data;
    },
    (error)=>{
      console.error("No Proposals Availablee");
      this.message = "No Proposals Available";
    });

    
  }

}

