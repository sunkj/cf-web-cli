import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[${selector}]'
})

export class ${name}Directive {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    //TODO:
  }

  @HostListener('mouseleave') onMouseLeave() {
    //TODO:
  }

}
