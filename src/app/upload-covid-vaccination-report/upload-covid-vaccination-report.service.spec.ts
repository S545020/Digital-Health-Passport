import { TestBed } from '@angular/core/testing';

import { UploadCovidVaccinationReportService } from './upload-covid-vaccination-report.service';

describe('UploadCovidVaccinationReportService', () => {
  let service: UploadCovidVaccinationReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadCovidVaccinationReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
