import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTestDetailsComponent } from './covid-test-details.component';

describe('CovidTestDetailsComponent', () => {
  let component: CovidTestDetailsComponent;
  let fixture: ComponentFixture<CovidTestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidTestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidTestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
