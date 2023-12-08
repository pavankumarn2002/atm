import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  id: any;
  customerData: any
  signUpForm!: FormGroup;
  d = new Date()
  normalDate = this.d.getDate() + '/' + this.d.getMonth() + '/' + this.d.getFullYear();
  disDeposit: boolean = true;
  disWithdraw: boolean = true;
  constructor(private act: ActivatedRoute, private service: ServiceService, private rout: Router) {

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
    this.id = +this.act.snapshot.params['id']
    this.service.getElement(this.id).subscribe((data) => {
      this.customerData = data
      this.signUpForm.patchValue({
        name: this.customerData.name,
        userId: this.customerData.userId,
        accountNo: this.customerData.accountNo,
        date: this.normalDate,
        withdraw: 0,
        deposit: 0,
        balance: this.customerData.balance,
        location: this.customerData.location,
      });
    })


    if (this.signUpForm.value.withdraw > 0) {
      this.signUpForm.patchValue({
        balance: this.signUpForm.value.balance + this.signUpForm.value.withdraw,
      });
    }


  }
  keyupDeposit(value: any) {
    if (value > 0) {
      this.signUpForm.controls['withdraw'].disable();
    } else {
      this.signUpForm.controls['withdraw'].enable();
    }
    if (value >= 0) {
      this.signUpForm.patchValue({
        balance: Number(this.customerData.balance) + Number(value)
      });
      this.disDeposit = true
    } else {

    }
  }
  isDepDisabled: boolean = false
  isWithDisabled: boolean = false
  keyupWithdraw(value: any) {
    if (value > 0) {
      this.signUpForm.controls['deposit'].disable();
    } else {
      this.signUpForm.controls['deposit'].enable();
    }
    if (value <= this.customerData.balance) {
      this.signUpForm.patchValue({
        balance: Number(this.customerData.balance) - Number(value)
      });
      this.disWithdraw = true
    } else {
      this.disWithdraw = false
    }
  }
  onSubmit() {
    this.service.update(this.id, this.signUpForm.value).subscribe((data) => {

    })
    this.rout.navigate(['/atm/list'])

  }
}
