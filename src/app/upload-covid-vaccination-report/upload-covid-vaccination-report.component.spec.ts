import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCovidVaccinationReportComponent } from './upload-covid-vaccination-report.component';

describe('UploadCovidVaccinationReportComponent', () => {
  let component: UploadCovidVaccinationReportComponent;
  let fixture: ComponentFixture<UploadCovidVaccinationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCovidVaccinationReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCovidVaccinationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
