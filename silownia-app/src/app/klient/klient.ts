import {Silownia} from "./silownia";

export class Klient {
  klientId: number;
  klientImie: string;
  klientNazwisko: string;
  klientEmail: string;
  klientData: Date;
  klientCzlonkostwo: boolean;
  klientPakiet: number;
  silownia: Silownia;

  constructor(klientId: number, klientImie: string, klientNazwisko: string, klientEmail: string, klientData: Date, klientCzlonkostwo: boolean, klientPakiet: number, silownia: Silownia,){
    this.klientId = klientId;
    this.klientImie= klientImie;
    this.klientNazwisko= klientNazwisko;
    this.klientEmail= klientEmail;
    this.klientData= klientData;
    this.klientCzlonkostwo= klientCzlonkostwo;
    this.klientPakiet= klientPakiet;
    this.silownia= silownia;
  }
}
