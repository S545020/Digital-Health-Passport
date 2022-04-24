import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCovidTestReportComponent } from './upload-covid-test-report.component';

describe('UploadCovidTestReportComponent', () => {
  let component: UploadCovidTestReportComponent;
  let fixture: ComponentFixture<UploadCovidTestReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCovidTestReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCovidTestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
