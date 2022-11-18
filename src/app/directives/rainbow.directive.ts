import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  couleurs = [
    'blue',
    'lightblue',
    'coral',
    'purple',
    'pink',
    'green',
    'lightyellow',
    'lightgreen',
    'gold',
    'gray',
    'lightgray',
  ];
  @HostBinding('style.borderColor') bc: any;
  @HostBinding('style.color') color: any;

  constructor() {}
  @HostListener('keypress') changeColor() {
    const index = Math.floor(Math.random() * (this.couleurs.length - 1));
    this.bc = this.couleurs[index];
    this.color = this.couleurs[index];
  }
}
