import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'spider-counter',
  template: `
  
    <button class="fz-60 p-50 m-20" 
            (click)="increase()" 
             > + 1 </button>
    <button class="fz-60 p-50 m-20" 
            (click)="decrease()" 
            [disabled]="cannotDecrease"
            > - 1 </button>
    <button class="fz-60 p-50 m-20" 
            (click)="clear()" 
            [disabled]="cannotDecrease"
            > = 0 </button>

    <p class="fz-60 m-20">Count = {{counter}}</p>
    <br>

    <p class="fz-60 m-20" *ngIf="updateAt" > Updated {{updateAt | date: "HH:mm:ss dd/MM/yy"}} </p>
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

  counter = 0

  updateAt?: number;

  constructor() { }

  ngOnInit(): void {
  }

  get cannotDecrease(): boolean {
    return this.counter <= 0;
  }

  increase (): void {
    this.updateAt = Date.now();
    this.counter++ ;

  }

  decrease(): void {
    this.updateAt = Date.now();
    this.counter-- ;
  }

  clear(): void {
    this.updateAt = Date.now();
    this.counter = 0
  }

}
