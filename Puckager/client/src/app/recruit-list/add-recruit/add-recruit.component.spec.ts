import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecruitComponent } from './add-recruit.component';

describe('AddRecruitComponent', () => {
  let component: AddRecruitComponent;
  let fixture: ComponentFixture<AddRecruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
