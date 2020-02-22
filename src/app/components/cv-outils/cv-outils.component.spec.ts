import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvOutilsComponent } from './cv-outils.component';

describe('CvOutilsComponent', () => {
  let component: CvOutilsComponent;
  let fixture: ComponentFixture<CvOutilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvOutilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvOutilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
