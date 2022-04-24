import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  
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
