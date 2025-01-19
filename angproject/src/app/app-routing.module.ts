import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { Eg1Component } from './eg1/eg1.component';
import { Eg2Component } from './eg2/eg2.component';
import { Eg3Component } from './eg3/eg3.component';
import { SenderComponent } from './sender/sender.component';
import { RecieverComponent } from './reciever/reciever.component';

const routes: Routes = [
  {path:"first",component:ExampleComponent},
  {path:"second",component:Eg1Component},
  {path:"third",component:Eg2Component},
  {path:"four",component:Eg3Component},
  {path:"sender",component:SenderComponent},
  {path:"receiver",component:RecieverComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
