import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Klient} from "./klient";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import {Silownia} from "./silownia";

@Injectable()
export class KlientService {

  private apiUrl = "http://localhost:8080/dodajKlienta"
  private apiUrlSilownia = "http://localhost:8080/znajdzSilownie"
  private apiUrlKlient = "http://localhost:8080/znajdzKlientow"
  private apiUrlKlientUsun = "http://localhost:8080/usunKlienta"

  constructor(private http: Http) { }

  dodajKlient(klient: Klient): Observable<Klient>{
    return this.http.post(this.apiUrl, klient)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteKlient(id: number): Observable<boolean>{
    return this.http.delete(this.apiUrlKlientUsun + '/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  pobierzSilownie(): Observable<Silownia[]> {
  return this.http.get(this.apiUrlSilownia)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  pobierzKlientow(): Observable<Klient[]>{
    return this.http.get(this.apiUrlKlient)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));


  }

}
