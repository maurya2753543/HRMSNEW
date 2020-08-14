import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTypeTrendsComponent } from './emp-type-trends.component';

describe('EmpTypeTrendsComponent', () => {
  let component: EmpTypeTrendsComponent;
  let fixture: ComponentFixture<EmpTypeTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpTypeTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpTypeTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
