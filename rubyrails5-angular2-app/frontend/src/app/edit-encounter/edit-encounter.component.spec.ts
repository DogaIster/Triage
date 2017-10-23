import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEncounterComponent } from './edit-encounter.component';

describe('EditEncounterComponent', () => {
  let component: EditEncounterComponent;
  let fixture: ComponentFixture<EditEncounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEncounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
