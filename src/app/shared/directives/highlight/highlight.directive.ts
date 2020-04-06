import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( element: ElementRef) {
   element.nativeElement.style.backgroundColor = '#F4F6F6';
   element.nativeElement.style.padding = '10px';
  }

}
