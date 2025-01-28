import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { Eg1Component } from './eg1/eg1.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Eg2Component } from './eg2/eg2.component';
import { Pipe1Pipe } from './pipe1.pipe';
import { Eg3Component } from './eg3/eg3.component';
import { SenderComponent } from './sender/sender.component';
import { RecieverComponent } from './reciever/reciever.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AngdesignComponent } from './angdesign/angdesign.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TranslatorComponent } from './translator/translator.component';


// import translator
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TemplatedrivenformsComponent } from './templatedrivenforms/templatedrivenforms.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    Eg1Component,
    Eg2Component,
    Pipe1Pipe,
    Eg3Component,
    SenderComponent,
    RecieverComponent,
    CalculatorComponent,
    AngdesignComponent,
    ReactiveformsComponent,
    TranslatorComponent,
    TemplatedrivenformsComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,

    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide:TranslateLoader,
        useFactory:(http:HttpClient) =>{
          return new TranslateHttpLoader(http,'./assets/i18n/','.json')
        },
        deps:[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
