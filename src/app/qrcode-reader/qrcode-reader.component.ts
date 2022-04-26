import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode-reader',
  templateUrl: './qrcode-reader.component.html',
  styleUrls: ['./qrcode-reader.component.css']
})
export class QrcodeReaderComponent implements OnInit {

  scanResult: any='';

  constructor() { }

  title = 'ANGULARQRSCANNER';

  onCodeResult(result:any)
  {
this.scanResult=result;
console.log('scanresult',this.scanResult);
  }
  

  ngOnInit() {
  }

}
