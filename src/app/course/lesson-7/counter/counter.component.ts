import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { clear, counterSelector, decrease, increase, updatedAtSelector } from '@app/reducers/counter';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'spider-counter',
  template: `
  
    <button class="fz-60 p-50 m-20" 
            (click)="increase()" 
             > + 1 </button>
    <button class="fz-60 p-50 m-20" 
            (click)="decrease()" 
            [disabled]="cannotDecrease$ | async"
            > - 1 </button>
    <button class="fz-60 p-50 m-20" 
            (click)="clear()" 
            [disabled]="cannotDecrease$ | async"
            > = 0 </button>

    <p class="fz-60 m-20">Count = {{count$ | async}}</p>
    <br>

    <p class="fz-60 m-20" *ngIf="updatedAt$ | async" > Updated {{updatedAt$ | async | date: "HH:mm:ss dd/MM/yy"}} </p>
  `,
  styles: [`
    .fz-60 {
      font-size: 60px;
    }

    .m-20 {
      margin: 20px;
    }

    .p-50 {
      padding: 50px;
    }
`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  count$ = this.store.select(counterSelector)
  cannotDecrease$ = this.count$.pipe(map(count => count >= 0))
  updatedAt$ = this.store.select(updatedAtSelector)

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  increase (): void {
    this.store.dispatch(increase())
  }

  decrease(): void {
    this.store.dispatch(decrease())
  }

  clear(): void {
    this.store.dispatch(clear())
  }

}