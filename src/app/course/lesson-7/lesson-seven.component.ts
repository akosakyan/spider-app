import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'spider-lesson-seven',
  template: `
    <div style="width: 100%">
      <h1>Explore API</h1>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); grid-gap: 20px">
        <button mat-flat-button (click)="onCreate()">
          account API - create<mat-icon>get_app</mat-icon>
        </button>
        <button mat-flat-button (click)="onGetAll()">
          account API - getAll<mat-icon>get_app</mat-icon>
        </button>
        <button mat-flat-button (click)="onGetById()">
          account API - getById<mat-icon>get_app</mat-icon>
        </button>
        <button mat-flat-button (click)="onUpdate()">
          account API - update<mat-icon>get_app</mat-icon>
        </button>
        <button mat-flat-button (click)="onDelete()">
          account API - delete<mat-icon>get_app</mat-icon>
        </button>
      </div>
    </div>
    
    <div>
      <!-- TODO: insert filters component here -->
      <!--  -->
    </div>

    <div>
      <!-- TODO: insert list/table component here -->
      <!-- MaterialTable -->
    </div>

    <div>
      <!-- TODO: insert footer component here -->
      <!-- Operations history -->
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
  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {}

  onCreate() {
  }

  onGetAll() {

  }

  onGetById() {

  }

  onUpdate() {

  }

  onDelete() {

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
