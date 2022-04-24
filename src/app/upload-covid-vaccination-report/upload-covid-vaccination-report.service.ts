import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadCovidVaccinationReportService {

  base_url = "https://dhp-server.herokuapp.com/api/issuer/intake";

  user_id = localStorage.getItem('userid')

  user_token = localStorage.getItem('token');

  constructor(private htc: HttpClient) { }

  uploadfile(usrInfo: any): Observable<any> {
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.user_token}`);
    const reqOptns = {
      headers: new HttpHeaders({
        'content-type': 'multipart/form-data'
      })
    }
    console.log(JSON.stringify(usrInfo))
    return this.htc.post(this.base_url + '/' + this.user_id, usrInfo)
  }
}
