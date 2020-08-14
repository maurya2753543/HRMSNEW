import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallProjectTrendsComponent } from './overall-project-trends.component';

describe('OverallProjectTrendsComponent', () => {
  let component: OverallProjectTrendsComponent;
  let fixture: ComponentFixture<OverallProjectTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallProjectTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallProjectTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
