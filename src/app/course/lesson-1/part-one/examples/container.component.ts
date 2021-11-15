import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spider-container',
  template: `
    <p>
      container works!
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
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
