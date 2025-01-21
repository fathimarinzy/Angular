import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {
obj={"name":"","age":"","email":"","password":""}

  constructor() { }
  senddata(data:any){
    console.log(data)
    this.obj=data;
    console.log(this.obj)
  }
}
