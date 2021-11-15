import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LessonFiveComponent } from './lesson-five.component';

@NgModule({
  declarations: [
    LessonFiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LessonFiveComponent }
    ])
  ]
})
export class LessonFiveModule { }
