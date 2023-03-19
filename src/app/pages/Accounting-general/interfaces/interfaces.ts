export interface Bill {
    billNumber: number,
    orderNumber: number,
    date:number,
    paymentDate: number,
    paymentStatus:string,
    paymentMethod:string,
    customer:string,
    productRef1:number,
    productRef2:number,
    quantity:number,
    pricePerUnit:number,
    totalPrice:number,
    tax:number,
    clientDiscount:number,
    shipMentCost:number,
}

export interface IDeliveryNotes {
    deliveryNotesNum: number,
    date:number,
    product:number,
    description:string,
    quantity:number,

}

