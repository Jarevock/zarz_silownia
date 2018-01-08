import { Component, OnInit } from '@angular/core';
import {KlientService} from "../klient.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Klient} from "../klient";

@Component({
  selector: 'app-klient-usun',
  templateUrl: './klient-usun.component.html',
  styleUrls: ['./klient-usun.component.css'],
  providers: [KlientService]
})
export class KlientUsunComponent implements OnInit {

  klientForm: FormGroup;
  klienci: Klient[];

  constructor(private klientService: KlientService,
              private router: Router) { }

  ngOnInit() {
    this.getAllKlienci();
  }

  getAllKlienci() {
    this.klientService.pobierzKlientow().subscribe(
      r => {
        this.klienci = r;
      },
      err => {
        console.log(err);
      }
    );
  }

    deleteKlient(id: number){
      this.klientService.deleteKlient(id).subscribe();
      location.reload();
    }
}
