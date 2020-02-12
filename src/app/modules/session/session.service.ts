import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceBase } from 'src/app/shared/services/service.base';


@Injectable()
export class Sessionervice extends ServiceBase {


  constructor(private http: HttpClient) {
    super(http);
  }

  login(username: string, password: string) {
    return this.http.post(`${this.baseUrl}login/authenticate`, {
      username,
      password
    });

  }
}
