import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeInputComponent } from './employees/employee-input/employee-input.component';
import { EmployeeOffersComponent } from './employees/employee-offers/employee-offers.component';
import { EmployeeRequirementComponent } from './employees/employee-requirement/employee-requirement.component';
import { EmployeeUpdateComponent } from './employees/employee-update/employee-update.component';
import { HomeComponent } from './home/home.component';
import { OfferByCatComponent } from './offers/offer-by-cat/offer-by-cat.component';
import { OfferDetailsComponent } from './offers/offer-details/offer-details.component';
import { OfferInputComponent } from './offers/offer-input/offer-input.component';
import { OfferListComponent } from './offers/offer-list/offer-list.component';
import { ReqByCatComponent } from './requirments/req-by-cat/req-by-cat.component';
import { RequirementDetailsComponent } from './requirments/requirement-details/requirement-details.component';
import { RequirementInputComponent } from './requirments/requirement-input/requirement-input.component';
import { RequirementListComponent } from './requirments/requirement-list/requirement-list.component';
import { RequirementUpdateComponent } from './requirments/requirement-update/requirement-update.component';
import { UserInputComponent } from './users/user-input/user-input.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { EmployeePropsComponent } from './employees/employee-props/employee-props.component';
import { ProposalByIdComponent } from './proposal/proposal-by-id/proposal-by-id.component';
import { ProposalListComponent } from './proposal/proposal-list/proposal-list.component';
import { PropInputOfferComponent } from './proposal/prop-input-offer/prop-input-offer.component';
import { PropInputReqComponent } from './proposal/prop-input-req/prop-input-req.component';
import { OfferUpdateComponent } from './offers/offer-update/offer-update.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:UserLoginComponent},
  { path:'register',component:UserInputComponent},
  {path:'empInput/:id',component:EmployeeInputComponent},
  {path:'home',component:HomeComponent},
  {path:'empreq',component:EmployeeRequirementComponent},
  {path:'empoffer',component:EmployeeOffersComponent},
  {path:'empdetails',component:EmployeeDetailComponent},
  {path:'empupdate', component:EmployeeUpdateComponent},
  {path:'alloffers', component:OfferListComponent},
  {path:'offerbyid/:id', component:OfferDetailsComponent},
  {path :'offerbycat', component:OfferByCatComponent},
  {path:'allrequirements', component:RequirementListComponent},
  {path:'reqbycat',component:ReqByCatComponent},
  {path:'reqbyid/:id',component:RequirementDetailsComponent},
  {path:'offerinput',component:OfferInputComponent},
  {path:'reqin',component:RequirementInputComponent},
  {path:'offerupdate/:id',component:OfferUpdateComponent},
  {path:'requpdate/:id',component:RequirementUpdateComponent},
  {path: 'empprop',component:EmployeePropsComponent},
  {path : 'propbyid/:id',component:ProposalByIdComponent},
  {path:'allprop',component:ProposalListComponent},
  {path:'propoffinput/:id',component:PropInputOfferComponent},
  {path:'propreqinput/:id',component:PropInputReqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
