import { ChartsComponent } from './components/charts/charts.component';
import { ProviderDetailComponent } from './pages/Provider-general/provider-detail/provider-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrderComponent } from './pages/Clients-general/order/order.component';
import { CustomerComponent } from './pages/Clients-general/customer/customer.component';
import { CustomerDetailsComponent } from './pages/Clients-general/customer-details/customer-details.component';
import { OrderDetailsComponent } from './pages/Clients-general/order-details/order-details.component';
import { CustomerListComponent } from './pages/Clients-general/customer-list/customer-list.component';
import { ProviderComponent } from './pages/Provider-general/provider/provider.component';
import { ProvisioningComponent } from './pages/Provider-general/provisioning/provisioning.component';
import { ProviderListComponent } from './pages/Provider-general/provider-list/provider-list.component';
import { ProductComponent } from './pages/Product-general/product/product.component';
import { ComponentComponent } from './pages/Product-general/component/component.component';
import { ComponentDetailsComponent } from './pages/Product-general/component-details/component-details.component';
import { ProductionOrderComponent } from './pages/Product-general/production-order/production-order.component';
import { ProductionOrderDetailsComponent } from './pages/Product-general/production-order-details/production-order-details.component';
import { ProcessComponent } from './pages/Product-general/process/process.component';
import { ProcessDetailsComponent } from './pages/Product-general/process-details/process-details.component';
import { BillComponent } from './pages/Accounting-general/bill/bill.component';
import { BillDetailsComponent } from './pages/Accounting-general/bill-details/bill-details.component';
import { BudgetComponent } from './pages/Accounting-general/budget/budget.component';
import { BudgetDetailsComponent } from './pages/Accounting-general/budget-details/budget-details.component';
import { DeliveryNoteComponent } from './pages/Accounting-general/delivery-note/delivery-note.component';
import { DeliveryNoteDetailsComponent } from './pages/Accounting-general/delivery-note-details/delivery-note-details.component';
import { CompanyComponent } from './pages/Company-general/company/company.component';
import { UserComponent } from './pages/Company-general/user/user.component';
import { ButtonPdfGeneratorComponent } from './components/button-pdf-generator/button-pdf-generator.component';
import { ButtonFilterDateComponent } from './components/button-filter-date/button-filter-date.component';
import { ButtonNextComponent } from './components/button-next/button-next.component';
import { BudgetListComponent } from './pages/Accounting-general/budget-list/budget-list.component';
import { BillListComponent } from './pages/Accounting-general/bill-list/bill-list.component';
import { DeliveryNoteListComponent } from './pages/Accounting-general/delivery-note-list/delivery-note-list.component';
import { OrderListComponent } from './pages/Clients-general/order-list/order-list.component';
import { ComponentListComponent } from './pages/Product-general/component-list/component-list.component';
import { ProductionOrderListComponent } from './pages/Product-general/production-order-list/production-order-list.component';
import { ProcessListComponent } from './pages/Product-general/process-list/process-list.component';
import { ProductListComponent } from './pages/Product-general/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/Product-general/product-details/product-details.component';
import { StockComponent } from './pages/Product-general/stock/stock.component';
import { StockListComponent } from './pages/Product-general/stock-list/stock-list.component';
import { ProvisioningListComponent } from './pages/Provider-general/provisioning-list/provisioning-list.component';
import { CompanyListComponent } from './pages/Company-general/company-list/company-list.component';
import { ChangePasswordComponent } from './pages/Company-general/change-password/change-password.component';
import { CreateUserComponent } from './pages/Company-general/create-user/create-user.component';
import { FooterComponent } from './components/footer/footer.component';

import { ProvisioningDetailsComponent } from './pages/Provider-general/provisioning-details/provisioning-details.component';

import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';

import { LoadingComponentComponent } from './components/loading-component/loading-component.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { AuthInterceptor } from '../../Interceptor'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    OrderComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    OrderDetailsComponent,
    CustomerListComponent,
    ProviderComponent,
    ProvisioningComponent,
    ProviderListComponent,
    ProductComponent,
    ComponentComponent,
    ComponentDetailsComponent,
    ProductionOrderComponent,
    ProductionOrderDetailsComponent,
    ProcessComponent,
    ProcessDetailsComponent,
    BillComponent,
    BillDetailsComponent,
    BudgetComponent,
    BudgetDetailsComponent,
    DeliveryNoteComponent,
    DeliveryNoteDetailsComponent,
    CompanyComponent,
    UserComponent,
    ButtonPdfGeneratorComponent,
    ButtonFilterDateComponent,
    ButtonNextComponent,
    BudgetListComponent,
    BillListComponent,
    DeliveryNoteListComponent,
    OrderListComponent,
    ComponentListComponent,
    ProductionOrderListComponent,
    ProcessListComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProvisioningListComponent,
    StockComponent,
    StockListComponent,
    CompanyListComponent,
    ChangePasswordComponent,
    CreateUserComponent,
    FooterComponent,
    ChartsComponent,
    ProvisioningDetailsComponent,

    ProviderDetailComponent,
    CarouselComponent,

    LoadingComponentComponent,
    InicioComponent,



    
   
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],

})
export class AppModule { }
