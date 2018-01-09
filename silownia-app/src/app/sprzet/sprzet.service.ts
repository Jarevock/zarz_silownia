import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Sprzet} from "./sprzet";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {Silownia} from "./silownia";

@Injectable()
export class SprzetService {

  private apiUrl = "http://localhost:8080/dodajSprzet"
  private apiUrlSilownia = "http://localhost:8080/znajdzSilownie"
  private apiUrlSprzet = "http://localhost:8080/znajdzSprzet"
  private apiUrlSprzetUsun = "http://localhost:8080/usunSprzet"

    constructor(private http: Http) { }

    dodajSprzet(sprzet: Sprzet): Observable<Sprzet>{
      return this.http.post(this.apiUrl, sprzet)
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

    deleteSprzet(id: number): Observable<boolean>{
      return this.http.delete(this.apiUrlSprzetUsun + '/' + id)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

    pobierzSilownie(): Observable<Silownia[]> {
      return this.http.get(this.apiUrlSilownia)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
    pobierzSprzet(): Observable<Sprzet[]>{
      return this.http.get(this.apiUrlSprzet)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


  }


}
