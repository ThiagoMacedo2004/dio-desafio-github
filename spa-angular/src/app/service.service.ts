import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get('http://jsonplaceholder.typicode.com/users')
    .pipe(
      map((response:any = []) => response.map((item:any) => item.website))
    )
  }
}
