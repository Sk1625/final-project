import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropInputReqComponent } from './prop-input-req.component';

describe('PropInputReqComponent', () => {
  let component: PropInputReqComponent;
  let fixture: ComponentFixture<PropInputReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropInputReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropInputReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
