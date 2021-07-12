import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementInputComponent } from './requirement-input.component';

describe('RequirementInputComponent', () => {
  let component: RequirementInputComponent;
  let fixture: ComponentFixture<RequirementInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
