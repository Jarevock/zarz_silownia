import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KlientDodajComponent} from "./klient-dodaj/klient-dodaj.component";
import {KlientUsunComponent} from "./klient-usun/klient-usun.component";
import {SprzetDodajComponent} from "../sprzet/sprzet-dodaj/sprzet-dodaj.component";
import {SprzetUsunComponent} from "../sprzet/sprzet-usun/sprzet-usun.component";

const routes: Routes = [
  {path: 'klient-dodaj', component: KlientDodajComponent},
  {path: 'klient-usun', component: KlientUsunComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KlientRoutingModule { }
