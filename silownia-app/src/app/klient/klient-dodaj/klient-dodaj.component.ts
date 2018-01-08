import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {KlientService} from "../klient.service";
import {Klient} from "../klient";
import {Router} from "@angular/router";
import {Silownia} from "../silownia";

@Component({
  selector: 'app-klient-dodaj',
  templateUrl: './klient-dodaj.component.html',
  styleUrls: ['./klient-dodaj.component.css'],
  providers: [KlientService]
})
export class KlientDodajComponent implements OnInit {

  klientForm: FormGroup;
  silownie: Silownia[];

  constructor(private klientService: KlientService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllSilownie();
    this.klientForm = new FormGroup({
      imie: new FormControl('', Validators.required),
      nazwisko: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      joinDate: new FormControl('', Validators.required),
      czlonkostwo: new FormControl('', Validators.required),
      pakiet: new FormControl('', Validators.required),
      silownia: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.klientForm.valid) {
      let klient: Klient = new Klient(
        null,
        this.klientForm.controls['imie'].value,
        this.klientForm.controls['nazwisko'].value,
        this.klientForm.controls['email'].value,
        this.klientForm.controls['joinDate'].value,
        this.klientForm.controls['czlonkostwo'].value,
        this.klientForm.controls['pakiet'].value,
        this.klientForm.controls['silownia'].value
      );
      this.klientService.dodajKlient(klient).subscribe();
      this.klientForm.reset();
      this.router.navigate(['/']);
    }
  }

  getAllSilownie() {
    this.klientService.pobierzSilownie().subscribe(
      r => {
        this.silownie = r;
      },
      err => {
        console.log(err);
      }
    );
  }
}

