import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './Components/input/input.component';
import { ButtonComponent } from './Components/button/button.component';
import { PresenterComponent } from './Components/presenter/presenter.component';
import {ApiService} from "./Services/api.service";
import {StoreService} from "./Services/store.service";

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    PresenterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ApiService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
