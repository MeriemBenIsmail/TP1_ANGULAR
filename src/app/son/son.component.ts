import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css'],
})
export class SonComponent implements OnInit {
  @Input() sonProperty: any;
  @Output() sendRequestToDad = new EventEmitter();
  favouriteColor = 'purple';
  constructor() {}

  ngOnInit(): void {}
  sendFavouriteColor() {
    this.sendRequestToDad.emit(this.favouriteColor);
  }
}
