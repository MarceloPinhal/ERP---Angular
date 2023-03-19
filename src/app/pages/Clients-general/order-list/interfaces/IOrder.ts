export interface IOrder{

    _id: string,
     idCustomer: string,
    orderNumber: number,
    date: Number,
    products: [{
        idProduct: string,
        cantidad: Number
      }],
      components: [{
        idComponent: string,
        cantidad:Number
      }],
    observations:string,
    orderStatus: string,

}

