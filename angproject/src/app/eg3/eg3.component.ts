import { Component } from '@angular/core';

@Component({
  selector: 'app-eg3',
  templateUrl: './eg3.component.html',
  styleUrls: ['./eg3.component.css']
})
export class Eg3Component {
  show(data:any){
    console.log(data)
    document.write(JSON.stringify(data))

  }


}
