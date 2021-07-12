import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Model/employee.model';
import { Offer } from 'src/app/Model/offer.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { OfferService } from 'src/app/services/offer.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css'],
})
export class OfferDetailsComponent implements OnInit {
  offer = new Offer();
  offerId: number;
  message: string;
  emp = new Employee();

  constructor(
    private offService: OfferService,
    private empService: EmployeeService,
    private activatedRoute:ActivatedRoute
  ) {
    // this.offerId = localStorage.getItem('currentoffId');
    this.activatedRoute.params.subscribe((params) => {
      this.offerId = params['id'];
    });
  }

  ngOnInit(): void {
    this.getOfferById();
  }

  getOfferById() {
    this.offService.getOfferById(this.offerId).subscribe(
      (data) => {
        this.offer = data;
      },
      (error) => {
        console.error('No Offer Found');
        this.message = 'No Offer Found';
      }
    );
  }
}
