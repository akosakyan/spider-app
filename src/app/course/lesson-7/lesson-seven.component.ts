import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spider-lesson-seven',
  template: `
    <div class="counter">
      <button class="minus" (click)="minus()"><span>-</span></button>
      <div class="count">{{ count }}</div>
      <button class="plus" (click)="plus()"><span>+</span></button>
    </div>
    
    <div class="counter">
      <button class="minus" (click)="minus()"><span>-</span></button>
      <div class="count">{{ count2 }}</div>
      <button class="plus" (click)="plus()"><span>+</span></button>
    </div>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .counter {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 350px;
      
      button {
        width: 60px;
        height: 60px;
        
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
        }
      }
      
      .count {
        font-size: 60px;
        font-weight: 600;
        color: yellowgreen;
      }
    }
  `]
})
export class LessonSevenComponent implements OnInit {
  count: number = 0;
  count2: number = 0;

  constructor() { }

  ngOnInit(): void {}

  minus() {
    this.count = this.count - 1;
  }

  plus() {
    this.count = this.count + 1;
  }
}

interface ILessonSevenState {
  count: number;
  count2: number;
}

class Store<State> {
  private state: State;

  constructor(state: State) {
    // set initial state
    this.state = state;
  }


}
