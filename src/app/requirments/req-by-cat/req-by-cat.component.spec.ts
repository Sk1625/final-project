import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqByCatComponent } from './req-by-cat.component';

describe('ReqByCatComponent', () => {
  let component: ReqByCatComponent;
  let fixture: ComponentFixture<ReqByCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqByCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqByCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
