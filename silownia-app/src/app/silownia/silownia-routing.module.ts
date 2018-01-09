import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SilowniaDodajComponent} from "./silownia-dodaj/silownia-dodaj.component";
import {SilowniaUsunComponent} from "./silownia-usun/silownia-usun.component";

const routes: Routes = [
  {path: 'silownia-dodaj', component: SilowniaDodajComponent},
  {path: 'silownia-usun', component: SilowniaUsunComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SilowniaRoutingModule { }
