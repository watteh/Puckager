import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitListComponent } from './recruit-list.component';

describe('RecruitListComponent', () => {
  let component: RecruitListComponent;
  let fixture: ComponentFixture<RecruitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
