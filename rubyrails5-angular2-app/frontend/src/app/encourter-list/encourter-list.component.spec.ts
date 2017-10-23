import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncourterListComponent } from './encourter-list.component';

describe('EncourterListComponent', () => {
  let component: EncourterListComponent;
  let fixture: ComponentFixture<EncourterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncourterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncourterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
