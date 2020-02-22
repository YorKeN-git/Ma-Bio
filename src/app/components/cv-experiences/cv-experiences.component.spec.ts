import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvExperiencesComponent } from './cv-experiences.component';

describe('CvExperiencesComponent', () => {
  let component: CvExperiencesComponent;
  let fixture: ComponentFixture<CvExperiencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvExperiencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
