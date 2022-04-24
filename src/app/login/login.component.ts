import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder,private loginservice: LoginService,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
   }  
   
   get f() { return this.loginForm.controls; }

   onSubmit(){
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
  }
  else{
    this.loginservice.AuthenticateUser(this.loginForm.value).subscribe((data) => {
      localStorage.clear();
      localStorage.setItem('dhpid',data.user.dhp_id);
      localStorage.setItem('userid',data.user._id);
      localStorage.setItem('token',data.token);
      console.log('data',data);
      this.router.navigate(['search-user'])
    //   if (data.length > 0) {
    //     localStorage.setItem("uname", this.loginForm.value.email)
    //     console.log('data',data);
        
    //   }
    //   else
    //     alert("Invalid Login ...")
    // }
    // )
  })
  }
}

  ngOnInit(){
  }
}



  


