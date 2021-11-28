import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LessonZeroComponent } from './lesson-zero.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    LessonZeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LessonZeroComponent }
    ]),
    MatListModule,
    MatCheckboxModule
  ]
})
export class LessonZeroModule { }
