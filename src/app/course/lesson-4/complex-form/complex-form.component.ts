import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Complex-form',
  template: `
    <p>
      Complex form works!
    </p>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ]
})
export class ComplexForm implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}