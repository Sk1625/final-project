import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proposal } from 'src/app/Model/proposal.model';
import { ProposalService } from 'src/app/services/proposal.service';

@Component({
  selector: 'app-proposal-by-id',
  templateUrl: './proposal-by-id.component.html',
  styleUrls: ['./proposal-by-id.component.css']
})
export class ProposalByIdComponent implements OnInit {

  proposal = new Proposal();
  propId : number;
  message : string;

  constructor(private activatedRoute : ActivatedRoute, private propService:ProposalService) {
    this.activatedRoute.params.subscribe((params) => {
      this.propId = params['id'];
    });
   }

  ngOnInit(): void {
    this.getProposalById();
  }

  getProposalById(){
    this.propService.getProposalById(this.propId).subscribe(data =>{
      this.proposal = data;
    },
    (error)=> {
      console.error("Proposal Not Found");
      this.message = "Proposal Not Found";
    })
  }
}
