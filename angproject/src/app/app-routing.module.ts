import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { Eg1Component } from './eg1/eg1.component';
import { Eg2Component } from './eg2/eg2.component';
import { Eg3Component } from './eg3/eg3.component';
import { SenderComponent } from './sender/sender.component';
import { RecieverComponent } from './reciever/reciever.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AngdesignComponent } from './angdesign/angdesign.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TranslatorComponent } from './translator/translator.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {path:"first",component:ExampleComponent},
  {path:"second",component:Eg1Component},
  {path:"third",component:Eg2Component},
  {path:"four",component:Eg3Component},
  {path:"sender",component:SenderComponent},
  {path:"receiver",component:RecieverComponent},
  {path:"calculator",component:CalculatorComponent},
  {path:"angdesign",component:AngdesignComponent},
  {path: "reactive",component:ReactiveformsComponent},
  {path: "translator",component:TranslatorComponent},
  {path: "Parent",component:ParentComponent},
  {path: "child",component:ChildComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
