import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { CrearProveedorComponent } from './components/crear-proveedor/crear-proveedor.component';
import { CobroProveedorComponent } from './components/cobro-proveedor/cobro-proveedor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProveedoresComponent,
    CrearProveedorComponent,
    CobroProveedorComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    FormsModule
  ]
})
export class ProveedoresModule { }
