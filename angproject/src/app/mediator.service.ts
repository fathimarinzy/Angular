import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {

  constructor() { }
  senddata(data:any){
    console.log(data)
  }
}
