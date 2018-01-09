import { Component, OnInit } from '@angular/core';
import {SprzetService} from "../sprzet.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Sprzet} from "../sprzet";

@Component({
  selector: 'app-sprzet-usun',
  templateUrl: './sprzet-usun.component.html',
  styleUrls: ['./sprzet-usun.component.css'],
  providers: [SprzetService]
})
export class SprzetUsunComponent implements OnInit {

  sprzetForm: FormGroup;
  sprzets: Sprzet[];

  constructor(private sprzetService: SprzetService,
              private router: Router) { }

  ngOnInit() {
    this.getAllSprzet();
  }

  getAllSprzet() {
    this.sprzetService.pobierzSprzet().subscribe(
      r => {
        this.sprzets = r;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteSprzet(id: number){
    this.sprzetService.deleteSprzet(id).subscribe();
    location.reload();
  }

}
