import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrcodeReaderService {

  base_url = "https://dhp-server.herokuapp.com/api/verifier/transaction";

  transactionid_url = localStorage.getItem('transactionid');
  userid_url = localStorage.getItem('userid');

  constructor(private http: HttpClient) { }

  viewCovidReport(): Observable<any> {
    return this.http.get(this.base_url + '/' + this.transactionid_url + '/' + this.userid_url)
  }

}
