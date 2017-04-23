import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { BackendService } from '../backend.service';
import { UserService } from '../user.service';

declare var gapi:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: string;
  oldIsSignedIn: boolean;
  isSignedIn: boolean;

  constructor(private BackendService: BackendService,
              private UserService: UserService,
              private ref: ChangeDetectorRef) {
    this.BackendService.getMessage().subscribe((msg: string) => {
      this.message = msg;
    });
    this.UserService.getSignedInStatus().subscribe((signedIn) => {
      this.isSignedIn = signedIn;
      this.ref.detectChanges();
    });
  }

  signOut() {
    this.UserService.signOut();
  }

  ngOnInit() {}
}
