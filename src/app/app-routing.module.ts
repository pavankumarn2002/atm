import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtmComponent } from './atm/atm.component';
import { NewCustomerComponent } from './atm/new-customer/new-customer.component';
import { CustomerListComponent } from './atm/customer-list/customer-list.component';
import { EditCustomerComponent } from './atm/edit-customer/edit-customer.component';

const routes: Routes = [
  {path:'atm',component:AtmComponent,children:[
    {path:'new',component:NewCustomerComponent},
    {path:'list',component:CustomerListComponent},
    {path:':id',component:EditCustomerComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
