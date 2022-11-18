import { Component } from '@angular/core';
import { Productos } from './pages/modelo/productos';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public productos: Array<Productos>=[
    {
      nombre: '',
      precio: '',
      descripcion: '',
      vencimiento: '',
    }
  ]
}
