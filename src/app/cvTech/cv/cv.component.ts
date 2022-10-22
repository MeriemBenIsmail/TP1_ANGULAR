import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  personnes: Personne[] = [];
  selectedPersonne!: Personne;
  constructor() {}

  ngOnInit(): void {
    this.personnes = [
      new Personne(
        1,
        'Ben Ismail',
        'Meriem',
        21,
        'rotating_card_profile.png',
        15236985,
        'Student',
        "Tant qu'il y a de la vie , il y a de l'espoir",
        'Software engineering student at INSAT',
        'HTML CSS JS PHP'
      ),
      new Personne(
        1,
        'Bousrih',
        'Nour',
        22,
        'rotating_card_profile2.png',
        18566985,
        'Student',
        "Tant qu'il y a de la vie , il y a de l'espoir",
        'Network & Telecommunication engineering student at ENIT',
        'HTML CSS JS PHP'
      ),
    ];
  }
  selectPersonne(personne: any) {
    this.selectedPersonne = personne;
  }
}
