import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UploadCovidTestReportService } from '../upload-covid-test-report/upload-covid-test-report.service';
import { QrcodeReaderService } from './qrcode-reader.service';

@Component({
  selector: 'app-qrcode-reader',
  templateUrl: './qrcode-reader.component.html',
  styleUrls: ['./qrcode-reader.component.css']
})
export class QrcodeReaderComponent implements OnInit {

  scanResult: any;

  covidstatus: any;

  selectedFileBLOB: any;
  selectedFile: any;

  urlMap: any;

  pdfUrl: any;
  yt: any;
  url: string = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.697149419326095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+Birle%C5%9Fik+Devletler!5e0!3m2!1str!2str!4v1533536693373";

  constructor(private qrcodeservice: QrcodeReaderService,public sanitizer: DomSanitizer ) { }

  title = 'ANGULARQRSCANNER';

  onCodeResult(result:any)
  {
this.scanResult=result;
console.log('scanresult',this.scanResult);
this.qrcodeservice.viewCovidReport(this.scanResult).subscribe((data: any) => {
  this.selectedFile = data.url;
  console.log('Scanneddata',this.selectedFile);
  // this.pdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.selectedFile);
  this.urlMap= this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedFile);
})
  }
  

  ngOnInit() {
    this.covidstatus = localStorage.getItem('covidstatus');
    console.log('covid status',this.covidstatus);
  }

}
