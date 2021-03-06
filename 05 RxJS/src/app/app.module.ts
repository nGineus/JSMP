import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './Components/input/input.component';
import { ButtonComponent } from './Components/button/button.component';
import { PresenterComponent } from './Components/presenter/presenter.component';
import { ApiService } from "./Services/api.service";
import { ObservableService } from "./Services/observable.service";
import { HttpClientModule } from '@angular/common/http';
import { ModeHumanizerPipe } from './Pipes/mode-humanizer.pipe';
import { StoreService } from './Services/store.service';
import { MatTestComponent } from './Components/mat-test/mat-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from "@angular/material";

@NgModule( {
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    PresenterComponent,
    ModeHumanizerPipe,
    MatTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [ ApiService, ObservableService, StoreService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule {
}
