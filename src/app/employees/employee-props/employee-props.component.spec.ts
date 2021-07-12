import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePropsComponent } from './employee-props.component';

describe('EmployeePropsComponent', () => {
  let component: EmployeePropsComponent;
  let fixture: ComponentFixture<EmployeePropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeePropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
