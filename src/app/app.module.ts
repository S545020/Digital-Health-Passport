import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchUserComponent } from './search-user/search-user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { JwtInterceptor } from './jwt.interceptor';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CovidTestDetailsComponent } from './covid-test-details/covid-test-details.component';


import { UserDetailsComponent } from './user-details/user-details.component';
import { UploadCovidVaccinationReportComponent } from './upload-covid-vaccination-report/upload-covid-vaccination-report.component';
import { UploadCovidTestReportComponent } from './upload-covid-test-report/upload-covid-test-report.component';
import { QrcodeReaderComponent } from './qrcode-reader/qrcode-reader.component';


const routerList:Routes=[
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'search-user',component:SearchUserComponent},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'covid-test-details',component:CovidTestDetailsComponent},
  {path:'user-details',component:UserDetailsComponent},
  {path: 'upload-covid-vaccination-report',component:UploadCovidVaccinationReportComponent},
  {path: 'upload-covid-test-report',component: UploadCovidTestReportComponent},
  { path: '', redirectTo: '/Login', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent, 
    LoginComponent, SearchUserComponent, ChangePasswordComponent,
    ForgotPasswordComponent,
    CovidTestDetailsComponent,
    UserDetailsComponent,
    UploadCovidVaccinationReportComponent,
    UploadCovidTestReportComponent,
    QrcodeReaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routerList),
    FormsModule,
ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
