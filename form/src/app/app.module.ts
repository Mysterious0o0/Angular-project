import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveRegistComponent } from './reactive-regist/reactive-regist.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    ReactiveFormComponent,
    ReactiveRegistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
