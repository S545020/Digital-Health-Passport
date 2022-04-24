import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadCovidVaccinationReportService } from './upload-covid-vaccination-report.service';

@Component({
  selector: 'a;pp-upload-covid-vaccination-report',
  templateUrl: './upload-covid-vaccination-report.component.html',
  styleUrls: ['./upload-covid-vaccination-report.component.css']
})
export class UploadCovidVaccinationReportComponent implements OnInit {

  public formGroup = this.fb.group({
    file: [null, Validators.required]
  });
 
  private fileName: any;

  formData: any;

  constructor(private covidreportservice: UploadCovidVaccinationReportService,private fb: FormBuilder) { }

  onFilechange(event: any) {

    const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

             this.formData = new FormData();

            let data = JSON.stringify({
              "report": "vaccination", 
              "by": "phizer"
            })

            this.formData.append("file", file);
            this.formData.append("holderDHPId","DHP-3151dfee")
            this.formData.append("metaData",data)
        }
  }
  
  upload() {

      console.log('covid_report',this.formData);
      this.covidreportservice.uploadfile(this.formData).subscribe((resp: any) => {
        alert("Uploaded");
        console.log('response',resp);
      })
    }

    logout(){
      localStorage.clear();
    }

    ngOnInit(){
    }
  }



  


