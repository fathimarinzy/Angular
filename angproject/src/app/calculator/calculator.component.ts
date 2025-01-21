import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  re:number=0
  first:number=0
  second:number=0
  add(){
    this.re=this.first+this.second
  }

  sub(){
    this.re=this.first-this.second
  }

  mul(){
    this.re=this.first*this.second
  }

  div(){
    this.re=this.first/this.second
  }

}
