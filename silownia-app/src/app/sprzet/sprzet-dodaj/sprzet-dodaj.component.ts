import { Component, OnInit } from '@angular/core';
import {SprzetService} from "../sprzet.service";
import {Router} from "@angular/router";
import {Silownia} from "../../klient/silownia";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Sprzet} from "../sprzet";

@Component({
  selector: 'app-sprzet-dodaj',
  templateUrl: './sprzet-dodaj.component.html',
  styleUrls: ['./sprzet-dodaj.component.css'],
  providers: [SprzetService]
})
export class SprzetDodajComponent implements OnInit {

  sprzetForm: FormGroup;
  silownie: Silownia[];

  constructor(private sprzetService: SprzetService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllSilownie();
    this.sprzetForm = new FormGroup({
      nazwa: new FormControl('', Validators.required),
      kategoria: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      silownia: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.sprzetForm.valid) {
      let sprzet:  Sprzet = new Sprzet(
        null,
        this.sprzetForm.controls['nazwa'].value,
        this.sprzetForm.controls['kategoria'].value,
        this.sprzetForm.controls['status'].value,
        this.sprzetForm.controls['silownia'].value
      );
      this.sprzetService.dodajSprzet(sprzet).subscribe();
      this.sprzetForm.reset();
      this.router.navigate(['/']);
    }
  }

  getAllSilownie() {
    this.sprzetService.pobierzSilownie().subscribe(
      r => {
        this.silownie = r;
      },
      err => {
        console.log(err);
      }
    );
  }

}
