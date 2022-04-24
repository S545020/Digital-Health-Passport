import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchUserService } from '../search-user/search-user.service';
import { UserDetailsService } from './user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userdata: any;

  constructor(private searchuserservice: SearchUserService,private userdetails: UserDetailsService,private router: Router) { }

  logout(){
    localStorage.clear();
    this.router.navigate(['/Login']);
  }

  sendData(){
this.userdetails.updateApprovalMessage(this.userdata.dhp_id);
this.router.navigate(['/upload-covid-test-report']);
  }

  ngOnInit() {
    this.searchuserservice.approvalStageMessage.subscribe((data: any) => {
      this.userdata = data;
  console.log('userdata1',JSON.stringify(data));
      })
  }

}
