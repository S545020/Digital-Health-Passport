import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CovidTestDetailsComponent } from '../covid-test-details/covid-test-details.component';
import { SearchUserService } from './search-user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  dhpid: any;
  userdata: any;

  constructor(private searchuserservice: SearchUserService,private router: Router) {
   }

  searchUser(){
    console.log('dhpid',this.dhpid);
this.searchuserservice.searchUser(this.dhpid).subscribe((data: any) => {
  console.log('userdata',data);
  this.userdata = data;
  this.router.navigate(['/user-details'])
  this.searchuserservice.updateApprovalMessage(this.userdata)
})
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/Login']);
  }

  ngOnInit() {
  }

}
