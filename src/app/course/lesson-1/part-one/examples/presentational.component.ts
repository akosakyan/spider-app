import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'spider-presentational',
  template: `
    <p>
      presentational works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresentationalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
