import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', '']
      },
      {
        name: 'Proveedores',
        icon: 'uil uil-chart',
        router: ['/', 'proveedores'],
      },
      {
        name: 'Cientes',
        icon: 'uil uil-accessible-icon-alt',
        router: ['/', 'clientes'],
      },
      {
        name: 'Futuro',
        icon: 'uil uil-skip-forward',
        router: ['/', ''],
      }
    ]
  }

  goTo($event: any): void {
    this.router.navigate(['/', 'proveedores'])
    console.log($event)
  }


}
