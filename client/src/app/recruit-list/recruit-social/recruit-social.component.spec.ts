import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitSocialComponent } from './recruit-social.component';

describe('RecruitSocialComponent', () => {
  let component: RecruitSocialComponent;
  let fixture: ComponentFixture<RecruitSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
