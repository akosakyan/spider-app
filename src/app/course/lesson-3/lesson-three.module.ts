import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LessonThreeComponent } from './lesson-three.component';

@NgModule({
  declarations: [
    LessonThreeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LessonThreeComponent }
    ])
  ]
})
export class LessonThreeModule { }
