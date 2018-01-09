import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {KlientModule} from "./klient/klient.module";
import {HttpModule} from "@angular/http";
import {SprzetModule} from "./sprzet/sprzet.module";
import {SilowniaModule} from "./silownia/silownia.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KlientModule,
    SprzetModule,
    SilowniaModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
