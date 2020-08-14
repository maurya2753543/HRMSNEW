import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityInfoCardComponent } from './entity-info-card.component';

describe('EntityInfoCardComponent', () => {
  let component: EntityInfoCardComponent;
  let fixture: ComponentFixture<EntityInfoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityInfoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
