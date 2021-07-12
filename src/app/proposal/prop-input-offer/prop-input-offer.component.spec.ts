import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropInputOfferComponent } from './prop-input-offer.component';

describe('PropInputOfferComponent', () => {
  let component: PropInputOfferComponent;
  let fixture: ComponentFixture<PropInputOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropInputOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropInputOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
