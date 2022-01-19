import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input('appHighLight') appHighlight ='blue';

  constructor(private el: ElementRef) { 
  }
  ngOnInit():void{
    console.log('ngOnint HighLightDirective', this.appHighlight );
    this.el.nativeElement.style.color = this.appHighlight ;
  }
}
