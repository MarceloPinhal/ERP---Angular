export interface Customer{
    _id: string,
    name: string,
    taxIdentificationNumber: string,
    country: string,
    city: string,
    cityCode: number,
    address: string,
    observations: string,
    contact: [
        {phone: string,
        mail: string,}
    ]
    discount: Boolean,
    shipmentFree: number,
    logo: string
}

