import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appElementRenderer]'
})
export class ElementRendererDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
