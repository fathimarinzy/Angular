import { Component,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() messagetochild : string="";



  @Output () dataEmitter=new EventEmitter<string>();
  toparent(value:string){
    this.dataEmitter.emit(value)
 


  }

}
