import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'proveedores',
    loadChildren:() => import('../proveedores/proveedores.module').then(m => m.ProveedoresModule)
  },
  {
    path: 'clientes',
    loadChildren:() => import('../clientes/clientes.module').then(m => m.ClientesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
