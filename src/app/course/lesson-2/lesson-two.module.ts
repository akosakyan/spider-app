import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LessonTwoComponent } from './lesson-two.component';

@NgModule({
  declarations: [
    LessonTwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LessonTwoComponent }
    ])
  ]
})
export class LessonTwoModule { }
