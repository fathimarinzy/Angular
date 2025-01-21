import { Component, OnInit } from '@angular/core';
import { MediatorService } from '../mediator.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent implements OnInit{
emp={"name":"","age":"","email":"","password":""}
  constructor(public m:MediatorService){}
  ngOnInit(): void {
    this.emp=this.m.obj
  }

}
