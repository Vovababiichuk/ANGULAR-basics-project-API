import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]',
  standalone: true
})
export class FocusDirective implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) { }

  // ngAfterViewInit іде після ngOnInit
  ngAfterViewInit(): void {
    // this.el.nativeElement.focus()
  }

  ngOnInit(): void {
    this.el.nativeElement.focus()
  }

}
