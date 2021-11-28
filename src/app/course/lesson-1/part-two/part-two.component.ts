import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spider-part-two',
  template: `
    <p>
      part-two works!
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
export class PartTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
