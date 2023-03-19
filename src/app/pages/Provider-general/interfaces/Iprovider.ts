
export interface Provider {
    name: string,
    taxIdentificationNumber:string,
    country:string
    city:string,
    cityCode:string,
    address:string,
    contact:string[],
    shipmentFree:Boolean,
    observations:string,
}

export interface IProvisioningList {
    _id: string,
    idProvider: string,
    code: string,
    description: string,
    price:number,
}