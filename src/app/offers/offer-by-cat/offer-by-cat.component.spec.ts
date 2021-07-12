import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferByCatComponent } from './offer-by-cat.component';

describe('OfferByCatComponent', () => {
  let component: OfferByCatComponent;
  let fixture: ComponentFixture<OfferByCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferByCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferByCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
