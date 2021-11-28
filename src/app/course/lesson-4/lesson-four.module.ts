import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LessonFourComponent } from './lesson-four.component';

@NgModule({
  declarations: [
    LessonFourComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LessonFourComponent }
    ])
  ]
})
export class LessonFourModule { }
