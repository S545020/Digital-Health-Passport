import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MustMatch } from '../must-match.validator';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  closeResult: any;
  
  
  constructor(private fb: FormBuilder,private registerservice: RegisterService,private modalService: NgbModal,private router: Router) { 
    this.registerForm = this.fb.group({
      organizationemailid: ['', Validators.required,Validators.email],
      organizationname: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      phone_number: ['',Validators.required],
      role:['']
    }, {
        validator: MustMatch('password', 'confirmPassword'),
    })
  }
  
  get f() { return this.registerForm.controls; }

  healthCheck(event: any){
console.log('health',event.target.value)
this.registerForm.value.role = event.target.value;
  }

  airportCheck(event: any){
console.log('airport',event.target.value);
this.registerForm.value.role = event.target.value;
  }

  onSubmit(content: any){
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
  }
  else{
    let issuer_details = {
      "email": this.registerForm.value.organizationemailid,
    "password": this.registerForm.value.password,
    "role": this.registerForm.value.role,
    "phone_number": this.registerForm.value.phone_number,
    "terms_condition": true
    }
    console.log('form values',issuer_details);
    this.registerservice.AddIssuer(issuer_details).subscribe((data: any)=>{
      console.log(JSON.stringify(data));
    })
  }
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
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

  Submit(modal: any){
this.modalService.dismissAll(modal);
    this.router.navigate(['/Login'])
  }

  closePolicy(modal: any){
    this.modalService.dismissAll(modal);
  }

  policy(content: any){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  ngOnInit(){
    
  }

}
