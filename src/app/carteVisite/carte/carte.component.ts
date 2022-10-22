import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/model/Personne';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
})
export class CarteComponent implements OnInit {
  personne = new Personne();
  constructor() {}

  ngOnInit(): void {}
  processEvent(formData: any) {
    this.personne = formData;
  }
}
