import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncourterAddComponent } from './encourter-add.component';

describe('EncourterAddComponent', () => {
  let component: EncourterAddComponent;
  let fixture: ComponentFixture<EncourterAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncourterAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncourterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
