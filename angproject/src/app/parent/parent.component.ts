import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  messagetochild:string=""
  tochild(value:string){
    this.messagetochild=value
  }
  dataEmitter:string=""
  receive(data:string){
    this.dataEmitter=data;
  }

}
