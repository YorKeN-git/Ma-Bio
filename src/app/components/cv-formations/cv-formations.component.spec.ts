import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvFormationsComponent } from './cv-formations.component';

describe('CvFormationsComponent', () => {
  let component: CvFormationsComponent;
  let fixture: ComponentFixture<CvFormationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvFormationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
