import { customersService } from './../../../../shared/services/customers.service';
import { ActivatedRoute } from '@angular/router';
import { BillsService } from './../../../../shared/services/bills.service';
import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from "jspdf-autotable"


@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.scss'],
})
export class BillDetailsComponent implements OnInit {
  public id!: any;
  public bill!: any;
  public customer!: any;

  constructor(
    private billsService: BillsService,
    private activatedRoute: ActivatedRoute,
    private customerService: customersService
  ) {}
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    this.billsService.getBillById(this.id).subscribe((data: any) => {
      this.bill = data;
      console.log(this.bill);
    });
  }



generatePDF (bill:any) {
  const doc = new jsPDF();
  autoTable (doc,{
    body: [
      [
        {
      content:"SAFIDENT",
      styles:{
      halign: "left",
      fontSize: 18,
      textColor: "white"
      }
    },
    {
      content:"factura",
      styles:{
      halign: "right",
      fontSize: 18,
      textColor: "white"
      }
    }
  ],
],
theme: "plain",
styles: {
  fillColor: "black"
} 
  });

  autoTable (doc,{
    body: [
      [
        {
      content:`
       Número de factura: ${bill.billNumber}
       Número de pedido: ${bill.orderNumber}
       Fecha:${bill.date}      
      `,
      styles:{
      halign: "left",
      }
    },
  ],
],
theme: "striped",
  });

  autoTable (doc,{
    body: [
      [
        {
      content:`
       Datos del cliente:
       Nombre del Cliente: ${bill.customer.name}
       CIF: ${bill.customer.taxIdentificationNumber}
       Descuento del cliente:${bill.customer.clientDiscount} 
       País: ${bill.customer.country} 
       Direcion del cliente: ${bill.customer.address}     
      `,
      styles:{
      halign: "left",
      }
    },
  ],
],
theme: "striped",
  });


  autoTable (doc,{
    body: [
      [
    {
      content:`
       Datos del pedido:
       Estado del pago: ${bill.paymentStatus}
       Método de pago: ${bill.paymentMethod}
       Producto: ${bill.product.productReference}
       Precio total: ${bill.totalPrice}
       Precio por unidad: ${bill.pricePerUnit}
       Cantidad:${bill.quantity} 
       Impuesto: ${bill.tax} 
       Coste de Envio: ${bill.shipmentCost} 
         
      `,
      styles:{
      halign: "left",
      }
    },
  ],
],
theme: "striped",
  });

  return doc.save("factura")
}
}
