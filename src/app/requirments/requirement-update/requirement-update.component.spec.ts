import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementUpdateComponent } from './requirement-update.component';

describe('RequirementUpdateComponent', () => {
  let component: RequirementUpdateComponent;
  let fixture: ComponentFixture<RequirementUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
