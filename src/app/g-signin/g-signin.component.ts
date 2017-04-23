import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

@Component({
  selector: 'app-g-signin',
  templateUrl: './g-signin.component.html',
  styleUrls: ['./g-signin.component.css']
})
export class GSigninComponent implements OnInit {
  isSignedIn: boolean;

  constructor(private UserService: UserService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.UserService.getSignedInStatus().subscribe((isSignedIn) => {
      this.isSignedIn = isSignedIn;
      if (!this.isSignedIn) {
        this.UserService.renderButton('g-signin');
      }
    });
  }

}
