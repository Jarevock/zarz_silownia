import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Silownia} from "../silownia";
import {Router} from "@angular/router";
import {SilowniaService} from "../silownia.service";

@Component({
  selector: 'app-silownia-usun',
  templateUrl: './silownia-usun.component.html',
  styleUrls: ['./silownia-usun.component.css'],
  providers: [SilowniaService]
})
export class SilowniaUsunComponent implements OnInit {

  silowniaForm: FormGroup;
  silownie: Silownia[];

  constructor(private silowniaService: SilowniaService,
              private router: Router) { }

  ngOnInit() {
    this.getAllSilownia();
  }

  getAllSilownia() {
    this.silowniaService.pobierzSilownie().subscribe(
      r => {
        this.silownie = r;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteSilownia(id: number){
    this.silowniaService.deleteSilownia(id).subscribe();
    location.reload();
  }
}
