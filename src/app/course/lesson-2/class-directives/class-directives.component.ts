import { Component, OnInit } from "@angular/core";

@Component({
  selector: "class-directives",
  template: ` <p>Logical Directives</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ClassDirectives implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}