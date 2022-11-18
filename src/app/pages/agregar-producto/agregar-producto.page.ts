import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasedatosService } from 'src/app/services/basedatos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  PRODUCTOS: any = [];

  constructor(
    private basedatosService: BasedatosService,
    private router: Router
  ) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.basedatosService.getProductos().subscribe((response) => {
      this.PRODUCTOS = response;
    })
  }

  borrarProducto(producto) {
    if (window.confirm('Estas seguro?')) {
      this.basedatosService.borrarProducto()
      .subscribe(() => {
          this.ionViewDidEnter();
          console.log('Producto eliminado')
        }
      )
    }
  }
}
