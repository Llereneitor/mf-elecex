import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { CrearProveedorComponent } from './components/crear-proveedor/crear-proveedor.component';
import { CobroProveedorComponent } from './components/cobro-proveedor/cobro-proveedor.component';

const routes: Routes = [
  {
    path: '',
    component: ProveedoresComponent
  },
  {
    path: 'crear-proveedor',
    component: CrearProveedorComponent
  },
  {
    path: 'cobro-proveedor',
    component: CobroProveedorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
