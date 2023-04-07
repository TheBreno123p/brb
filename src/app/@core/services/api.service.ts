import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public URL: string = '' + '/'

  constructor(
    private http: HttpClient
  ) { }

  public get(route: string) {
    return this.http.get(this.URL + route)
  }
}
