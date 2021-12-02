import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  title = 'zeRo Converter';
  fcfa = new Devise('FCFA', 'XAF');
  euro = new Devise('Euro', 'EUR');
  dollar = new Devise('Dollar us', 'USD');
  livreSterling = new Devise('Livre UK', 'GBP');
  franc = new Devise('Franc Suisse', 'CHF');
  yuan = new Devise('Yuan chinois', 'CHY');
  dollarCanadien = new Devise('Dollar canadien', 'CAD');
  dirhamUAE = new Devise('Dirham UAE', 'MAD');

  listeDevise = [
    this.dollar,
    this.fcfa,
    this.euro,
    this.livreSterling,
    this.franc,
    this.yuan,
    this.dollarCanadien,
    this.dirhamUAE,
   
  ];
  depart = this.dollar;
  arrivee = this.euro;
  public value=0;
  public value2=0;

}

class Devise {
  name:String = '';
  code:String = '';
  constructor(name: string, code: string){
      this.name = name;
      this.code = code;
  }
}
