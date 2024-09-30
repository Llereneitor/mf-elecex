import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrl: './crear-proveedor.component.css'
})
export class CrearProveedorComponent implements OnInit{

  formulario!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nombreProveedor: ['', Validators.required],
      direccion: [''],
      formaPago: ['', Validators.required]
    });
  }

  get f() {
    return this.formulario.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.formulario.invalid) {
      return;
    }

    console.log('Formulario Enviado', this.formulario.value);
  }
}
