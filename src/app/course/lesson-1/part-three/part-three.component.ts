import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spider-part-three',
  template: `
    <p>
      part-three works!
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
export class PartThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
