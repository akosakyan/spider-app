import { Component, OnInit } from "@angular/core";

@Component({
  selector: "structural-directives",
  template: ` <p>Logical Directives</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class StructuralDirectives implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
