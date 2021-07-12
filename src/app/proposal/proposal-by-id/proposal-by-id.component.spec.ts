import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalByIdComponent } from './proposal-by-id.component';

describe('ProposalByIdComponent', () => {
  let component: ProposalByIdComponent;
  let fixture: ComponentFixture<ProposalByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
