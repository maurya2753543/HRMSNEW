import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgDetailCardComponent } from './org-detail-card.component';

describe('OrgDetailCardComponent', () => {
  let component: OrgDetailCardComponent;
  let fixture: ComponentFixture<OrgDetailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgDetailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
