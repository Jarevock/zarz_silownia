import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Silownia} from "./silownia";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class SilowniaService {

  private apiUrl = "http://localhost:8080/dodajSilownie"
  private apiUrlSilownia = "http://localhost:8080/znajdzSilownie"
  private apiUrlSilowniaUsun = "http://localhost:8080/usunSilownia"

  constructor(private http: Http) { }

  dodajSilownia(silownia: Silownia): Observable<Silownia>{
    return this.http.post(this.apiUrl, silownia)
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteSilownia(id: number): Observable<boolean>{
    return this.http.delete(this.apiUrlSilowniaUsun + '/' + id)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  pobierzSilownie(): Observable<Silownia[]> {
    return this.http.get(this.apiUrlSilownia)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
