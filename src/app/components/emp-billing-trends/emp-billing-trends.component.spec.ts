import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBillingTrendsComponent } from './emp-billing-trends.component';

describe('EmpBillingTrendsComponent', () => {
  let component: EmpBillingTrendsComponent;
  let fixture: ComponentFixture<EmpBillingTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpBillingTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpBillingTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
