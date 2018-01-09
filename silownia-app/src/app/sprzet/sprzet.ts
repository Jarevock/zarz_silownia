import {Silownia} from "./silownia";

export class Sprzet {
  sprzetId: number;
  sprzetNazwa: string;
  sprzetKategoria: number;
  sprzetStatus: number;
  silownia: Silownia;

  constructor(sprzetId: number, sprzetNazwa: string, sprzetKategoria: number, sprzetStatus: number, silownia: Silownia){
    this.sprzetId = sprzetId;
    this.sprzetNazwa = sprzetNazwa;
    this.sprzetKategoria = sprzetKategoria;
    this.sprzetStatus = sprzetStatus;
    this.silownia= silownia;
  }
}

