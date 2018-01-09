import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SilowniaRoutingModule } from './silownia-routing.module';
import { SilowniaDodajComponent } from './silownia-dodaj/silownia-dodaj.component';
import { SilowniaUsunComponent } from './silownia-usun/silownia-usun.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SilowniaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SilowniaDodajComponent, SilowniaUsunComponent]
})
export class SilowniaModule { }
