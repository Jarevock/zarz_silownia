import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SprzetDodajComponent} from "./sprzet-dodaj/sprzet-dodaj.component";
import {SprzetUsunComponent} from "./sprzet-usun/sprzet-usun.component";

const routes: Routes = [
  {path: 'sprzet-dodaj', component: SprzetDodajComponent},
  {path: 'sprzet-usun', component: SprzetUsunComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SprzetRoutingModule { }
