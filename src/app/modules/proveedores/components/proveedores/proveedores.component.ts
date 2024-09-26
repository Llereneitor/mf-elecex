import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, LinearScale, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent implements OnInit{

  facturas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
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
          data: this.facturas.map(f => f.totalAmount),
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
