import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchUserService } from '../search-user/search-user.service';
import { UploadCovidVaccinationReportService } from '../upload-covid-vaccination-report/upload-covid-vaccination-report.service';
import { UserDetailsService } from '../user-details/user-details.service';
import { UploadCovidTestReportService } from './upload-covid-test-report.service';

@Component({
  selector: 'app-upload-covid-test-report',
  templateUrl: './upload-covid-test-report.component.html',
  styleUrls: ['./upload-covid-test-report.component.css']
})
export class UploadCovidTestReportComponent implements OnInit {

  viewStatus = false;

  userdata: any;

  otherVaccination: any;

  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });
 
  private fileName: any;

  formData: any;

  closeResult: any;
  covidReport: any;

  covidTypeReport: any;

  showInput = false;

  constructor(private covidreportservice: UploadCovidVaccinationReportService,private modalService: NgbModal,
    private userdetails: UserDetailsService,private fb: FormBuilder,private router: Router,public uploadcovidtest: UploadCovidTestReportService) { }


  selectReport(event: any){
console.log('event',event.target.value);
if(event.target.value == "covidtestreport"){
  this.covidTypeReport = event.target.value;
  this.showInput = false;
  this.covidReport = "covid-report";
  this.viewStatus = true;
}
else if(event.target.value == "covidvaccinationreport"){
  this.covidTypeReport = event.target.value;
  this.showInput = false;
  this.covidReport = "covid-vaccination";
  this.viewStatus = true;
}
else if(event.target.value == "othervaccinationreport"){
  this.covidTypeReport = event.target.value;
  this.showInput = true;
  this.covidReport = this.otherVaccination;
  console.log('covidReport',this.otherVaccination);
  this.viewStatus = true;
}
else{
  this.viewStatus = false;
}
  }

  // selectStatus(event: any){
  //   console.log('status',event.target.value);
  //   localStorage.setItem('covidstatus',event.target.value)
  //   this.uploadcovidtest.updateApprovalMessageStatus(event.target.value);
  // }

  onFilechange(event: any) {
    if(this.covidTypeReport == "othervaccinationreport"){
      console.log("othervaccination",this.covidReport);
      this.covidReport = this.otherVaccination;
    }

    // if(this.covidTypeReport = "covidtestreport"){
    //   console.log("covidtestreport",this.covidTypeReport);
    //   this.covidReport = "covid-report"
    // }

    // if(this.covidTypeReport = "covidvaccinationreport"){
    //   console.log("covidvaccinationreport",this.covidTypeReport);
    //   this.covidReport = "covid-vaccination";
    // }


    
    const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

             this.formData = new FormData();

            let data = JSON.stringify({
              "report": this.covidReport, 
              "by": "phizer"
            })

            console.log('data',data);

            this.formData.append("file", file);
            this.formData.append("holderDHPId",this.userdata)
            this.formData.append("metaData",data)
        }
  }
  
  upload(privacy: any) {

      console.log('covid_report',this.formData);
      this.covidreportservice.uploadfile(this.formData).subscribe((resp: any) => {
        this.modalService.open(privacy, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        console.log('response',resp);
        console.log('transactionid',resp.transaction_id);
        localStorage.setItem('transactionid',resp.transaction_id);
        location.reload();
      })
    }

    logout(){
      localStorage.clear();
      this.router.navigate(['/Login']);
    }

    closePolicy(modal: any){
      this.modalService.dismissAll(modal);
      // window.location.reload();
    }

    getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

  ngOnInit() {
    this.userdetails.approvalStageMessage.subscribe((data: any) => {
      this.userdata = data;
  console.log('userdata1',data);
      })
  }

}
