import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'spider-todo-app',
  template: `
    <p>
      todo-app works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
