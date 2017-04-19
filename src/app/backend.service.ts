import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


import { environment } from '../environments/environment';

@Injectable()
export class BackendService {

  constructor(private http: Http) { }

  getMessage(): Observable<string> {
    return this.http.get(environment.api_url + '/api/hello')
      .map((res: Response) => (<any>res.json()).msg);
  }
}
