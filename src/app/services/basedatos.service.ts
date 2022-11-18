import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Productos } from '../pages/modelo/productos';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {
  getProductos() {
    throw new Error('Method not implemented.');
  }

  apiURL = 'https://dummyjson.com/users/add';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  agregarProducto(producto: Productos): Observable<any> {
    return this.http.post<Productos>(this.apiURL, JSON.stringify(producto), this.httpOptions).pipe()
  }

  borrarProducto(producto): Observable<Productos[]> {
    return this.http.delete<Productos[]>(this.apiURL + '/' , this.httpOptions).pipe()
  }
}
