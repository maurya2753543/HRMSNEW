import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateOrgComponent } from './create-update-org.component';

describe('CreateUpdateOrgComponent', () => {
  let component: CreateUpdateOrgComponent;
  let fixture: ComponentFixture<CreateUpdateOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUpdateOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
