import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenstorageService } from '../tokenstorage.service';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  base_url = "https://dhp-server.herokuapp.com/api/issuer/search";
  userid_url = localStorage.getItem('userid')

 approvalStageMessage = new BehaviorSubject([]);
 currentApprovalStageMessage = this.approvalStageMessage.asObservable();
  
  constructor(private http: HttpClient,private tokenstorageservice: TokenstorageService) { }

    searchUser(dhpid: any): Observable<any> {
      return this.http.get(this.base_url + '/' + dhpid + '/' + this.userid_url)
    }

    updateApprovalMessage(message: any) {
      this.approvalStageMessage.next(message)
      }


}
