import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltar]'
})
export class ResaltarDirective {

  constructor(obj : ElementRef) { 
    obj.nativeElement.style.backgroundColor = 'red';
  }

}
