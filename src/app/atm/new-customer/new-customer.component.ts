import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  signUpForm!: FormGroup
  constructor(private service:ServiceService,private rout:Router){

  }
  ngOnInit() {
    this.signUpForm = new FormGroup({
      name: new FormControl(""),
      userId: new FormControl(""),
      accountNo: new FormControl(""),
      date: new FormControl(""),
      deposit: new FormControl(""),
      withdraw: new FormControl(""),
      balance: new FormControl(""),
      location: new FormControl(""),
    });
  }
  onSubmit() {
         this.service.create(this.signUpForm.value).subscribe((data)=>{

         })
         this.rout.navigate(['/atm/list'])
  }
}
