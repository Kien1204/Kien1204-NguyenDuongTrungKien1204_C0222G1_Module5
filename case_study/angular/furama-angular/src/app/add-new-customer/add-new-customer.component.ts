import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css']
})
export class AddNewCustomerComponent implements OnInit {
  addNewCustomer: FormGroup;
  private allCustomer: Object;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.addNewCustomer = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^KH-[0-9]{4}$')]),
      name: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      idCard: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9}|[0-9]{12}$')]),
      phone: new FormControl('', [Validators.required,
        Validators.pattern('^090[0-9]{7}|091[0-9]{7}|\\(84\\)\\+90[0-9]{7}|\\(84\\)\\+91[0-9]{7}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      typeCustomer: new FormControl('', Validators.required),
    });
  }
  addCustomer(customers) {
    console.log(customers);
    this.customerService.createCustomer(customers).subscribe((response) => {
      this.getLatestCustomer();
    });
  }
  getLatestCustomer() {
    this.customerService.getAll().subscribe((response) => {
      this.allCustomer = response;
    });
  }
  onSubmit() {
    console.log(this.addNewCustomer.value);
  }
}
