import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  formInput = ['input1', 'input2', 'input3', 'input4'];
  @ViewChildren('formRow') rows: any;

  
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      emailid: ['', Validators.required],
      password: ['', Validators.required]
    })
   }  
   
   get f() { return this.loginForm.controls; }

   onSubmit(){
    this.submitted = true;  

    if (this.loginForm.invalid) {
      return;
  }
  }

  logout(){
    localStorage.clear();
  }

  ngOnInit(): void {
  }

}
