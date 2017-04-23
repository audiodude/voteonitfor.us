import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

declare var gapi:any;

@Injectable()
export class UserService {
  auth2Observable: Observable<any>;

  constructor() {
    this.auth2Observable = this.getAuth2();
  }

  private getAuth2(): Observable<any> {
    return new Observable((subject) => {
      gapi.load('auth2', () => {
        let auth2 = gapi.auth2.getAuthInstance();
        if (!auth2) {
          auth2 = gapi.auth2.init({
            client_id: ('184998212769-eui6g7irjpkmvlrg3v6k622ihir0ihto.apps' + 
                        '.googleusercontent.com'),
            fetch_basic_profile: false,
            scope: 'profile'
          });
        }
        auth2.then(() => {
          subject.next(auth2);
        });
      });
    });
  }

  private onSignIn(googleUser: any) {
    window.console.log(googleUser);
  }

  signOut() {
    this.auth2Observable.subscribe((auth2) => {
      auth2.signOut();
    });
  }

  getSignedInStatus(): Observable<boolean> {
    return this.auth2Observable.map((auth2: any) => {
      return auth2.isSignedIn.get();
    });
  }

  renderButton(elementId) {
    const options =  {
        'scope': 'profile email',
        'width': 120,
        'height': 50,
        'onsuccess': this.onSignIn,
    };
    gapi.signin2.render(elementId, options);
  }
}
