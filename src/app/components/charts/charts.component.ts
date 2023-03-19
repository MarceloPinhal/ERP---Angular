import { BillsService } from './../../../shared/services/bills.service';
import { OrdersService } from './../../../shared/services/orders.service';
import { customersService } from './../../../shared/services/customers.service';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  customers: any[] = [];
  customersCountry: any[] = [];
  filteredCountries: any[] = [];

  orders: any[] = [];
  filteredOrders: any[] = [];

  bills: any[] = [];
  filteredBills: any[] = [];

  sales: any[] = [
    {
      year: 2017,
      amount: 3000,
    },
    {
      year: 2018,
      amount: 6200,
    },
    {
      year: 2019,
      amount: 7000,
    },
    {
      year: 2020,
      amount: 7900,
    },
    {
      year: 2021,
      amount: 8400,
    },
    {
      year: 2022,
      amount: 9800,
    },
  ];
  salesLabelData: any[] = [];
  salesAmountData: any[] = [];

  constructor(
    private customersService: customersService,
    private ordersService: OrdersService,
    private billsService: BillsService
  ) {}

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe((data: any) => {
      this.customers = data;

      for (let customer of this.customers) {
        this.customersCountry.push(customer.country);
      }

      let elementCount: any = {};

      this.filteredCountries = [...new Set(this.customersCountry)];

      for (let i = 0; i < this.customersCountry.length; i++) {
        let element = this.customersCountry[i];
        if (elementCount[element]) {
          elementCount[element] += 1;
        } else {
          elementCount[element] = 1;
        }
      }
      let numberOfCustomersByCountry = Object.values(elementCount);

      this.renderCustomersChart(
        this.filteredCountries,
        numberOfCustomersByCountry
      );
    });

    this.ordersService.getOrders().subscribe((data: any) => {
      this.orders = data;

      let elementCount: any = {};

      if (this.orders !== null) {
        for (let order of this.orders) {
          this.filteredOrders.push(order.orderStatus);
        }
      }

      for (let i = 0; i < this.filteredOrders.length; i++) {
        let element = this.filteredOrders[i];
        if (elementCount[element]) {
          elementCount[element] += 1;
        } else {
          elementCount[element] = 1;
        }
      }

      this.renderOrdersChart(elementCount);
    });

    this.billsService.getBills().subscribe((data: any) => {
      this.bills = data;

      for (let bill of this.bills) {
        this.filteredBills.push(bill.paymentStatus);
      }

      let elementCount: any = {};

      for (let i = 0; i < this.filteredBills.length; i++) {
        let element = this.filteredBills[i];
        if (elementCount[element]) {
          elementCount[element] += 1;
        } else {
          elementCount[element] = 1;
        }
      }

      this.renderBillsChart(elementCount);
    });

    this.getSalesData();
  }

  renderOrdersChart(elementCount: any) {
    const myChart = new Chart('orders-chart', {
      type: 'bar',
      data: {
        labels: ['Activo', 'Pendiente', 'Producción'],
        datasets: [
          {
            label: 'Estado de Pedidos',
            data: [
              elementCount.activo,
              elementCount.pendiente,
              elementCount.producción,
            ],
            backgroundColor: ['#822529',"green"],
            borderColor: ['#cb3b28'],
            borderWidth: 1,
          },
        ],
      },
      options: {

        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },

    });
  }

  renderCustomersChart(
    filteredCountries: any,
    numberOfCustomersByCountry: any
  ) {
    const myChart = new Chart('customers-chart', {
      type: 'pie',
      data: {
        labels: filteredCountries,
        datasets: [
          {
            label: 'Clientes por pais',
            data: numberOfCustomersByCountry,
            backgroundColor: ['#822529'],
            borderColor: ['#cb3b28'],
            borderWidth: 1,
          },
        ],
      },
      options: {

        plugins: {
          legend:{
            display: false
          }
        },

        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },


    });
  }

  renderBillsChart(elementCount: any) {
    const myChart = new Chart('bills-chart', {
      type: 'doughnut',
      data: {
        labels: ['Liquidadas', 'Pendientes'],
        datasets: [
          {
            label: 'Estado de Facturas',
            data: [elementCount.pagado, elementCount['no pagado']],
            backgroundColor: ['#822529'],
            borderColor: ['#cb3b28'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  getSalesData() {
    for (let sale of this.sales) {
      this.salesLabelData.push(sale.year)
      this.salesAmountData.push(sale.amount)
      console.log(this.salesLabelData, this.salesAmountData)
    }
    this.renderSalesChart(this.salesLabelData, this.salesAmountData)
  }


  renderSalesChart(salesLabelData:any, salesAmountData:any) {
    const myChart = new Chart('sales-chart', {
      type: 'line',
      data: {
        labels: salesLabelData,
        datasets: [
          {
            label: 'Total Ventas Anuales',
            data: salesAmountData,
            backgroundColor: ['#822529'],
            borderColor: ['#cb3b28'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
