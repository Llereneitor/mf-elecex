import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveElement, Chart, LinearScale, registerables } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';

Chart.register(...registerables);

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent implements OnInit{

  facturas: any[] = [];

  proveedores = [
    { id: 1, nombre: 'Proveedor 1' },
    { id: 2, nombre: 'Proveedor 2' },
    { id: 3, nombre: 'Proveedor 3' },
    { id: 9, nombre: 'Proveedor 4' },
    { id: 5, nombre: 'Proveedor 5' },
  ];

  filteredProveedores = [...this.proveedores];
  searchTerm: string = '';
  selectedProvider: string = '';
  isDropdownOpen: boolean = false;


  constructor(private http: HttpClient, private router: Router) {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  filterProveedores() {
    if (this.searchTerm) {
      this.filteredProveedores = this.proveedores.filter(proveedor =>
        proveedor.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredProveedores = [...this.proveedores]; // Resetear a todos los proveedores si no hay búsqueda
    }
  }

  ngOnInit() {
    this.loadData();
  }

  irAAlta() {
    this.router.navigate(['proveedores/crear-proveedor']);
  }

  irAProveedor(id: number) {

    this.selectedProvider = this.proveedores.find((p: { id: number; }) => p.id === id)?.nombre || '';
    this.isDropdownOpen = false;
    console.log(`Ir a proveedor con ID: ${id}`);
    this.router.navigate(['proveedores/cobro-proveedor']);
  }

  irAProveedorNoParams() {
    this.router.navigate(['proveedores/cobro-proveedor']);
  }


  loadData() {
    this.http.get<any>('assets/data/facturas.json').subscribe(data => {
      this.facturas = data.facturas;
      console.log(this.facturas)
      this.createChart();
    });
  }

  createChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.facturas.map(f => `${f.proveedorName} (${f.expirationDate})`),
        datasets: [{
          label: 'Importe a pagar',
          data: this.facturas.map(f => f.amountBetweenPayments),
          borderColor: 'rgba(0, 0, 0, 1)',
          backgroundColor: 'rgba(11, 102, 11, 1)',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        onClick: (event: ChartEvent, elements: ActiveElement[], chart: Chart) => {
          if (elements.length) {
            const index = elements[0].index;
            const factura = this.facturas[index];
            this.handleBarClick(factura);
          }
        }
      }
    });
  }

  // Método que se ejecutará al hacer clic en la barra
  handleBarClick(factura: any) {
    console.log('Clicked factura:', factura);
    this.irAProveedorNoParams()
  }
}
