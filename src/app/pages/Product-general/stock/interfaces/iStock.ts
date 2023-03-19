import {
  IProductStokDetail,
  IComponentsStokDetail,
} from "./iDetailStock";

export interface IStock {
  Products: IProductStokDetail[],
  Components: IComponentsStokDetail[],
}
