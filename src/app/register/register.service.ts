import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  base_url = "https://dhp-server.herokuapp.com/api/auth/signup";

  constructor(private htc: HttpClient) { }

  AddIssuer(usrInfo: any): Observable<any> {
    const reqOptns = {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    }
    console.log(JSON.stringify(usrInfo))
    return this.htc.post(this.base_url, JSON.stringify(usrInfo), reqOptns)
  }
}
