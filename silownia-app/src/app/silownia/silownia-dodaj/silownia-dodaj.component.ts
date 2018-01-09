import { Component, OnInit } from '@angular/core';
import {SilowniaService} from "../silownia.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Silownia} from "../silownia";
import {Router} from "@angular/router";

@Component({
  selector: 'app-silownia-dodaj',
  templateUrl: './silownia-dodaj.component.html',
  styleUrls: ['./silownia-dodaj.component.css'],
  providers: [SilowniaService]
})
export class SilowniaDodajComponent implements OnInit {

  silowniaForm: FormGroup;
  silownie: Silownia[];

  constructor(private silowniaService: SilowniaService,
              private router: Router) {
  }

  ngOnInit() {
    this.silowniaForm = new FormGroup({
      lokalizacja: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.silowniaForm.valid) {
      let silownia:  Silownia = new Silownia(
        null,
        this.silowniaForm.controls['lokalizacja'].value,
      );
      this.silowniaService.dodajSilownia(silownia).subscribe();
      this.silowniaForm.reset();
      this.router.navigate(['/']);
    }
  }
}
