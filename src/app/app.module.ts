import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AtmComponent } from './atm/atm.component';
import { CustomerListComponent } from './atm/customer-list/customer-list.component';
import { NewCustomerComponent } from './atm/new-customer/new-customer.component';
import { EditCustomerComponent } from './atm/edit-customer/edit-customer.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    CustomerListComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
