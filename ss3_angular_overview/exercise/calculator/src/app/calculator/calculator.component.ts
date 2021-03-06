import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number = 0;
  number2: number = 0;
  operator = '+';
  result: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate() {
    // tslint:disable-next-line:no-eval
    this.result = eval(this.number1 + this.operator + this.number2);
  }
}
