import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css'],
})
export class WordComponent implements OnInit {
  color = 'white';
  bgColor = 'lightblue';
  fontFamily = 'sans-serif';
  size = '25px';
  constructor() {}

  ngOnInit(): void {console.log(this.fontFamily)}
  changeSize(size: any) {
    this.size = size + 'px';
  }
}
