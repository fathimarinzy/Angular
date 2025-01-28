import { Component } from '@angular/core';

@Component({
  selector: 'app-templatedrivenforms',
  templateUrl: './templatedrivenforms.component.html',
  styleUrls: ['./templatedrivenforms.component.css']
})
export class TemplatedrivenformsComponent {
  show(data:any){
    // console.log(data)
    document.write(JSON.stringify(data))
  }

}
