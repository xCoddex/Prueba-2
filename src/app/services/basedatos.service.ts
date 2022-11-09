import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {

  apiURL = 'https://dummyjson.com/users/add';

  constructor(private http: HttpClient) { }

  getPosts(id) {
    return this.http.get('$(this.apiURL)/posts/$(id)');
  }
}
