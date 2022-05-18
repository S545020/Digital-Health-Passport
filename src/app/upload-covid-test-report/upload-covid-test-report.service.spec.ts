import { TestBed } from '@angular/core/testing';

import { UploadCovidTestReportService } from './upload-covid-test-report.service';

describe('UploadCovidTestReportService', () => {
  let service: UploadCovidTestReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadCovidTestReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
