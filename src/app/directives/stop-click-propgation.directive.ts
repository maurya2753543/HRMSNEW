import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[stopClickPropgation]'
})
export class StopClickPropgationDirective {

  constructor() { }

  @HostListener("click", ["$event"]) public onClick(event:any): void {
    event.stopPropagation();
  }

}
