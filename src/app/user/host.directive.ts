import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {
  column: any;
  element: any;
  @Input('appHost') set render(value: [column: any, element: any]) {
    this.column = value[0];
    this.element = value[1];
  }

  constructor(public viewContainerRef: ViewContainerRef) {}
}
