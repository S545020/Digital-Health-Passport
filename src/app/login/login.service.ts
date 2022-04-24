import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  signin = "https://dhp-server.herokuapp.com/api/auth/signin";

  constructor(private http: HttpClient) { }

  // AuthenticateUser(User: any) {
  //   this.loginService.AuthenticateUser(u.value, p.value).subscribe((data) => {
  //     if (data.length > 0) {
  //       localStorage.setItem("uname", u.value)
  //       this.rtr.navigate(['Home'])
  //     }
  //     else
  //       alert("Invalid Login ...")
  //   })
  // }

  AuthenticateUser(User: any):Observable<any> {
    return this.http.post(this.signin,User);
  }
}
