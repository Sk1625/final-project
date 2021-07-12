import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { EmployeeInputComponent } from './employees/employee-input/employee-input.component';
import { EmployeeOffersComponent } from './employees/employee-offers/employee-offers.component';
import { EmployeeRequirementComponent } from './employees/employee-requirement/employee-requirement.component';
import { ProposalByIdComponent } from './proposal/proposal-by-id/proposal-by-id.component';
import { UserInputComponent } from './users/user-input/user-input.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { OfferDetailsComponent } from './offers/offer-details/offer-details.component';
import { OfferInputComponent } from './offers/offer-input/offer-input.component';
import { OfferListComponent } from './offers/offer-list/offer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RequirementDetailsComponent } from './requirments/requirement-details/requirement-details.component';
import { RequirementInputComponent } from './requirments/requirement-input/requirement-input.component';
import { RequirementListComponent } from './requirments/requirement-list/requirement-list.component';
import { UserService } from './services/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';
import { EmployeeUpdateComponent } from './employees/employee-update/employee-update.component';
import { OfferByCatComponent } from './offers/offer-by-cat/offer-by-cat.component';
import { OfferService } from './services/offer.service';
import { RequirementService } from './services/requirement.service';
import { ProposalService } from './services/proposal.service';
import { ReqByCatComponent } from './requirments/req-by-cat/req-by-cat.component';
import { RequirementUpdateComponent } from './requirments/requirement-update/requirement-update.component';
import { EmployeePropsComponent } from './employees/employee-props/employee-props.component';
import { ProposalListComponent } from './proposal/proposal-list/proposal-list.component';
import { PropInputOfferComponent } from './proposal/prop-input-offer/prop-input-offer.component';
import { PropInputReqComponent } from './proposal/prop-input-req/prop-input-req.component';
import { OfferUpdateComponent } from './offers/offer-update/offer-update.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    UserProfileComponent,
    UserLoginComponent,
    EmployeeDetailComponent,
    EmployeeInputComponent,
    EmployeeOffersComponent,
    EmployeeRequirementComponent,
    ProposalByIdComponent,
    OfferDetailsComponent,
    OfferInputComponent,
    OfferListComponent,
    HomeComponent,
    RequirementDetailsComponent,
    RequirementInputComponent,
    RequirementListComponent,
    EmployeeUpdateComponent,
    OfferByCatComponent,
    ReqByCatComponent,
    OfferUpdateComponent,
    RequirementUpdateComponent,
    EmployeePropsComponent,
    ProposalListComponent,
    PropInputOfferComponent,
    PropInputReqComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [UserService,EmployeeService,OfferService,RequirementService,ProposalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
