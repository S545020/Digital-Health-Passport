import { Component } from '@angular/core';
import { TokenstorageService } from './tokenstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigitalHealthPassport';

  constructor(private tokenstorageservice: TokenstorageService){

  }

  logout() {
    this.tokenstorageservice.signOut();
    window.location.reload();
  }
}
