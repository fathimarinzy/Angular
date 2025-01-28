import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {
  constructor(public f:FormBuilder){}
  regform=this.f.group({
    name:[],
    age:["",[Validators.min(18)]],
    email:[]
  })

  save(){
    console.log(this.regform.value)
  }
}
