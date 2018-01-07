import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KlientRoutingModule } from './klient-routing.module';
import { KlientDodajComponent } from './klient-dodaj/klient-dodaj.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    KlientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [KlientDodajComponent]
})
export class KlientModule { }
