import { Injectable } from '@angular/core';
import { Personne } from '../model/Personne';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private personnes: Personne[];
  constructor() {
    this.personnes = [];
  }
  getEmbauchees(): Personne[] {
    return this.personnes;
  }
  embaucher(personne: Personne): void {
    const index = this.personnes.indexOf(personne);
    if (index < 0) this.personnes.push(personne);
    else alert(`${personne.name + personne.firstname} est déjà selectionnée`);
  }
  debaucher(personne: Personne): void {
    const index = this.personnes.indexOf(personne);
    if (index >= 0) this.personnes.splice(index, 1);
    else alert(`${personne.name + personne.firstname} n'est pas embauchée`);
  }
}
