import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../service/customer.service';

@Component({
  selector: 'app-add-new-contract',
  templateUrl: './add-new-contract.component.html',
  styleUrls: ['./add-new-contract.component.css']
})
export class AddNewContractComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
