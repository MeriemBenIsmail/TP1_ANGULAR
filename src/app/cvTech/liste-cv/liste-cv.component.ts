import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/model/Personne';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css'],
})
export class ListeCvComponent implements OnInit {
  @Input()
  personnes: Personne[] = [];
  @Output() selectedPersonne = new EventEmitter<Personne>();
  constructor() {}

  ngOnInit(): void {}
  selectPersonne(selectedPersonne: Personne) {
    this.selectedPersonne.emit(selectedPersonne);
  }
}
