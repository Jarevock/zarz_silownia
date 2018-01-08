import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KlientDodajComponent} from "./klient-dodaj/klient-dodaj.component";
import {KlientUsunComponent} from "./klient-usun/klient-usun.component";

const routes: Routes = [
  {path: 'klient-dodaj', component: KlientDodajComponent},
  {path: 'klient-usun', component: KlientUsunComponent},
  {path: 'sprzet-dodaj', component: KlientDodajComponent},
  {path: 'sprzet-dodaj', component: KlientDodajComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KlientRoutingModule { }
