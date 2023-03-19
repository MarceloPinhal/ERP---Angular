import {IcomponentImage, IcomponentEquivalences, IcomponentProcesses, IcomponentProvider} from './IdetailsComponent'
export interface Icomponent{

    _id:string,
    componentReference: String,
    sanitaryComponentReference: string,
    description: string,
    images: IcomponentImage[],
    equivalences: IcomponentEquivalences[],
    processes: IcomponentProcesses[],
    providers: IcomponentProvider[],
}