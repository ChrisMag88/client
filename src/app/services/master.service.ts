import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API } from '../lib/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  public api : API


  constructor(
    public _http: HttpClient

  ) {
    this.api = new API(_http);

  }

  HTTP_POST(url: string, params: any): Observable<any> {
    return this.api.post(url, params);
  }

  HTTP_GET(url: string, params: any): Observable<any> {
    return this.api.get(url, params);
  }

}
