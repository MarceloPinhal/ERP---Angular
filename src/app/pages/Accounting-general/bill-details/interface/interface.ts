export interface Ibill{
    billNumber: number,
    orderNumber: number,
    date: number,
    paymentDate: number,
    paymentStatus: string,
    paymentMethod: string,
    customer: string,
    productRef1: string,
    productRef2: string,
    quantity: number,
    pricePerUnit: number,
    totalPrice: number,
    tax: number,
    clientDiscount: number,
    shipmentCost: number
}