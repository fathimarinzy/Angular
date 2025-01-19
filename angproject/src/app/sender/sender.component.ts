import { Component } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {
  show(data:any){
    console.log(data)
    document.write(JSON.stringify(data))
    this.m.senddata(data)
  }
  constructor(public m:MediatorService){}
}
