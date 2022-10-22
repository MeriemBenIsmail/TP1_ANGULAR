import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
})
export class FatherComponent implements OnInit {
  color = 'red';
  constructor() {}

  ngOnInit(): void {}
  reloadColor() {
    this.color = 'red';
  }
  processEvent(message: any) {
    this.color = message;
  }
}
