import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KlientDodajComponent} from "./klient-dodaj/klient-dodaj.component";

const routes: Routes = [
  {path: 'klient-dodaj', component: KlientDodajComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KlientRoutingModule { }
