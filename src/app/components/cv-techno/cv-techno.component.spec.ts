import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTechnoComponent } from './cv-techno.component';

describe('CvTechnoComponent', () => {
  let component: CvTechnoComponent;
  let fixture: ComponentFixture<CvTechnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvTechnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvTechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
