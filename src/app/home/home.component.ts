import { Component, OnInit } from '@angular/core';

import { BackendService } from '../backend.service';

declare var gapi:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;

  constructor(private BackendService: BackendService) {
    this.BackendService.getMessage().subscribe((msg: string) => {
      this.message = msg;
    });
  }

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

  ngOnInit() {}
}
