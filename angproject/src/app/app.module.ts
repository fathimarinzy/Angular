import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { Eg1Component } from './eg1/eg1.component';
import { FormsModule } from '@angular/forms';
import { Eg2Component } from './eg2/eg2.component';
import { Pipe1Pipe } from './pipe1.pipe';
import { Eg3Component } from './eg3/eg3.component';
import { SenderComponent } from './sender/sender.component';
import { RecieverComponent } from './reciever/reciever.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    Eg1Component,
    Eg2Component,
    Pipe1Pipe,
    Eg3Component,
    SenderComponent,
    RecieverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
