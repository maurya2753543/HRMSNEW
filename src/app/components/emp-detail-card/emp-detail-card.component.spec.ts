import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailCardComponent } from './emp-detail-card.component';

describe('EmpDetailCardComponent', () => {
  let component: EmpDetailCardComponent;
  let fixture: ComponentFixture<EmpDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
