export interface ICompany{
    _id: string,
    name: string,
    taxIdentificationNumber: string,
    country: string,
    city: string,
    cityCode: number,
    address: string,
    contact: [
        {
            name: string,
            phone: string,
            mail: string
        } 
    ],
    logo: string,
    tradeMark: [
        {
            name: String,
            logo: String
        }  
    ]
}

export interface IUser {
    _id: string,
    name: string,
    user: string,
    password: string,
    rol: string
}

