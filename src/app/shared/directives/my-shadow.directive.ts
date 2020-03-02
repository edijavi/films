import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMyShadow]'
})
export class MyShadowDirective {
  @Input() color: string;
  @Input() fgShadow: string;
  @Input() bgShadow: string;


  constructor(private el: ElementRef) {
    this.color = this.color || '#ccc';
    this.fgShadow = this.fgShadow || 'green';
    this.bgShadow = this.bgShadow || 'red';
    this.setShadow(this.color);

  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.setShadow('#f00');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setShadow('#ccc');     }

  setShadow(color) {
    this.el.nativeElement.style.boxShadow = '12px 12px 10px' + color;
  }

}
