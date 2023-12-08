import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { FilterPipe } from 'src/app/filter.pipe';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit,AfterViewInit {
  customerData: any;
  filterData: any = null;
  check:boolean=true
  constructor(private service: ServiceService,) {

  }
  ngOnInit() {
    this. getData()
  }
  getData(){
    this.service.getAllData().subscribe((data) => {
      this.customerData = data
    })
  }
  ngAfterViewInit(){
    this. getData()
  }
 

  deleteAccount(id: any) {
    this.service.delete(id).subscribe((data) => {
      this. getData()
    })
  }
}
