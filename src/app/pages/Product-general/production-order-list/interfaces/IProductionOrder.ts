import { IIDProduct, IIDComponents, IProcesses } from "./IDetailsProductionOrders"

export interface IProductionOrder {
    orderNumber: string,
    idProduct:[string],  
    idComponent: [string],
    processes:[string],
    quantity: number,
    date: number,
    expectedEnd: number
    _id:string
}


