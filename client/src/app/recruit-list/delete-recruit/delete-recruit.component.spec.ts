import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecruitComponent } from './delete-recruit.component';

describe('DeleteRecruitComponent', () => {
  let component: DeleteRecruitComponent;
  let fixture: ComponentFixture<DeleteRecruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRecruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
