import { Component } from '@angular/core';

declare var gapi:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngAfterViewInit() {
    gapi.signin2.render('g-signin', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'onsuccess': this.onSignIn,
    });
  }

  onSignIn = (googleUser: any) => {
    window.console.log(googleUser);
  }
}
