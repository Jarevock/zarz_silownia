import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SprzetRoutingModule } from './sprzet-routing.module';
import { SprzetDodajComponent } from './sprzet-dodaj/sprzet-dodaj.component';
import { SprzetUsunComponent } from './sprzet-usun/sprzet-usun.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SprzetRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SprzetDodajComponent, SprzetUsunComponent]
})
export class SprzetModule { }
