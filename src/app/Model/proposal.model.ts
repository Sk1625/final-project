import { ProposalListComponent } from "../proposal/proposal-list/proposal-list.component";
import { RequirementDetailsComponent } from "../requirments/requirement-details/requirement-details.component";
import { Employee } from "./employee.model";
import { Offer } from "./offer.model";
import { Requirement } from "./requirement.model";

export class Proposal {
    propId : number;
    proposal : string;
    amount : number ;
    proposalDate : Date;
    accepted : boolean;
    acceptedOn : Date;
    emp : Employee = new Employee();
    offer : Offer = new Offer();
    requirement : Requirement = new Requirement();
}



