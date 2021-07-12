import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRequirementComponent } from './employee-requirement.component';

describe('EmployeeRequirementComponent', () => {
  let component: EmployeeRequirementComponent;
  let fixture: ComponentFixture<EmployeeRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRequirementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
