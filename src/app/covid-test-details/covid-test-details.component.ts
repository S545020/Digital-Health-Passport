import { Component, OnInit } from '@angular/core';
import { SearchUserService } from '../search-user/search-user.service';

@Component({
  selector: 'app-covid-test-details',
  templateUrl: './covid-test-details.component.html',
  styleUrls: ['./covid-test-details.component.css']
})
export class CovidTestDetailsComponent implements OnInit {

  userdata: any;
  constructor(private searchuserservice: SearchUserService) { }

//   getDetails(event: any){
//     this.userdata = event.target.value;
// console.log('event',event);
//   }

  ngOnInit() {
    this.searchuserservice.approvalStageMessage.subscribe((data: any) => {
    this.userdata = data;
console.log('userdata1',JSON.stringify(data));
    })
  }

}
