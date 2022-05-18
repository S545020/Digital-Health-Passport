import { Component, OnInit } from '@angular/core';
import { UploadCovidTestReportService } from '../upload-covid-test-report/upload-covid-test-report.service';

@Component({
  selector: 'app-qrcode-reader',
  templateUrl: './qrcode-reader.component.html',
  styleUrls: ['./qrcode-reader.component.css']
})
export class QrcodeReaderComponent implements OnInit {

  scanResult: any='';

  covidstatus: any;

  constructor(private uploadservice: UploadCovidTestReportService) { }

  title = 'ANGULARQRSCANNER';

  onCodeResult(result:any)
  {
this.scanResult=result;
console.log('scanresult',this.scanResult);
  }
  

  ngOnInit() {

    this.covidstatus = localStorage.getItem('covidstatus');
    console.log('covid status',this.covidstatus);
  }

}
