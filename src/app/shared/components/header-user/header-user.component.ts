import { Component } from '@angular/core';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrl: './header-user.component.css'
})
export class HeaderUserComponent {

  things: any;

  ngOnInit(): void {

    this.things = [
      {
        name: 'Inicio',
        route: 'pagina-principal'
      },
      {
        name: 'Acerca de',
        route: 'proveedores'
      },
      {
        name: 'Salir',
        route: 'pagina-principal'
      }
    ]
  }
}
