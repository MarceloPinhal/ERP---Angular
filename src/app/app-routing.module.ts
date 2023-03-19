import { AuthUserGuard } from './../shared/auth-user.guard';
import { ProvisioningDetailsComponent } from './pages/Provider-general/provisioning-details/provisioning-details.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CreateUserComponent } from './pages/Company-general/create-user/create-user.component';
import { ChangePasswordComponent } from './pages/Company-general/change-password/change-password.component';
import { CompanyComponent } from './pages/Company-general/company/company.component';
import { CompanyListComponent } from './pages/Company-general/company-list/company-list.component';
import { StockListComponent } from './pages/Product-general/stock-list/stock-list.component';
import { ProcessListComponent } from './pages/Product-general/process-list/process-list.component';
import { ProcessesService } from './../shared/services/processes.service';
import { ProvisioningListComponent } from './pages/Provider-general/provisioning-list/provisioning-list.component';
import { BudgetListComponent } from './pages/Accounting-general/budget-list/budget-list.component';
import { BillListComponent } from './pages/Accounting-general/bill-list/bill-list.component';
import { ComponentListComponent } from './pages/Product-general/component-list/component-list.component';
import { ProductListComponent } from './pages/Product-general/product-list/product-list.component';
import { ProviderListComponent } from './pages/Provider-general/provider-list/provider-list.component';
import { OrderListComponent } from './pages/Clients-general/order-list/order-list.component';
import { CustomerListComponent } from './pages/Clients-general/customer-list/customer-list.component';
import { DeliveryNoteDetailsComponent } from './pages/Accounting-general/delivery-note-details/delivery-note-details.component';
import { ProcessDetailsComponent } from './pages/Product-general/process-details/process-details.component';
import { ComponentDetailsComponent } from './pages/Product-general/component-details/component-details.component';
import { ProductDetailsComponent } from './pages/Product-general/product-details/product-details.component';
import { ProviderDetailComponent } from './pages/Provider-general/provider-detail/provider-detail.component';
import { OrderDetailsComponent } from './pages/Clients-general/order-details/order-details.component';
import { CustomerDetailsComponent } from './pages/Clients-general/customer-details/customer-details.component';
import { ProductionOrderDetailsComponent } from './pages/Product-general/production-order-details/production-order-details.component';
import { StockComponent } from './pages/Product-general/stock/stock.component';
import { DeliveryNoteListComponent } from './pages/Accounting-general/delivery-note-list/delivery-note-list.component';
import { DeliveryNoteComponent } from './pages/Accounting-general/delivery-note/delivery-note.component';
import { UserComponent } from './pages/Company-general/user/user.component';
import { ProcessComponent } from './pages/Product-general/process/process.component';
import { ProvisioningComponent } from './pages/Provider-general/provisioning/provisioning.component';
import { ComponentComponent } from './pages/Product-general/component/component.component';
import { ProductComponent } from './pages/Product-general/product/product.component';
import { BillComponent } from './pages/Accounting-general/bill/bill.component';
import { ProviderComponent } from './pages/Provider-general/provider/provider.component';
import { OrderComponent } from './pages/Clients-general/order/order.component';
import { CustomerComponent } from './pages/Clients-general/customer/customer.component';
import { BillDetailsComponent } from './pages/Accounting-general/bill-details/bill-details.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionOrderComponent } from './pages/Product-general/production-order/production-order.component';
import { ProductionOrderListComponent } from './pages/Product-general/production-order-list/production-order-list.component';
import { LoadingComponentComponent } from './components/loading-component/loading-component.component';



const routes: Routes = [
  { path: 'home', component: InicioComponent },  //login
  { path: 'loading', component: LoadingComponentComponent },
  { path: '', component: HomeComponent},  //página inicial dashboard


  { path: 'customers', component: CustomerListComponent },  //clientes
  { path: 'customers/detail/:id', component: CustomerDetailsComponent },
  { path: 'customers/edit/:id', component: CustomerComponent, canActivate:[AuthUserGuard] },
  { path: 'customers/create', component: CustomerComponent, canActivate:[AuthUserGuard] },
  
  
  { path: 'company', component: CompanyListComponent},
  { path: 'company/edit/:id', component: CompanyComponent, canActivate:[AuthUserGuard]},
  { path: 'company/create', component: CompanyComponent, canActivate:[AuthUserGuard]},
  
  
  { path: 'orders', component: OrderListComponent}, //pedidos
  { path: 'orders/detail/:id', component: OrderDetailsComponent },
  { path: 'orders/edit/:id', component: OrderComponent, canActivate:[AuthUserGuard] },
  { path: 'orders/create', component: OrderComponent, canActivate:[AuthUserGuard] },
  
  { path: 'providers', component: ProviderListComponent },  //proveedores
  { path: 'providers/detail/:id', component: ProviderDetailComponent },
  { path: 'providers/edit/:id', component: ProviderComponent, canActivate:[AuthUserGuard] },
  { path: 'providers/create', component: ProviderComponent, canActivate:[AuthUserGuard] },
  
  { path: 'products', component: ProductListComponent }, //productos
  { path: 'products/detail/:id', component: ProductDetailsComponent },
  { path: 'products/edit/:id', component: ProductComponent, canActivate:[AuthUserGuard] },
  { path: 'products/create', component: ProductComponent, canActivate:[AuthUserGuard] },
  
  { path: 'components', component: ComponentListComponent }, //componentes
  { path: 'components/detail/:id', component: ComponentDetailsComponent },
  { path: 'components/edit/:id', component: ComponentComponent, canActivate:[AuthUserGuard] },
  { path: 'components/create', component: ComponentComponent, canActivate:[AuthUserGuard] },
  
  { path: 'bills', component: BillListComponent, canActivate:[AuthUserGuard] },//facturas
  { path: 'bills/detail/:id', component: BillDetailsComponent, canActivate:[AuthUserGuard] },  
  { path: 'bills/edit/:id', component: BillComponent, canActivate:[AuthUserGuard] }, 
  { path: 'bills/create', component: BillComponent, canActivate:[AuthUserGuard] }, 

  { path: 'provisioning', component: ProvisioningListComponent },//aprovisionamiento
  { path: 'provisioning/detail/:id', component: ProvisioningDetailsComponent }, 
  { path: 'provisioning/edit/:id', component: ProvisioningComponent, canActivate:[AuthUserGuard] },  
  { path: 'provisioning/create', component: ProvisioningComponent, canActivate:[AuthUserGuard] }, 
  
  { path: 'processes', component: ProcessListComponent },//facturas
  { path: 'processes/detail/:id', component: ProcessDetailsComponent },  
  { path: 'processes/edit/:id', component: ProcessComponent, canActivate:[AuthUserGuard] }, 
  { path: 'processes/create', component: ProcessComponent, canActivate:[AuthUserGuard] }, 
  
  
  { path: 'users', component: UserComponent, canActivate:[AuthUserGuard] },
  { path: 'users/login', component: UserComponent },
  { path: 'users/register', component: CreateUserComponent, canActivate:[AuthUserGuard] },
  { path: 'users/changePassword/:id', component: ChangePasswordComponent },
  { path: 'users/delete/:id', component: UserComponent, canActivate:[AuthUserGuard]},
  
  
  { path: 'deliveryNotes', component: DeliveryNoteListComponent, canActivate:[AuthUserGuard] },//albaranes
  { path: 'deliveryNotes/detail/:id', component: DeliveryNoteDetailsComponent, canActivate:[AuthUserGuard] },
  { path: 'deliveryNotes/edit/:id', component: DeliveryNoteComponent, canActivate:[AuthUserGuard] },
  { path: 'deliveryNotes/create', component: DeliveryNoteComponent, canActivate:[AuthUserGuard] },
  
  { path: 'stock', component: StockListComponent },//stok
  { path: 'stock/edit/:id', component: StockComponent },
  
  { path: 'productionOrder', component: ProductionOrderListComponent },//orden de producción
  { path: 'productionOrder/detail/:id', component: ProductionOrderDetailsComponent },
  { path: 'productionOrder/edit/:id', component: ProductionOrderComponent, canActivate:[AuthUserGuard] },
  { path: 'productionOrder/create', component: ProductionOrderComponent, canActivate:[AuthUserGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

